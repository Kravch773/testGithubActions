
import Page from '../Page';

class briefPage {

    public get briefLabel(): string {
        return '//client-brief//h1'
    }
    public get briefTab(): string {
        return '//a[contains(@href,"/brief")]'
    }
    getEditNoteBtnByLabel(label):string {
        return `//h2[text()="${label}"]/..//button`
    }
    getAddContentBtnByLabel(label):string{
        return `//h2[text()="${label}"]/../..//a[text()="Add content."]`
    }
    getNoteTextAreaByLabel(label):string{
        return `//h2[text()="${label}"]/../..//p`
    }
    public async clickBriefTab(): Promise<void> {
        await Page.click(this.briefTab);
    }
    public async getBriefLabelText(): Promise<string> {
        return await Page.getElementText(this.briefLabel);
    }
    public async clickEditNoteBtnByLabel(label):Promise<void>{
        await Page.click(this.getEditNoteBtnByLabel(label));
    }
    public async clickAddContentBtnByLabel(label):Promise<void>{
        await Page.click(this.getAddContentBtnByLabel(label));
    }
    public async getNoteTextByLabel(label):Promise<string>{
        return await Page.getElementText(this.getNoteTextAreaByLabel(label));
    }
    public async isAddContentBtnDisplayed(label):Promise<boolean>{
        return await Page.isElementDisplayed(this.getAddContentBtnByLabel(label));
    }

}
export default new briefPage();
