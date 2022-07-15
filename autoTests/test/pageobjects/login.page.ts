import { ChainablePromiseElement } from 'webdriverio';
import Page from './Page';

class LoginPage {

    public get inputUsername(): string {
        return '#email';
    }
    public get inputPassword(): string {
        return '#password';
    }
    public get btnSubmit(): string {
        return 'button[type="submit"]';
    }
    public get btnClose(): string {
        return "//button[text()='Close']";
    }

    public async loginToAccount(username: string, password: string): Promise<void> {
        await Page.setValue
        await Page.setValue(this.inputUsername, username);
        await Page.click(this.btnSubmit);
        // await Page.click('//button[text()=" Use my local account "]')
        await Page.setValue(this.inputPassword, password);
        await Page.click(this.btnSubmit);
        await Page.waitElementForDisplayed("//dashboard-top-menu-nav");
         await Page.click("//dashboard//figure");
        // await Page.click(this.btnClose);
    }
    public async openLoginURL(enviromentName) {
        await Page.openURL(enviromentName,'/auth/login');
        await browser.maximizeWindow();
    }

}
export default new LoginPage();
