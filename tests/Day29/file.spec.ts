import {test} from "@playwright/test"

test("request fixture",async({request})=>{
    await request.newContext({
        baseurl:{}
    })
})