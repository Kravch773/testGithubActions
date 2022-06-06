import commonElements from '../../helper/commonElements';
import Page from '../Page';


class setupPage {
    public get clienNameLabel(): string {
        return '//h1/a[contains(@href,"/staff/clients")]'
    }
    public get setupBtn(): string {
        return '//a[contains(@href,"/setup")]';
    }
    public get billingTab(): string {
        return '//a[text()=" 2. Billing "]'
    }
    public get billingLabel(): string {
        return '//client-billing/h1'
    }
    public get corpStructureLable(): string {
        return '//div[@class="head"]/div/h1'
    }
    public get corpStructureTab(): string {
        return '//a[text()=" 3. Corporate structure "]'
    }
    public get editbtn(): string {
        return '(//span[text()="edit"])'
    }
    getEditByLabel(label): string {
        return `//label[text()="${label}"]/../..//div/a[contains(text(),"edit")]`
        //return `//label[text()="${label}"]/../../div/a[text()="edit"]`
    }
    getEditTabelBtnByName(name): string {
        return `//table//td[text()="${name}"]/ancestor::tr//span[text()="edit"]`
    }
    public async clickSetupTab(): Promise<void> {
        await Page.click(this.setupBtn)
    }
    public async clickBillingTab() {
        await Page.click(this.billingTab)
    }
    public async clickCorporatestructureTab() {
        await Page.click(this.corpStructureTab)
    }
    getValueByLabel(label): string {
        return `//label[text()="${label}"]/../..//field-text-value`
    }
    getSelectValueByLabel(label): string {
        return `//label[text()="${label}"]/../../div/tag/span`
    }
    public get selectElement(): string {
        return '//k2-select'
    }
    public get dropDownElement(): string {
        return '//select'
    }
    public get checkBoxElement(): string {
        return '//input[@type="checkbox"]'
    }
    getPersonName(label): string {
        return `//label[text()="${label}"]/../../field-value//a`
    }
    getEmptyPersonText(label): string {
        return `//label[text()="${label}"]/../..//empty`
    }
    getPersonDropDownElement(value): string {
        return `//div[@class="main"]/span[contains(text(),"${value}")]`
    }
    public get addInvAddressBtn(): string {
        return '//btn[@link="invoicing-addresses"]'
    }
    public get invAddresQty(): string {
        return '//tr/td[@class="options"]'
    }
    public get subsidiaryQty(): string {
        return '//tr/td/inline-options'
    }
    getRemoveTabelElementBtnByName(name): string {
        return `//table//td[text()="${name}"]/ancestor::tr//span[text()="remove"]`
    }
    getFieldsetByLabel(label): string {
        return `//label[text()="${label}"]/../../../..`
    }
    getInvoiceAddressRemoveBtnByName(name): string {
        return `//td[contains(text(),"${name}")]/..//span[text()="remove"]`
    }
    public get addSubsidiaryBtn(): string {
        return '//btn/a[text()="Add subsidiary"]'
    }
    public getTabelElementByName(name): string {
        return `//table//td[text()="${name}"]`
    }
    public async getClientNameLabel(): Promise<string> {
        return await Page.getElementText(this.clienNameLabel)
    }
    public async getBillingLabelText(): Promise<string> {
        return Page.getElementText(this.billingLabel)
    }
    public async getFieldByLabelValue(label): Promise<string> {
        // return await Page.waitElementForDisplayed)
        return await Page.getElementText(this.getValueByLabel(label))
    }
    public async getEmployedCardText(label): Promise<string> {
        return await Page.getElementText(this.getPersonName(label))
    }
    public async getSelectTextByLabel(label): Promise<string> {
        return await Page.getElementText(this.getSelectValueByLabel(label))
    }
    public async clickEditBtnByLabel(label) {
        await Page.scrollElementIntoViewTop(this.getEditByLabel(label));
        await Page.click(this.getEditByLabel(label));
    }
    public async setPersonInput(value) {
        await Page.scrollElementIntoView(commonElements.inputField);
        await Page.setValue(commonElements.inputField, value);
        await Page.click(this.getPersonDropDownElement(value))
    }
    public async clearPersonInput() {
        await Page.click(commonElements.removePersonBtn)
    }
    public async getEmptyPersonTextByLabel(label) {
        return await Page.getElementText(this.getEmptyPersonText(label));
    }
    public async clickAddinvoicingAaddresses() {
        await Page.scrollElementIntoView(this.addInvAddressBtn);
        await Page.click(this.addInvAddressBtn);
    }
    public async addInvoiceAddresses(label, state) {
        await Page.setCheckBoxElementState(commonElements.getChbByLabel(label), state);
    }
    public async isInvoiceAddressByNameExisting(name): Promise<boolean> {
        return await Page.isElementExisting(this.getInvoiceAddressRemoveBtnByName(name),2000);
    }
    public async removeInvoiceAddres(name, confirm) {
        await Page.scrollElementIntoView(this.addInvAddressBtn);
        await Page.click(this.getInvoiceAddressRemoveBtnByName(name));
        await Page.click(commonElements.getRemoveConfirmBtn(confirm));
    }
    public async getBillingFieldLabelText(label): Promise<string> {
        return await Page.getElementText(this.getValueByLabel(label));
    }
    //corpStructure Tab
    public get subsidiaryNameInput(): string {
        return '#name'
    }
    public get subsidiaryParentDropDown(): string {
        return '#parentId'
    }
    public get defCurrencySelect(): string {
        return '//k2-select'
    }
    public get notesInput(): string {
        return '#notes'
    }
    public get blockInitChb(): string {
        return '#blockForInitiation'
    }
    public get setupPageSearchInput(): string {
        return '//text-filter/div[@class="search-input"]/input'
    }
    public getCorpStructureLabel(subsidiaryName, labelText): string {
        return `//table//td[text()="${subsidiaryName}"]/ancestor::tr//*[contains(text(),"${labelText}")]`
    }
    public async getCorpStructureText(): Promise<string> {
        return Page.getElementText(this.corpStructureLable)
    }
    public async clickAddSubsidiaryBtn(): Promise<void> {
        await Page.click(this.addSubsidiaryBtn);
    }
    public async setSubsidiary(nameValue, parentNameValue, defCurrencyValue, invAddresLabel, noteValue, blockinitState): Promise<void> {
        await commonElements.setInputValue(nameValue, this.subsidiaryNameInput);
        await commonElements.setDropDownValue(` ${parentNameValue} `, this.subsidiaryParentDropDown);
        await commonElements.setSelectValue(defCurrencyValue, this.defCurrencySelect);
        await commonElements.setRbtByLabel(invAddresLabel);
        await commonElements.setInputValue(noteValue, this.notesInput);
        await commonElements.setChb(this.blockInitChb, blockinitState)
    }
    public async getSubsidiaryQty(): Promise<number> {
        await Page.scrollElementIntoView(commonElements.removeBtn);
        return await Page.getElementsQty(this.subsidiaryQty);
    }
    public async isTabelElementExistingByName(name): Promise<boolean> {
        return await Page.isElementExisting(this.getTabelElementByName(name), 1000)
    }
    public async removeTabelElementByName(name, confirm): Promise<void> {
        await Page.click(this.getRemoveTabelElementBtnByName(name));
        await Page.click(commonElements.getRemoveConfirmBtn(confirm));
    }
    public async setSearchInput(value): Promise<void> {
        await Page.setValue(this.setupPageSearchInput, value);
    }
    public async clearSearchInput(): Promise<void> {
        await commonElements.clearSearchInput(this.setupPageSearchInput);
    }

    //Addresses Tab

    public get addAddressBtn(): string {
        return '//a[contains(@href,"setup/addresses/new")]/..'
    }
    public get clientNameInput(): string {
        return '#name'
    }
    public get FAOInput(): string {
        return '#salutation'
    }
    getAddressInput(numOfAddressInput): string {
        return `#address${numOfAddressInput}`
    }
    public get cityInput(): string {
        return '#city'
    }
    public get countyStateInput(): string {
        return '#county'
    }
    public get postalInput(): string {
        return '#postalCode'
    }
    public get countryDropDown(): string {
        return '//k2-select'
    }
    public get addressesLabel(): string {
        return '//client-addresses-list/div/h1'
    }
    public get addressesTab(): string {
        return '//a[text()=" 4. Addresses "]'
    }
    public get mapIcon(): string {
        return '//icon[@type="map-marker"]'
    }
    getAddressBlockByName(name): string {
        return `//formatted-address/span[text()="${name}"]`
    }
    getAddressLabelByName(name, labelText): string {
        return this.getAddressBlockByName(name) + `/../span[text()="${labelText}"]`
    }
    getAddressEditBtnByName(name): string {
        return this.getAddressBlockByName(name) + `/ancestor::address-block//span[text()="edit"]`
    }
    getAddressRemoveBtnByName(name): string {
        return this.getAddressBlockByName(name) + `/ancestor::address-block//span[text()="remove"]`
    }
    public async getAdressesTabLabelText(): Promise<string> {
        return await Page.getElementText(this.addressesLabel);
    }
    public async clickAddressesTab() {
        await Page.click(this.addressesTab)
    }
    public async clickAddAddressesBtn() {
        await Page.click(this.addAddressBtn)
    }
    public async setNewClientAddress(nameValue, FAOValue, addressValue, cityValue, countruStateValue, postalZipValue, countryValue): Promise<void> {
        await commonElements.setInputValue(nameValue, this.clientNameInput);
        await commonElements.setInputValue(FAOValue, this.FAOInput);
        await commonElements.setInputValue(addressValue[0], this.getAddressInput(1));
        await commonElements.setInputValue(addressValue[1], this.getAddressInput(2));
        await commonElements.setInputValue(addressValue[2], this.getAddressInput(3));
        await commonElements.setInputValue(addressValue[3], this.getAddressInput(4));
        await commonElements.setInputValue(cityValue, this.cityInput);
        await commonElements.setInputValue(countruStateValue, this.countyStateInput);
        await commonElements.setInputValue(postalZipValue, this.postalInput);
        await commonElements.setSelectValue(countryValue), this.countryDropDown;
    }
    public async isAddressExistingByName(name): Promise<boolean> {
        return await Page.isElementExisting(this.getAddressBlockByName(name), 1000);
    }
    public async getAdressesCount(): Promise<number> {
        await Page.waitUntilDisplayed(this.mapIcon);
        return await (await Page.getElements(this.mapIcon)).length;
    }
    public async isAddressLabelDisplayed(name, labelText): Promise<boolean> {
        return await Page.isElementDisplayed(this.getAddressLabelByName(name, labelText));
    }
    public async clickAddressEditByName(name): Promise<void> {
        await Page.click(this.getAddressEditBtnByName(name));
    }
    public async removeAddressByName(name, confirm): Promise<void> {
        await Page.click(this.getAddressRemoveBtnByName(name));
        await commonElements.clickRemoveConfirmBtn(confirm);
    }
    public async clickEditBtnByNum(numOfEdit): Promise<void> {
        return await Page.click(this.editbtn + `[${numOfEdit}]`)
    }
    public async clickEditTabelBtnByName(name): Promise<void> {
        await Page.click(this.getEditTabelBtnByName(name));
    }
    public async getErrorsMsgQty(): Promise<number> {
        return await Page.getElementsQty(commonElements.inputErrorMsg);
    }
    // public async waitUntilAddressUpdate(LabelForUpdate): Promise<void> {
    //     // await Page.waitUntilDisplayed(this.getAddressLabel(1) + `[text()="${LabelForUpdate}"]`)
    // }
    public async isCorpStructureLabelDisplayed(subsidiaryName, labelText): Promise<boolean> {
        return await Page.isElementDisplayed(this.getCorpStructureLabel(subsidiaryName, labelText));
    }
    // destanation Regions 

    public get destRegionLabel(): string {
        return '//client-regions/div/h1'
    }
    public get destRegionTab(): string {
        return '//a[text()=" 5. Destination regions "]'
    }
    public get saveChangesBtn(): string {
        return '//button[@type="button"][text()=" Save changes "]'
    }

    public async getDestRegionLabelText(): Promise<string> {
        return await Page.getElementText(this.destRegionLabel)
    }
    public async clickDestRegionTab(): Promise<void> {
        await Page.click(this.destRegionTab)
    }
    public async getCheckBoxQty(): Promise<number> {
        return await Page.getElementsQty(commonElements.chbElement)
    }
    public async getCheckBoxesElemets() {
        return await Page.getElements(await commonElements.chbElement)
    }
    public async clickSaveChangesBtn(): Promise<void> {
        await Page.scrollElementIntoView(this.saveChangesBtn)
        await Page.click(this.saveChangesBtn);
    }


    // origin Regions 

    public get originRegionLabel(): string {
        return '//client-regions/div/h1'
    }
    public get originRegionTab(): string {
        return '//a[text()=" 6. Origin regions "]'
    }
    public async getOriginRegionLabelText(): Promise<string> {
        return await Page.getElementText(this.originRegionLabel)
    }
    public async clickOriginRegionTab(): Promise<void> {
        await Page.click(this.originRegionTab)
    }

    // Supported services

    public get supServiceLabel(): string {
        return '//client-services//h1'
    }
    public get supServiceRegionTab(): string {
        return '//a[text()=" 7. Supported services "]'
    }
    public get toggleAllBtn(): string {
        return '//services-selector/div/a'
    }
    public async getSupServiceLabelText(): Promise<string> {
        return await Page.getElementText(this.supServiceLabel)
    }
    public async clickSupServiceTab(): Promise<void> {
        await Page.click(this.supServiceRegionTab)
    }
    public async clickToggleAllBtn(): Promise<void> {
        await Page.click(this.toggleAllBtn)
    }


    // HHG shipping allowances

    public get HHGAllowancesLabel(): string {
        return '//shipping-allowances-list//h1'
    }
    public get HHGAllowancesTab(): string {
        return '//a[text()=" 8. HHG shipping allowances "]'
    }
    public get addAllowancesBtn(): string {
        return '//btn/a[contains(@href,"/allowances/new")]'
    }
    public get allowanceLabelInput(): string {
        return '#allowanceLabel'
    }
    getShippingTypeDD(numOfField): string {
        return `(//option[text()=" Air "]/..)[${numOfField}]`
    }
    getWeightTypeDD(numOfField): string {
        return `(//option[text()=" Volume CuFt "]/..)[${numOfField}]`
    }
    getAlowanceNumberWeigthInput(numOfField): string {
        return `(//input[@type="number"])[${numOfField}]`
    }
    public get addAllowanceIcon(): string {
        return '//mat-icon[text()="add_circle"]'
    }
    getRemoveAllowanceIcon(numOfField): string {
        return `( //mat-icon[text()="remove_circle"])[${numOfField}]`
    }
    getAllowancesLabelByName(nameOfAllowance, labelText): string {
        return `(//td[text()="${nameOfAllowance}"])/../td[contains(text(),"${labelText}")]`
    }
    public async getHHGAllowancesLabelText(): Promise<string> {
        return await Page.getElementText(this.HHGAllowancesLabel)
    }
    public async clickHHGAllowancesTab(): Promise<void> {
        await Page.click(this.HHGAllowancesTab)
    }
    public async clickaAddAllowancesBtn(): Promise<void> {
        await Page.click(this.addAllowancesBtn);
    }
    public async setAllowance(numOfAllowance, shipingType, weightType, numOfWeight): Promise<void> {
        await commonElements.setDropDownValue(shipingType, this.getShippingTypeDD(numOfAllowance));
        await commonElements.setDropDownValue(weightType, this.getWeightTypeDD(numOfAllowance));
        await commonElements.setInputValue(numOfWeight, this.getAlowanceNumberWeigthInput(numOfAllowance));
    }
    public async getEditBtnQty(): Promise<number> {
        return await Page.getElementsQty(this.editbtn);
    }
    public async isAllowancesLabelTextDisplayed(label, labelText): Promise<boolean> {
        return await Page.isElementDisplayed(this.getAllowancesLabelByName(label, labelText))
    }
    public async clickAddAllowanceIcon(): Promise<void> {
        await Page.click(this.addAllowanceIcon);
    }
    public async clickRemoveAllowanceIcon(numOfIcon): Promise<void> {
        await Page.click(this.getRemoveAllowanceIcon(numOfIcon));
    }
    // Custom fields

    public get customFieldsLabel(): string {
        return '//client-custom-fields-list/h1'
    }
    public get customFieldsTab(): string {
        return '//a[text()=" 9. Custom fields "]'
    }
    getCustoFieldSettingByLabel(label): string {
        return `//td[text()="${label}"]/..//field-text-value`
    }
    getCustomFieldEditBtnByLabel(label): string {
        return `//td[text()="${label}"]/..//span[text()="edit"]`
    }
    public get addCustomFieldBtn(): string {
        return '//a[contains(@href,"/custom-fields/new")]'
    }
    public get custFieldNameInput(): string {
        return '//input[@id="name"]'
    }
    public get dataTypeDD(): string {
        return '#datatype'
    }
    public get requiredFieldChb(): string {
        return '#required'
    }
    getCustomFieldEditByLabel(label): string {
        return `//td[text()="${label}"]/..//span[text()="edit"]`
    }
    getRemoveBtnByLabel(label): string {
        return `//td[contains(text(),"${label}")]/..//span[text()="remove"]`
    }
    public async geCustomFieldsLabelText(): Promise<string> {
        return await Page.getElementText(this.customFieldsLabel);
    }
    public async clickCustomFieldsTab(): Promise<void> {
        await Page.click(this.customFieldsTab);
    }
    public async isFieldSettingLabelUpdated(label, value): Promise<boolean> {
        return await Page.isElementDisplayed(this.getCustoFieldSettingByLabel(label) + `[text()="${value}"]`);
    }
    public async clickDefFieldEditBtnByLabel(label): Promise<void> {
        return await Page.click(this.getCustomFieldEditBtnByLabel(label));
    }
    public async clickAddCustomFieldBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.addCustomFieldBtn);
        await Page.click(this.addCustomFieldBtn);
    }
    public async clickCustomFieldEditBtnByLabel(label): Promise<void> {
        await Page.click(this.getCustomFieldEditByLabel(label));
    }
    public async removeCustomFieldByName(label, confirm): Promise<void> {
        await Page.scrollElementIntoView(this.getRemoveBtnByLabel(label));
        await Page.click(this.getRemoveBtnByLabel(label));
        await Page.click(commonElements.getRemoveConfirmBtn(confirm));
    }
    //HR Admin users
    public get hrUsersLabel(): string {
        return "//client-admins-list//h1"
    }
    public get hRUsersTab(): string {
        return '//a[text()=" 11. HR admin users "]'
    }
    public get addHRBtn(): string {
        return '//btn/a[contains(@href,"/admins/new")]'
    }
    public get hrFirstNameInput(): string {
        return '#firstName'
    }
    public get hrLastNameInput(): string {
        return '#lastName'
    }
    public get hrJobTitleInput(): string {
        return '#jobTitle'
    }
    public get hrResponsibilityInput(): string {
        return '#responsibility'
    }
    public get hrEmailInput(): string {
        return '#email'
    }
    public get hrTelephoneInput(): string {
        return '#telephone'
    }
    public get hrMobileInput(): string {
        return '#mobile'
    }
    public get hrAccessTypeDD(): string {
        return '#accessType'
    }
    getHRTabelElmentByName(name): string {
        return `//a[contains(text(),"${name}")]`
    }
    getHREditBtnByLabel(name): string {
        return this.getHRTabelElmentByName(name) + `/../..//a[text()=" edit "]`
    }
    getHRRemoveBtnByLabel(name): string {
        return this.getHRTabelElmentByName(name) + `/../..//span[text()="remove"]`
    }
    getHRFieldByLabel(label, value): string {
        return `//label[text()="${label}"]/../div[text()=" ${value} "]`
    }
    getHRFieldValueByLabel(label): string {
        return `//label[text()="${label}"]/../div`
    }
    public async getHRUsersLabelText(): Promise<string> {
        return await Page.getElementText(this.hrUsersLabel)
    }
    public async clickHRUsersTab(): Promise<void> {
        return await Page.click(this.hRUsersTab)
    }
    public async clickAddHRBtn(): Promise<void> {
        await Page.click(this.addHRBtn);
    }
    public async setHRAdminUser(firstName, lastName, jobTitle, responsibility, email, telephone, mobile, entity): Promise<void> {
        await commonElements.setInputValue(firstName, this.hrFirstNameInput);
        await commonElements.setInputValue(lastName, this.hrLastNameInput,);
        await commonElements.setInputValue(jobTitle, this.hrJobTitleInput);
        await commonElements.setInputValue(responsibility, this.hrResponsibilityInput);
        await commonElements.setInputValue(email, this.hrEmailInput);
        await commonElements.setInputValue(telephone, this.hrTelephoneInput);
        await commonElements.setInputValue(mobile, this.hrMobileInput);
        await commonElements.setSelectValue(entity, this.selectElement);
    }
    public async clickHREditByName(label): Promise<void> {
        await Page.click(this.getHREditBtnByLabel(label));
    }
    public async isHRTabelElementExisting(name): Promise<boolean> {
        return await Page.isElementExisting(this.getHRTabelElmentByName(name), 4000);
    }
    public async removeHrUserByName(name, confirm): Promise<void> {
        await Page.click(this.getHRRemoveBtnByLabel(name));
        await commonElements.clickRemoveConfirmBtn(confirm)
    }
    public async isHRFieldValueUpdated(label, value): Promise<boolean> {
        await Page.waitElementForDisplayed(this.getHRFieldByLabel(label, value));
        return await Page.isElementDisplayed(this.getHRFieldByLabel(label, value));
    }
    public async getHRFieldValueTextByLabel(label): Promise<string> {
        return await Page.getElementText(this.getHRFieldValueByLabel(label));
    }
}
export default new setupPage();


