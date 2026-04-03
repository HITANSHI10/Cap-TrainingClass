import { test, request as apiRequest } from "@playwright/test"

test("request fixture", async () => {
    const context = await apiRequest.newContext({
        baseURL: "https://example.com",
        ignoreHTTPSErrors:true
    })

    const response = await context.get("/")
    console.log(await response.text())
})