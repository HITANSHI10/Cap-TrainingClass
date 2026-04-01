import {test} from "@playwright/test"

test("custom waits",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForFunction(()=>{
        let ele=document.querySelectorAll("cv gjf")
        return ele.length>1
        //return document.readyState==='complete'
    })
    await page.title()
})