
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';

class tenancyManagementPage {
    public get addNewAccommodationBtn(): string {
        return '//button[text()="Add new accommodation"]'
    }
    public get agentDetailsInput(): string {
        return '#agentDetails'
    }
    public get landlordDetailsInput(): string {
        return '#landlordDetails'
    }
    public get existingAddressesDD(): string {
        return '#existingAddressesId'
    }
    public get accommodationSaveBtn(): string {
        return '//tenancy-management-contact-details//button'
    }
    public get accommodationEditBtn(): string {
        return '//tenancy-management-bookings-section//span[text()="edit"]'
    }
    public get accommodationRemoveBtn(): string {
        return '//tenancy-management-bookings-section//span[text()="remove"]'
    }
    public async setExistingAddressesDD(value): Promise<void> {
        await commonElements.setDropDownValue(value, this.existingAddressesDD);
    }
    public async clickAddNewAccommodationBtn(): Promise<void> {
        await Page.click(this.addNewAccommodationBtn);
    }
    public async setAgentDetails(value): Promise<void> {
        await Page.setValue(this.agentDetailsInput, value);
    }
    public async setlandlordDetails(value): Promise<void> {
        await Page.setValue(this.landlordDetailsInput, value);
    }
    public async getLandlordDetailsValue(): Promise<string> {
        return await Page.getElementValue(this.landlordDetailsInput);
    }
    public async getAgentDetailsValue(): Promise<string> {
        return await Page.getElementValue(this.agentDetailsInput);
    }
    public async clickAccommodationSaveBtn(): Promise<void> {
        await Page.click(this.accommodationSaveBtn);
    }
    public async clickAccommodationEditBtn(): Promise<void> {
        await Page.click(this.accommodationEditBtn);
    }
    public async clickAccommodationRemoveBtn(): Promise<void> {
        await Page.click(this.accommodationRemoveBtn);
    }
}
export default new tenancyManagementPage();

