import {test} from "@playwright/test"
test("multiple windows",async({browser})=>{
    let context=await browser.newContext()
    let page= await context.newPage()
    
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
    let [window]=await Promise.all([
         page.waitForEvent('popup'),
         page.locator("//button[.='Shop Now']").click()
       
    ])
    await  window.locator("//button[.='Add to Cart']").click()
})