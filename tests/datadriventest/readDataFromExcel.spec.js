import { test } from "@playwright/test"
import excel from 'exceljs'
import path from "node:path"

test("", async ({ page }) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))
    let sheet = await book.getWorksheet('Sheet1')
    let date = await sheet.getRow(1).getCell(1).toString()
    console.log(date);
})

test("read testscript data", async ({ page }) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))
    let sheet = book.getWorksheet("Sheet1")
    let rows = sheet.getRow(1)
    let url = rows.getCell(1)
    let userName = rows.getCell(2)
    let passWord = rows.getCell(3)

    console.log(` url :${url} , UserNamae:${userName} , PassWord:${passWord}`);

})

//store the readed value in an array for external use
test("read testscript data and store in array", async ({ page }) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))
    let sheet = book.getWorksheet("Sheet1")
    let allData = []
    for (let r = 1; r <= sheet.rowCount; r++) {
        let rows = sheet.getRow(r)
        let url = rows.getCell(1).toString()
        let userName = rows.getCell(2).toString()
        let passWord = rows.getCell(3).toString()

        allData.push({ url: url, userName: userName, passWord: passWord })
    }

    // console.log(allData.url);//undefined

    for (let d of allData) {
        await page.goto(d.url)
        await page.waitForTimeout(3000)
        let p2 = page.waitForEvent('popup')
        await page.getByRole("link", { name: "Small CRM" }).click()
        //current contron in new tab that control stored in page2
        let page2 = await p2
        page2.getByRole("link", { name: 'Admin' }).click()
        await page.waitForTimeout(3000)
        page2.locator('#txtusername').fill(d.userName)
        await page.waitForTimeout(3000)
        page2.locator('#txtpassword').fill(d.passWord)
        await page.waitForTimeout(3000)
        page2.getByRole('button', { name: 'Login' }).click()
        await page.waitForTimeout(3000)
    }

})

//excute with multiple data -> add extra rows in excel
//store the readed value in an array for external use
test.only("read testscript data and store in array and execute with multple inputs", async ({ page }) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))
    let sheet = book.getWorksheet("Sheet1")
    let allData = []
    for (let r = 1; r <= sheet.rowCount; r++) {
        let rows = sheet.getRow(r)
        let url = rows.getCell(1).toString()
        let userName = rows.getCell(2).toString()
        let passWord = rows.getCell(3).toString()

        allData.push({ url: url, userName: userName, passWord: passWord })
    }

    // console.log(allData.url);//undefined

    for (let d of allData) {
        await page.goto(d.url)
        await page.waitForTimeout(3000)
        let p2 = page.waitForEvent('popup')
        await page.getByRole("link", { name: "Small CRM" }).click()
        //current contron in new tab that control stored in page2
        let page2 = await p2
        await page2.getByRole("link", { name: 'Admin' }).click()
        await page2.locator('#txtusername').fill(d.userName)
        await page2.locator('#txtpassword').fill(d.passWord)
        await page2.getByRole('button', { name: 'Login' }).click()
        await page2.waitForTimeout(3000)
        await page2.close()

    }

})
