import { test, expect } from '@playwright/test';

import { LoginPage } from '../pageobjects/login.page.js';
import { InventoryPage } from '../pageobjects/inventory.page.js';
import { ProductComponent } from '../components/product.component.js';
import { users } from '../data/users.js';

test.describe('Inventory Sorting', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.loginAsStandardUser(
            users.standardUser.username,
            users.standardUser.password
        );
    });

    test('UC-1 - should sort products by price (low to high)', async ({ page }) => {

        const inventoryPage = new InventoryPage(page);
        const productComponent = new ProductComponent(page);

        await inventoryPage.selectSort('Price (low to high)');

        const actualPrices = await productComponent.getPrices();

        const expectedPrices = [...actualPrices].sort((a, b) => a - b);

        expect(actualPrices).toEqual(expectedPrices);
    });

});