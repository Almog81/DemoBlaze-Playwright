import { test, expect } from '@playwright/test';
import {LoginPage} from '../Pages/loginPage.ts'
import { HomePage } from '../Pages/HomePage.ts';

let loginPage
let homePage

test.beforeEach('Init Pages', async({page}) =>{
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
} )

test('test', async ({ page }) => {
  await homePage.naviToHome()
  await homePage.naviToLogin()
  await loginPage.loginAction('automatedUser26@example.com','4r4nd0mp4ssw0rd')
  await expect(homePage.nameOfUser).toContainText('automatedUser26@example.com');
});
