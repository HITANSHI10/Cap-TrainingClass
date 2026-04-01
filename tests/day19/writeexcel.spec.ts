import {test} from "@playwright/test"
import path from "path"
import excel from "exceljs"

// test("Write excel data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/Readexcel.xlsx"))
//     let sheet=await book.getWorksheet("Sheet4")

//     if(!sheet){
//         sheet=await book.addWorksheet("Sheet4")

//     }

//     sheet.getRow(1).getCell(1).value="playwright";
//     await book.xlsx.writeFile(path.join(__dirname,"../../testdata/Readexcel.xlsx"))
// })

//test("Write multiple data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/Readexcel.xlsx"))
//     let sheet=await book.getWorksheet("Sheet5")

//     if(!sheet){
//         sheet=await book.addWorksheet("Sheet5")
//     }

//     const users = [
//     ["name","last name","email","gender","mobile number"],
//     ["John","Doe","john@test.com","Male","9876543210"],
//     ["Jane","Smith","jane@test.com","Female","9876543211"],
//     ["Mike","Brown","mike@test.com","Male","9876543212"]
//     ];

//     for(let r=1;r<=users.length;r++){
//         for(let c=1;c<=5;c++){
//             sheet.getRow(r).getCell(c).value=users[r-1][c-1]

//         }
//     }
//      await book.xlsx.writeFile(path.join(__dirname,"../../testdata/Readexcel.xlsx"))
// })

test("Amazon data filling",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/Readexcel.xlsx"))
    let sheet=await book.getWorksheet("Sheet6")

    if(!sheet){
        sheet=await book.addWorksheet("Sheet6")
    }

    await page.goto("https://www.amazon.in/")
     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    let baccabucci=await page.locator('//span[@class="a-size-base-plus a-color-base" and text()="Bacca Bucci"]').allTextContents()
    console.log(baccabucci);

    
    for(let c=1;c<=baccabucci.length;c++){
        sheet.getRow(1).getCell(c).value=baccabucci[c]
        await book.xlsx.writeFile(path.join(__dirname,"../../testdata/Readexcel.xlsx"))
    }
})