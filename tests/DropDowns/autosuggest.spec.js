import {test,expect} from "@playwright/test"
test("auto suggestion",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill('laptop')
    await page.waitForTimeout(2000)
   let autoSuggestions= await page.locator('//div[@role="row"]').all()  
   //console.log(autoSuggestions);
   let text='laptop table on bed';
   for(let suggestion of autoSuggestions){ 
    let  expectedValue= await suggestion.textContent()
    if(expectedValue.includes(text)){
      await suggestion.click();
       break;        
    }
   }
})

//another way to select auto-suggestion
test.only("autosugggestion-1",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill('laptop')
    await page.waitForTimeout(2000)
    await page.keyboard.press('ArrowDown')
     await page.waitForTimeout(2000)
    await page.keyboard.press('ArrowDown')
     await page.waitForTimeout(2000)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)

})