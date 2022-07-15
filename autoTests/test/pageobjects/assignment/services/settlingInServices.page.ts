
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';

class settlingInServicesPage {
    public get settlingInServicesToggle(): string {
        return '//settling-in-needs-analysis-section//a[@class="toggle pull-right"]'
    }
    public get settlingInServicesNaEditBtn(): string {
        return '//edit-needs-analysis-subsection-button//button'
    }
    public get settlementSpecificsAnswerLabel():string{
        return '//edit-needs-analysis-subsection-button/../../..//strong[contains(text(),"Specifics")]/../span'
    }
    public get otherSpecificsInput():string{    
        return '#otherSpecifics'
    }
    public async clickSettlingInServicesToggle():Promise<void>{
        await Page.click(this.settlingInServicesToggle);
    }
    public async clickSettlingInServicesNaEditBtn(): Promise<void> {
        await Page.click(this.settlingInServicesNaEditBtn);
    }
    public async getSettlementSpecificsAnswerText(): Promise<string> {
        return await Page.getElementText(this.settlementSpecificsAnswerLabel);
    }
    public async setOtherSpecificsValue(value): Promise<void> {
         await Page.setValue(this.otherSpecificsInput,value);
    }
    public async getOtherSpecificsValue(): Promise<string> {
        return await Page.getElementValue(this.otherSpecificsInput);
    }
}
export default new settlingInServicesPage();

