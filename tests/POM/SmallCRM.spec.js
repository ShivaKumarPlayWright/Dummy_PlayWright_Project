import {test,expect} from "@playwright/test"
import LandingPage from "../../PageObjectModel/landing.page.js"
import SingUpPage from "../../PageObjectModel/SingUp.page.js"
import SignInPage from "../../PageObjectModel/SignIn.page.js"
import SmallCRMData from "../../testdata/SmallCRMData.json"
import HomePage from "../../PageObjectModel/Home.page.js"
import CreateTicketPage from "../../PageObjectModel/CreateTicket.page.js"

test("",async ({page}) => {

    page.on("dialog",async (dialog) => {
        console.log(await dialog.message());
        await dialog.accept()
        
    })

    let landing=new LandingPage(page)
    let singUp=new SingUpPage(page)
    let singIn=new SignInPage(page)
    let home=new HomePage(page)
    let createTicket=new CreateTicketPage(page)

    await page.goto(SmallCRMData.url)
    //landing page
    await landing.singUpLink.click()
    await page.waitForTimeout(2000)
    //sing-up page
    let randomNum=Math.floor(Math.random()*1000);
     let emailId=SmallCRMData.emailId+randomNum+"@gmail.com"
   await singUp.singUp(SmallCRMData.name,emailId,SmallCRMData.password,
        SmallCRMData.rePassword,SmallCRMData.contactNumber,SmallCRMData.gender)
    //sing-in page
    await singIn.singIn(emailId,SmallCRMData.password)
    //create ticket
    await home.createTicketLink.click()
    await createTicket.createTicket()
    //take screen shot
    await home.viewTicketLink.click()
    await page.screenshot({path:`C:/Users/User/Desktop/PlayWright/screenshort/ticket-+${randomNum}+.png`})
    await page.waitForTimeout(3000)
})