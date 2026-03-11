class LoginPage{
    constructor(page){
        this.userNameTextField=page.locator("input#username")
        this.passWordTextField=page.locator("input#password")
        this.loginButton=page.getByRole("button",{name:"Submit"})
    }

    async login(userName,passWord) {
        await this.userNameTextField.fill(userName)
        await this.passWordTextField.fill(passWord)
        await this.loginButton.click()
    }
}
export default LoginPage