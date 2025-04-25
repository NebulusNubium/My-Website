const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://github.com/NebulusNubium");

  await page.setViewport({ width: 1200, height: 800 });
  await page.screenshot({ path: "public/assets/img/github-latest.png" });

  await browser.close();
})();