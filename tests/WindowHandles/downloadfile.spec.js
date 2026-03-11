import { test, expect } from "@playwright/test"
import { promises } from "node:dns"
import path from "node:path/win32"
import fs from "fs"
test("download file", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByRole("textbox", { name: "Enter text here" }).fill("Hello...im downloading a file")
    await page.getByRole("button", { name: "Download" }).click()
})

// if it take more time to download and to download to the folder
test("download file-1", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByRole("textbox", { name: "Enter text here" }).fill("Hello...im downloading a file")
    let [downloadFile] = await Promise.all( [
        //to make it wait the event
        page.waitForEvent("download"),
        page.getByRole("button", { name: "Download" }).click()
    ] )
    //its a path where the file want to download
    let downloadFolder = "C:\Users\User\Desktop\PlayWright\downloadedfile"
    //fetching the file name which is suggested
    let fileName = downloadFile.suggestedFilename()
    //join the path and file name
    await downloadFile.saveAs(path.join(__dirname, "../../downloadedfile", fileName))

})

//when ever we try to download the file multiple time it will replace with the same to avoid this script
test("download file-2", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByRole("textbox", { name: "Enter text here" }).fill("Hello...im downloading a file")
   //providing a file which instead of choosing suggest name
    await page.locator('#fileName').fill('newFile.txt')
    let [downloadFile] = await Promise.all(
        [page.waitForEvent("download"),
        page.getByRole("button", { name: "Download" }).click()]
    )
    //its a path where the file want to download
    let downloadFolder = "C:\Users\User\Desktop\PlayWright\downloadedfile"
    //fetching the file name which is suggested
    let fileName = downloadFile.suggestedFilename()
    //join the path and file name
    await downloadFile.saveAs(path.join(__dirname, "../../downloadedfile", fileName))

})

//to download to our local system
test("download file-3", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByRole("textbox", { name: "Enter text here" }).fill("Hello...im downloading a file")
   //providing a file which instead of choosing suggest name
    await page.locator('#fileName').fill('newFile.txt')
    let [downloadFile] = await Promise.all(
        [page.waitForEvent("download"),
        page.getByRole("button", { name: "Download" }).click()]
    )
    //its a path where the file want to download
    let downloadFolder = "c:/Users/User/Desktop/playwrightdownloadfile"
    //fetching the file name which is suggested
    let fileName = downloadFile.suggestedFilename()
    //join the path and file name
    await downloadFile.saveAs(path.join(downloadFolder, fileName))

})

//achieve download without using promise.all()
test("download file-4", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByRole("textbox", { name: "Enter text here" }).fill("Hello...im downloading a file")
   //providing a file which instead of choosing suggest name
    await page.locator('#fileName').fill('newFile.txt')

    // let [downloadFile] = await Promise.all(
    //     [page.waitForEvent("download"),
    //     page.getByRole("button", { name: "Download" }).click()]
    // )

     //here we cant use await as its event
     let download=page.waitForEvent("download")
     page.getByRole("button", { name: "Download" }).click()
     //it will wait untill it get download
     let downloadFile=await download
    //its a path where the file want to download
    let downloadFolder = "c:/Users/User/Desktop/playwrightdownloadfile"
    //fetching the file name which is suggested
    let fileName = downloadFile.suggestedFilename()
    //join the path and file name
    await downloadFile.saveAs(path.join(downloadFolder, fileName))

})

//verify if file saved in the given location
test.only("download file-5", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByRole("textbox", { name: "Enter text here" }).fill("Hello...im downloading a file")
   //providing a file which instead of choosing suggest name
    await page.locator('#fileName').fill('newFile.txt')

    // let [downloadFile] = await Promise.all(
    //     [page.waitForEvent("download"),
    //     page.getByRole("button", { name: "Download" }).click()]
    // )

     //here we cant use await as its event
     let download=page.waitForEvent("download")
     page.getByRole("button", { name: "Download" }).click()
     //it will wait untill it get download
     let downloadFile=await download
    //its a path where the file want to download
    let downloadFolder = "c:/Users/User/Desktop/playwrightdownloadfile"
    //fetching the file name which is suggested
    let fileName = downloadFile.suggestedFilename()
    //join the path and file name
    let fullPath=path.join(downloadFolder, fileName)
    await downloadFile.saveAs(fullPath)

    //verify if the file saved in the given path
    if(fs.existsSync(fullPath)){
        console.log("file exist in the given path");      
    }else{
        console.log("file not exist in the given path");             
    }
})