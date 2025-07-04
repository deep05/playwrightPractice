const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test', async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css
    await page.locator('#username').fill("deepagrahari");
    await page.locator('[name = password]').fill("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator('[style*=block]').textContent());
    await expect(page.locator('[style*=block]')).toContainText('Incorrect');

});

test('Page Playwright test', async({page})=>{
    await page.goto("https://google.com/");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});