import {test} from "@playwright/test"

// test("Multiple tabs",async({browser})=>{
//     let context = await browser.newContext()
//     let page=await context.newPage()
//     await page.goto("https://www.amazon.in/")

//     let page2 = await context.newPage()
//     await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
// })

// test("Page waits",async({browser})=>{
//     let context = await browser.newContext()
//     let page=await context.newPage()

//     await page.goto("https://www.flipkart.com/")
//     await page.locator('//span[@role="button"]').click()
//     await page.getByPlaceholder("Search for Products, Brands and More").first().type("shoes")
//     await page.keyboard.press("Enter")
//     let [page2] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('//img[@class="MZeksS"]').first().click()])

//     console.log(page);
//     console.log(page2);
    
// })

// import { test } from "@playwright/test"

test("Multiple events", async ({ browser }) => {

  let context = await browser.newContext()
  let page = await context.newPage()

  await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")

  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByText("View More").first().click()
  ])

  await page2.locator('//button[@class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-200"]').click()
  // console.log(await page.url())
  // console.log(await page2.url())

})