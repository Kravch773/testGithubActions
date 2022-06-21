import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import clientsPage from '../../../pageobjects/clients/clients.page';
import setupPage from '../../../pageobjects/clients/setup.page';

const clientName = "QA Test Client"
const officialNameLabel = " Official name "
const officialNameValue = "TestQAName"
const defOfficialNameValue = "QA Test Client"
const shortNameLabel = " Short name "
const shortNameValue = "testValue"
const defShortNameValue = "QA Test Client"
const k2OfficeLabel = " K2 office "
const k2OfficeValue = "Weybridge"
const defk2OfficeValue = "London"
const countryLabel = " Country "
const countryValue = "France"
const defCountryValue = "Italy"
const statusLabel = " Status "
const statusValue = "DEMO"
const statusValue_2 = "SUSPENDED"
const defstatusValue = "ACTIVE"
const createdOnLabel = " Created on "
const createdOnValue = commonElements.getCurrentDatePlusDaysNo0Format(-70)
const defCreatedOnValue = commonElements.getCurrentDatePlusDaysNo0Format(-140)
const postaladdressLabel = " Postal address "
const defPostaladdressValue = "Test Address"
const postaladdressValue = "Second Address"
const accountTypeLabel = " Account type "
const defAccountTypeValue = "GRP"
const accountTypeValue = "EXT"
const blockOfIntInput = " Block for initiation "
const blockOfIntState = false
const blockOfLabelState = "No"
const defBlockOfIntState = true
const defBlockOfLabelState = "Yes"
const availableToLabel = " 2FA available to users "
const availableToValue = "AVAILABLE"
const defAvailableToValue = "UNAVAILABLE"
const managerLabel = " Account manager "
const defPersonName = "Ivan"
const personName = "Sergey"
const salesPersonLabel = " Sales person "
const operationsTeamLabel = " Operations team "
const cleanPersonInputLabel = "This field has not been set yet"
const accountDetailsUpdMsg = "Client record updated"

describe('Client Account details page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Company details setup page ', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await setupPage.clickSetupTab();
        expect(await setupPage.getClientNameLabel()).toContain(clientName)
    });

    xit('Verify (setup-account details) official name input', async () => {

        await setupPage.clickEditBtnByLabel(officialNameLabel);
        await commonElements.setInputValue(officialNameValue)
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accountDetailsUpdMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(officialNameLabel)).toBe(officialNameValue);
        await setupPage.clickEditBtnByLabel(officialNameLabel);
        await commonElements.setInputValue(defOfficialNameValue)
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(officialNameLabel)).toBe(officialNameValue);
        await setupPage.clickEditBtnByLabel(officialNameLabel);
        await commonElements.setInputValue(defOfficialNameValue)
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accountDetailsUpdMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(officialNameLabel)).toBe(defOfficialNameValue);

    });

    it('Verify (setup-account details) short name input', async () => {
        await setupPage.clickEditBtnByLabel(shortNameLabel);
        await commonElements.setInputValue(shortNameValue)
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accountDetailsUpdMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(shortNameLabel)).toBe(shortNameValue);
        await setupPage.clickEditBtnByLabel(shortNameLabel);
        await commonElements.setInputValue(defShortNameValue);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(shortNameLabel)).toBe(shortNameValue);
        await setupPage.clickEditBtnByLabel(shortNameLabel);
        await commonElements.setInputValue(defShortNameValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accountDetailsUpdMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(shortNameLabel)).toBe(defShortNameValue);
    });

    it('Verify (setup-account details) K2 office input(def)', async () => {
        await setupPage.clickEditBtnByLabel(k2OfficeLabel);
        await commonElements.setSelectValue(defk2OfficeValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(k2OfficeLabel)).toBe(defk2OfficeValue);
    });

    it('Verify (setup-account details) K2 office input ', async () => {
        await setupPage.clickEditBtnByLabel(k2OfficeLabel);
        await commonElements.setSelectValue(k2OfficeValue)
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(k2OfficeLabel)).toBe(defk2OfficeValue);
        await setupPage.clickEditBtnByLabel(k2OfficeLabel);
        await commonElements.setSelectValue(k2OfficeValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(k2OfficeLabel)).toBe(k2OfficeValue);
        await setupPage.clickEditBtnByLabel(k2OfficeLabel);
        await commonElements.setSelectValue(defk2OfficeValue)
        await commonElements.clickSaveBtn();
    });

    it('Verify (setup-account details) Country input (def)', async () => {
        await setupPage.clickEditBtnByLabel(countryLabel);
        await commonElements.setSelectValue(defCountryValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(countryLabel)).toBe(defCountryValue);
    });

    it('Verify (setup-account details) Country input', async () => {
        await setupPage.clickEditBtnByLabel(countryLabel);
        await commonElements.setSelectValue(countryValue)
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(countryLabel)).toBe(defCountryValue);
        await setupPage.clickEditBtnByLabel(countryLabel);
        await commonElements.setSelectValue(countryValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(countryLabel)).toBe(countryValue);
        await setupPage.clickEditBtnByLabel(countryLabel);
        await commonElements.setSelectValue(defCountryValue)
        await commonElements.clickSaveBtn();
    });

    it('Verify (setup-account details) DEMO Status input', async () => {
        await setupPage.clickEditBtnByLabel(statusLabel);
        await commonElements.setDropDownValue(statusValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getSelectTextByLabel(statusLabel)).toBe(statusValue);

    });
    it('Verify (setup-account details) SUSPENDED Status input', async () => {
        await setupPage.clickEditBtnByLabel(statusLabel);
        await commonElements.setDropDownValue(statusValue_2)
        await commonElements.clickCancelBtn();
        expect(await setupPage.getSelectTextByLabel(statusLabel)).toBe(statusValue);
        await setupPage.clickEditBtnByLabel(statusLabel);
        await commonElements.setDropDownValue(statusValue_2)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getSelectTextByLabel(statusLabel)).toBe(statusValue_2);

    });
    it('Verify (setup-account details) ACTIVE Status input', async () => {
        await setupPage.clickEditBtnByLabel(statusLabel);
        await commonElements.setDropDownValue(defstatusValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getSelectTextByLabel(statusLabel)).toBe(defstatusValue);
    });

    it('Verify (setup-account details) date input', async () => {
        await setupPage.clickEditBtnByLabel(createdOnLabel);
        await commonElements.clearAndSetDateValue(commonElements.inputField,createdOnValue)
        await commonElements.clickSaveBtn();
        expect(await commonElements.createStandartDateForm(await setupPage.getFieldByLabelValue(createdOnLabel))).toBe(createdOnValue);
    });
    it('Verify (setup-account details) default date input', async () => {
        await setupPage.clickEditBtnByLabel(createdOnLabel);
        await commonElements.clearAndSetDateValue(commonElements.inputField,defCreatedOnValue)
        await commonElements.clickCancelBtn();
        expect(await commonElements.createStandartDateForm(await setupPage.getFieldByLabelValue(createdOnLabel))).toBe(createdOnValue);
        await setupPage.clickEditBtnByLabel(createdOnLabel);
        await commonElements.clearAndSetDateValue(commonElements.inputField,defCreatedOnValue)
        await commonElements.clickSaveBtn();
        expect(await commonElements.createStandartDateForm(await setupPage.getFieldByLabelValue(createdOnLabel))).toBe(defCreatedOnValue);
    });

    it('Verify (setup-account details) default address input', async () => {
        await setupPage.clickEditBtnByLabel(postaladdressLabel);
        await commonElements.setSelectValue(defPostaladdressValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(postaladdressLabel)).toContain(defPostaladdressValue);

    });
    it('Verify (setup-account details) address input', async () => {
        await setupPage.clickEditBtnByLabel(postaladdressLabel);
        await commonElements.setSelectValue(postaladdressValue)
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(postaladdressLabel)).toContain(defPostaladdressValue);
        await setupPage.clickEditBtnByLabel(postaladdressLabel);
        await commonElements.setSelectValue(postaladdressValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(postaladdressLabel)).toContain(postaladdressValue);
        await setupPage.clickEditBtnByLabel(postaladdressLabel);
        await commonElements.setSelectValue(defPostaladdressValue)
        await commonElements.clickSaveBtn();
    });

    it('Verify (setup-account details) GRP account Type input', async () => {
        await setupPage.clickEditBtnByLabel(accountTypeLabel);
        await commonElements.setRbtByLabel(defAccountTypeValue);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(accountTypeLabel)).toContain(defAccountTypeValue);
    });
    it('Verify (setup-account details) EXT account Type input', async () => {
        await setupPage.clickEditBtnByLabel(accountTypeLabel);
        await commonElements.setRbtByLabel(accountTypeValue);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(accountTypeLabel)).toContain(defAccountTypeValue);
        await setupPage.clickEditBtnByLabel(accountTypeLabel);
        await commonElements.setRbtByLabel(accountTypeValue);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(accountTypeLabel)).toContain(accountTypeValue);
        await setupPage.clickEditBtnByLabel(accountTypeLabel);
        await commonElements.setRbtByLabel(defAccountTypeValue);
        await commonElements.clickSaveBtn();
    });

    it('Verify (setup-account details) default Block for initiation input', async () => {
        await setupPage.clickEditBtnByLabel(blockOfIntInput);
        await commonElements.setChb(setupPage.checkBoxElement,defBlockOfIntState);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(blockOfIntInput)).toContain(defBlockOfLabelState);
    });
    it('Verify (setup-account details) Block for initiation input', async () => {
        await setupPage.clickEditBtnByLabel(blockOfIntInput);
        await commonElements.setChb(setupPage.checkBoxElement,blockOfIntState);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(blockOfIntInput)).toBe(defBlockOfLabelState);
        await setupPage.clickEditBtnByLabel(blockOfIntInput);
        await commonElements.setChb(setupPage.checkBoxElement,blockOfIntState);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getFieldByLabelValue(blockOfIntInput)).toContain(blockOfLabelState);
        await setupPage.clickEditBtnByLabel(blockOfIntInput);
        await commonElements.setChb(setupPage.checkBoxElement,defBlockOfLabelState);
        await commonElements.clickSaveBtn();
    });

    it('Verify (setup-account details) default available to users input', async () => {
        await setupPage.clickEditBtnByLabel(availableToLabel);
        await commonElements.setDropDownValue(defAvailableToValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getSelectTextByLabel(availableToLabel)).toBe(defAvailableToValue);

    });
    it('Verify (setup-account details) available to users input', async () => {
        await setupPage.clickEditBtnByLabel(availableToLabel);
        await commonElements.setDropDownValue(availableToValue)
        await commonElements.clickCancelBtn();
        expect(await setupPage.getSelectTextByLabel(availableToLabel)).toBe(defAvailableToValue);
        await setupPage.clickEditBtnByLabel(availableToLabel);
        await commonElements.setDropDownValue(availableToValue)
        await commonElements.clickSaveBtn();
        expect(await setupPage.getSelectTextByLabel(availableToLabel)).toBe(availableToValue);
        await setupPage.clickEditBtnByLabel(availableToLabel);
        await commonElements.setDropDownValue(defAvailableToValue)
        await commonElements.clickSaveBtn();
    });

    it('Verify (setup-account details) Account manager input', async () => {
        await setupPage.clickEditBtnByLabel(managerLabel);
        await setupPage.setPersonInput(personName);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmployedCardText(managerLabel)).toContain(personName);
        await setupPage.clickEditBtnByLabel(managerLabel);
        await setupPage.setPersonInput(defPersonName);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getEmployedCardText(managerLabel)).toContain(personName);
        await setupPage.clickEditBtnByLabel(managerLabel);
        await setupPage.setPersonInput(defPersonName);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmployedCardText(managerLabel)).toContain(defPersonName);
    });

    it('Verify (setup-account details) remove button Account manager input', async () => {
        await setupPage.clickEditBtnByLabel(managerLabel);
        await setupPage.clearPersonInput();
        await commonElements.clickCancelBtn();
        expect(await setupPage.getEmployedCardText(managerLabel)).toContain(defPersonName);
        await setupPage.clickEditBtnByLabel(managerLabel);
        await setupPage.clearPersonInput();//clickEmployeCardDelIcon
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorInputMsgDispalyed()).toBe(true);
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        await setupPage.setPersonInput(defPersonName);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmployedCardText(managerLabel)).toContain(defPersonName);
    });

    it('Verify (setup-account details) Sales manager input', async () => {
        await setupPage.clickEditBtnByLabel(salesPersonLabel);
        await setupPage.setPersonInput(personName);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmployedCardText(salesPersonLabel)).toContain(personName);
        await setupPage.clickEditBtnByLabel(salesPersonLabel);
        await setupPage.setPersonInput(defPersonName);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getEmployedCardText(salesPersonLabel)).toContain(personName);
        await setupPage.clickEditBtnByLabel(salesPersonLabel);
        await setupPage.setPersonInput(defPersonName);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmployedCardText(salesPersonLabel)).toContain(defPersonName);
    });

    it('Verify (setup-account details) remove button Sales manager input', async () => {
        await setupPage.clickEditBtnByLabel(salesPersonLabel);
        await setupPage.clearPersonInput();
        await commonElements.clickCancelBtn();
        expect(await setupPage.getEmployedCardText(salesPersonLabel)).toContain(defPersonName);
        await setupPage.clickEditBtnByLabel(salesPersonLabel);
        await setupPage.clearPersonInput();
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmptyPersonTextByLabel(salesPersonLabel)).toContain(cleanPersonInputLabel)
        await setupPage.clickEditBtnByLabel(salesPersonLabel);
        await setupPage.setPersonInput(defPersonName);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmployedCardText(salesPersonLabel)).toContain(defPersonName);
    });

    it('Verify (setup-account details) Operations team input', async () => {
        await setupPage.clickEditBtnByLabel(operationsTeamLabel);
        await setupPage.setPersonInput(personName);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmployedCardText(operationsTeamLabel)).toContain(personName);
        await setupPage.clickEditBtnByLabel(operationsTeamLabel);
        await setupPage.clearPersonInput();
        await setupPage.setPersonInput(defPersonName);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getEmployedCardText(operationsTeamLabel)).toContain(personName);
        await setupPage.clickEditBtnByLabel(operationsTeamLabel);
        await setupPage.setPersonInput(defPersonName);
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmployedCardText(operationsTeamLabel)).toContain(personName);
    });

    it('Verify (setup-account details) remove button Operations team input', async () => {
        await setupPage.clickEditBtnByLabel(operationsTeamLabel);
        await setupPage.clearPersonInput();
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmployedCardText(operationsTeamLabel)).toContain(defPersonName);
        await setupPage.clickEditBtnByLabel(operationsTeamLabel);
        await setupPage.clearPersonInput();
        await commonElements.clickSaveBtn();
        expect(await setupPage.getEmptyPersonTextByLabel(operationsTeamLabel)).toContain(cleanPersonInputLabel)
    });



});


