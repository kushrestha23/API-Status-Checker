const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
const { driver, until } = require('../../setup');

setDefaultTimeout(60 * 1000);

Given('I want food in {string}', async function (string) {
  // Navigate to the SkipTheDishes website and enter the address in the search bar
  await driver.get('https://www.skipthedishes.com/');

  const AcceptCookie = await driver.findElement({
    xpath:
    '/html/body/div[2]/div[1]/div/div/div[2]/div/div/div[3]/button[3]'
  });
  await AcceptCookie.click();

  const searchBox = await driver.findElement({
    xpath:
      '//*[@id="root"]/div/main/div/div/div[2]/div[2]/div/div/div/div/div[1]/div[1]/div[2]/form/input',
  });
  await searchBox.sendKeys(string);

  const resultBox = await driver.wait(
    until.elementLocated({
      xpath:
        '/html/body/div[2]/div/main/div/div/div[2]/div[2]/div/div/div/div/div[1]/div[2]/div/div',
    }),
    10000
  );

  const results = await resultBox.findElements({
    tagName: 'div',
  });

  await results[0].click();
});

When('I search for restaurants', async function () {
  // Click the search button to find restaurants in the entered address area
  const searchBox = await driver.wait(
    until.elementLocated({
      xpath:
        '/html/body/div[2]/div/main/div/div/div[2]/div[1]/div/div/div/div/div[4]/button'
    }),
    10000
  );
  await searchBox.click();
});

Then('I should see some restaurants in {string}', async function (address) {
  const resturantCard = await driver.wait(
    until.elementLocated({
      xpath: '/html/body/div[2]/div/main/div/div/div/div/div[6]/div[2]',
    }),
    10000
  );

  const results = await resturantCard.findElements({
    xpath: '/html/body/div[2]/div/main/div/div/div/div/div[9]/div[2]',
  });

  expect(results.length, `Expected more than 0 restaurants, but found ${results.length}`).to.be.greaterThan(0);
});

