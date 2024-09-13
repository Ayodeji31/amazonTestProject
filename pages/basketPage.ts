import { expect, type Locator, type Page } from '@playwright/test';

export class BasketPage {
    readonly page: Page;
    shoppingBasketHeader: Locator;
    selectQuantity: Locator;
    selectQuantityValue_3: Locator;
    selectQuantityValue_1: Locator;
    selectDelete: Locator;





    constructor(page: Page) {
        this.page = page;
        this.shoppingBasketHeader = page.locator(".a-size-extra-large.a-text-normal");
        this.selectQuantity= page.locator('.a-dropdown-label')
        this.selectQuantityValue_3 = page.locator('#quantity_3')
        this.selectQuantityValue_1 = page.locator('#quantity_1')
        this.selectDelete = page.locator('(//input[@data-action="delete"])[1]')
    }

    async IncreaseQuantity () {
        await expect(this.shoppingBasketHeader).toBeVisible();
        await this.selectQuantity.click();
        await this.selectQuantityValue_3.click();
    }

    async decreaseQuantity () {
        await expect(this.shoppingBasketHeader).toBeVisible();
        await this.selectQuantity.click();
        await this.selectQuantityValue_1.click();
    }

    async deleteProduct () {
        await expect(this.shoppingBasketHeader).toBeVisible();
        await this.selectDelete.click();
        await this.page.waitForTimeout(2000)
        try {
            await expect(this.page.locator('h2.a-size-extra-large.a-spacing-mini')).toBeVisible();
        } catch (error) {
            
        }
    }
}