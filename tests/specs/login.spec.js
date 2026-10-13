import { test, expect } from '@playwright/test';

import { LoginPage } from '../pageobjects/login.page.js';
import { users } from '../data/users.js';

test.describe('Login functionality', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();
    });

    test('UC-3 - should show an error for invalid credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login(
            users.invalidUser.username,
            users.invalidUser.password
        );

        await expect(loginPage.errorMessage).toContainText(
            'Username and password do not match'
        );
    });

    test('UC-4 - should show an error for a locked user', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login(
            users.lockedUser.username,
            users.lockedUser.password
        );

        await expect(loginPage.errorMessage).toContainText(
            'Sorry, this user has been locked out.'
        );
    });

});