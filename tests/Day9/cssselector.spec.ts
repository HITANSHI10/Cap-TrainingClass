import {test} from "@playwright/test"

test("css selector",async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await page.locator('input[name="username"]').fill("student")
    await page.locator("input#password").fill("Password123")
    await page.locator("button#submit").click()
    await page.locator(".wp-block-group__inner-container.is-layout-flow.wp-block-group-is-layout-flow").click()
})