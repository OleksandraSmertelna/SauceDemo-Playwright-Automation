import { BasePage } from './base.page.js';

export class InventoryPage extends BasePage {

    constructor(page) {
        super(page);

        this.title = page.locator('//span[@class="title"]');

        this.sortDropdown = page.locator(
            '//select[@data-test="product-sort-container"]'
        );

        this.cartBadge = page.locator(
            '//span[@class="shopping_cart_badge"]'
        );
    }

    async waitUntilLoaded() {
        await this.title.waitFor({ state: 'visible' });
    }

    async selectSort(option) {
        await this.sortDropdown.selectOption({
            label: option
        });
    }

    async getCartBadgeValue() {
        return await this.cartBadge.textContent();
    }
}