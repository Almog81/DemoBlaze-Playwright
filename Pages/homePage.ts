
export class HomePage {
    private page
    private url
    private lnk_login
    private nameOfUser


    constructor(page) {
        this.page = page
        this.url = 'https://www.demoblaze.com/'
        this.lnk_login = page.getByRole('link', { name: 'Log in' })
        this.nameOfUser = page.locator('#nameofuser')
    }
    async naviToHome(){
        await this.page.goto(this.url)
    }
    async naviToLogin(){
        this.lnk_login.click()
    }

}