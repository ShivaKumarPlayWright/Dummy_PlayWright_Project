import {test,expect} from "@playwright/test"
test("creating multi tab manually",async ({browser}) => {
    let context=await browser.newContext()
    let page1=await context.newPage()
    await page1.goto("https://demoapps.qspiders.com/")
    let page2=await context.newPage()
    await page2.goto("https://www.amazon.in/")
})

test.only("switch one window to another window",async ({browser}) => {
    let context=await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.redbus.in/")
    let [page1]=await Promise.all( [ 
        page.waitForEvent('popup'),
        page.locator("//a[text()='Contact us']").click()
        ])
       await page1.locator('(//div[@class="rb_main_secondary_item  link" ])[1]').click()  
})

test("new tab",async ({browser}) => {
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    let [page2]=await Promise.all([
            page.waitForEvent('popup'),
            page.click("(//a[@class='atJtCj'])[1]")
        ])
      await page.waitForTimeout(2000)
      console.log(await page2.url());
      //it will validate the parent page and new tab page both are not same
      await expect(page2.url()).not.toBe('https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
})

