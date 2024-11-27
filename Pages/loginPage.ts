
export class LoginPage {
    private page
    private txt_username
    private txt_password
    private btn_login


    constructor(page) {
        this.page = page
        this.txt_username = page.locator('#loginusername')
        this.txt_password = page.locator('#loginpassword')
        this.btn_login = page.getByRole('button', { name: 'Log in' })

    }
    async loginAction(user: String,pass: String){
        await this.txt_username.fill(user)
        await this.txt_password.fill(pass)
        await this.btn_login.click()
    }
}