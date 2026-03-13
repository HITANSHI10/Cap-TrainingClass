import {test,expect} from "@playwright/test"
import { log } from "node:console";

test("title 4",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//div[@class="a-cardui-footer"]/descendant::span[text()="Explore all" and @class="a-truncate-cut"][1]').click();
    const product=await page.locator('//span[contains(text(),"NEW LEAF Premium Cotton")] | //span[text()="NEW LEAF Premium Cotton Elastic Fitted…"]/ancestor::a[@class="a-color-base a-spacing-none a-link-normal"]/following-sibling::div[@class="a-section a-spacing-micro acsProductBlockV1__price"]/child::span/child::span[text()="₹379.00" and @class="a-offscreen"]').textContent();
    console.log(product);
    
})