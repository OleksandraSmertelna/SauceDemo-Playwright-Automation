export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async open(path = '/') {
        await this.page.goto(path);
    }

    async getText(locator) {
        await locator.waitFor({ state: 'visible' });
        return await locator.textContent();
    }
}