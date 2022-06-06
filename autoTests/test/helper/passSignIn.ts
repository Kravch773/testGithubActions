import loginPage from "../pageobjects/login.page";

class passSignIn {
    public get isGithubTest():boolean{
        return false;
    }
    public async signIn(): Promise<void> {
        await loginPage.openLoginURL();
        // await browser.maximizeWindow();
        await loginPage.loginToAccount('ivan.kravchenko@k2corporatemobility.com', 'J4f!*$@*AG%$!18');
    }
    public async rcSignIn(): Promise<void> {
        await loginPage.openRcLoginURL();
        await loginPage.loginToAccount('ivan.kravchenko@k2corporatemobility.com', 'J4f!*$@*AG%$!18');
    }
}
export default new passSignIn();
