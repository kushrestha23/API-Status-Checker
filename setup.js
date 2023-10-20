const { Builder, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

// Set up Chrome driver options
const options = new chrome.Options();

// Set up the WebDriver instance
const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

module.exports = {
  driver,
  until,
};
