import {test} from "@playwright/test"

test("cssselector",async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    // await page.locator("input#username").fill("student")
    await page.locator('//input[@id="username"]').fill("student")
    // input[name="username"] ---> selector method
    await page.locator('//input[@id="password"]').fill("Password123")
    // await page.locator("button#submit").click()  
     await page.locator("//button[@id='submit']").click()
    await page.locator('//a[@class="wp-block-button__link has-text-color has-background has-very-dark-gray-background-color"]').click()
})