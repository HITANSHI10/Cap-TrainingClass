import {test} from "@playwright/test"
import path from "path"
import fs from "fs"
import data from "../../testdata/dat1.json"
import amazon from "../../pageobjectmodel/amazon.page"

test("real case in amazon",async({page})=>{
    let amazonpage=new amazon(page)
    for(const d of data){
        await page.goto(d.url)
        await amazonpage.addToCart(d.Search)
        await page.locator('(//input[@id="add-to-cart-button" and @title="Add to Shopping Cart"])[1]').click()
    }
})