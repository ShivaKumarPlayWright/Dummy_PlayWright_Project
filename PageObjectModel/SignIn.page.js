class SignInPage{
    constructor(page){
        this.emailTextField=page.locator("#txtusername")
        this.passWordTextField=page.locator("#txtpassword")
        this.loginButton=page.getByRole("button",{name:"Login"})
    }

    async singIn(emailID,passWord) {
        await this.emailTextField.fill(emailID)
        await this.passWordTextField.fill(passWord)
        await this.loginButton.click()
    }
}
export default SignInPage