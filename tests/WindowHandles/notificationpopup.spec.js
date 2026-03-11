import {test,expect} from "@playwright/test"
//playwright by default denied the permission
test("denied notification-popup",async ({browser}) => {
    let context= await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole('button',{name:'Notification'}).click()
    let result=await page.evaluate(()=>{ return Notification.requestPermission()})
    console.log(` permission : ${result}`);
    
})

//to grant the permission
test("grand notification-popup",async ({browser}) => {
                                         //it gives the permission granted
    let context= await browser.newContext({permissions:['notifications']})
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole('button',{name:'Notification'}).click()
    let result=await page.evaluate(()=>{ return Notification.requestPermission()})
    console.log(` permission : ${result}`);
    
})

//can provide permission in playwright.config.js in use--permissions:['notifications'] 
test("grand & denied notification-popup",async ({browser}) => {
                                         //it gives the permission granted
    let context= await browser.newContext({permissions:['notifications','microphone']})
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole('button',{name:'Notification'}).click()
    let result=await page.evaluate(()=>{ return Notification.requestPermission()})
    console.log(` permission : ${result}`); //granted
    //revoke all permission
    await context.clearPermissions()
    let result1=await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(` permission : ${result1}`); //denied
    
})