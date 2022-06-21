import commonElements from "../../../helper/commonElements"
import passSignIn from "../../../helper/passSignIn"
import clientsPage from "../../../pageobjects/clients/clients.page"
import setupPage from "../../../pageobjects/clients/setup.page"

const corporateStructureLabel = "HR admin users"
const firstName_1 = "QATestHR"
const firstName_2 = "QATestHR_2"
const lastName_1 = "QALastName"
const lastName_2 = "QALastName_2"
const jobTitle_1 = "HRQA"
const jobTitle_2 = "HRQA_2"
const responsibility_1 = "TestREsponsibility"
const responsibility_2 = "TestREsponsibility_2"
const email_1 = "QAtest_1@mail.com"
const email_2 = "QAtest_2@mail.com"
const telephone_1 = "7400123456"
const telephone_2 = "7400123458"
const mobile_1 = "7400987654"
const mobile_2 = "7400987652"
const entity_1 = "QA Test Client"
const entity_2 = "Test Subsidiary"
const accessTypeLabel = " Current access type "
const accessTypeValue_1 = "Default full"
const accessTypeValue_2 = "Custom"
const ssoSettingsLabel = " SSO settings "
const ssoSettingValue_1 = "None"
const ssoSettingValue_2 = "Read only"
const ssoSettingValue_3 = "Read and write"
const emailLabel = "Email"
const passwordLabel = "Password"
const HRUserAddedMsg = "client user account created successfully"
const HrUserRemovedMsg = "Client user has been successfully deleted"
const HrUserUpdMsg = "Client user updated successfully"

describe('Client HR admin users page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to HR admin users and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await setupPage.clickSetupTab();
        await setupPage.clickHRUsersTab();
        expect(await setupPage.getHRUsersLabelText()).toContain(corporateStructureLabel);
    });
    it('Verify HR admin users tab', async () => {
        await setupPage.clickAddHRBtn();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await commonElements.getErrorInputMsgQty()).toBe(4);
        await setupPage.setHRAdminUser(firstName_1, lastName_1, jobTitle_1, responsibility_1, email_1, telephone_1, mobile_1, entity_1);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isHRTabelElementExisting(firstName_2 + " " + lastName_2)).toBe(false);
        await setupPage.clickAddHRBtn();
        await setupPage.setHRAdminUser(firstName_1, lastName_1, jobTitle_1, responsibility_1, email_1, telephone_1, mobile_1, entity_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(HRUserAddedMsg)).toBe(true);
        expect(await setupPage.isHRTabelElementExisting(firstName_2 + " " + lastName_2)).toBe(false);
    });

    it('Verify edit user form', async () => {
        await setupPage.clickHREditByName(firstName_1);
        expect(await commonElements.getFieldValue(setupPage.hrFirstNameInput)).toBe(firstName_1);
        expect(await commonElements.getFieldValue(setupPage.hrLastNameInput)).toBe(lastName_1);
        expect(await commonElements.getFieldValue(setupPage.hrJobTitleInput)).toBe(jobTitle_1);
        expect(await commonElements.getFieldValue(setupPage.hrResponsibilityInput)).toBe(responsibility_1);//Bug
        expect(await commonElements.getFieldValue(setupPage.hrEmailInput)).toBe(email_1);
        expect(await commonElements.getFieldValue(setupPage.hrTelephoneInput)).toBe(telephone_1);
        expect(await commonElements.getFieldValue(setupPage.hrMobileInput)).toBe(mobile_1);
        expect(await commonElements.getSelectFieldValue(setupPage.selectElement)).toBe(entity_1);
        await setupPage.setHRAdminUser(firstName_2, lastName_2, jobTitle_2, responsibility_2, email_2, telephone_2, mobile_2, entity_2);
        await commonElements.clickCancelBtn();
        await setupPage.clickHREditByName(firstName_1);
        expect(await commonElements.getFieldValue(setupPage.hrFirstNameInput)).toBe(firstName_1);
        expect(await commonElements.getFieldValue(setupPage.hrLastNameInput)).toBe(lastName_1);
        expect(await commonElements.getFieldValue(setupPage.hrJobTitleInput)).toBe(jobTitle_1);
        expect(await commonElements.getFieldValue(setupPage.hrResponsibilityInput)).toBe(responsibility_1);
        expect(await commonElements.getFieldValue(setupPage.hrEmailInput)).toBe(email_1);
        expect(await commonElements.getFieldValue(setupPage.hrTelephoneInput)).toBe(telephone_1);
        expect(await commonElements.getFieldValue(setupPage.hrMobileInput)).toBe(mobile_1);
        expect(await commonElements.getSelectFieldValue(setupPage.selectElement)).toBe(entity_1);
        await setupPage.setHRAdminUser(firstName_2, lastName_2, jobTitle_2, responsibility_2, email_2, telephone_2, mobile_2, entity_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(HrUserUpdMsg)).toBe(true);
        expect(await setupPage.isHRTabelElementExisting(firstName_2 + " " + lastName_2)).toBe(true);
        await setupPage.clickHREditByName(firstName_2);
        expect(await commonElements.getFieldValue(setupPage.hrFirstNameInput)).toBe(firstName_2);
        expect(await commonElements.getFieldValue(setupPage.hrLastNameInput)).toBe(lastName_2);
        expect(await commonElements.getFieldValue(setupPage.hrJobTitleInput)).toBe(jobTitle_2);
        expect(await commonElements.getFieldValue(setupPage.hrResponsibilityInput)).toBe(responsibility_2);
        expect(await commonElements.getFieldValue(setupPage.hrEmailInput)).toBe(email_2);
        expect(await commonElements.getFieldValue(setupPage.hrTelephoneInput)).toBe(telephone_2);
        expect(await commonElements.getFieldValue(setupPage.hrMobileInput)).toBe(mobile_2);
        expect(await commonElements.getSelectFieldValue(setupPage.selectElement)).toBe(entity_2);
    });

    it('Verify Access type,Permissions, Login details', async () => {
        expect(await setupPage.isHRFieldValueUpdated(accessTypeLabel, accessTypeValue_1)).toBe(true);
        await setupPage.clickEditBtnByLabel(accessTypeLabel);
        await commonElements.setDropDownValue(accessTypeValue_2, setupPage.hrAccessTypeDD);
        await commonElements.clickDialogWindowCancelBtn();
        await setupPage.clickEditBtnByLabel(accessTypeLabel);
        await commonElements.setDropDownValue(accessTypeValue_2, setupPage.hrAccessTypeDD);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await setupPage.isHRFieldValueUpdated(accessTypeLabel, accessTypeValue_2)).toBe(true);
        expect(await setupPage.isHRFieldValueUpdated(ssoSettingsLabel, ssoSettingValue_1)).toBe(true);
        await setupPage.clickEditBtnByLabel(ssoSettingsLabel);
        await commonElements.setRbtByLabel(ssoSettingValue_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await setupPage.isHRFieldValueUpdated(ssoSettingsLabel, ssoSettingValue_1)).toBe(true);
        await setupPage.clickEditBtnByLabel(ssoSettingsLabel);
        await commonElements.setRbtByLabel(ssoSettingValue_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await setupPage.isHRFieldValueUpdated(ssoSettingsLabel, "Read")).toBe(true);
        await setupPage.clickEditBtnByLabel(ssoSettingsLabel);
        await commonElements.setRbtByLabel(ssoSettingValue_3);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await setupPage.isHRFieldValueUpdated(ssoSettingsLabel, "Read, Write")).toBe(true);
        expect(await setupPage.getHRFieldValueTextByLabel(emailLabel)).toContain(email_2);
        expect(await setupPage.getHRFieldValueTextByLabel(passwordLabel)).toContain("Not set yet");
        await commonElements.clickCancelBtn();
    });

    it('Verify search and remove btn', async () => {
        await commonElements.refreshPage();
        await setupPage.setSearchInput(firstName_2 + " " + lastName_2);
        expect(await setupPage.isHRTabelElementExisting(firstName_2 + " " + lastName_2)).toBe(true);
        await setupPage.clearSearchInput();
        await setupPage.removeHrUserByName(firstName_2 + " " + lastName_2,"no");
        expect(await setupPage.isHRTabelElementExisting(firstName_2 + " " + lastName_2)).toBe(true);
        await setupPage.removeHrUserByName(firstName_2 + " " + lastName_2,"yes");
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(HrUserRemovedMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await setupPage.isHRTabelElementExisting(firstName_2 + " " + lastName_2)).toBe(false);
    });
});
