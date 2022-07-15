
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';

class orientationPage {
    public get orientationNAToggle(): string {
        return '//orientation-needs-analysis-section//a[@class="toggle pull-right"]'
    }
    public get requesteDateAnswerLabel(): string {
        return `//strong[contains(text(),"Requested dates")]/../..//div[2]`
    }
    public get preferredLocationsAnswerLabel(): string {
        return `//strong[contains(text(),"Assignee would like to visit:")]/../../p`
    }
    public get orientationNAAddressLabel():string{
        return '//strong[contains(text(),"Address to be collected from:")]/../..//address-block'
    }
    public get orientationPreferredLocationsInput():string{
        return '#details'
    }
    public async getRequesteDateAnswerLabelText(): Promise<string> {
        return await commonElements.createStandartDateForm( await Page.getElementText(this.requesteDateAnswerLabel));
    }
    public async getPreferredlocationsAnswerLabelText(): Promise<string> {
        return await Page.getElementText(this.preferredLocationsAnswerLabel);
    }
    public async orientationNAAddressLabelText(): Promise<string> {
        return await Page.getElementText(this.orientationNAAddressLabel);
    }
    public async clickOrientationNAToggle(): Promise<void> {
        await Page.click(this.orientationNAToggle);
    }
    public async setOrientationPreferredLocations(value): Promise<void> {
        await Page.setValue(this.orientationPreferredLocationsInput, value);
    }
    public async getOrientationPreferredLocationsValue(): Promise<string> {
        return await Page.getElementValue(this.orientationPreferredLocationsInput);
    }
}

export default new orientationPage();
