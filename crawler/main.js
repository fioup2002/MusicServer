const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
(async () => {
  // 啟動瀏覽器
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.boce.com/http/hwint12.com');

  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));

  let body = await page.content()
  let $ = await cheerio.load(body)

  console.log(await $('body > div.contBox > div:nth-child(2) > div.bannerBg > div.banner_ip > table > tbody > tr > td.ip').html())

  await browser.close();
})();