import {test} from "@playwright/test"
test.use({actionTimeout:20000})

//test("web element",async({page})=>{
    // await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("Username").type("student")
    // await page.getByLabel("Username").type("student1")
    // const value=await page.getByLabel("Username").inputValue()
    // console.log(value);
    // await page.getByLabel("Password").fill("Password123")
    // await page.getByLabel("Password").fill("Password1234")
    // console.log(await page.getByLabel("Password").isVisible())
//})

test("nth element",async({page})=>{
    await page.setDefaultTimeout(10000)
    await page.goto("https://www.amazon.in/")
    await page.locator("twotabsearchtextbox").fill("shoes",{timeout:30000})
    // await page.keyboard.press("Enter")
    // await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/span').first().waitFor()
    // let ele=await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/span').all()
    // console.log(ele);
})