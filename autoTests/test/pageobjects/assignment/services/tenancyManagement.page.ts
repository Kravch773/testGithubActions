
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
    public get dialogWindAgentDetailsInput(): string {
        return '//mat-dialog-content//textarea[@id="agentDetails"]'
    }
    public get dialogWindLandlordDetailsInput(): string {
        return '//mat-dialog-content//textarea[@id="landlordDetails"]'
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
    public get inspectionCalendar(): string {
        return '//label[text()=" Inspection "]/ancestor::field-template//input'
    }
    public get reminderCalendar(): string {
        return '//label[text()=" Reminder date "]/ancestor::field-template//input'
    }
    public get firstInspectionCalendar(): string {
        return '//label[text()=" First inspection date "]/ancestor::field-template//input'
    }
    public get inspectionFrequencyDD(): string {
        return '//label[text()=" Inspection frequency "]/ancestor::field-template//select'
    }
    public get propertyInspectionSaveBtn(): string {
        return '//h3[text()="Property inspection"]/..//button'
    }
    public get propertyNotesSaveBtn(): string {
        return '//h3[text()="Property notes"]/..//button'
    }
    public get noAcomodationsLabel(): string {
        return '//div[text()="There are no accommodations."]'
    }
    public get propertyNotesInput(): string {
        return '#propertyNotes'
    }
    public async setExistingAddressesDD(value): Promise<void> {
        await commonElements.setDropDownValue(value, this.existingAddressesDD);
    }
    public async clickAddNewAccommodationBtn(): Promise<void> {
        await Page.click(this.addNewAccommodationBtn);
    }
    public async setDialogWindAgentDetails(value): Promise<void> {
        await Page.setValue(this.dialogWindAgentDetailsInput, value);
    }
    public async setDialogWindLandlordDetails(value): Promise<void> {
        await Page.setValue(this.dialogWindLandlordDetailsInput, value);
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
    public async setPropertyInspection(inspectionDate, reminderDate, firstInspectionDate, inspectionFrequency): Promise<void> {
        await commonElements.setDateValue(this.inspectionCalendar,inspectionDate);
        await commonElements.setDateValue(this.reminderCalendar,reminderDate);
        await commonElements.setDateValue(this.firstInspectionCalendar,firstInspectionDate);
        await commonElements.setDropDownValue(inspectionFrequency,this.inspectionFrequencyDD);
    }
    public async clickPropertyInspectionSaveBtn(): Promise<void> {
        await Page.click(this.propertyInspectionSaveBtn);
    }
    public async getInspectionDateValue(): Promise<string> {
        return await Page.getElementValue(this.inspectionCalendar);
    }
    public async getReminderDateValue(): Promise<string> {
        return await Page.getElementValue(this.reminderCalendar);
    }
    public async getFirstInspectionDateValue(): Promise<string> {
        return await Page.getElementValue(this.firstInspectionCalendar);
    }
    public async getInspectionFrequencyValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.inspectionFrequencyDD);
    }
    public async setPropertyNotes(value):Promise<void>{
        await Page.setValue(this.propertyNotesInput,value)
    }
    public async getPropertyNotesValue(): Promise<string> {
       return await Page.getElementValue(this.propertyNotesInput);
    }
    public async clickPropertyNotesSaveBtn(): Promise<void> {
        await Page.click(this.propertyNotesSaveBtn);
    }
    public async removeAccommodationrWithConfirm(confirmLabel): Promise<void> {
        await Page.scrollElementIntoView(this.accommodationRemoveBtn)
        await Page.click(this.accommodationRemoveBtn)
        await Page.waitElementForDisplayed(commonElements.getRemoveConfirmBtn(confirmLabel));
        await (await Page.getElement(commonElements.getRemoveConfirmBtn(confirmLabel))).click({ y: (-1) });
    }
    public async isNoAccommodationLabelExists(): Promise<boolean> {
        return await Page.isElementExisting(this.noAcomodationsLabel);
    }
}

export default new tenancyManagementPage();

