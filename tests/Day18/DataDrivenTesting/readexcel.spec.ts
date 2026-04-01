import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

// test("Reading test data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../../testdata/Readexcel.xlsx"))
//     let sheet=await book.getWorksheet("Sheet1")
//     let data=await sheet?.getRow(1).getCell(1).toString()
//     console.log(data);
    
// })

// test("Multiple test data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../../testdata/Readexcel.xlsx"))
//     let sheet=await book.getWorksheet("Sheet2")
//     for (let r = 1; r <= sheet!.rowCount; r++) {
//         for(let c=1;c<=sheet!.columnCount;c++){
//             const data1 = sheet!.getRow(r).getCell(c).toString()
//             console.log(data1)
//         }
//     }
    
// })

test("Data from website",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../../testdata/Readexcel.xlsx"))
    let sheet=await book.getWorksheet("Sheet3")
   
    for(let r=3;r<=sheet?.actualRowCount;r++){
        let url=await sheet?.getRow(1).getCell(1).value
    await page.goto(url)
            let name=sheet!.getRow(r).getCell(1).toString()
            let id=sheet!.getRow(r).getCell(2).toString()
            let password=sheet!.getRow(r).getCell(3).toString()
            await page.getByPlaceholder("Enter your name").fill(name)
            await page.getByPlaceholder("Enter Your Email").fill(id)
            await page.getByPlaceholder("Enter your password").fill(password)
        
    }
})