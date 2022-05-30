
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';

class tempAcomodationServicePage {
    public get vacateDateCalendar():string{
        return '#vacateDate'
    }
    public get rentCurrency():string{
        return '//label[text()=" Rent "]/../../..//k2-select'
    }
    public get rentCurrencyAmount():string{
        return '//label[text()=" Rent "]/../../..//input'
    }
    public get rentPaymentTerm():string{
        return '//label[text()=" Rent "]/../../..//select'
    } 
    public get accommodationNotesTextArea():string{
        return '#accommodationNotes'
    }
    public get negotiatedCalendar() :string{
        return '//label[text()=" Negotiated "]/../../..//input'
    }
    public get newEndDateCalendar():string{
        return '//label[text()=" New end date "]/../../..//input'
    }
    public get reasonInput():string{
        return '//label[text()=" Reason "]/../../..//input'
    }
    public get extensionConfirmedChb():string{
        return '//label[text()=" Extension confirmed? "]/../../..//input'
    }
    public get addExtensionBtn():string{
        return '//button[text()="Add extension"]'
    }
    public get extensionEditBtn():string{
        return '//h2[text()="Lease extensions"]/ancestor::k2-table//span[text()="edit"]'
    }
    public get extensionRemoveBtn():string{
        return '//h2[text()="Lease extensions"]/ancestor::k2-table//span[text()="remove"]'
    }
    public get noExtenstionLabel():string{
        return '//div[text()="There are no extensions."]'
    }
    public async setTempAcomodationDetails(startDate,endDate,vacateDue,currency,amount,paymentTerm,notes):Promise<void>{
        await commonElements.setDateValue(commonElements.startDateCalendar,startDate);
        await commonElements.setDateValue(commonElements.endDateCalendar,endDate);
        await commonElements.setDateValue(this.vacateDateCalendar,vacateDue); 
        await commonElements.setSelectValue(currency,this.rentCurrency);
        await commonElements.setInputValue(amount,this.rentCurrencyAmount);
        await commonElements.setDropDownValue(paymentTerm,this.rentPaymentTerm);
        await commonElements.setInputValue(notes,this.accommodationNotesTextArea);
    }
    public async getVacateDueValue():Promise<string>{
        return await Page.getElementValue(this.vacateDateCalendar);
    }
    public async getRentCurrencyValue():Promise<string>{
        return await Page.getElementText(this.rentCurrency);
    }
    public async getRentCurrencyAmountValue():Promise<string>{
        return await Page.getElementValue(this.rentCurrencyAmount);
    }
    public async getRentPaymentTermValue():Promise<string>{
        return await commonElements.getDropDownValueText(this.rentPaymentTerm);
    }
    public async getAccommodationNotesValue():Promise<string>{
        return await Page.getElementValue(this.accommodationNotesTextArea);
    }
    public async clickAddExtension():Promise<void>{
        await Page.scrollElementIntoViewTop(this.addExtensionBtn);
        await Page.click(this.addExtensionBtn)
    }
    public async setLeaseExtensions(negotiatedDate,newEndDate,currency,amount,paymentTerm,reason,extensionConfirm):Promise<void>{
        await commonElements.setDateValue(this.negotiatedCalendar,negotiatedDate);
        await commonElements.setDateValue(this.newEndDateCalendar,newEndDate);
        await commonElements.setSelectValue(currency,commonElements.getDialogWindowElement(this.rentCurrency));
        await commonElements.setInputValue(amount,commonElements.getDialogWindowElement(this.rentCurrencyAmount));
        await commonElements.setDropDownValue(paymentTerm,commonElements.getDialogWindowElement(this.rentPaymentTerm));
        await commonElements.setInputValue(reason,this.reasonInput);
        await commonElements.setChb(this.extensionConfirmedChb,extensionConfirm);
    }
    public async clickEditExtensionsBtn():Promise<void>{
        await Page.scrollElementIntoViewTop(this.extensionEditBtn);
        await Page.click(this.extensionEditBtn);
    }
    public async removeExtensionWithConfirm(confirm):Promise<void>{
        await Page.scrollElementIntoViewTop(this.extensionRemoveBtn);
        await Page.click(this.extensionRemoveBtn);
        await Page.click(commonElements.getRemoveConfirmBtn(confirm));
    }
    public async getNegotiatedDate():Promise<string>{
        return await Page.getElementValue(this.negotiatedCalendar);
    }
    public async getNewEndDate():Promise<string>{
        return await Page.getElementValue(this.newEndDateCalendar);
    }
    public async getExtensionReasonValue():Promise<string>{
        return await Page.getElementValue(this.reasonInput);
    }
    public async getExtensionConfirmed():Promise<boolean>{
        return await Page.isElementSelected(this.extensionConfirmedChb);
    }
    public async isLeaseExtensionsUpdMsgDisplayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("The Lease extensions record has been updated successfully");
    }
    public async isLeaseExtensionsSubmitMsgDisplayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("You have successfully submitted new details for this service management document");
    }
    public async isLeaseExtensionRemoveMsgDisplayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("Item deleted successfully");
    }
    public async isNoExtensionLabelExisting():Promise<boolean>{
        return await Page.isElementExisting(this.noExtenstionLabel,1000);
    }
    public async getDialogWindowRentCurrencyValue():Promise<string>{
        return await Page.getElementText(commonElements.getDialogWindowElement(this.rentCurrency));
    }
    public async getDialogWindowRentCurrencyAmountValue():Promise<string>{
        return await Page.getElementValue(commonElements.getDialogWindowElement(this.rentCurrencyAmount));
    }
    public async getDialogWindowRentPaymentTermValue():Promise<string>{
        return await commonElements.getDropDownValueText(commonElements.getDialogWindowElement(this.rentPaymentTerm));
    }
}

export default new tempAcomodationServicePage();
