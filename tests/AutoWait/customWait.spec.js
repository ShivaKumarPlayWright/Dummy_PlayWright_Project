import {test} from "@playwright/test"
test("custom wait",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForFunction(()=>{return document.readyState==='complete'})
    await page.locator('input#twotabsearchtextbox').fill("Hp Laptop")

})