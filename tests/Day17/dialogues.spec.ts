import {test} from "@playwright/test"

test("dialogues",async({page})=>{
    page.on('dialog',async(d)=>{
        // console.log(d.message())
        // await d.accept("gfvbh")
        if(d.type()=="alert"){
            await d.accept()
        }
        else if(d.type()=="confirm"){
            await d.dismiss()
            await d.message()
        }
        else if(d.type()=="prompt"){
            //await d.accept("hello")
            let value=await d.defaultValue()
            if(value=="Tom"){
                await d.accept()
            }
            else{
                await d.accept("Tom")
            }
        }
    })
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator('//button[@id="alertBtn"]').click()
    await page.getByRole('button',{name:"Simple Alert"}).click()
    await page.getByRole('button',{name:"Confirmation Alert"}).click()
    await page.getByRole('button',{name:"Prompt Alert"}).click()
})