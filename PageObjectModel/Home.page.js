class HomePage{
    constructor(page){
    
        this.createTicketLink=page.locator("//a[text()=' Create Ticket']")
        this.viewTicketLink=page.locator("//a[text()=' View Ticket']")
    }
}
export default HomePage