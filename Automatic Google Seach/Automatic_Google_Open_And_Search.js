//Type node Automatic_Google_Open_And_Search.js in terminal to run

const puppeteer = require("puppeteer");
(async() => {
    const browser = await puppeteer.launch({headless:false});       //launch a browser
    const page = await browser.newPage();                           //Open a new page, await to wait for page load
    await page.goto("https://google.co.in");
    searchArea = await page.waitForSelector("textarea", {
        timeout: 10000,
    });
    await page.type("textarea", "thapar");
    await page.keyboard.press("Enter");
})();