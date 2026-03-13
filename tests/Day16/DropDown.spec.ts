import {test,expect} from "@playwright/test"

// test("Standard dropdown",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//     // await page.locator("#country_code").selectOption({value:"+91"})
//     // await page.locator("#country_code").selectOption("+91")
//     // await page.locator("#select3").selectOption({value:"Canada"})
//     //    await page.locator("#select3").selectOption({label:"Canada"})
//         // await expect(page.locator("#select3")).toHaveValue("Canada")
//           await page.locator("#select3").selectOption({ index: 1 })

//         await expect(page.locator("#select3")).toBeVisible()
// })

// test("Multi Select",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//     await page.locator('#select-multiple-native').selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
//         ,{value:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"},
//         {value:"Solid Gold Petite Micropave "}])
//     // await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
//     await page.getByText("Add").click
// })

test("Custom dropdown",async({page})=>{
    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
    await page.locator(".sort-sortBy").click({force:true})

    // await page.waitForTimeout(3000)
     await page.locator('//label[@class="sort-label "]').first().waitFor()
    let options=await page.locator('//label[@class="sort-label "]').all()
    // console.log(options);
    

    for(let opt of options){
        let text = await opt.textContent()
        console.log(text);
        if(text?.includes("Better")){
            await opt.click()
            break;
        }
    }
})