import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import AssigneePage from '../../../pageobjects/assignment/Assignee.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const titleLabel = "Title"
const titleValue_1 = "TestTitle"
const titleValue_2 = "Mr"
const nameLabel = "Name"
const firstNameValue_1 = "FirstName"
const firstNameValue_2 = "Test"
const lastNameValue_1 = "LastName"
const lastNameValue_2 = "Assignee"
const genderLabel = "Gender"
const genderValue_1 = "Male"
const genderValue_2 = "Female"
const jobTitleLabel = "Job title"
const jobTitleValue_1 = "Assignee"
const jobTitleValue_2 = "Assignee_2"
const nationalityLabel = "Nationality"
const nationalityValue_1 = "American"
const nationalityValue_2 = "British"
const dateofbirthLabel = "Date of birth"
const dateOfBirthValue_1 = "12.11.1990"
const dateOfBirthValue_2 = "11.10.1982"
const maritalStatusLabel = "Marital status"
const maritalStatusValue_1 = "Single"
const maritalStatusValue_2 = "Married"
const emailLabel = "Email"
const emailValue_1 = "QatestMail@qamail.com"
const emailValue_2 = "QatestMail@gmail.com"
const mobilePhoneLabel = "Telephone (mobile)"
const mobilePhoneValue_1 = "201-555-0112"
const mobilePhoneValue_2 = "201-555-0113"
const homePhoneLabel = "Telephone (home)"
const homePhoneValue_1 = " 201-555-0114"
const homePhoneValue_2 = " 201-555-0115"
const workPhoneLabel = "Telephone (work)"
const workPhoneValue_1 = "201-555-0116"
const workPhoneValue_2 = "201-555-0117"
const subsidiaryLabel = "Subsidiary"
const subsidiaryValue_1 = "Test Subsidiary"
const subsidiaryValue_2 = "QA Test Client"
const notesLabel = "Notes"
const notesValue_1 = "TestNotes"
const notesValue_2 = "TestNotesQA"
const languagesSpokenLabel = "Languages spoken"
const languagesSpoken_1 = "English"
const languagesSpoken_2 = "Hebrew"
const languagesLvl_1 = "Written"
const languagesLvl_2 = "Spoken"
const assigneeFieldsUpdateMsg = "Details of the assignee have been updated"

describe('Asignee Overview page test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('open ClientsPage and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await AssigneePage.clickAssigneeTab();
        expect(await AssigneePage.getOverviewLabelText()).toBe("Assignee");
    });
    it('Assignee name input', async () => {
        await AssigneePage.clickEditBtnByLabel(titleLabel);
        await commonElements.setInputValue(titleValue_1, AssigneePage.titleInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(titleLabel, titleValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(titleLabel);
        await commonElements.setInputValue(titleValue_2, AssigneePage.titleInput);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(titleLabel, titleValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(titleLabel);
        await commonElements.setInputValue(titleValue_2, AssigneePage.titleInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(titleLabel, titleValue_2)).toBe(true);
    });
     it('Assignee name input', async () => {
        await AssigneePage.clickEditBtnByLabel(nameLabel);
        await commonElements.setInputValue(firstNameValue_1, AssigneePage.firstnameInput);
        await commonElements.setInputValue(lastNameValue_1, AssigneePage.lastnameInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isNameValueUpdatedByLabel(firstNameValue_1, lastNameValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(nameLabel);
        await commonElements.setInputValue(firstNameValue_2, AssigneePage.firstnameInput);
        await commonElements.setInputValue(lastNameValue_2, AssigneePage.lastnameInput);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isNameValueUpdatedByLabel(firstNameValue_1, lastNameValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(nameLabel);
        await commonElements.setInputValue(firstNameValue_2, AssigneePage.firstnameInput);
        await commonElements.setInputValue(lastNameValue_2, AssigneePage.lastnameInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isNameValueUpdatedByLabel(firstNameValue_2, lastNameValue_2)).toBe(true);
    });
    it('Assignee gender input', async () => {
        await AssigneePage.clickEditBtnByLabel(genderLabel);
        await commonElements.setSelectValue(genderValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(genderLabel, genderValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(genderLabel);
        await commonElements.setSelectValue(genderValue_2);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(genderLabel, genderValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(genderLabel);
        await commonElements.setSelectValue(genderValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(genderLabel, genderValue_2)).toBe(true);
        await browser.pause(9000)
    });
    it('Assignee job Title input', async () => {
        await AssigneePage.clickEditBtnByLabel(jobTitleLabel);
        await commonElements.setInputValue(jobTitleValue_1, AssigneePage.jobTitleInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(jobTitleLabel, jobTitleValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(jobTitleLabel);
        await commonElements.setInputValue(jobTitleValue_2, AssigneePage.jobTitleInput);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(jobTitleLabel, jobTitleValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(jobTitleLabel);
        await commonElements.setInputValue(jobTitleValue_2, AssigneePage.jobTitleInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(jobTitleLabel, jobTitleValue_2)).toBe(true);
    });
    it('Assignee nationality input', async () => {
        await AssigneePage.clickEditBtnByLabel(nationalityLabel);
        await commonElements.setSelectValue(nationalityValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(nationalityLabel, nationalityValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(nationalityLabel);
        await commonElements.setSelectValue(nationalityValue_2);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(nationalityLabel, nationalityValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(nationalityLabel);
        await commonElements.setSelectValue(nationalityValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(nationalityLabel, nationalityValue_2)).toBe(true);
    });
    it('Assignee dateOfBirth input', async () => {
        await AssigneePage.clickEditBtnByLabel(dateofbirthLabel);
        await commonElements.clearAndSetDateValue(AssigneePage.dobInput,dateOfBirthValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(dateofbirthLabel, dateOfBirthValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(dateofbirthLabel);
        await commonElements.clearAndSetDateValue(AssigneePage.dobInput,dateOfBirthValue_2);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(dateofbirthLabel, dateOfBirthValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(dateofbirthLabel);
        await commonElements.clearAndSetDateValue(AssigneePage.dobInput,dateOfBirthValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(dateofbirthLabel, dateOfBirthValue_2)).toBe(true);
    });
    it('Assignee marialStatus input', async () => {
        await AssigneePage.clickEditBtnByLabel(maritalStatusLabel);
        await commonElements.setSelectValue(maritalStatusValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(maritalStatusLabel, maritalStatusValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(maritalStatusLabel);
        await commonElements.setSelectValue(maritalStatusValue_2);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(maritalStatusLabel, maritalStatusValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(maritalStatusLabel);
        await commonElements.setSelectValue(maritalStatusValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(maritalStatusLabel, maritalStatusValue_2)).toBe(true);
    });
    it('Assignee email input', async () => {
        await AssigneePage.clickEditBtnByLabel(emailLabel);
        await commonElements.setInputValue(emailValue_1, AssigneePage.emailInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(emailLabel, emailValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(emailLabel);
        await commonElements.setInputValue(emailValue_2, AssigneePage.emailInput);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(emailLabel, emailValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(emailLabel);
        await commonElements.setInputValue(emailValue_2, AssigneePage.emailInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(emailLabel, emailValue_2)).toBe(true);
    });
    it('Assignee mobilePhone input', async () => {

        await AssigneePage.clickEditBtnByLabel(mobilePhoneLabel);
        await commonElements.setInputValue(await commonElements.getPhoneValueWithoutHyphen(mobilePhoneValue_1), AssigneePage.mobileTelephoneInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(mobilePhoneLabel, mobilePhoneValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(mobilePhoneLabel);
        await commonElements.setInputValue(await commonElements.getPhoneValueWithoutHyphen(mobilePhoneValue_2), AssigneePage.mobileTelephoneInput);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(mobilePhoneLabel, mobilePhoneValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(mobilePhoneLabel);
        await commonElements.setInputValue(await commonElements.getPhoneValueWithoutHyphen(mobilePhoneValue_2), AssigneePage.mobileTelephoneInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(mobilePhoneLabel, mobilePhoneValue_2)).toBe(true);
    });
    it('Assignee homePhone input', async () => {
        await AssigneePage.clickEditBtnByLabel(homePhoneLabel);
        await commonElements.setInputValue(await commonElements.getPhoneValueWithoutHyphen(homePhoneValue_1), AssigneePage.homeTelephoneInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(homePhoneLabel, homePhoneValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(homePhoneLabel);
        await commonElements.setInputValue(await commonElements.getPhoneValueWithoutHyphen(homePhoneValue_2), AssigneePage.homeTelephoneInput);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(homePhoneLabel, homePhoneValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(homePhoneLabel);
        await commonElements.setInputValue(await commonElements.getPhoneValueWithoutHyphen(homePhoneValue_2), AssigneePage.homeTelephoneInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(homePhoneLabel, homePhoneValue_2)).toBe(true);
    });
    it('Assignee workPhone input', async () => {
        await AssigneePage.clickEditBtnByLabel(workPhoneLabel);
        await commonElements.setInputValue(await commonElements.getPhoneValueWithoutHyphen(workPhoneValue_1), AssigneePage.workTelephoneInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(workPhoneLabel, workPhoneValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(workPhoneLabel);
        await commonElements.setInputValue(await commonElements.getPhoneValueWithoutHyphen(workPhoneValue_2), AssigneePage.workTelephoneInput);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(workPhoneLabel, workPhoneValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(workPhoneLabel);
        await commonElements.setInputValue(await commonElements.getPhoneValueWithoutHyphen(workPhoneValue_2), AssigneePage.workTelephoneInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(workPhoneLabel, workPhoneValue_2)).toBe(true);
    });
    it('Assignee subsidiary input', async () => {
        await AssigneePage.clickEditBtnByLabel(subsidiaryLabel);
        await commonElements.setSelectValue(subsidiaryValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(subsidiaryLabel, subsidiaryValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(subsidiaryLabel);
        await commonElements.setSelectValue(subsidiaryValue_2);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(subsidiaryLabel, subsidiaryValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(subsidiaryLabel);
        await commonElements.setSelectValue(subsidiaryValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(subsidiaryLabel, subsidiaryValue_2)).toBe(true);
    });
    it('Assignee notes input', async () => {
        await AssigneePage.clickEditBtnByLabel(notesLabel);
        await commonElements.setInputValue(notesValue_1, AssigneePage.userNotesInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(notesLabel, notesValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(notesLabel);
        await commonElements.setInputValue(notesValue_2, AssigneePage.userNotesInput);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(notesLabel, notesValue_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(notesLabel);
        await commonElements.setInputValue(notesValue_2, AssigneePage.userNotesInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(assigneeFieldsUpdateMsg);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(notesLabel, notesValue_2)).toBe(true);
    });

    it('Assignee language input', async () => {
        await AssigneePage.clickEditBtnByLabel(languagesSpokenLabel);
        await commonElements.setDropDownValue(languagesSpoken_1, AssigneePage.languageSpokenDD);
        await commonElements.setDropDownValue(languagesLvl_1, AssigneePage.languageLvlDD);
        await commonElements.clickSaveBtn();
        // expect(await commonElements.checkPopUpMsgAndForNotDisplayed(assigneeFieldsUpdateMsg)).toBe(true); no pop after first language was set
        expect(await AssigneePage.isFieldValueUpdatedByLabel(languagesSpokenLabel, languagesSpoken_1+" - "+languagesLvl_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(languagesSpokenLabel);
        await commonElements.setDropDownValue(languagesSpoken_2, AssigneePage.languageSpokenDD);
        await commonElements.setDropDownValue(languagesLvl_2, AssigneePage.languageLvlDD);
        await commonElements.clickCancelBtn();
        expect(await AssigneePage.isFieldValueUpdatedByLabel(languagesSpokenLabel, languagesSpoken_1+" - "+languagesLvl_1)).toBe(true);
        await AssigneePage.clickEditBtnByLabel(languagesSpokenLabel);
        await commonElements.setDropDownValue(languagesSpoken_2, AssigneePage.languageSpokenDD);
        await commonElements.setDropDownValue(languagesLvl_2, AssigneePage.languageLvlDD);
        await commonElements.clickSaveBtn();
        // expect(await commonElements.checkPopUpMsgAndForNotDisplayed(assigneeFieldsUpdateMsg)).toBe(true);
        expect(await AssigneePage.isFieldValueUpdatedByLabel(languagesSpokenLabel, languagesSpoken_2+" - "+languagesLvl_2)).toBe(true);
    });
});