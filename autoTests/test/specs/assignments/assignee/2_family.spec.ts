import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assigneePage from '../../../pageobjects/assignment/assignee.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const personType_1 = "Child"
const personType_2 = "Partner"
const personType_3 = "Other"
const titleValue_1 = "TestTitle"
const titleValue_2 = "TestTitle_2"
const firstNameValue_1 = "FirstName"
const firstNameValue_2 = "FirstName_2"
const lastNameValue_1 = "LastName"
const lastNameValue_2 = "LastName_2"
const genderValue_1 = "Male"
const genderValue_2 = "Female"
const nationalityValue_1 = "American"
const nationalityValue_2 = "British"
const dateOfBirthValue_1 = "12.11.1990"
const dateOfBirthValue_2 = "11.10.1982"
const maritalStatusValue_1 = "Single"
const maritalStatusValue_2 = "Married"
const emailValue_1 = "QatestMail@qamail.com"
const emailValue_2 = "QatestMail@gmail.com"
const mobilePhoneValue_1 = "7400123458"
const mobilePhoneValue_2 = "7400323458"
const homePhoneValue_1 = "7400663451"
const homePhoneValue_2 = "7400773452"
const workPhoneValue_1 = "7400883452"
const workPhoneValue_2 = "7400993332"
const notesValue_1 = "TestNotes"
const notesValue_2 = "TestNotesQA"
const addedPersonMsg = "has been added to the assignment"
const updatedPersonMsg = "has been updated in this assignment"
const removedPersonMsg = "has been removed successfully. Thank you."

describe('Client Corporate structure page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Assignee Family tab and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        expect(await assigneePage.getAssigneeLabelText()).toBe("Family members");
    });
    it('Verify add Partner form ', async () => {
        await assigneePage.clickAddPersonBtn();
        await assigneePage.setAdditionalMember(personType_2, titleValue_1, firstNameValue_1, lastNameValue_1, genderValue_1, nationalityValue_1, dateOfBirthValue_1, maritalStatusValue_1, emailValue_1, mobilePhoneValue_1, workPhoneValue_1, homePhoneValue_1, notesValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(addedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(addedPersonMsg);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyEditBtnByName(firstNameValue_1, lastNameValue_1);
        expect(await assigneePage.getPersonTypeDDValue()).toBe(personType_2);
        expect(await assigneePage.getTitleInputValue()).toBe(titleValue_1);
        expect(await assigneePage.getFirstNameInputValue()).toContain(firstNameValue_1);
        expect(await assigneePage.getLastNameInputValue()).toContain(lastNameValue_1);
        expect(await assigneePage.getGenderDDValue()).toBe(genderValue_1);
        expect(await assigneePage.getNationalityInputValue()).toBe(nationalityValue_1);
        expect(await assigneePage.getDobInputValue()).toBe(dateOfBirthValue_1);
        expect(await assigneePage.getMaritalDDValue()).toBe(maritalStatusValue_1);
        expect(await assigneePage.getEmailInputValue()).toBe(emailValue_1);
        expect(await assigneePage.getMobileInputValue()).toBe(mobilePhoneValue_1);
        expect(await assigneePage.getWorkPInputValue()).toBe(workPhoneValue_1);
        expect(await assigneePage.getHomePInputValue()).toBe(homePhoneValue_1);
        expect(await assigneePage.getNoteInputValue()).toBe(notesValue_1);
    });
    it('Verify Edit Partner form ', async () => {
        await assigneePage.setAdditionalMember(personType_2, titleValue_2, firstNameValue_2, lastNameValue_2, genderValue_2, nationalityValue_2, dateOfBirthValue_2, maritalStatusValue_2, emailValue_2, mobilePhoneValue_2, workPhoneValue_2, homePhoneValue_2, notesValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(updatedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(updatedPersonMsg);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyEditBtnByName(firstNameValue_2, lastNameValue_2);
        expect(await assigneePage.getPersonTypeDDValue()).toBe(personType_2);
        expect(await assigneePage.getTitleInputValue()).toBe(titleValue_2);
        expect(await assigneePage.getFirstNameInputValue()).toContain(firstNameValue_2);
        expect(await assigneePage.getLastNameInputValue()).toContain(lastNameValue_2);
        expect(await assigneePage.getGenderDDValue()).toBe(genderValue_2);
        expect(await assigneePage.getNationalityInputValue()).toBe(nationalityValue_2);
        expect(await assigneePage.getDobInputValue()).toBe(dateOfBirthValue_2);
        expect(await assigneePage.getMaritalDDValue()).toBe(maritalStatusValue_2);
        expect(await assigneePage.getEmailInputValue()).toBe(emailValue_2);
        expect(await assigneePage.getMobileInputValue()).toBe(mobilePhoneValue_2);
        expect(await assigneePage.getWorkPInputValue()).toBe(workPhoneValue_2);
        expect(await assigneePage.getHomePInputValue()).toBe(homePhoneValue_2);
        expect(await assigneePage.getNoteInputValue()).toBe(notesValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(updatedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(updatedPersonMsg);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyRemoveBtnByName(firstNameValue_2, lastNameValue_2);
        expect(await commonElements.isPopupMsgDisplayed(removedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(removedPersonMsg);
    });
    it('Verify Other person form ', async () => {
        await assigneePage.clickAddPersonBtn();
        await assigneePage.setAdditionalMember(personType_3, titleValue_1, firstNameValue_1, lastNameValue_1, genderValue_1, nationalityValue_1, dateOfBirthValue_1, maritalStatusValue_1, emailValue_1, mobilePhoneValue_1, workPhoneValue_1, homePhoneValue_1, notesValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(addedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(addedPersonMsg);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyEditBtnByName(firstNameValue_1, lastNameValue_1);
        expect(await assigneePage.getPersonTypeDDValue()).toBe(personType_3);
        expect(await assigneePage.getTitleInputValue()).toBe(titleValue_1);
        expect(await assigneePage.getFirstNameInputValue()).toContain(firstNameValue_1);
        expect(await assigneePage.getLastNameInputValue()).toContain(lastNameValue_1);
        expect(await assigneePage.getGenderDDValue()).toBe(genderValue_1);
        expect(await assigneePage.getNationalityInputValue()).toBe(nationalityValue_1);
        expect(await assigneePage.getDobInputValue()).toBe(dateOfBirthValue_1);
        expect(await assigneePage.getMaritalDDValue()).toBe(maritalStatusValue_1);
        expect(await assigneePage.getEmailInputValue()).toBe(emailValue_1);
        expect(await assigneePage.getMobileInputValue()).toBe(mobilePhoneValue_1);
        expect(await assigneePage.getWorkPInputValue()).toBe(workPhoneValue_1);
        expect(await assigneePage.getHomePInputValue()).toBe(homePhoneValue_1);
        expect(await assigneePage.getNoteInputValue()).toBe(notesValue_1);
    });
    it('Verify Other person Edit', async () => {
        await assigneePage.setAdditionalMember(personType_3, titleValue_2, firstNameValue_2, lastNameValue_2, genderValue_2, nationalityValue_2, dateOfBirthValue_2, maritalStatusValue_2, emailValue_2, mobilePhoneValue_2, workPhoneValue_2, homePhoneValue_2, notesValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(updatedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(updatedPersonMsg);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyEditBtnByName(firstNameValue_2, lastNameValue_2);
        expect(await assigneePage.getPersonTypeDDValue()).toBe(personType_3);
        expect(await assigneePage.getTitleInputValue()).toBe(titleValue_2);
        expect(await assigneePage.getFirstNameInputValue()).toContain(firstNameValue_2);
        expect(await assigneePage.getLastNameInputValue()).toContain(lastNameValue_2);
        expect(await assigneePage.getGenderDDValue()).toBe(genderValue_2);
        expect(await assigneePage.getNationalityInputValue()).toBe(nationalityValue_2);
        expect(await assigneePage.getDobInputValue()).toBe(dateOfBirthValue_2);
        expect(await assigneePage.getMaritalDDValue()).toBe(maritalStatusValue_2);
        expect(await assigneePage.getEmailInputValue()).toBe(emailValue_2);
        expect(await assigneePage.getMobileInputValue()).toBe(mobilePhoneValue_2);
        expect(await assigneePage.getWorkPInputValue()).toBe(workPhoneValue_2);
        expect(await assigneePage.getHomePInputValue()).toBe(homePhoneValue_2);
        expect(await assigneePage.getNoteInputValue()).toBe(notesValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(updatedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(updatedPersonMsg);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyRemoveBtnByName(firstNameValue_2, lastNameValue_2);
        expect(await commonElements.isPopupMsgDisplayed(removedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(removedPersonMsg);
    });
    it('Verify Child person form ', async () => {
        await assigneePage.clickAddPersonBtn();
        await assigneePage.setChildMember(personType_1, titleValue_1, firstNameValue_1, lastNameValue_1, genderValue_1, nationalityValue_1, dateOfBirthValue_1, notesValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(addedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(addedPersonMsg);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyEditBtnByName(firstNameValue_1, lastNameValue_1);
        expect(await assigneePage.getPersonTypeDDValue()).toBe(personType_1);
        expect(await assigneePage.getTitleInputValue()).toBe(titleValue_1);
        expect(await assigneePage.getFirstNameInputValue()).toContain(firstNameValue_1);
        expect(await assigneePage.getLastNameInputValue()).toContain(lastNameValue_1);
        expect(await assigneePage.getGenderDDValue()).toBe(genderValue_1);
        expect(await assigneePage.getNationalityInputValue()).toBe(nationalityValue_1);
        expect(await assigneePage.getDobInputValue()).toBe(dateOfBirthValue_1);
        expect(await assigneePage.getNoteInputValue()).toBe(notesValue_1);
    });
    it('Verify child person Edit', async () => {
        await assigneePage.setChildMember(personType_1, titleValue_2, firstNameValue_2, lastNameValue_2, genderValue_2, nationalityValue_2, dateOfBirthValue_2, notesValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(updatedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(updatedPersonMsg);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyEditBtnByName(firstNameValue_2, lastNameValue_2);
        expect(await assigneePage.getPersonTypeDDValue()).toBe(personType_1);
        expect(await assigneePage.getTitleInputValue()).toBe(titleValue_2);
        expect(await assigneePage.getFirstNameInputValue()).toContain(firstNameValue_2);
        expect(await assigneePage.getLastNameInputValue()).toContain(lastNameValue_2);
        expect(await assigneePage.getGenderDDValue()).toBe(genderValue_2);
        expect(await assigneePage.getNationalityInputValue()).toBe(nationalityValue_2);
        expect(await assigneePage.getDobInputValue()).toBe(dateOfBirthValue_2);
        expect(await assigneePage.getNoteInputValue()).toBe(notesValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(updatedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(updatedPersonMsg);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyRemoveBtnByName(firstNameValue_2, lastNameValue_2);
        expect(await commonElements.isPopupMsgDisplayed(removedPersonMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(removedPersonMsg);
    });

});
