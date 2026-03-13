import {test} from "@playwright/test"

test("get by methods",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username").type("student")
    await page.getByLabel("Password").fill("Password123")
    // await page.getByText("Submit").first().click()

    // await page.getByRole("textbox",{name:"username",exact:true}).fill("fyjvhn")
    // await page.getByPlaceholder("Enter your name").fill("vhfytvgh")
    //await page.goto('https://www.saucedemo.com/')
    // await page.getByTestId("login-button").click()
})

// import {test} from "@playwright/test"

// test("dfgh",async({page})=>{

// })