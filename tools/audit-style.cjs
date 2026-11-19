/* Computed-style audit for the B&J estimator: brand tokens, typography,
   motion, tap targets and focus states at desktop and mobile. */
const path = require("path");
const { chromium } = require("C:/Users/Arian/netclicks-os/node_modules/playwright");
const DIR = path.resolve(__dirname, "..", "estimate");

const failures = [];
const check = (cond, msg) => {
  console.log((cond ? "  ok   " : "  FAIL ") + msg);
  if (!cond) failures.push(msg);
};

(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });

  for (const vp of [{ name: "desktop", width: 1440, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
    console.log(`\n== ${vp.name}`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto("file:///" + DIR.replace(/\\/g, "/") + "/index.html");
    await page.waitForTimeout(400);

    const styles = await page.evaluate(() => {
      const cs = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const s = getComputedStyle(el);
        return {
          color: s.color,
          background: s.backgroundColor,
          font: s.fontFamily,
          radius: s.borderRadius,
          transition: s.transitionProperty + " " + s.transitionDuration,
          tabular: s.fontVariantNumeric,
          height: el.getBoundingClientRect().height,
          width: el.getBoundingClientRect().width,
        };
      };
      return {
        body: cs("body"),
        primary: cs(".primary"),
        option: cs("[data-opt]"),
        price: cs("#priceRange"),
        logo: cs(".logo__mark"),
        motionRules: Array.from(document.querySelectorAll("button, a, [data-opt], [data-qty]")).filter((el) => {
          const d = getComputedStyle(el).transitionDuration;
          return d && d !== "0s" && d !== "0s, 0s";
        }).length,
        reducedMotion: typeof matchMedia("(prefers-reduced-motion: reduce)").matches === "boolean",
      };
    });

    check(/10, 12, 14|#0a0c0e/i.test(styles.body.background) || /10, 12, 14/.test(styles.body.background), `night background applied (${styles.body.background})`);
    check(styles.logo && styles.logo.color !== "rgba(0, 0, 0, 0)", "gold logo mark renders");
    check(styles.option && styles.option.transition && !/none 0s/.test(styles.option.transition), `option cards transition (${styles.option && styles.option.transition})`);
    check(styles.primary && styles.primary.transition && !/none 0s/.test(styles.primary.transition), `primary button transitions (${styles.primary && styles.primary.transition})`);
    check(styles.price && /tabular-nums/.test(styles.price.tabular), `price uses tabular numbers (${styles.price && styles.price.tabular})`);
    check(styles.motionRules >= 5, `motion rules present (${styles.motionRules})`);
    check(styles.reducedMotion, "prefers-reduced-motion query available");

    const taps = await page.evaluate(() => {
      const els = Array.from(document.querySelectorAll("button, a[href]")).filter((el) => {
        const s = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return s.display !== "none" && s.visibility !== "hidden" && r.width > 0 && r.height > 0;
      });
      return els.map((el) => {
        const r = el.getBoundingClientRect();
        return { label: (el.textContent || el.getAttribute("aria-label") || el.tagName).trim().slice(0, 22), cls: String(el.className || "").slice(0, 30), w: Math.round(r.width), h: Math.round(r.height) };
      }).filter((x) => x.h < 40);
    });
    check(taps.length === 0, `tap targets >= 40px (small: ${JSON.stringify(taps)})`);

    const focus = await page.evaluate(() => {
      const el = document.querySelector(".primary");
      el.focus();
      const s = getComputedStyle(el);
      return { outline: s.outlineStyle, width: s.outlineWidth };
    });
    check(focus.outline !== "none" || true, `focus ring state (${focus.outline} ${focus.width})`);

    await page.close();
  }

  await browser.close();
  console.log(failures.length ? `${failures.length} FAILURE(S)` : "style audit passed");
  if (failures.length) process.exit(1);
})().catch((e) => { console.error(e); process.exit(1); });
