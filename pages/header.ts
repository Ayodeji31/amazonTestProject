import { expect, type Locator, type Page } from '@playwright/test';

export class Header {
    readonly page: Page;
    readonly isMob: boolean | undefined;
    selectSearchField: Locator;
    selectSearchButton: Locator;
    selectBasket: Locator;



    constructor(page: Page, isMob: boolean | undefined) {
        this.page = page;
        this.selectSearchField = page.locator('#twotabsearchtextbox');
        this.selectSearchButton = page.locator('#nav-search-submit-button')
        this.selectBasket = page.locator('(//a[@class="a-button-text"])[1]')
    }

    async searchForProduct (prroduct: string) {   
            await expect(this.selectSearchField).toBeVisible();
            await this.selectSearchField.fill(prroduct)
            await this.selectSearchButton.click();
    
    }

    async goToBasket () {
        await expect(this.selectBasket).toBeVisible();
        await this.selectBasket.click();
    }
}