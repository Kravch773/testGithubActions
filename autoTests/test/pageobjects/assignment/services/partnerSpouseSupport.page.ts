
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';
import needAnalysisPage from '../needAnalysis.page';

class partnerSpouseSupportPage {
    public get serviceDescriptionInput(): string {
        return "#serviceDescription"
    }
    public get costInput(): string {
        return "#cost"
    }
    public async setServiceDescription(value): Promise<void> {
        await Page.setValue(this.serviceDescriptionInput, value);
    }
    public async setCost(value): Promise<void> {
        await Page.setValue(this.costInput, value);
    }
    public async getServiceDescriptionValue(): Promise<string> {
        return await Page.getElementValue(this.serviceDescriptionInput);
    }
    public async getCostValue(): Promise<string> {
        return await Page.getElementValue(this.costInput);
    }
}
export default new partnerSpouseSupportPage();

