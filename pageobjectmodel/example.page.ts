class Example{
    usernameTF:string
    passwordTf:string
    SubmitBtn:any

    constructor(page){
        this.usernameTF=page.locator('input#username')
        this.passwordTf=page.locator('input#password')
        this.SubmitBtn=page.locator('//button[text()="Submit"]')
    }

        async login(username:string, password:string){

        await this.usernameTF.fill(username)
        await this.passwordTf.fill(password)
        await this.SubmitBtn.click()

    }
}

export default Example