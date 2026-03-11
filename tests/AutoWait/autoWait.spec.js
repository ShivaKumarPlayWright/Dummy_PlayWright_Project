import {test} from "@playwright/test"
test("",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
 //  await page.locator('//div[@role="row"]',{hasText:"shoes for woman for office", exact:true}).waitFor()
   let suggestions=await page.locator('//div[@role="row"]').allTextContents()
   //console.log(suggestions);
   for(let i=0;i<suggestions.length;i++){
     if(suggestions[i]===' for women'){
        await page.locator('//div[@role="row"]').click()
        break
     }
   }
   
})
