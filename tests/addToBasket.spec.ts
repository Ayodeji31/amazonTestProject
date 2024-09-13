import test, { expect } from '../fixtures/basePage';
import Config from '../utils/config';
import testData from '../utils/testData';
test.beforeEach(async ({ page }) => await page.goto(`${Config.BaseUrl}`));

test('Add product to basket', async ({ header, homepage, searchResults, basketpage, page }) => {
  await homepage.isPresent();
  await homepage.acceptCookieBanner();

  // Search for product
  await header.searchForProduct(testData.product);

  // Add product to basket
  await searchResults.addProductToBasket();
  await header.goToBasket();

  // Increase product quantity
  await basketpage.IncreaseQuantity();

  // Decrease product quantity
  await basketpage.decreaseQuantity();

  // Delete product from basket
  await basketpage.deleteProduct();
});
