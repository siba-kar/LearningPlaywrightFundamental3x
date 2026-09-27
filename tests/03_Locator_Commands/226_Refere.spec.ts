import { test } from "@playwright/test";
test("set referer for entire context", async ({ browser }) => {
    
    let context = await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "https://thetestingacademy.com",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
    });
    let page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    console.log("Page 1 — partner referer included");
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 — partner referer included");


});