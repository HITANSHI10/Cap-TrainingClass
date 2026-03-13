import {test} from "@playwright/test"

test("title",()=>{
    console.log("hii");
})


test("title 2",()=>{
    console.log("hii");
})


// test("title 3",()=>{
//     console.log("hii");
// })

//!fixtures--> it is a setup block of code which is reusable
/**
 * page
 * browser
 * browserName
 * context
 * request ---> API
 */

// test("title 4",async({page})=>{
//     await page.goto("https://www.amazon.in/")
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
// })

// test("title 5",async({browser})=>{
//     let context=await browser.newContext()
//     let page=await context.newPage()

//     await page.goto("https://www.amazon.in/")
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
    
// })

// test("title 5",async({context})=>{
//     let page=await context.newPage()

//     await page.goto("https://www.amazon.in/")
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
    
// })

test("title 5",async({browser,browserName})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    let page2=await context.newPage()

    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    console.log(browserName);
    await page.pause()
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    console.log(browserName);
    //await page2.goto("https://www.flipkart.com/")
})


