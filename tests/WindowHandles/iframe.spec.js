import {test,expect} from "@playwright/test"
test("iframes",async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")
    let totalFrames=await page.frames()
    // console.log(totalFrames.length);
    // for(let frame of totalFrames){
    //     console.log(await frame.title());
        
    // }
    // console.log(await page.title());
    
    //Approach-1
    let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1.locator("//input[@name='mytext1']").fill('shiva')
    await expect(await frame1.locator("//input[@name='mytext1']").inputValue()).toContain('shiva')

    //Approach-2
    let frame2=await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']")
    frame2.fill('shivakumar')
    await page.waitForTimeout(2000)

    //Approach-2

    let frame3=await page.locator("//frame[@src='frame_2.html']").contentFrame()
    frame3.locator("//input[@name='mytext2']").fill('TekPyramid')
      await page.waitForTimeout(2000)
})
 