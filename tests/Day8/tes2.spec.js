import {test} from "@playwright/test"

// test("title",()=>{
//     console.log("hello");
    
// })    // npx playwright test tests/tes2.spec.js backward slash->forward slash the path
// playwright works on linux so it does not understand backward slash

// test("browser controls",async({page})=>{
//     // let size=await page.viewportSize()
//     // console.log(size);
//     // await page.setViewportSize({width:500,height:500})
//     // console.log(await page.viewportSize());

//     await page.goto("https://www.amazon.com/")
//     let ptitle=await page.title();
//     console.log(ptitle);
// })

test("browser controls",async({browser})=>{
   let context=await browser.newContext()
   let page=await context.newPage()

    await page.goto("https://www.amazon.com/")
    let time=new Date().getTime()
    await page.screenshot({path:`scrrenshot/${time}.png`})
    console.log(await context.cookies());
    

    // let url=await page.url();
    // console.log(url);
    
    // await browser.close()
})

