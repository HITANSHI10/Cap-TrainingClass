import {test} from "@playwright/test"
import path from "path"

// test("upload files",async({page})=>{
//     console.log(__dirname);
//     console.log(__filename);
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Notes/tests/Day18/uploadfile/demo.txt")
//     await page.getByRole("button",{name:"Upload Single File"}).click()
//     await page.waitForTimeout(30000)

    //---------CASE2--------             -->for relative path
    // await page.locator('//input[@id="singleFileInput"]').setInputFiles(path.join(__dirname,"uploadfile/demo.txt"))
    // await page.getByRole("button",{name:"Upload Single File"}).click()
// })


test("upload multiple files",async({page})=>{
    // console.log(__dirname);
    // console.log(__filename);
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/Notes/tests/Day18/uploadfile/demo.txt",
    //  "C:/Notes/tests/Day18/uploadfile/demo1.xlsx",
    // "C:/Users/Dell/Testing/1.js"])
    // await page.getByRole("button",{name:"Upload Multiple Files"}).click()

    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([path.join(__dirname,"uploadfile/demo.txt"),path.join(__dirname,"/uploadfile/demo1.xlsx")])
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()
})