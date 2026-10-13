import { BasePage } from './base.page.js';
import { InventoryPage } from './inventory.page.js';

export class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.usernameInput = page.locator('//input[@id="user-name"]');
        this.passwordInput = page.locator('//input[@id="password"]');
        this.loginButton = page.locator('//input[@id="login-button"]');
        this.errorMessage = page.locator('//h3[contains(text(),"Epic sadface")]');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginAsStandardUser(username, password) {
        await this.login(username, password);

        const inventoryPage = new InventoryPage(this.page);
        await inventoryPage.waitUntilLoaded();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}