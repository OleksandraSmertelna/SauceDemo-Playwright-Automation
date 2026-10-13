import { test, expect } from '@playwright/test';

import { LoginPage } from '../pageobjects/login.page.js';
import { InventoryPage } from '../pageobjects/inventory.page.js';
import { ProductComponent } from '../components/product.component.js';

import { users } from '../data/users.js';
import { cartData } from '../data/cart.data.js';

test.describe('Cart State Logic', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.loginAsStandardUser(
            users.standardUser.username,
            users.standardUser.password
        );
    });

    for (const data of cartData) {

        test(
            `UC-2 - badge updates for [${data.productsToAdd.join(', ')}] after removing ${data.productToRemove}`,
            async ({ page }) => {

                const inventoryPage = new InventoryPage(page);
                const productComponent = new ProductComponent(page);

                for (const product of data.productsToAdd) {
                    await productComponent.addProduct(product);
                }

                await expect(inventoryPage.cartBadge).toHaveText(
                    data.expectedBadgeAfterAdd
                );

                await productComponent.removeProduct(
                    data.productToRemove
                );

                await expect(inventoryPage.cartBadge).toHaveText(
                    data.expectedBadgeAfterRemove
                );
            }
        );
    }

});