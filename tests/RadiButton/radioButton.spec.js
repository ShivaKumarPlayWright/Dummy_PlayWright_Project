import {test,expect} from "@playwright/test"
test("Radio Button",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator('#attended').check()
    await page.waitForTimeout(2000)
    console.log(await page.locator('#attended').isChecked());
    
    //assertion
     expect(await page.locator("#attended")).toBeChecked()

    //if its false assertion pass
     expect(await page.locator("#attended").isChecked()).toBeFalsy()
    //if its true assertion pass
     expect(await page.locator("#attended").isChecked()).toBeTruthy()

})

test("check box",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("#domain_b").check()
    await page.waitForTimeout(3000)
  //  expect(await page.locator("#domain_b").isChecked()).toBeTruthy
     expect(await page.locator("#domain_b")).toBeChecked()
    await page.locator("#domain_b").uncheck()
    await page.waitForTimeout(3000)


})

//click radio button only if check box in not selected
test("scenario-1",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.waitForTimeout(3000)
    if(!await page.locator('#attended').isChecked()){
        await page.locator('#attended').check()
        await page.waitForTimeout(3000)
    }   
})

//scenario-2

test.only("scenario-2",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.waitForTimeout(3000)
 let values = await page.locator('//input[@name="Domain"]/following-sibling::span').allTextContents()
var text='Yahoo'
 for (const key of values) {
   if(key===text){
          await page.locator(`//input[@name='Domain' ]//following-sibling::span[.='${text}']/preceding-sibling::input`).check()
          console.log(await page.locator(`//input[@name='Domain' ]//following-sibling::span[.='${text}']/preceding-sibling::input`).isChecked());        
          break
   }
}   
await page.waitForTimeout(4000)
})