import Page from "../pageobjects/Page";

class commonElements {
    public get inputField(): string {
        return '(//input)[2]'
    }
    public get saveChangesBtn(): string {
        return '//button[@type="submit"]'
    }
    public get saveBtn(): string {
        return '//button[@type="button"]'
    }
    public get cancelBtn(): string {
        return '//a[text()="cancel"]'
    }
    public get removeBtn(): string {
        return '(//span[@class="remove"])'
    }
    public get dialogWindowSaveChangesBtn(): string {
        return '//mat-dialog-container//button[@type="submit"]'
    }
    public get dialogWindowCancelBtn(): string {
        return '//mat-dialog-container//a[text()="cancel"]'
    }
    public get inputErrorMsg(): string {
        return '//div[contains(text(),"This is a required field")]'
    }
    public get requiredFildErrorMsg(): string {
        return '//p[contains(text()," The form is invalid. Please correct the highlighted fields.")]'
    }
    public get removePersonBtn(): string {
        return '//a[@class="glyphicon glyphicon-remove-circle remove"]'
    }
    getChbByLabel(label): string {
        return `//span[contains(text(),"${label}")]/../input[@type="checkbox"]`
    }
    getradioBtnElement(label): string {
        return `//*[contains(text(),"${label}")]/..//input[@type="radio"]`
    }
    getPersonDropDownElement(value): string {
        return `//div[@class="main"]/span[contains(text(),"${value}")]`
    }
    getSelectValue(label): string {
        return `//mat-option/span[contains(text(),"${label}")]/..`
    }
    getPhoneCountry(countrySelect, label): string {
        return `${countrySelect}/..//li/span[text()="${label}"]`
    }
    public get chbElement(): string {
        return '//input[@type="checkbox"]'
    }
    public get btnClose(): string {
        return "//button[text()='Close']";
    }
    getPopupMsg(msgText): string {
        return `//p[contains(text(),"${msgText}")]`
    }
    public get closeCaledarBtn(): string {
        return '//span[contains(text(),"Close calendar")]'
    }
    public get calendar(): string {
        return '//mat-calendar'
    }
    public get dropDownElement(): string {
        return '//select'
    }
    public get selectElement(): string {
        return '//k2-select'
    }
    getRemoveConfirmBtn(text): string {
        return `//span[@class="hidden-xs"][text()="${text}"]`
    }
    public get cityInput(): string {
        return '(//locations-selector-control//input)'
    }
    public get originRegionsSelect(): string {
        return '//label[@for="originRegionsId"]/../../..//k2-select'
    }
    public get destinationRegionsSelect(): string {
        return '//label[@for="destinationRegionsId"]/../../..//k2-select'
    }
    public get cityOption(): string {
        return `//autocomplete-option//div`
    }
    public get assignmentTypeDD(): string {
        return '#assignmentType'
    }
    public get startDateCalendar(): string {
        return '#startDate'
    }
    public get endDateCalendar(): string {
        return '#endDate'
    }
    public get subsidiarySelect(): string {
        return '//label[text()=" Subsidiary "]/../../..//k2-select'
    }
    public get noteInput(): string {
        return '//textarea'
    }
    public get clientContactInput(): string {
        return '//label[text()=" Client contact "]/../../..//k2-select'
    }
    public get serviceLvlDD(): string {
        return '#serviceLevelTypesId'
    }
    public get addressLine1Input(): string {
        return '//input[@placeholder="Address line 1"]'
    }
    public get addressLine2Input(): string {
        return '//input[@placeholder="Address line 2"]'
    }
    public get addressLine3Input(): string {
        return '//input[@placeholder="Address line 3"]'
    }
    public get addressLine4Input(): string {
        return '//input[@placeholder="Address line 4"]'
    }
    public get cityAddressInput(): string {
        return '//input[@placeholder="City"]'
    }
    public get countyStateInput(): string {
        return '//input[@placeholder="County/state"]'
    }
    public get postalCodeInput(): string {
        return '//input[@placeholder="Postal code"]'
    }
    public get partnerNameInput(): string {
        return '//div//input[@placeholder="(optional)"]'
    }
    public get countrySelect(): string {
        return '//address-control/ancestor::field-template/../..//k2-select'
    }
    public getDialogWindowElement(element): string {
        return '//mat-dialog-container' + element
    }
    public async clickSaveBtn(): Promise<void> {
        // await Page.scrollElementIntoView(this.saveChangesBtn + "/../../../../../../../../..")
        await Page.scrollElementIntoViewTop(this.saveChangesBtn)
        await Page.click(this.saveChangesBtn);
    }
    public async clickSaveChangesBtn(): Promise<void> {
        await Page.scrollElementIntoView(this.saveBtn)
        await Page.click(this.saveBtn);
    }
    public async clickCancelBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.cancelBtn)
        // await Page.scrollElementIntoView(this.cancelBtn + "/../../../../../../../../../..")
        await Page.click(this.cancelBtn);
    }
    public async clickDialogWindowSaveBtn(): Promise<void> {
        await await Page.scrollElementIntoViewTop(this.dialogWindowSaveChangesBtn)
        await Page.click(this.dialogWindowSaveChangesBtn);
    }
    public async clickDialogWindowCancelBtn(): Promise<void> {
        await Page.click(this.dialogWindowCancelBtn);
    }
    public async getremoveBtnQty(): Promise<number> {
        return await Page.getElementsQty(this.removeBtn);
    }
    public async clickRemoveBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.removeBtn);
        await Page.click(this.removeBtn);
    }
    public async setInputValue(value, element = this.inputField): Promise<void> {
        await Page.scrollElementIntoViewTop(element);
        await Page.setValue(element, value);
    }
    public async getFieldValue(element): Promise<string> {
        await Page.waitElementForDisplayed(element);
        return await Page.getElementValue(element);
    }
    public async setSelectValue(selectOption, element = this.selectElement): Promise<void> {
        await Page.scrollElementIntoViewTop(element);
        await Page.click(element);
        await Page.scrollElementIntoViewTop(this.getSelectValue(selectOption));
        await Page.click(this.getSelectValue(selectOption));
    }
    public async setPhoneCountry(selectOption, element): Promise<void> {
        await Page.scrollElementIntoViewTop(element);
        await Page.click(element);
        await Page.scrollElementIntoViewTop(this.getPhoneCountry(element, selectOption));
        await Page.click(this.getPhoneCountry(element, selectOption));
    }
    public async getSelectFieldValue(element): Promise<string> {
        await Page.waitElementForDisplayed(element);
        return await Page.getElementText(element);
    }
    public async setDropDownValue(value, element = this.dropDownElement): Promise<void> {
        await Page.scrollElementIntoViewTop(element);
        await Page.clickDropdownItemByText(element, value);
    }
    public async setRbtByLabel(radioBtnLabel): Promise<void> {
        await Page.scrollElementIntoViewTop(this.getradioBtnElement(radioBtnLabel));
        await Page.click(this.getradioBtnElement(radioBtnLabel));
    }
    public async setRbt(radioBtn): Promise<void> {
        await Page.scrollElementIntoViewTop(radioBtn);
        await Page.click(radioBtn);
    }
    public async setChbByLabel(checkBoxLabel, сheckBoxState): Promise<void> {
        await Page.scrollElementIntoViewTop(this.getChbByLabel(checkBoxLabel));
        await Page.setCheckBoxElementState(this.getChbByLabel(checkBoxLabel), сheckBoxState);
    }
    public async setChb(checkBox, сheckBoxState): Promise<void> {
        await Page.scrollElementIntoViewTop(checkBox);
        await Page.setCheckBoxElementState(checkBox, сheckBoxState);
    }
    public async getChbState(checkBoxlabel): Promise<boolean> {
        await Page.scrollElementIntoViewTop(this.getChbByLabel(checkBoxlabel));
        return await Page.isElementSelected(this.getChbByLabel(checkBoxlabel));
    }
    public async setPersonInput(value, personInput) {
        await Page.scrollElementIntoView(personInput);
        await Page.setValue(personInput, value);
        await Page.click(this.getPersonDropDownElement(value))
    }
    public async isErrorInputMsgDispalyed(): Promise<boolean> {
        return await Page.isElementDisplayed(this.inputErrorMsg);
    }
    public async getErrorInputMsgQty(): Promise<number> {
        return await Page.getElementsQty(this.inputErrorMsg);
    }
    public async isErrorPopUpMsgDisplayed(): Promise<boolean> {
        return await Page.isElementDisplayed(this.requiredFildErrorMsg);
    }
    public async clearSearchInput(searchInputElem): Promise<void> {
        await Page.setValue(searchInputElem, " ");
        await browser.keys(['\uE003'])
    }
    public async clickCloseBtn(): Promise<void> {
        await Page.click(this.btnClose);
    }
    public async refreshPage(): Promise<void> {
        await browser.refresh();
        await this.clickCloseBtn();
    }
    public async isPopupMsgDisplayed(msgText): Promise<boolean> {
        return await Page.isElementDisplayed(this.getPopupMsg(msgText));
    }
    public async waitPopupMsgForNotDisplayed(msgText): Promise<void> {
        await Page.waitElementForNotDisplayed(this.getPopupMsg(msgText));
    }
    public async checkPopUpMsgAndForNotDisplayed(msgText): Promise<boolean> {
        var msgState = await Page.isElementDisplayed(this.getPopupMsg(msgText));
        await Page.waitElementForNotDisplayed(this.getPopupMsg(msgText));
        return msgState;
    }
    public async isRadioBtnSelected(label): Promise<boolean> {
        return await Page.isElementSelected(this.getradioBtnElement(label));
    }
    public async waitUntilRBSelected(element) {
        await browser.waitUntil(async () => {
            return await Page.isElementSelected(this.getradioBtnElement(element));
        });
    }
    public async setDateValue(calendarInput, value): Promise<void> {
        await Page.click(calendarInput);
        await this.clearDateField();
        await Page.setValue(calendarInput, value);
    }
    public async clearAndSetDateValue(calendarInput, value): Promise<void> {
        await this.clearDateField();
        await Page.setValue(calendarInput, value);
    }
    public async clearDateField(): Promise<void> {
        await Page.waitElementForDisplayed(this.calendar);
        await browser.keys(["\uE004"])
        // await Page.waitElementForDisplayed(this.closeCaledarBtn);
        await Page.scrollElementIntoViewTop(this.closeCaledarBtn);
        await Page.waitElementForDisplayed(this.closeCaledarBtn);
        await Page.click(this.closeCaledarBtn);
        await Page.waitElementForNotDisplayed(this.calendar);
        await browser.keys(["Control", "A"])
        await browser.keys(["\uE003"])
    }

    public async clickRemoveConfirmBtn(confirm) {
        await Page.scrollElementIntoView(this.removeBtn);
        await Page.click(this.getRemoveConfirmBtn(confirm));
    }
    public async chbElementQty(): Promise<number> {
        return await Page.getElementsQty(this.chbElement);
    }
    public async dropDownElementQty(): Promise<number> {
        return await Page.getElementsQty(this.dropDownElement);
    }
    public async setOriginRegion(originCountry, originCity): Promise<void> {
        await this.setSelectValue(originCountry, this.originRegionsSelect);
        await Page.setValue(this.cityInput + "[1]", originCity)
        await Page.click(this.cityOption)
    }
    public async setDestinationRegion(destinationCountry, destinationCity): Promise<void> {
        await this.setSelectValue(destinationCountry, this.destinationRegionsSelect);
        await Page.setValue(this.cityInput + "[2]", destinationCity)
        await Page.click(this.cityOption)
    }
    public async setAssignmentTypeDD(assignmentType): Promise<void> {
        await this.setDropDownValue(assignmentType, this.assignmentTypeDD);
    }
    public async setStartDate(date): Promise<void> {
        await this.setDateValue(this.startDateCalendar, date);
    }
    public async getStartDateValue(): Promise<string> {
        return await Page.getElementValue(this.startDateCalendar);
    }
    public async setEndDate(date): Promise<void> {
        await this.setDateValue(this.endDateCalendar, date);
    }
    public async getEndDateValue(): Promise<string> {
        return await Page.getElementValue(this.endDateCalendar);
    }
    public async isEndDateCalendarExisting(): Promise<boolean> {
        return await Page.isElementExisting(this.endDateCalendar);
    }
    public async isEndDateCalendarNotExisting(): Promise<boolean> {
        return await Page.isElementNotExisting(this.endDateCalendar);
    }
    public async setAssignmentSubsidiary(subsidiary): Promise<void> {
        return await this.setSelectValue(subsidiary, this.subsidiarySelect);
    }
    public async setNoteInput(value, noteInput = this.noteInput): Promise<void> {
        await Page.setValue(noteInput, value)
    }
    public async clearNoteInput(noteInput = this.noteInput): Promise<void> {
        //await Page.clearValue(this.noteInput) doesnt work
        await Page.setValue(noteInput, " ");
        await browser.keys(['\uE003'])
    }
    public async getDropDownValueText(dropDownElement = this.dropDownElement): Promise<string> {
        return await Page.getElementText(`//option[@value="${await Page.getElementValue(dropDownElement)}"]`);
    }
    public async getCurrentDate(isGitActionTest = false): Promise<string> {
        let today = new Date()
        if (today.getMonth() + 1 < 10) { var date = today.getDate() + ".0" + (today.getMonth() + 1) + "." + today.getFullYear(); }
        else { var date = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear(); }
        if (isGitActionTest == true) { this.createGitDateFormat(date); }
        return date;
    }
    public async getCurrentDateNo0Format(isGitActionTest = false): Promise<string> {
        let today = new Date()
        var date = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
        if (isGitActionTest == true) { this.createGitDateFormat(date); }
        return date;
    }
    public async addDays(date, days) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    public async getCurrentDatePlusDays(addDays, isGitActionTest = false): Promise<string> {
        let today = new Date()
        today = await this.addDays(today, addDays)
        if (today.getMonth() + 1 < 10) { var date = today.getDate() + ".0" + (today.getMonth() + 1) + "." + today.getFullYear(); }
        else { var date = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear(); }
        if (isGitActionTest == true) { this.createGitDateFormat(date); }
        return date;
    }
    public async getCurrentDatePlusDaysNo0Format(addDays, isGitActionTest = false): Promise<string> {
        let today = new Date()
        today = await this.addDays(today, addDays)
        var date = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
        if (isGitActionTest == true) { this.createGitDateFormat(date); }
        return date;
    }
    public async setAddress(address1, address2, address3, address4, city, state, postalCode, country): Promise<void> {
        await Page.setValue(this.addressLine1Input, address1);
        await Page.setValue(this.addressLine2Input, address2);
        await Page.setValue(this.addressLine3Input, address3);
        await Page.setValue(this.addressLine4Input, address4);
        await Page.setValue(this.cityAddressInput, city);
        await Page.setValue(this.countyStateInput, state);
        await Page.setValue(this.postalCodeInput, postalCode);
        await this.setSelectValue(country, this.countrySelect);
    }
    public async getAddressLine1Value(): Promise<string> {
        return await Page.getElementValue(this.addressLine1Input);
    }
    public async getAddressLine2Value(): Promise<string> {
        return await Page.getElementValue(this.addressLine2Input);
    }
    public async getAddressLine3Value(): Promise<string> {
        return await Page.getElementValue(this.addressLine3Input);
    }
    public async getAddressLine4Value(): Promise<string> {
        return await Page.getElementValue(this.addressLine4Input);
    }
    public async getCityValue(): Promise<string> {
        return await Page.getElementValue(this.cityAddressInput);
    }
    public async getCountyStateValue(): Promise<string> {
        return await Page.getElementValue(this.countyStateInput);
    }
    public async getPostalCodeValue(): Promise<string> {
        return await Page.getElementValue(this.postalCodeInput);
    }
    public async getCountryValue(): Promise<string> {
        return await Page.getElementText(this.countrySelect);
    }

    public async getRadioBtnState(radioBtnlabel): Promise<boolean> {
        return await Page.isElementSelected(this.getradioBtnElement(radioBtnlabel))
    }
    public async getPhoneValueWithoutHyphen(phone): Promise<string> {
        let newPhoneArr = phone.split("-");
        let newPhone = "";
        for (var i = 0; i < newPhoneArr.length; i++) { newPhone += newPhoneArr[i]; }
        return newPhone;
    }
    public async createGitDateFormat(date, fullYear = false): Promise<string> {
        let newDateArr = date.split(".");
        if (fullYear == true) {
            let newPhone = newDateArr[1] + "/" + newDateArr[0] + "/" + newDateArr[2];
            return newPhone;
        }
        if (fullYear == false) {
            let newPhone = newDateArr[1] + "/" + newDateArr[0] + "/" + (newDateArr[2].substring(2));
            return newPhone;
        }
    }
}
export default new commonElements();
