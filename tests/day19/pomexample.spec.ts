import {test} from "@playwright/test"
import fs from "fs"
import example from "../../pageobjectmodel/example.page"
import data from "../../testdata/data.json"

test("",async({page})=>{
    let examplepage=new example(page)

    //await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await examplepage.usernameTF.fill()
    // await examplepage.passwordTf.fill("Password123")
    // await examplepage.SubmitBtn.click()

    for(const d of data){
        await page.goto(d.url)
        await examplepage.login(d.username,d.password)
    }
})