
import commonElements from '../../helper/commonElements';
import Page from '../Page';

class assigneePage {

    //1. Overview 
    public get overviewabel(): string {
        return '//ng-component/h1'
    }
    public get assigneeTab(): string {
        return '//li/a[contains(@href,"/assignee")]'
    }
    public get titleInput(): string {
        return '#title'
    }
    public get firstnameInput(): string {
        return '#firstName'
    }
    public get lastnameInput(): string {
        return '#lastName'
    }
    public get jobTitleInput(): string {
        return '#jobTitle'
    }
    public get dobInput(): string {
        return '#dob'
    }
    public get emailInput(): string {
        return '#email'
    }
    public get mobileTelephoneInput(): string {
        return '#mobileTelephone'
    }
    public get homeTelephoneInput(): string {
        return '#homeTelephone'
    }
    public get workTelephoneInput(): string {
        return '#workTelephone'
    }
    public get userNotesInput(): string {
        return '#userNotes'
    }
    public get languageLvlDD(): string {
        return '//option[text()=" Written "]/..'
    }
    public get languageSpokenDD(): string {
        return '//option[text()=" English "]/..'
    }
    public getEditBtnByLabel(label): string {
        return `//label[contains(text(),"${label}")]/../..//a[text()="edit"]`
    }
    public getFieldValueByLabel(label, value): string {
        return `//label[text()=" ${label} "]/../..//field-text-value[contains(text(),"${value}")]`
    }
    public getNameFieldValue(firstName, lastname): string {
        return `//label[text()="Name"]/../div[contains(text(),"${firstName} ${lastname}")]`
    }
    //2.Family  
    public get addPersonBtn(): string {
        return '//a[contains(@href,"assignee/family/new")]'
    }
    public get personTypeDD(): string {
        return '#partyType'
    }
    public get familyTab(): string {
        return '//a[contains(@href,"assignee/family")]'
    }
    public get assigneeLabel(): string {
        return '//ng-component/headline/h1'
    }
    public get personGenderDD(): string {
        return '#gender'
    }
    public get maritalStatusDD(): string {
        return '#maritalStatus'
    }
    public get personNotesInput(): string {
        return '#notes'
    }
    public getFamilyEditBtnByName(firstName, lastName): string {
        return `//h3[text()=" ${firstName} ${lastName} "]/../..//a[text()="edit"]`
    }
    public getFamilyRemoveBtnByName(firstName, lastName): string {
        return `//h3[text()=" ${firstName} ${lastName} "]/../..//a[text()="remove"]`
    }
    //3. Pets 
    public get petsTab(): string {
        return '//a[contains(@href,"assignee/pets")]'
    }
    public get addPetBtn(): string {
        return '//a[contains(@href,"assignee/pets/new")]'
    }
    public get petNameInput(): string {
        return '#petName'
    }
    public get petBreedInput(): string {
        return '#breed'
    }
    public get petAgeInput(): string {
        return '#age'
    }
    public get petWeightInput(): string {
        return '#weight'
    }
    public getPetEditBtnByName(petName): string {
        return `//h3[text()=" ${petName} "]/../..//a[text()="edit"]`
    }
    public getPetRemoveBtnByName(petName): string {
        return `//h3[text()=" ${petName} "]/../..//a[text()="remove"]`
    }
    //4.Addresses
    public get addressesTab(): string {
        return '//a[contains(@href,"assignee/addresses")]'
    }
    public get addAddressBtn(): string {
        return '//a[contains(@href,"assignee/addresses/new")]'
    }
    public get cityInput(): string {
        return '#city'
    }
    public get stateCountryInput(): string {
        return '#county'
    }
    public get postalCodeInput(): string {
        return '#postal_code'
    }
    public get addressNameInput(): string {
        return '#name'
    }
    public getAddressesInput(num): string {
        return `#address${num}`
    }
    public getAddressEditBtn(AddressName): string {
        return `//span[text()="${AddressName}"]/../../..//span[text()="edit"]`
    }
    //5.Documents 
    public get documentsTab(): string {
        return '//a[contains(@href,"/assignee/documents")]'
    }
    // public get addDocumentsBtn(): string {
    //     return '//a[contains(@href,"/assignee/documents/new")]'
    // }
    public get documentTabLabel(): string {
        return '//assignee-documents-list//h1'
    }
    public get documentsQty(): string {
        return '//document-link'
    }
    getRemoveDocBtnByName(label): string {
        return `//a[contains(text(),"${label}")]/../../../..//span[text()="remove"]`
    }

    //1. Overview 
    public async getOverviewLabelText(): Promise<string> {
        return await Page.getElementText(this.overviewabel);
    }
    public async clickAssigneeTab(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.assigneeTab);
        await Page.click(this.assigneeTab);
    }
    public async clickEditBtnByLabel(label): Promise<void> {
        await Page.scrollElementIntoViewTop(this.getEditBtnByLabel(label))
        await Page.click(this.getEditBtnByLabel(label));
    }
    public async getOverviewFieldValueByLabel(label):Promise<string>{
        return await Page.getElementText(this.getFieldValueByLabel(label,""))
    } 
    public async isFieldValueUpdatedByLabel(label, value): Promise<boolean> {
        return await Page.isElementDisplayed(this.getFieldValueByLabel(label, value));
    }
    public async isNameValueUpdatedByLabel(firstName, lastname): Promise<boolean> {
        return await Page.isElementDisplayed(this.getNameFieldValue(firstName, lastname));
    }

    //2.Family 
    public async clickFamilyTab(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.familyTab);
        await Page.click(this.familyTab);
    }
    public async getAssigneeLabelText(): Promise<string> {
        return await Page.getElementText(this.assigneeLabel);
    }
    public async clickAddPersonBtn(): Promise<void> {
        return await Page.click(this.addPersonBtn);
    }
    public async setAdditionalMember(type, title, firstName, lastName, gender, nationality, dob, marital, email, mobile, workP, homeP, userNote): Promise<void> {
        await commonElements.setDropDownValue(type, this.personTypeDD);
        await commonElements.setInputValue(title, this.titleInput);
        await commonElements.setInputValue(firstName, this.firstnameInput);
        await commonElements.setInputValue(lastName, this.lastnameInput);
        await commonElements.setDropDownValue(gender, this.personGenderDD);
        await commonElements.setSelectValue(nationality);
        await commonElements.setDateValue(this.dobInput, dob);
        await commonElements.setDropDownValue(marital, this.maritalStatusDD);
        await commonElements.setInputValue(email, this.emailInput);
        await commonElements.setInputValue(mobile, this.mobileTelephoneInput);
        await commonElements.setInputValue(homeP, this.homeTelephoneInput);
        await commonElements.setInputValue(workP, this.workTelephoneInput);
        await commonElements.setInputValue(userNote, this.personNotesInput);
    }
    public async setChildMember(type, title, firstName, lastName, gender, nationality, dob, userNote): Promise<void> {
        await commonElements.setDropDownValue(type, this.personTypeDD);
        await commonElements.setInputValue(title, this.titleInput);
        await commonElements.setInputValue(firstName, this.firstnameInput);
        await commonElements.setInputValue(lastName, this.lastnameInput);
        await commonElements.setDropDownValue(gender, this.personGenderDD);
        await commonElements.setSelectValue(nationality);
        await commonElements.setDateValue(this.dobInput, dob);
        await commonElements.setInputValue(userNote, this.personNotesInput);
    }
    public async clickFamilyEditBtnByName(firstName, lastName): Promise<void> {
        await Page.click(this.getFamilyEditBtnByName(firstName, lastName));
    }
    public async clickFamilyRemoveBtnByName(firstName, lastName): Promise<void> {
        await Page.click(this.getFamilyRemoveBtnByName(firstName, lastName));
    }
    public async getPersonTypeDDValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.personTypeDD);
    }
    public async getTitleInputValue(): Promise<string> {
        return await Page.getElementValue(this.titleInput);
    }
    public async getFirstNameInputValue(): Promise<string> {
        return await Page.getElementValue(this.firstnameInput);
    }
    public async getLastNameInputValue(): Promise<string> {
        return await Page.getElementValue(this.lastnameInput);
    }
    public async getGenderDDValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.personGenderDD);
    }
    public async getNationalityInputValue(): Promise<string> {
        return await Page.getElementText(commonElements.selectElement + "//span[text()]");
    }
    public async getDobInputValue(): Promise<string> {
        return await Page.getElementValue(this.dobInput);
    }
    public async getMaritalDDValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.maritalStatusDD);
    }
    public async getEmailInputValue(): Promise<string> {
        return await Page.getElementValue(this.emailInput);
    }
    public async getMobileInputValue(): Promise<string> {
        return await Page.getElementValue(this.mobileTelephoneInput);
    }
    public async getWorkPInputValue(): Promise<string> {
        return await Page.getElementValue(this.workTelephoneInput);
    }
    public async getHomePInputValue(): Promise<string> {
        return await Page.getElementValue(this.homeTelephoneInput);
    }
    public async getNoteInputValue(): Promise<string> {
        return await Page.getElementValue(this.personNotesInput);
    }
    //3.Pets
    public async clickPetsTab(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.petsTab);
        await Page.click(this.petsTab);
    }
    public async clickAddPetsBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.addPetBtn);
        await Page.click(this.addPetBtn);
    }
    public async setPet(name, type, breed, age, weight, notes): Promise<void> {
        await commonElements.setInputValue(name, this.petNameInput);
        await commonElements.setSelectValue(type);
        await commonElements.setInputValue(breed, this.petBreedInput);
        await commonElements.setInputValue(age, this.petAgeInput);
        await commonElements.setInputValue(weight, this.petWeightInput);
        await commonElements.setInputValue(notes, this.personNotesInput)
    }
    public async clickPetEditBtnByName(petName): Promise<void> {
        await Page.click(this.getPetEditBtnByName(petName));
    }
    public async clickPetRemoveBtnByName(petName): Promise<void> {
        await Page.click(this.getPetRemoveBtnByName(petName));
    }
    public async getPetNameValue(): Promise<string> {
        return await Page.getElementValue(this.petNameInput);
    }
    public async getPetTypeValue(): Promise<string> {
        return await Page.getElementText(commonElements.selectElement + "//span[text()]");
    }
    public async getBreedValue(): Promise<string> {
        return await Page.getElementValue(this.petBreedInput);
    }
    public async getAgeValue(): Promise<string> {
        return await Page.getElementValue(this.petAgeInput);
    }
    public async getWeightValue(): Promise<string> {
        return await Page.getElementValue(this.petWeightInput);
    }
    public async getPetNotes(): Promise<string> {
        return await Page.getElementValue(this.personNotesInput);
    }
    //4.Addresses
    public async clickAddressTab(): Promise<void> {
        await Page.click(this.addressesTab);
    }
    public async clickAddAddressBtn(): Promise<void> {
        await Page.click(this.addAddressBtn);
    }
    public async setAddress(addressName, address1, address2, address3, address4, city, state, postalCode, country): Promise<void> {
        await commonElements.setInputValue(addressName, this.addressNameInput);
        await commonElements.setInputValue(address1, this.getAddressesInput(1));
        await commonElements.setInputValue(address2, this.getAddressesInput(2));
        await commonElements.setInputValue(address3, this.getAddressesInput(3));
        await commonElements.setInputValue(address4, this.getAddressesInput(4));
        await commonElements.setInputValue(city, this.cityInput);
        await commonElements.setInputValue(state, this.stateCountryInput);
        await commonElements.setInputValue(postalCode, this.postalCodeInput);
        await commonElements.setSelectValue(country);
    }
    public async clickAddressEditBtnByName(name): Promise<void> {
        return await Page.click(this.getAddressEditBtn(name));
    }
    public async getAddressNameValue(): Promise<string> {
        return await Page.getElementValue(this.addressNameInput);
    }
    public async getAddressValue(numOfAddress): Promise<string> {
        return await Page.getElementValue(this.getAddressesInput(numOfAddress));
    }
    public async getCityValue(): Promise<string> {
        return await Page.getElementValue(this.cityInput);
    }
    public async getStateValue(): Promise<string> {
        return await Page.getElementValue(this.stateCountryInput);
    }
    public async getPostalCodeValue(): Promise<string> {
        return await Page.getElementValue(this.postalCodeInput);
    }
    public async getCountryValue(): Promise<string> {
        return await Page.getElementText(commonElements.selectElement + "//span[text()]");
    }
    //5.Documents
    public async clickDocumentsTab(): Promise<void> {
        await Page.click(this.documentsTab)
    }
    // public async clickAddDocumentsBtn():Promise<void> {
    //     await Page.click(this.addDocumentsBtn)
    // }
    public async getDocumentsLabelText(): Promise<string> {
        return await Page.getElementText(this.documentTabLabel)
    }
    public async clickRemoveDocBtnByName(fileName, confirm): Promise<void> {
        await Page.click(this.getRemoveDocBtnByName(fileName));
        await Page.click(commonElements.getRemoveConfirmBtn(confirm));
    }
    public async getDocQty(): Promise<number> {
        return await Page.getElementsQty(this.documentsQty);
    }

}
export default new assigneePage();
