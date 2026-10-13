export class ProductComponent {

    constructor(page) {
        this.page = page;
    }

    get productPrices() {
        return this.page.locator(
            '//div[@class="inventory_item_price"]'
        );
    }

    addButton(productName) {
        return this.page.locator(
            `//div[normalize-space()="${productName}"]` +
            `/ancestor::div[@class="inventory_item"]` +
            `//button[text()="Add to cart"]`
        );
    }

    removeButton(productName) {
        return this.page.locator(
            `//div[normalize-space()="${productName}"]` +
            `/ancestor::div[@class="inventory_item"]` +
            `//button[text()="Remove"]`
        );
    }

    async addProduct(productName) {
        await this.addButton(productName).click();
    }

    async removeProduct(productName) {
        await this.removeButton(productName).click();
    }

    async getPrices() {
        const priceTexts = await this.productPrices.allTextContents();

        return priceTexts.map(priceText =>
            Number(priceText.replace('$', ''))
        );
    }
}