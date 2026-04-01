import {test} from "@playwright/test"
import path from path

test("Task 4",async({browser})=>{
     const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");
    const [downloadfile]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:'Download'}).click()
    ])
    //await page.pause();

    let downloadfolder="C:\Notes\dowloads"
    let filename=await downloadfile.suggestedFilename()
    await downloadfile.saveAs(path.join(downloadfolder,filename))
})