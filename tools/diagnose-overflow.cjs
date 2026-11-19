const path = require("path");
const { chromium } = require("C:/Users/Arian/netclicks-os/node_modules/playwright");
const DIR = path.resolve(__dirname, "..", "estimate");

(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto("file:///" + DIR.replace(/\\/g, "/") + "/index.html");
  await page.waitForTimeout(400);
  const out = await page.evaluate(() => {
    const vw = window.innerWidth;
    const bad = [];
    document.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0) return;
      if (r.right > vw + 1 || r.left < -1) {
        bad.push({
          tag: el.tagName,
          cls: el.className && String(el.className).slice(0, 80),
          id: el.id,
          left: Math.round(r.left),
          right: Math.round(r.right),
          w: Math.round(r.width),
          sw: el.scrollWidth,
        });
      }
    });
    return { vw, docW: document.documentElement.scrollWidth, bad: bad.slice(0, 30) };
  });
  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
