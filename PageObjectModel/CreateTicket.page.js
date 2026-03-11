class CreateTicketPage{
    constructor(page){
      this.subjectTextField=page.locator("input#subject")
      this.TaskTypeDropDown=page.locator("//select[@name='tasktype']")
      this.priorityDropDown=page.locator("//select[@name='priority']")
      this.descriptionTextArea=page.locator("//textarea[@name='description']")
      this.sendButton=page.locator("//input[@name='send']")
    }

    async createTicket(){
        await this.subjectTextField.fill("logo font")
        await this.TaskTypeDropDown.selectOption({value:"ot1"})
        await this.priorityDropDown.selectOption({value:"non-urgent"})
        await this.descriptionTextArea.fill('font and color is not as per the requirement')
        await this.sendButton.click()
    }
}
export default CreateTicketPage