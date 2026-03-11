class SingUpPage {
    constructor(page) {
        this.nameTextField = page.locator("#name")
        this.emailIdTextField = page.locator("#email")
        this.passWordTextField=page.locator("#password")
        this.rePassWordTextField=page.locator("#cpassword")
        this.contactInfotextField=page.locator("#txtpassword")
        this.maleRadioButton=page.locator("//input[@value='m']")
        this.femaleRadioButton=page.locator("//input[@value='f']")
        this.submitButton=page.locator("//input[@name='submit']")
    }

    async singUp(name,emailID,passWord,rePassWord,contactNumber,gender){
        await this.nameTextField.fill(name)
        await this.emailIdTextField.fill(emailID)
        await this.passWordTextField.fill(passWord)
        await this.rePassWordTextField.fill(rePassWord)
        await this.contactInfotextField.fill(contactNumber)
        if(gender==='male'){
            await this.maleRadioButton.click()
        }else if(gender==='female'){
            await this.femaleRadioButton.click()
        }
        await this.submitButton.click()
    }
}
export default SingUpPage