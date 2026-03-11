import {test} from "@playwright/test"
test("Locators",async({page})=>{
   await page.goto("https://practicetestautomation.com/practice-test-login/")
//    //username textfield
//    await page.locator("input#username").fill("student")
//    //password textfield
//    await page.locator("input#password").fill("Password123")
//    //submit
  // await page.locator("#submit").click()
  //await page.getByAltText("Test Automation",{exact:false}).click()
  
})