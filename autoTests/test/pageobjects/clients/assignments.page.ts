import { ChainablePromiseElement } from 'webdriverio';
import commonElements from '../../helper/commonElements';
import Page from '../Page';

class assignmentsPage {
    //allAssignment
    public get K2ID_AssigneeInput(): string {
        return '//input[@placeholder="K2 ID / Assignee"]'
    }
    getfilterDDbyLabel(label): string {
        return `//label[text()="${label}"]/..//select`
    }
    public get assigneeID(): string {
        return '(//td[@class="p2"]/a)'
    }
    getManaged(num): string {
        return `(//td[@class="ng-star-inserted"]/a)[${num}]`
    }
    getUnassignedManaged(num): string {
        return `(//tag/span[contains(text(),"Unassigned")])[${num}]`
    }
    public getAssignmentTypeLabel(num): string {
        return `(//td[@class="p2"][2])[${num}]`
    }
    public getStatusLabel(num): string {
        return `(//td[@class="p2"]//span[contains(@class,"mat-tooltip")])[${num}]`
    }
    public getAssignmentById(id): string {
        return `//td/a[text()=" K2-${id} "]`
    }
    //create Estimate
    public get assignmentsLabel(): string {
        return '//client-assignments-list//h1'
    }
    public get assignmentsTab(): string {
        return '//a[contains(@href,"/assignments")]'
    }
    public get createEstimateBtn(): string {
        return '//a[contains(@href,"/assignments/estimate")]'
    }
    public get newAssignmentBtn(): string {
        return '//a[contains(@href,"/assignments/new")]'
    }
    // public get startDateCalendar(): string {
    //     return '#startDate'
    // }
    // public get endDateCalendar(): string {
    //     return '#endDate'
    // }
    public get currencySelect(): string {
        return '//label[@for="currenciesId"]/../../..//k2-select'
    }
    public get backBtn(): string {
        return '//a[text()="Back "]'
    }
    public get nextBtn(): string {
        return '//button[@type="submit"]'
    }
    public get step3BNextBtn(): string {
        return '//fieldset[@id="party-selector"]/..//button[@type="submit"]'
    }
    public get choosePackageBtn(): string {
        return '(//button[text()=" Choose package "])[1]'
    }
    public get currentPackageBtn(): string {
        return '(//button[text()=" Current package "])[1]'
    }
    public get budgetInput(): string {
        return '//input[@type="number"]'
    }
    public get originLabel(): string {
        return '//dt[text()="Origin:"]/following-sibling::dd'
    }
    public get destinationLabel(): string {
        return '//dt[text()="Destination:"]/following-sibling::dd'
    }
    public get typeLabel(): string {
        return '//dt[text()="Type:"]/following-sibling::dd'
    }
    public get startDateLabel(): string {
        return '//dt[text()="Start date:"]/following-sibling::dd'
    }
    public get endDateLabel(): string {
        return '//dt[text()="End date:"]/following-sibling::dd'
    }
    public get personPayingLabel(): string {
        return '//span[text()="Who is paying for the accommodation?"]/..//following-sibling::dd'
    }
    public get printBtn(): string {
        return '//icon[@type="print"]'
    }
    getChBByLabel(label): string {
        return `//label[text()="${label}"]/..//input`
    }
    public get extraServiceLabel(): string {
        return '//h3[text()="Extra services"]/..//dt'
    }
    //NewAssignment 
    public get countrySanctionLabel(): string {
        return '//mat-dialog-content/p[contains(text(),"The country which has been chosen is sanctioned.")]'
    }
    public get dialogOkBtn():string{
        return '//span[text()=" OK "]/..'
    }
    public get dialogAmAproved():string{
        return '//span[text()=" AM Approved "]/..'
    }
    public get newEstimateBtn(): string {
        return '//a[contains(@href,"/assignments/new")]'
    }
    public get titleInput(): string {
        return '#title'
    }
    public get firstNameInput(): string {
        return '#firstName'
    }
    public get lastNameInput(): string {
        return '#lastName'
    }
    public get emailInput(): string {
        return '#email'
    }
    public get genderSelect(): string {
        return '//label[text()=" Gender "]/../../..//k2-select'
    }
    public get nationalitySelect(): string {
        return '//label[text()=" Nationality "]/../../..//k2-select'
    }
    public get homePhone(): string {
        return '#homeTelephone'
    }
    public get workPhone(): string {
        return '#workTelephone'
    }
    public get mobilePhone(): string {
        return '#mobileTelephone'
    }
    public get maritalStatusSelect(): string {
        return '//label[text()=" Marital status "]/../../..//k2-select'
    }
    public get dateOfBirthCalendar(): string {
        return '#dob'
    }
    public get subsidiarySelect(): string {
        return '//label[text()=" Subsidiary "]/../../..//k2-select'
    }
    public get invoiceAddressesDD(): string {
        return '#invoiceAddressesId'
    }
    public get countrySelectElement(): string {
        return '//mat-option'
    }
    public get partnerChb(): string {
        return '#party-partner'
    }
    public get purchaseOrderInput(): string {
        return '#purchaseOrder'
    }
    public get accountCodeInput(): string {
        return '#accountCode'
    }
    public get companyCodeInput(): string {
        return '#companyCode'
    }
    public get costCenterInput(): string {
        return '#costCenter'
    }
    public get clientEmployeeInput(): string {
        return '#clientEmployee'
    }
    public get clientAssignmentIdInput(): string {
        return '#clientAssignmentId'
    }
    public get clientSystemEmployeeIdInput(): string {
        return '#clientSystemEmployeeId'
    }
    public getPartyPersonsInput(personType): string {
        return `//label[text()="${personType}"]/..//input`
    }
    public get partnerGenderDD(): string {
        return '#partner-gender'
    }
    public get partnerNationalityDD(): string {
        return '#partner-nationality'
    }
    public get partnerMaritalDD(): string {
        return '#partner-marital'
    }
    public get partnerFirstNameInput(): string {
        return '#partner-first-name'
    }
    public get partnerLastNameInput(): string {
        return '#partner-last-name'
    }
    public get childrenGenderDD(): string {
        return '//h2[text()="Children"]/..//label[text()="Gender:"]/../select'
    }
    public get childrenNationalityDD(): string {
        return '//h2[text()="Children"]/..//label[text()="Nationality:"]/../select'
    }
    public get childrenFirstNameInput(): string {
        return '//h2[text()="Children"]/..//label[text()="First name:"]/../input'
    }
    public get childrenLastNameInput(): string {
        return '//h2[text()="Children"]/..//label[text()="Last name:"]/../input'
    }
    public get otherGenderDD(): string {
        return '//h2[text()="Other"]/..//label[text()="Gender:"]/../select'
    }
    public get otherNationalityDD(): string {
        return '//h2[text()="Other"]/..//label[text()="Nationality:"]/../select'
    }
    public get otherFirstNameInput(): string {
        return '//h2[text()="Other"]/..//label[text()="First name:"]/../input'
    }
    public get otherLastNameInput(): string {
        return '//h2[text()="Other"]/..//label[text()="Last name:"]/../input'
    }
    public get petsTypeDD(): string {
        return '//h2[text()="Pets"]/..//label[text()="Type:"]/../select'
    }
    public get budgetСurrencySelect(): string {
        return '//label[text()=" Budget "]/../../..//k2-select'
    }
    public get budgetAmountInput(): string {
        return '//label[text()=" Budget "]/../../..//input'
    }
    public get budgetPaymentFrequencyDD(): string {
        return '//label[text()=" Budget "]/../../..//select'
    }
    getStepLabel(numOfStep): string {
        return `//legend/strong[text()="Step ${numOfStep}:"]`
    }
    getConfimDetailsLabel(labelText): string {
        return `//dd[contains(text(),"${labelText}")]`
    }
    getOveralBudgetLabel(labelText): string {
        return `//dd/strong[contains(text(),"${labelText}")]`
    }
    getTimeLabel(labelText): string {
        return `//time[contains(text(),"${labelText}")]`
    }
    //allAssignment 
    public async clickAssignmentById(id): Promise<void> {
        await Page.click(this.getAssignmentById(id))
    }
    public async setFilterDDbyLabel(label, value): Promise<void> {
        await commonElements.setDropDownValue(value, this.getfilterDDbyLabel(label));
    }
    public async setIdAssigneeInputValue(value): Promise<void> {
        await Page.setValue(this.K2ID_AssigneeInput, value);
    }
    public async getAssigneeID(numOfAssignee): Promise<string> {
        return await Page.getElementText(this.assigneeID + `[${numOfAssignee}]`)
    }
    public async getManagedText(num): Promise<string> {
        return await Page.getElementText(this.getManaged(num));
    }
    public async getUnassignedManagedText(num): Promise<string> {
        return await Page.getElementText(this.getUnassignedManaged(num));
    }
    public async getAssignmentTypeText(num): Promise<string> {
        return await Page.getElementText(this.getAssignmentTypeLabel(num));
    }
    public async getStatusText(num): Promise<string> {
        return await Page.getElementText(this.getStatusLabel(num));
    }
    //createEstimate
    public async getAssignmentsLabelText(): Promise<string> {
        return await Page.getElementText(this.assignmentsLabel)
    }
    public async clickAssignmentsTab(): Promise<void> {
        await Page.click(this.assignmentsTab);
    }
    public async clickCreateEstimateBtn(): Promise<void> {
        await Page.click(this.createEstimateBtn);
    }
    public async clickNewAssignmentBtn(): Promise<void> {
        await Page.click(this.newAssignmentBtn);
    }
    public async clickBackBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.backBtn);
        await Page.click(this.backBtn);
    }
    public async clickNextBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.nextBtn);
        await Page.click(this.nextBtn);
    }
    public async clickStep3BNextBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.step3BNextBtn);
        await Page.click(this.step3BNextBtn);
    }
    public async clickChoosePackageBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.choosePackageBtn);
        await Page.click(this.choosePackageBtn);
    }
    public async isCurrentPackageBtnDisplayed(): Promise<boolean> {
        return await Page.isElementDisplayed(this.currentPackageBtn);
    }
    public async getOriginLabelText(): Promise<string> {
        return await Page.getElementText(this.originLabel);
    }
    public async getDestinationLabelText(): Promise<string> {
        return await Page.getElementText(this.destinationLabel);
    }
    public async getTypeLabelText(): Promise<string> {
        return await Page.getElementText(this.typeLabel);
    }
    public async getStartDateLabelText(): Promise<string> {
        return await Page.getElementText(this.startDateLabel);
    }
    public async getEndDateLabelText(): Promise<string> {
        return await Page.getElementText(this.endDateLabel);
    }
    public async getPersonPayingLabelText(): Promise<string> {
        return await Page.getElementText(this.personPayingLabel);
    }
    public async isPrintBtnDisplayed(): Promise<boolean> {
        return await Page.isElementDisplayed(this.printBtn);
    }
    public async setChbByLabel(label, chbState): Promise<void> {
        await Page.scrollElementIntoViewTop(this.getChBByLabel(label));
        await commonElements.setChb(this.getChBByLabel(label), chbState);
    }
    public async getExtraServicesLabelText(numOfService): Promise<string> {
        return await Page.getElementText(this.extraServiceLabel + `[${numOfService}]`)
    }
    //newAssignment 
    public async clickNewEstimateBtn(): Promise<void> {
        return await Page.click(this.newEstimateBtn);
    }
    public async getFirstNameValue(): Promise<string> {
        return await Page.getElementValue(this.firstNameInput);
    }
    public async getLastNameValue(): Promise<string> {
        return await Page.getElementValue(this.lastNameInput);
    }
    public async getEmailNameValue(): Promise<string> {
        return await Page.getElementValue(this.emailInput);
    }
    // public async setExistingAssignee(selectOption):Promise<void>{
    //     await browser.pause(2000)
    //     await Page.scrollElementIntoViewTop(commonElements.selectElement);       //temp
    //     await Page.click(commonElements.selectElement);
    //     await Page.click(commonElements.getSelectValue(selectOption))
    // }
    public async waitUntilStepLoadedByNum(numOfStep): Promise<void> {
        await Page.waitElementForDisplayed(this.getStepLabel(numOfStep));
    }
    public async getCountryQty(selectElement): Promise<number> {
        await Page.click(selectElement);
        var temp = await Page.getElementsQty(this.countrySelectElement);
        await browser.keys(["\uE00C"])
        return temp;
    }
    public async setAdditionalPeople(personType, numOfPersons): Promise<void> {
        await Page.setValue(this.getPartyPersonsInput(personType), numOfPersons)
    }
    public async setAssignmentDetails(): Promise<void> {
        await commonElements.setInputValue(await Page.randomNumber(500), this.purchaseOrderInput);
        await commonElements.setInputValue(await Page.randomNumber(500), this.accountCodeInput);
        await commonElements.setInputValue(await Page.randomNumber(500), this.companyCodeInput);
        await commonElements.setInputValue(await Page.randomNumber(500), this.costCenterInput);
        await commonElements.setInputValue(await Page.randomNumber(500), this.clientEmployeeInput);
        await commonElements.setInputValue(await Page.randomNumber(500), this.clientAssignmentIdInput);
        await commonElements.setInputValue(await Page.randomNumber(500), this.clientSystemEmployeeIdInput);
    }
    public async setParnterDetails(gender, nationality, maritalStatus, firstName, lastName): Promise<void> {
        await commonElements.setDropDownValue(gender, this.partnerGenderDD);
        await commonElements.setDropDownValue(nationality, this.partnerNationalityDD);
        await commonElements.setDropDownValue(maritalStatus, this.partnerMaritalDD);
        await commonElements.setInputValue(this.partnerFirstNameInput, firstName);
        await commonElements.setInputValue(this.partnerLastNameInput, lastName);
    }
    public async setChildrenDetails(gender, nationality, firstName, lastName): Promise<void> {
        await commonElements.setDropDownValue(gender, this.childrenGenderDD);
        await commonElements.setDropDownValue(nationality, this.childrenNationalityDD);
        await commonElements.setInputValue(this.childrenFirstNameInput, firstName);
        await commonElements.setInputValue(this.childrenLastNameInput, lastName);
    }
    public async setOtherDetails(gender, nationality, firstName, lastName): Promise<void> {
        await commonElements.setDropDownValue(gender, this.otherGenderDD);
        await commonElements.setDropDownValue(nationality, this.otherNationalityDD);
        await commonElements.setInputValue(this.otherFirstNameInput, firstName);
        await commonElements.setInputValue(this.otherLastNameInput, lastName);
    }
    public async setPetType(petType): Promise<void> {
        await commonElements.setDropDownValue(petType, this.petsTypeDD);
    }
    public async serviceQty(): Promise<number> {
        return await commonElements.dropDownElementQty() + await commonElements.chbElementQty();
    }
    public async setBudget(currency, amount, frequency): Promise<void> {
        await commonElements.setSelectValue(currency, this.budgetСurrencySelect);
        await Page.setValue(this.budgetAmountInput, amount);
        await commonElements.setDropDownValue(frequency, this.budgetPaymentFrequencyDD);
    }
    public async isConfrimDetailsLabelDisplayed(labelText): Promise<boolean> {
        return await Page.isElementDisplayed(this.getConfimDetailsLabel(labelText));
    }
    public async isTimeLabelDisplayed(labelText): Promise<boolean> {
        return await Page.isElementDisplayed(this.getTimeLabel(labelText));
    }
    public async isOverallBudgetDisplayed(labelText): Promise<boolean> {
        return await Page.isElementDisplayed(this.getOveralBudgetLabel(labelText));
    }
    public async isSanctionMsgDisplayed():Promise<boolean>{
        return await Page.isElementDisplayed(this.countrySanctionLabel);
    }
    public async waitSanctionMsgForNotDisplayed():Promise<void>{
        await Page.waitElementForNotDisplayed(this.countrySanctionLabel);
    }
    public async clickDialogOkBtn():Promise<void>{
        await Page.click(this.dialogOkBtn);
    }
    public async clickDialogAmAprovedBtn():Promise<void>{
        await Page.click(this.dialogAmAproved);
    }
}
export default new assignmentsPage();


