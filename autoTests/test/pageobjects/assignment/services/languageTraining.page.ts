
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';
import initiatedServicesPage from '../initiatedServices.page';

class languageTrainingPage {
    public get nativeLanguageSelect(): string {
        return '//label[text()=" Native language "]/../../..//k2-select'
    }
    public get languageToAcquireSelect(): string {
        return '//label[text()=" Language to acquire "]/../../..//k2-select'
    }
    public get currentKnowledgeDD(): string {
        return '#currentKnowledge'
    }   public async waitLanguageTrainingFormForDisplayed(): Promise<void> {
        await Page.waitElementForDisplayed(this.nativeLanguageSelect);
    }
    public async getNativeLanguageValue(): Promise<string> {
        return await Page.getElementText(this.nativeLanguageSelect);
    }
    public async getLanguageToAcquireValue(): Promise<string> {
        return await Page.getElementText(this.languageToAcquireSelect);
    }
    public async getCurrentKnowledgeValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.currentKnowledgeDD);
    }
}
export default new languageTrainingPage();
