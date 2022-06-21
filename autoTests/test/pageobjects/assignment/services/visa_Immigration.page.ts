import commonElements from '../../../helper/commonElements';
import Page from '../../Page';

class visa_ImmigrationPage {
    public get issuingCountrySelect(): string {
        return '//label[text()=" Visa issuing country "]/ancestor::field-template//k2-select'
    }
    public get behalfPersonChb(): string {
        return '//label[text()=" On behalf of "]/ancestor::field-template//input'
    }
    public get sponsoringEntityInput(): string {
        return '//label[text()=" Sponsoring entity "]/ancestor::field-template//input'
    }
    public get plannedArrivalCalendar(): string {
        return '#plannedArrivalDate'
    }
    public get passportNumberInput(): string {
        return '#passportNumber'
    }
    public get passportIssuingCountryInput(): string {
        return '//label[text()=" Issuing country "]/ancestor::field-template//k2-select'
    }
    public get passportValidFromCalendar(): string {
        return '#passportValidFrom'
    }
    public get passportValidToCalendar(): string {
        return '#passportValidTo'
    }
    public get applicationSubmissionCalendar(): string {
        return '#applicationSubmissionDate'
    }
    public get trackingNumberInput(): string {
        return '#trackingNumber'
    }
    public get immigrationStatusTypeDD(): string {
        return '#immigrationStatusTypesId'
    }
    public get permitStartCalendar(): string {
        return '#permitStartDate'
    }
    public get permitEndCalendar(): string {
        return '#permitEndDate'
    }
    public get governmentIdInput(): string {
        return '#governmentId'
    }
    public get permitCopyReceivedChb(): string {
        return '//label[text()=" Permit copy received "]/ancestor::field-template//input'
    }
    public get removeRegistrationTypeFieldBtn(): string {
        return '(//label[text()=" Registration type(s) "]/ancestor::field-template//mat-icon[text()="remove_circle"])'
    }
    public get addRegistrationTypeFieldBtn(): string {
        return '( //label[text()=" Registration type(s) "]/ancestor::field-template//mat-icon[text()="add_circle"])'
    }
    public get additionalDocumentTypeInput(): string {
        return `(//label[text()=" Documents checklist "]/ancestor::field/following-sibling::field//input[@type="text"])`
    }
    public get additionalDocumentChb():string{
        return '((//label[text()=" Documents checklist "]/ancestor::field/following-sibling::field//input[@type="text"])/../..//input[@type="checkbox"])'
    }
    public get addDocumentInputBtn(): string {
        return '(//label[text()=" Documents checklist "]/ancestor::field/following-sibling::field//mat-icon[text()="add_circle"])'
    }
    public get applicationDetailsSaveBtn(): string {
        return '//visa-application-subsection//button[@type="submit"]'
    }
    public get registrationTypeInput(): string {
        return `(//label[text()=" Registration type(s) "]/ancestor::field-template//input[@type="text"][not(@data-mat-calendar)])`
    }
    public get registrationTypeCalendar(): string {
        return `(//label[text()=" Registration type(s) "]/ancestor::field-template//input[@data-mat-calendar])`
    }
    public get removeDocumentInputBtn(): string {
        return `(//label[text()=" Documents checklist "]/ancestor::field/following-sibling::field//mat-icon[text()="remove_circle"])`
    }
    public get visaPartyMemberSaveBtn(): string {
        return '//visa-party-member-subsection//button[@type="submit"]'
    }
    public getVisaPersonTab(personName): string {
        return `//simple-tabs//a[text()="${personName}"]`
    }
    public async setVisaApplicationDetails(issuingCountry, instructionType, behalfPersonState, sponsoringEntity): Promise<void> {
        await commonElements.setSelectValue(issuingCountry, this.issuingCountrySelect);
        await commonElements.setRbtByLabel(instructionType);
        await commonElements.setChb(this.behalfPersonChb, behalfPersonState);
        await commonElements.setInputValue(sponsoringEntity, this.sponsoringEntityInput);
    }
    public async setRegistrationType(num, value) {
        await Page.setValue(this.registrationTypeInput + `[${num}]`, value);
    }
    public async setRegistrationTypeDate(num, value) {
        await commonElements.setDateValue(this.registrationTypeCalendar + `[${num}]`, value);
    }
    public async setAdditionalDocumentType(num, value) {
        await commonElements.setInputValue(value, this.additionalDocumentTypeInput + `[${num}]`);
        await commonElements.setChb(this.additionalDocumentChb+ `[${num}]`,true);
    }
    public async getIssuingCountryValue(): Promise<string> {
        return await Page.getElementText(this.issuingCountrySelect);
    }
    public async getBehalfPersonChbState(): Promise<boolean> {
        return await Page.isElementSelected(this.behalfPersonChb);
    }
    public async getSponsoringEntityValue(): Promise<string> {
        return await Page.getElementValue(this.sponsoringEntityInput);
    }
    public async clickApplicationDetailsSaveBtn(): Promise<void> {
        await Page.click(this.applicationDetailsSaveBtn);
    }
    public async getPlannedArrivalDateValue(): Promise<string> {
        return await Page.getElementValue(this.plannedArrivalCalendar);
    }
    public async getPassportNumberValue(): Promise<string> {
        return await Page.getElementValue(this.passportNumberInput);
    }
    public async getValidFromValue(): Promise<string> {
        return await Page.getElementValue(this.passportValidFromCalendar);
    }
    public async getValidToValue(): Promise<string> {
        return await Page.getElementValue(this.passportValidToCalendar);
    }
    public async getPassportIssuingCountry(): Promise<string> {
        return await Page.getElementText(this.passportIssuingCountryInput);
    }
    public async getApplicationSubmissionValue(): Promise<string> {
        return await Page.getElementValue(this.applicationSubmissionCalendar);
    }
    public async getTrackingNumberValue(): Promise<string> {
        return await Page.getElementValue(this.trackingNumberInput);
    }
    public async getImmigrationStatusTypeDD(): Promise<string> {
        return await commonElements.getDropDownValueText(this.immigrationStatusTypeDD);
    }
    public async getPermitStartValue(): Promise<string> {
        return await Page.getElementValue(this.permitStartCalendar);
    }
    public async getPermitEndValue(): Promise<string> {
        return await Page.getElementValue(this.permitEndCalendar);
    }
    public async getGovernmentIdValue(): Promise<string> {
        return await Page.getElementValue(this.governmentIdInput);
    }
    public async getRegistrationTypeValueByNum(num): Promise<string> {
        return await Page.getElementValue(this.registrationTypeInput + `[${num}]`);
    }
    public async getRegistrationDateValueByNum(num): Promise<string> {
        return await Page.getElementValue(this.registrationTypeCalendar + `[${num}]`);
    }
    public async getAdditionalDocumentTypeByNum(num): Promise<string> {
        return await Page.getElementValue(this.additionalDocumentTypeInput + `[${num}]`);
    }
    public async clickAddRegistrationTypeFieldBtn(): Promise<void> {
        await Page.click(this.addRegistrationTypeFieldBtn)
    }
    public async clickAddDocumentInputBtn(): Promise<void> {
        await Page.click(this.addDocumentInputBtn)
    }
    public async clickRemoveDocumentInputBtn(num): Promise<void> {
        await Page.click(this.removeDocumentInputBtn + `[${num}]`)
    }
    public async clickRemoveRegistrationTypeFieldBtn(num): Promise<void> {
        await Page.click(this.removeRegistrationTypeFieldBtn + `[${num}]`)
    }
    public async getPermitCopyReceivedChbState(): Promise<boolean> {
        return await Page.isElementSelected(this.permitCopyReceivedChb);
    }
    public async clickVisaPartyMemberSaveBtn(): Promise<void> {
        await Page.click(this.visaPartyMemberSaveBtn)
    }
    public async getRemoveDocumentInputBtnQty(): Promise<number> {
        return await Page.getElementsQty(this.removeDocumentInputBtn);
    }
    public async getRemoveRegistrationTypeFieldBtnQty(): Promise<number> {
        return await Page.getElementsQty(this.removeRegistrationTypeFieldBtn);
    }
    public async getAdditionalDocumentTypeInputQty(): Promise<number> {
        return await Page.getElementsQty(this.additionalDocumentTypeInput);
    }
    public async getRegistrationTypeInputQty(): Promise<number> {
        return await Page.getElementsQty(this.registrationTypeInput);
    }
    public async getRegistrationTypeCalendartQty(): Promise<number> {
        return await Page.getElementsQty(this.registrationTypeCalendar);
    }
    public async clickVisaPersonTabByName(personName): Promise<void> {
        await Page.click(this.getVisaPersonTab(personName));
    }
}

export default new visa_ImmigrationPage();  