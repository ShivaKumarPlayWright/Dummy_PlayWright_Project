import {test,expect} from "@playwright/test"
test("standard drop-down",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator('#select3')
    await page.waitForTimeout(3000)
    //using value
    // await page.locator('#select3').selectOption({value:'India'})

    //using label
    // await page.locator('#select3').selectOption({label:'India'})

    //using index
    //await page.locator('#select3').selectOption({index:6})

    //using visble text
    await page.locator('#select3').selectOption('India')
    await page.waitForTimeout(3000)
})

test.only("Multi-select drop drown", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.waitForTimeout(3000)
    /* using multi select value attribute */
    // await page.locator('#select-multiple-native').selectOption([{value:'Mens Cotton Jacket'},{value:'Mens Casual Slim Fit'}])
    // await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click()
    //  await page.waitForTimeout(3000)

//     /* using multi select without using value attribute*/
//       await page.locator('#select-multiple-native').selectOption(['Mens Cotton Jacket','Mens Casual Slim Fit'])
//     await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click()
//      await page.waitForTimeout(3000)

 /* using multi select without using index attribute*/
    await page.locator('#select-multiple-native').selectOption([{index:1},{index:3},{index:5}])
    await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click()
    await page.waitForTimeout(3000)

     
})
