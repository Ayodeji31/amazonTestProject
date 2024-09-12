import test, { expect } from '../fixtures/basePage';
import Config from '../utils/config';
import testData from '../utils/testData';
test.beforeEach(async ({ page }) => await page.goto(`${Config.BaseUrl}`));

test('Add product to basket', async ({header, homepage, searchResults, basketpage, page }) => {
  await homepage.isPresent();
  await homepage.acceptCookieBanner();
  await header.searchForProduct(testData.product);
  await searchResults.addProductToBasket();
  await header.goToBasket();
  await basketpage.IncreaseQuantity();
  await basketpage.decreaseQuantity();
  await basketpage.deleteProduct();
});
