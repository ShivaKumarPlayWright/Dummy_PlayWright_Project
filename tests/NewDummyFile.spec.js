import {test} from "@playwright/test"
test("dummy file",async({page})=>{
    console.log("dummy file");
    
})

test.only("dummy file-1",async({page})=>{
    await page.goto("https://www.flipkart.com/")
})