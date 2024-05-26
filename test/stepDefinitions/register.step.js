const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const loginPage = require('../pages/login.page');
const registerPage = require('../pages/register.page');
const { config } = require('../../wdio.conf');

const data = {
  namaToko: 'salmanstore',
  email: 'salman@gmail.com',
  password: 'salman3000',
  invalidEmail: 'salman@gmail',
};

Given(/^I Am open Register page$/, async () => {
  await browser.url(config.baseUrl);
  await (await loginPage.daftarTxt).click();
});

When(
  /^I Am input valid nama toko, invalid email, and valid password$/,
  async () => {
    await registerPage.inputNamaToko(data.namaToko);
    await registerPage.inputEmail(data.invalidEmail);
    await registerPage.inputPassword(data.password);
    await (await registerPage.daftarBtn).click();
  }
);

Then(/^I Am should see register error message$/, async () => {
  await expect(await registerPage.errorMessage).toBeDisplayed();
});

When(/^I Am input valid data$/, async () => {
  await registerPage.inputNamaToko(data.namaToko);
  await registerPage.inputEmail(data.email);
  await registerPage.inputPassword(data.password);
  await (await registerPage.daftarBtn).click();
});

Then(/^I Am should be on the Login page$/, async () => {
  await expect(await registerPage.successMessage).toBeDisplayed();
  await expect(await registerPage.successMessage).toHaveText(
    'Toko berhasil didaftarkan'
  );
  await expect(browser).toHaveUrl(`${config.baseUrl}/login`);
});
