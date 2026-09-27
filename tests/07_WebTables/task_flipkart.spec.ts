import { test, expect, Page } from "@playwright/test";

test("Flipkart search", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

    const searchbox = page.getByRole("textbox", {
        name: "Search for Products, Brands"
    });

    await page.getByText("LoginGet access to your").click();

    await searchbox.fill("DSLR Camera");
    await searchbox.press("Enter");

    const nextButton = page.getByText("Next", { exact: true });

    while (await nextButton.isEnabled()) {

        const products = page.locator("div.RG5Slk");
        const prices = page.locator("div.hZ3P6w.DeU9vF");

        console.log("Number of products:", await products.count());

        for (let i = 0; i < await products.count(); i++) {

            const name = await products.nth(i).innerText();
            const price = await prices.nth(i).innerText();

            console.log(name, price);
        }
if (await nextButton.isVisible()){
        await nextButton.click();
}
else break;
}

    await page.pause();
});