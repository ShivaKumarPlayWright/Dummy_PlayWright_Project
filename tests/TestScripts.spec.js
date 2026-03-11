import {chromium, test} from "@playwright/test"
// test("First Script",async({page,browser})=>{
//      await page.goto("https://www.amazon.com/")
//     await page.waitForTimeout(2000)
//     console.log(await page.title());
//      console.log(await page.url());

// let context= await browser.newContext()
// let pageLoad=await context.newPage()
// await pageLoad.goto("https://www.amazon.com/")
// console.log(await context.cookies());

// await pageLoad.goto("https://www.google.com/")
// console.log(await context.cookies());

    
// })

test.only("instance",async()=>{
    let browser=await chromium.launch()
    let context=await browser.newContext()
   let page= await context.newPage()
   browser.close()
 
})

test("screenshot-1",async({page})=>{
     
     await page.goto("https://www.google.com")
     let time=new Date().getTime();
     await page.screenshot({path:`screenshort/googlePage-${time}.png`})
})