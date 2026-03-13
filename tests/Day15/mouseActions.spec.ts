import {test} from "@playwright/test"

// test("",async({page})=>{
// //     await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
// //     // await page.locator("#btn").click({button:"right",clickCount:2,force:true})
// //     // await page.locator("btn").dblclick()
// //     // await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()

// //     // await page.locator("#btn").hover()
// //     // await page.mouse.down()
// //     // await page.mouse.up()

//     await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
//     await page.locator('//div[@class="zoom-button "]').hover()
//     await page.mouse.down()
//     await page.mouse.up()
// })

// test("disable",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
//     // await page.locator('//input[@id="submit"]').click({force:true})
//     await page.locator('//input[@id="submit"]').dispatchEvent("click")
// })

// test("Drag&Drop",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
//     // const source = await page.locator('//div[text()="Mobile Charger"]')
//     // const target = page.locator('//div[text()="Mobile Accessories"]');
//     // await source.hover();
//     // await page.mouse.down();
//     // await target.hover();
//     // await page.mouse.up();

//     await page.locator('//div[text()="Mobile Charger"]').dragTo( page.locator('//div[text()="Mobile Accessories"]'))
//     await page.locator('//div[text()="Laptop Charger"]').dragTo( page.locator('//div[text()="Laptop Accessories"]'))
//     await page.locator('//div[text()="Mobile Cover"]').dragTo( page.locator('//div[text()="Mobile Accessories"]'))
//     await page.locator('//div[text()="Laptop Cover"]').dragTo( page.locator('//div[text()="Laptop Accessories"]'))

// })

test("scroll",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    await page.locator('//input[@type="checkbox"]').click()
    await page.waitForTimeout(3000)

    // await page.mouse.move(100,100)    -----> Only use for co-ordinatess
})