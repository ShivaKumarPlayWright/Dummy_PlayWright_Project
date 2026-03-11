import {test} from "@playwright/test"
import path from "path"
test("uplaod file",async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#singleFileInput").setInputFiles("C:/Users/User/Desktop/PlayWright/UploadFiles/resume.txt")
      await page.waitForTimeout(3000)
})

test("uplaod single file and click upload button",async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#singleFileInput").setInputFiles("C:/Users/User/Desktop/PlayWright/UploadFiles/resume.txt")
      await page.getByRole('button',{name:'Upload Single File'}).click()
      await page.waitForTimeout(3000)
})

test("uplaod multiple file and click upload button",async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/User/Desktop/PlayWright/UploadFiles/resume.txt","C:/Users/User/Desktop/PlayWright/UploadFiles/resume1.txt"])
      await page.getByRole('button',{name:'Upload Multiple Files'}).click()
      await page.waitForTimeout(3000)
})

test.only("join file using join",async ({page}) => {
  console.log(__dirname);

   await page.goto('https://testautomationpractice.blogspot.com/')           // ../../ its most important
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../UploadFiles/excel.xlsx"))
      await page.getByRole('button',{name:'Upload Multiple Files'}).click()
      await page.waitForTimeout(3000)
  
})