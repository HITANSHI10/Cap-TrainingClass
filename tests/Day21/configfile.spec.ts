import {test} from "@playwright/test"

test("",async({page})=>{
    await page.goto("https://www.prokabaddi.com/schedule-fixtures-results")
    let details=await page.locator('(//p[@class="team-name"])[1]|(//p[@class="team-name"])[2]|(//p[@class="match-place"])[1]|(//p[@class="score"])[1]|(//p[@class="score"])[2]').allTextContents()
    console.log(details); 
})