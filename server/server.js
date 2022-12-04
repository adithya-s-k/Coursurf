const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Schema = require('./courses');

dotenv.config({ path: './config.env' });

const dbConnect = () => {
  const connectionParams = { useNewUrlParser: true };
  mongoose.connect(process.env.DATABASE, connectionParams);

  mongoose.connection.on('connected', () => {
    console.log('Connected to database sucessfully');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Error while connecting to database :' + err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongodb connection disconnected');
  });
};

const prompt = require('prompt-sync')({ sigint: false });
const search = prompt('Subject you want to search');
console.log(`You are searching for ${search}`);

const url = 'https://www.simplilearn.com';

const name = [];
const rating = [];
const hours = [];
const link = [];
const final = [];

var done = 0;

const selectors = {
  searchBox: '#header_srch',
  mainBox: '.search-program',
  cardBox: '.card-info',
};

async function start() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.type(selectors.searchBox, search);
  await page.keyboard.press('Enter');
  await page.waitForSelector('.card-info');
  await page.waitForTimeout(1000);

  const courseHandles = await page.$$('.card-info');

  for (let i = 0; i < courseHandles.length; i++) {
    const courseName = await courseHandles[i].$eval(
      'h2',
      (el) => el.textContent
    );
    const courseRating = await courseHandles[i].$eval(
      'div>div>.rating-value',
      (el) => el.textContent
    );
    const courseHours = await courseHandles[i].$eval(
      'div>.prog-search>b',
      (el) => el.textContent
    );
    name.push(courseName);
    rating.push(courseRating.slice(0, 3));
    hours.push(courseHours.slice(0, 2));
  }
  console.log(name);
  console.log(rating);
  console.log(hours);

  const elements = await page.$$('.list_li > a');

  // Iterate over the selected elements and get the href property
  for (const element of elements) {
    const href = await page.evaluate((el) => el.getAttribute('href'), element);
    link.push(url.concat('', href));
  }

  // const elHandleArray = await page.$$('.card-info');

  // for (const el of elHandleArray) {
  //   await el.click();
  // }

  for (let i = 0; i < name.length; i++) {
    final.push({
      name: name[i],
      price: '57000',
      website: ['Simplilearn'],
      company: [],
      certificate: ['Paid Certification'],
      rating: rating[i],
      hours: hours[i],
      video: '',
      link: link[i],
    });
  }

  console.log(final);
  await browser.close();

  const pushDB = prompt('Do you want to push data to database? (y/n) ');
  if (pushDB === 'y') {
    insertMovies(final)
      .then((docs) => console.log(docs))
      .catch((err) => console.log(err));
    console.log('Data pushed to database');
  } else {
    console.log('Data not pushed to database');
  }
}

const insertMovies = (json) => {
  try {
    const docs = Schema.insertMany(json);
    return Promise.resolve(docs);
  } catch (err) {
    return Promise.reject(err);
  }
};
dbConnect();
start();
