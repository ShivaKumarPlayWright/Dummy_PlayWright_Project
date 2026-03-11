import {test} from "@playwright/test"
// import fs from "fs" // fs-file system
// let dataFile=fs.readFileSync("C:/Users/User/Desktop/PlayWright/tests/datadriventest/jsonfile.spec.js")
// let data=JSON.parse(dataFile)

import tdata from '../../testdata/jsondata.json'
test("read json file",async({page})=>{
   await page.goto(tdata.url)
   await page.locator("#username").fill(tdata.username)
   await page.locator("#password").fill(tdata.password)
   await page.getByRole("button",{name:"Submit"}).click()
   let title=await page.title()
   //console.log(title);
   if(title==='Logged In Successfully | Practice Test Automation'){
    console.log("login successfull");
   }else{
    console.log("login fail");
    
   }
})