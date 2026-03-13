///////---->>> Tpye 1 ------>

import {test} from "@playwright/test"

// test("Element based waits",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.getByLabel("username").waitFor({timeout:20000,state:"detached"}) 
//     // await page.locator("//a[@data-csa-c-content-id='nav_avod_desktop_topnav']").waitFor({timeout:20000})
//     //  await page.locator("//a[@data-csa-c-content-id='nav_avod_desktop_topnav']").click()

//     // await page.waitForSelector("//a[@data-csa-c-content-id='nav_avod_desktop_topnav']",{timeout:2000})
//     // await page.locator("//a[@data-csa-c-content-id='nav_avod_desktop_topnav']").click()
// })

//////----> Type =2 -------.

test("Page waits",async({browser})=>{
    let context = await browser.newContext()
    let page=await context.newPage()

    await page.goto("https://www.flipkart.com/")
    await page.locator('//span[@role="button"]').click()
    await page.getByPlaceholder("Search for Products, Brands and More").first().type("shoes")
    await page.keyboard.press("Enter")
    let [page2]= await Promise.all([ page.waitForNavigation(),
     page.locator('//img[@class="MZeksS"]').first().click()])
   
    // let price= page.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]').textContent()
    // console.log(price);
    
    console.log(await page.url());
    // console.log(await page2.url());
    
})