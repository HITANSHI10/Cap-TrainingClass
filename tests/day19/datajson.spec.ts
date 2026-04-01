import {test} from "@playwright/test"
import fs from "fs"
import path from "path"
//path.join(__dirname,"../../testdata/data.json")
let datafile=fs.readFileSync(path.join(__dirname,"../../testdata/data.json"))
let data=JSON.parse(datafile)


// test("json data",async({page})=>{
    
//     data.forEach(d=>{
//         console.log(d.greet);
        
//     })
    
// })

test("for application",async({page})=>{
    // await page.goto(data.url)
    // await page.locator('input#username').fill(data.username)
    // await page.locator('input#password').fill(data.password)
    // await page.locator('//button[text()="Submit"]').click()

    for(let d of data){
        let url=d.url
        let username=d.username
        let password=d.password

        await page.goto(url)
        await page.locator('input#username').fill(username)
        await page.locator('input#password').fill(password)
        await page.locator('//button[text()="Submit"]').click()
        console.log(page.title());
        
    }
})