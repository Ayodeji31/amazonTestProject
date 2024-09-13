import { expect, type Locator, type Page } from '@playwright/test';

export class SearchResultPage {
    readonly page: Page;
    searchResult: Locator;
    selectProduct: Locator;



    constructor(page: Page) {
        this.page = page;
        this.searchResult = page.locator('//h2[normalize-space(text())="Results"]');
        this.selectProduct = page.locator('[id="a-autoid-3-announce"]')
    }

    async addProductToBasket() {
        await expect(this.searchResult).toBeVisible();
        await this.selectProduct.click()
        await this.page.waitForTimeout(2000)
    }
}