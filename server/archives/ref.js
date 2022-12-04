const puppeteer = require('puppeteer');

const prompt = require('prompt-sync')({ sigint: false });
const search = prompt('Subject you want to search');
console.log(`You are searching for ${search}`);

const base_url_udemy = 'https://www.udemy.com/courses/search/?src=ukw&q=';
const base_url_coursera = 'https://in.coursera.org/search?query=';

const final_url = base_url_coursera.concat('', search);
console.log(final_url);

async function start() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();
  await page.goto(final_url, { waitUntil: 'load' });
  await page.waitForSelector(
    '[data-click-key="search.search.click.search_card"]>div>div>div>h2'
  );

  const inner_html = await page.evaluate(
    () =>
      document.querySelector(
        '[data-click-key="search.search.click.search_card"] > div >div >div> h2'
      )[2].innerHTML
  );
  console.log(inner_html);

  // await page.type(selectors.searchBox, 'python');
  // await browser.close();
  console.log('done');
}

start();
