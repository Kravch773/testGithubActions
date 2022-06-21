import loginPage from "../pageobjects/login.page";

class passSignIn {
    public get isGithubTest(): boolean {
        return false;
    }
    public get enviromentName(): string {
        // return "rc"
        return "staging"
    }
    public get clientId():string{
        // return "2609"
        return "330"
    }
    public get assignmentId():string{
        // return "53899"
        return "31970"
    }
    public async signIn(environment = this.enviromentName): Promise<void> {
        await loginPage.openLoginURL(environment);
        // await browser.maximizeWindow();
        await loginPage.loginToAccount('ivan.kravchenko@k2corporatemobility.com', 'J4f!*$@*AG%$!18');
    }
}
export default new passSignIn();
