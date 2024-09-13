import { test as baseText } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { Header } from "../pages/header";
import { SearchResultPage } from "../pages/searchResultPage";
import { BasketPage } from "../pages/basketPage";

const test = baseText.extend<{
    header: Header;
    homepage: HomePage;
    searchResults: SearchResultPage;
    basketpage: BasketPage;
   
}>({
    homepage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    header: async ({ page }, use) => {
        await use(new Header(page));
    },
    searchResults: async ({ page }, use) => {
        await use(new SearchResultPage(page));
    },
    basketpage: async ({ page }, use) => {
        await use(new BasketPage(page));
    },
})
export default test;
export const expect = test.expect;