import {test} from "@playwright/test"

test("Notifications",async({browser})=>{
    let context = await browser.newContext({permissions:["notifications"]})
    let page=await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator('//button[@id="browNotButton"]')
    await page.waitForTimeout(3000)
    let result = await page.evaluate(()=>{
        return Notification.requestPermission()
    })
    console.log(result);
    
})