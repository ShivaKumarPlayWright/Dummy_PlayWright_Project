import { test, expect } from "@playwright/test"
// simple alert
test("auto dismiss dialogs", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.locator("//button[@id='alertBtn' and .='Simple Alert']").click()
    await page.getByRole("button", { name: 'Simple Alert' }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("button", { name: 'Confirmation Alert' }).click()
    await expect(page.locator('#demo')).toContainText('Cancel')
    await page.waitForTimeout(2000)
    await page.getByRole("button", { name: 'Prompt Alert' }).click()
    await expect(page.locator('#demo')).toContainText('cancelled')
    await page.waitForTimeout(2000)
})

test("Handled dialogs", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //even listener
    //this line must before any dialog actions
    page.on('dialog', (dialog) => { dialog.accept() })
    await page.getByRole("button", { name: 'Simple Alert' }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("button", { name: 'Confirmation Alert' }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("button", { name: 'Prompt Alert' }).click()
    await page.waitForTimeout(2000)
})

//based on dialog we can handled the dialog
test("based on condition",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //even listener
    //this line must before any dialog actions
    page.on('dialog', async(dialog) => { 
        //wrighting condtion 
        if(dialog.type()=='alert'){
            console.log(await dialog.message());  
            await dialog.dismiss()
        }else if(dialog.type()=='confirm'){
            await dialog.accept()
        }else if(dialog.type()=='prompt'){
            console.log(await dialog.defaultValue());
            
            await dialog.accept("shivakumar")
        }
     })
    await page.getByRole("button", { name: 'Simple Alert' }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("button", { name: 'Confirmation Alert' }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("button", { name: 'Prompt Alert' }).click()
    await page.waitForTimeout(2000)
})

//page.once()--> recommended
test("handled dialog using page.once()",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button", { name: 'Simple Alert' }).click()
    await page.waitForTimeout(2000)
    await page.getByRole("button", { name: 'Confirmation Alert' }).click()
    await page.waitForTimeout(2000)
    await page.once("dialog",async(dialog)=>{ dialog.accept("shiva")})
    await page.getByRole("button", { name: 'Prompt Alert' }).click()
    await page.waitForTimeout(2000)
    await page.reload() // to refresh the page
    await page.getByRole("button", { name: 'Prompt Alert' }).click()
    await page.waitForTimeout(2000)
})