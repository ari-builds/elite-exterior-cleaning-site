/* Visual + functional QA for the B&J Elite estimator.
   Desktop and mobile viewports, screenshots per step, overflow checks,
   and a real submit whose payload is flagged as smoke so nothing is stored. */
const fs = require("fs");
const path = require("path");
const { chromium } = require("C:/Users/Arian/netclicks-os/node_modules/playwright");

const DIR = path.resolve(__dirname, "..", "estimate");
const OUT = path.resolve(__dirname, "..", "qa-screenshots");
fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const failures = [];
const check = (cond, msg) => {
  console.log((cond ? "  ok   " : "  FAIL ") + msg);
  if (!cond) failures.push(msg);
};

(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });

  for (const vp of VIEWPORTS) {
    console.log(`\n== ${vp.name} ${vp.width}x${vp.height}`);
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(e.message));

    // Flag the lead payload as QA so the endpoint returns success without storing it.
    await page.route("**/api/lead", async (route) => {
      let body = {};
      try { body = JSON.parse(route.request().postData() || "{}"); } catch {}
      body.meta = Object.assign({}, body.meta, { smoke: true });
      await route.continue({ postData: JSON.stringify(body) });
    });

    await page.goto("file:///" + DIR.replace(/\\/g, "/") + "/index.html", { waitUntil: "load" });
    await page.waitForTimeout(500);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    check(overflow <= 1, `no horizontal overflow at load (${overflow}px)`);

    const foot = await page.evaluate(() => {
      const el = document.getElementById("foot");
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { position: getComputedStyle(el).position, bottom: Math.round(r.bottom), width: Math.round(r.width) };
    });
    check(foot && (foot.position === "fixed" || foot.position === "sticky"), `action bar is persistent (${foot && foot.position})`);
    if (vp.name === "mobile") {
      check(foot && Math.abs(foot.bottom - vp.height) <= 2, `action bar pinned to viewport bottom (${foot && foot.bottom})`);
    }

    const brand = await page.textContent("body");
    check(/B&J Elite/i.test(brand), "visible brand copy includes B&J Elite");
    check(/Justin Hall/i.test(brand), "owner copy includes Justin Hall");

    await page.screenshot({ path: path.join(OUT, `${vp.name}-1-surface.png`), fullPage: false });

    await page.click('[data-opt="roof"]');
    await page.waitForTimeout(250);
    await page.click("#next");
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-2-size.png`) });

    await page.click('[data-qty="2000"]');
    await page.waitForTimeout(250);
    await page.click("#next");
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-3-extras.png`) });

    await page.click('[data-opt="gutters"]');
    await page.waitForTimeout(250);
    await page.click("#next");
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-4-summary.png`) });

    const overflowSummary = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    check(overflowSummary <= 1, `no horizontal overflow on summary (${overflowSummary}px)`);

    // Validation, then real submit.
    await page.click("#next");
    await page.waitForTimeout(200);
    check((await page.textContent("#err")).length > 5, "empty contact is blocked");

    await page.fill("#f-name", "QA Smoke");
    await page.fill("#f-phone", "(770) 555-0123");
    await page.fill("#f-address", "123 QA St, Alpharetta GA");
    await page.fill("#f-email", "qa@example.invalid");
    await page.click("#next");
    await page.waitForTimeout(1800);

    const done = await page.textContent(".done h1").catch(() => "");
    check(/QA/i.test(done || ""), `confirmation greets by first name: ${(done || "").trim()}`);
    const refText = await page.locator(".done").textContent().catch(() => "");
    check(/EC-\d+/.test(refText || ""), "server reference displayed on confirmation");
    await page.screenshot({ path: path.join(OUT, `${vp.name}-5-confirmation.png`) });

    check(errors.length === 0, `no console/page errors${errors.length ? ": " + errors.join(" | ") : ""}`);
    await ctx.close();
  }

  await browser.close();
  console.log(`\nScreenshots: ${OUT}`);
  console.log(failures.length ? `${failures.length} FAILURE(S)` : "all QA checks passed");
  if (failures.length) process.exit(1);
})().catch((e) => { console.error(e); process.exit(1); });
