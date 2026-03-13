import {test,expect} from "@playwright/test"

// test("Assertions",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await expect(page).toHaveScreenshot()
// })

test('string', async({page})=>{
//   const text = "Hello Goodmorning";
//   expect(text).toContain("Good")
    await page.goto('https://www.amazon.in/');
    await expect(page.locator('//span[text()="Up to 60% off | Cookware, kitchen tool & more | Amazon Launchpad"]')).not.toContainText('kithen');
});