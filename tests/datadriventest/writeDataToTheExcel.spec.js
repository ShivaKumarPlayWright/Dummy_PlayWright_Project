//inbuild test runner -> playwright/test
import {test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
test("write data to the excel",async ({page}) => {
    
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,'../../testdata/exceldata.xlsx'))
    let sheet=book.getWorksheet("Sheet5")
     // if worksheet not availble create worksheet
    if(!sheet){
        sheet=book.addWorksheet("Sheet5")
    }
    sheet.getRow(1).getCell(1).value="Hello"
    //to update in excel sheet
    await book.xlsx.writeFile(path.join(__dirname,'../../testdata/exceldata.xlsx'))
})

test.only("write data to the excel-1",async ({page}) => {
    
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,'../../testdata/exceldata.xlsx'))
    let sheet=book.getWorksheet("Sheet5")
     // if worksheet not availble create worksheet
    if(!sheet){
        sheet=book.addWorksheet("Sheet5")
    }

    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill('shoes')
    await page.locator("//div[@class='s-suggestion-container']").first().waitFor()
    let allOptions=await page.locator("//div[@class='s-suggestion-container']").allTextContents()
  //  console.log(allOptions);
    
    for(let option of allOptions){
        let i=allOptions.indexOf(option)
        sheet.getRow(i+1).getCell(1).value=option

    }
    //to update in excel sheet
    await book.xlsx.writeFile(path.join(__dirname,'../../testdata/exceldata.xlsx'))
})