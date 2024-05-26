const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const loginPage = require('../pages/login.page');
const { config } = require('../../wdio.conf');

const data = {
  email: 'salman@gmail.com',
  password: 'salman3000',
  invalidEmail: 'salman@gmail',
  invalidPassword: 'salman2024',
};

Given(/^I Am open kasirAja page$/, async () => {
  await browser.url(config.baseUrl);
});

When(/^I Am input invalid email and valid password$/, async () => {
  await loginPage.inputEmail(data.invalidEmail);
  await loginPage.inputPassword(data.password);
  await (await loginPage.loginBtn).click();
});

Then(/^I Am should see an error message$/, async () => {
  await expect(await loginPage.errorMessage).toBeDisplayed();
});

When(/^I Am input valid credentials$/, async () => {
  await loginPage.inputEmail(data.email);
  await loginPage.inputPassword(data.password);
  await (await loginPage.loginBtn).click();
});

Then(/^I Am should be on the Dashboard page$/, async () => {
  await expect(browser).toHaveUrl(`${config.baseUrl}/dashboard`);
});
