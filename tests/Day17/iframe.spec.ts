import {test} from "@playwright/test"

test("frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // let frame=await page.frames()
    // console.log(frame.length);
    // //console.log(frame);
    // let title1=await page.title()
    // console.log(title1)

    // for(let i of frame){
    //     let text=await i.title()
    //     console.log(text);
        
    // }


    //!--------a1-----------------
    let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    //await frame3?.frameLocator("").locator            //for->to locate inside a frame
    await frame1?.locator('//input[@name="mytext1"]').fill("tcshtcdyvtfbgynh")

    let frame2=await page.frameLocator('//frame[@src="frame_2.html"]')
    await frame2.locator('//input[@name="mytext2"]').fill("hcfhgvfb")
    //await frame1?.fill('//input[@name="mytext2"]',"hcfhgvfb")

    let frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    ?.getByLabel("Hi, I am the UI.Vision IDE")
    .check()
})

