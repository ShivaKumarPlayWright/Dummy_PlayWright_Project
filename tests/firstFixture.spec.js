import {test} from "@playwright/test"
//page -fixture
test.only("page fixture",async({page})=>{
    await page.goto("https://amazon.com/")
    //await page.pause()
})

test.only("page -1",async({page})=>{
  console.log(Math.floor(Math.random()*1000));
  
})

//browser-fixture
// test("browser-fixture", async({browser,browserName})=>{
//     console.log(browserName);
    
//   let context= await browser.newContext()
//   let page=await context.newPage()
//   await page.goto("https://amazon.com/")
// })

