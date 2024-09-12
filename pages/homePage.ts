import { expect, type Locator, type Page } from '@playwright/test';


export class HomePage {
  readonly page: Page;
  readonly acceptCookies: Locator;
  readonly amazonLogo:Locator;
 


  constructor(page: Page) {
    this.page = page;
    this.amazonLogo = page.locator('a[aria-label="Amazon.co.uk"]')
    this.acceptCookies = page.locator('[id="sp-cc-accept"]')


  }



  async isPresent() {
   await expect(this.amazonLogo).toBeVisible();

  }
  async acceptCookieBanner () {
    try {
      
      await this.acceptCookies.click();
    } catch {
      
    }
  }
  
}