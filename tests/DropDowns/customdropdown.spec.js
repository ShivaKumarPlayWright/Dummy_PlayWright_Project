import {test,expect} from "@playwright/test"
test("custom drop-down",async ({page}) => {
    await page.goto('https://www.amazon.in/s?k=shoe&crid=2KP70F4HBCD1O&sprefix=shoe%2Caps%2C440&ref=nb_sb_noss_2')
    await page.waitForTimeout(4000)
    await page.locator('#s-result-sort-select').click({force:true})
    await page.waitForTimeout(3000)
    await page.locator("//li/a[@class='a-dropdown-link']").first().waitFor()
    let options= await page.locator("//li/a[@class='a-dropdown-link']").all()
    for(let key of options){
        let text=await key.textContent() 
        if(text.includes("Best ")){
            await key.click()
        }   
    }
    await page.waitForTimeout(3000)
})

//direct using x-path
test.only("custom drop-down-1",async ({page}) => {
    await page.goto('https://www.amazon.in/s?k=shoe&crid=2KP70F4HBCD1O&sprefix=shoe%2Caps%2C440&ref=nb_sb_noss_2')
     await page.waitForTimeout(3000)
    await page.locator('#s-result-sort-select_1').click({force:true})
    await page.waitForTimeout(3000)
    
})