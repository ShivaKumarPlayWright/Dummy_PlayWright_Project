import {test} from "@playwright/test"
import LoginPage from "../../PageObjectModel/login.page"
import loginData from "../../testdata/loginData.json"
test("pom page",async({page})=>{
   let lPage=new LoginPage(page)
   let url=loginData.url
   let userName=loginData.userName
   let passWord=loginData.passWord
   await page.goto(url)
   // await lPage.userNameTextField.fill(userName)
   // await lPage.passWordTextField.fill(passWord)
   // await lPage.loginButton.click()
   lPage.login(userName,passWord)
   await page.waitForTimeout(3000)
})