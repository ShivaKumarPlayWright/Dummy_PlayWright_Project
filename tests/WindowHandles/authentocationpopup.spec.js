import {test} from "@playwright/test"
test("Basic Auth",async ({browser}) => {
    let context=await browser.newContext({
        httpCredentials:{
            username:'admin',
            password:'admin'
        }
    })

    const page=await context.newPage()
    await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")
})