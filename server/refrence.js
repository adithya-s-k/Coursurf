const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch();

  // Open a new page in the browser
  const page = await browser.newPage();

  // Navigate to the Amazon website
  await page.goto('https://www.amazon.com/');

  // Search for a specific product
  await page.type('input#twotabsearchtextbox', 'product name');
  await page.click('input.nav-input[type="submit"]');

  // Wait for the search results to load
  await page.waitForSelector('span.a-size-medium.a-color-base.a-text-normal');

  // Extract the product names from the search results
  const productNames = await page.evaluate(() => {
    // Create an empty array to store the product names
    const names = [];

    // Loop through each of the search result items
    const products = document.querySelectorAll(
      'span.a-size-medium.a-color-base.a-text-normal'
    );
    products.forEach((product) => {
      // Extract the product name and store it in the array
      names.push(product.innerText);
    });

    // Return the array of product names
    return names;
  });

  // Log the product names to the console
  console.log(productNames);

  // Close the browser instance
  await browser.close();
})();
