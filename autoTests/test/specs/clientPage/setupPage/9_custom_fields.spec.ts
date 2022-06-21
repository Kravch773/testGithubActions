import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import clientsPage from '../../../pageobjects/clients/clients.page';
import setupPage from '../../../pageobjects/clients/setup.page';

const customFieldsLabel = "Custom fields"
const customFieldSetting_1 = "Not applicable"
const customFieldSetting_2 = "Optional"
const customFieldSetting_3 = "Required"
const assignmentIDLabel = "Client assignment ID"
const systemEmployeeLabel = "Client system employee ID"
const homeCountryLabel = "Home country"
const hostCountryLabel = "Host country"
const homeBusinessLabel = "Home business division"
const hostBusinessDivisionLabel = "Host business division"
const assigneeGradeLabel = "Assignee grade"
const clientAssignmentType = "Client assignment type"
const custFieldName_1 = "Test_QA_1"
const custFieldName_2 = "Test_QA_2"
const dataTypeValue_1 = "NUMBER"
const dataTypeValue_2 = "TEXT"
const tagFiledTo_1 = "Assignment Management"
const tagFiledTo_2 = "Expense Management"
const requiredFieldState = true
const customFieldsSetingsUpdMsg = "The settings for this client's fixed custom fields have been updated successfully."
const customFieldAddedMsg = "Custom field added successfully"
const customFieldUpdMsg = "Custom field updated successfully"
const removedCustomFieldRemoveMsg = "Custom field deleted successfully"

describe('Client Custom fields page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Custom fields tab and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await setupPage.clickSetupTab();
        await setupPage.clickCustomFieldsTab();
        expect(await setupPage.geCustomFieldsLabelText()).toContain(customFieldsLabel)
    });
    it('Verify Client assignment ID (Not applicable)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(assignmentIDLabel);
        await commonElements.setRbtByLabel(customFieldSetting_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(assignmentIDLabel, customFieldSetting_1)).toBe(true);
    });
    it('Verify Client assignment ID (Optional)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(assignmentIDLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isFieldSettingLabelUpdated(assignmentIDLabel, customFieldSetting_1)).toBe(true);
        await setupPage.clickDefFieldEditBtnByLabel(assignmentIDLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(assignmentIDLabel, customFieldSetting_2)).toBe(true);
    });
    it('Verify Client assignment ID (Required)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(assignmentIDLabel);
        await commonElements.setRbtByLabel(customFieldSetting_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(assignmentIDLabel, customFieldSetting_3)).toBe(true);
    });

    it('Verify Client system employee ID (Not applicable)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(systemEmployeeLabel);
        await commonElements.setRbtByLabel(customFieldSetting_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(systemEmployeeLabel, customFieldSetting_1)).toBe(true);
    });

    it('Verify Client system employee ID (Optional)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(systemEmployeeLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isFieldSettingLabelUpdated(systemEmployeeLabel, customFieldSetting_1)).toBe(true);
        await setupPage.clickDefFieldEditBtnByLabel(systemEmployeeLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(systemEmployeeLabel, customFieldSetting_2)).toBe(true);
    });

    it('Verify Client system employee ID (Required)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(systemEmployeeLabel);
        await commonElements.setRbtByLabel(customFieldSetting_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(systemEmployeeLabel, customFieldSetting_3)).toBe(true);
    });

    it('Verify Home country (Required)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(homeCountryLabel);
        await commonElements.setRbtByLabel(customFieldSetting_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(homeCountryLabel, customFieldSetting_3)).toBe(true);
    });

    it('Verify Home country (Optional)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(homeCountryLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isFieldSettingLabelUpdated(homeCountryLabel, customFieldSetting_3)).toBe(true);
        await setupPage.clickDefFieldEditBtnByLabel(homeCountryLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(homeCountryLabel, customFieldSetting_2)).toBe(true);
    });

    it('Verify Home country (Not applicable) ', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(homeCountryLabel);
        await commonElements.setRbtByLabel(customFieldSetting_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(homeCountryLabel, customFieldSetting_1)).toBe(true);
    });
    it('Verify Host country (Required)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(hostCountryLabel);
        await commonElements.setRbtByLabel(customFieldSetting_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(hostCountryLabel, customFieldSetting_3)).toBe(true);
    });
    it('Verify Host country (Optional)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(hostCountryLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isFieldSettingLabelUpdated(hostCountryLabel, customFieldSetting_3)).toBe(true);
        await setupPage.clickDefFieldEditBtnByLabel(hostCountryLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(hostCountryLabel, customFieldSetting_2)).toBe(true);
    });
    it('Verify Host country (Not applicable) ', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(hostCountryLabel);
        await commonElements.setRbtByLabel(customFieldSetting_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(hostCountryLabel, customFieldSetting_1)).toBe(true);
    });
    it('Verify Home business division (Required)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(homeBusinessLabel);
        await commonElements.setRbtByLabel(customFieldSetting_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(homeBusinessLabel, customFieldSetting_3)).toBe(true);
    });
    it('Verify Home business division(Optional)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(homeBusinessLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isFieldSettingLabelUpdated(homeBusinessLabel, customFieldSetting_3)).toBe(true);
        await setupPage.clickDefFieldEditBtnByLabel(homeBusinessLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(homeBusinessLabel, customFieldSetting_2)).toBe(true);
    });
    it('Verify Home business division (Not applicable) ', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(homeBusinessLabel);
        await commonElements.setRbtByLabel(customFieldSetting_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(homeBusinessLabel, customFieldSetting_1)).toBe(true);
    });
    it('Verify Host business division (Required)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(hostBusinessDivisionLabel);
        await commonElements.setRbtByLabel(customFieldSetting_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(hostBusinessDivisionLabel, customFieldSetting_3)).toBe(true);
    });
    it('Verify Host business division(Optional)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(hostBusinessDivisionLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isFieldSettingLabelUpdated(hostBusinessDivisionLabel, customFieldSetting_3)).toBe(true);
        await setupPage.clickDefFieldEditBtnByLabel(hostBusinessDivisionLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(hostBusinessDivisionLabel, customFieldSetting_2)).toBe(true);
    });
    it('Verify Host business division (Not applicable) ', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(hostBusinessDivisionLabel);
        await commonElements.setRbtByLabel(customFieldSetting_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(hostBusinessDivisionLabel, customFieldSetting_1)).toBe(true);
    });
    it('Verify Assignee grade (Required)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(assigneeGradeLabel);
        await commonElements.setRbtByLabel(customFieldSetting_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(assigneeGradeLabel, customFieldSetting_3)).toBe(true);
    });
    it('Verify Assignee grade (Optional)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(assigneeGradeLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isFieldSettingLabelUpdated(assigneeGradeLabel, customFieldSetting_3)).toBe(true);
        await setupPage.clickDefFieldEditBtnByLabel(assigneeGradeLabel);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(assigneeGradeLabel, customFieldSetting_2)).toBe(true);
    });
    it('Verify Assignee grade (Not applicable) ', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(assigneeGradeLabel);
        await commonElements.setRbtByLabel(customFieldSetting_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(assigneeGradeLabel, customFieldSetting_1)).toBe(true);
    });

    it('Verify Home business division (Required)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(clientAssignmentType);
        await commonElements.setRbtByLabel(customFieldSetting_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(clientAssignmentType, customFieldSetting_3)).toBe(true);
    });
    it('Verify Home business division(Optional)', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(clientAssignmentType);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isFieldSettingLabelUpdated(clientAssignmentType, customFieldSetting_3)).toBe(true);
        await setupPage.clickDefFieldEditBtnByLabel(clientAssignmentType);
        await commonElements.setRbtByLabel(customFieldSetting_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(clientAssignmentType, customFieldSetting_2)).toBe(true);
    });
    it('Verify Home business division (Not applicable) ', async () => {
        await setupPage.clickDefFieldEditBtnByLabel(clientAssignmentType);
        await commonElements.setRbtByLabel(customFieldSetting_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldsSetingsUpdMsg)).toBe(true);
        expect(await setupPage.isFieldSettingLabelUpdated(clientAssignmentType, customFieldSetting_1)).toBe(true);
    });
    it('Verify add custom field form ', async () => {
        await setupPage.clickAddCustomFieldBtn();
        await commonElements.setInputValue(custFieldName_1);
        await commonElements.setDropDownValue(dataTypeValue_1, setupPage.dataTypeDD);
        await commonElements.setChbByLabel(tagFiledTo_1, true);
        await commonElements.setChb(setupPage.requiredFieldChb, requiredFieldState);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isTabelElementExistingByName(custFieldName_1)).toBe(false);
        await setupPage.clickAddCustomFieldBtn();
        await commonElements.setInputValue(custFieldName_1);
        await commonElements.setDropDownValue(dataTypeValue_1, setupPage.dataTypeDD);
        await commonElements.setChbByLabel(tagFiledTo_1, true);
        await commonElements.setChb(setupPage.requiredFieldChb, requiredFieldState);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldAddedMsg)).toBe(true);
        expect(await setupPage.isTabelElementExistingByName(custFieldName_1)).toBe(true);
    });
    it('Verify Edit and remove custom field', async () => {
        await setupPage.clickCustomFieldEditBtnByLabel(custFieldName_1);
        await commonElements.setInputValue(custFieldName_2)
        await commonElements.setDropDownValue(dataTypeValue_2, setupPage.dataTypeDD)
        await commonElements.setChbByLabel(tagFiledTo_2, true);
        await commonElements.setChb(setupPage.requiredFieldChb, requiredFieldState);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(customFieldUpdMsg)).toBe(true);
        expect(await setupPage.isTabelElementExistingByName(custFieldName_2)).toBe(true);
        await setupPage.removeCustomFieldByName(custFieldName_2, "no");
        expect(await setupPage.isTabelElementExistingByName(custFieldName_2)).toBe(true);
        await setupPage.removeCustomFieldByName(custFieldName_2, "yes");
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(removedCustomFieldRemoveMsg)).toBe(true);
        expect(await setupPage.isTabelElementExistingByName(custFieldName_2)).toBe(false);
    });
});
