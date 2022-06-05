import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_3 = "Children"
const needAnalysisSection_8 = "School search"
const firstName = "FirstTestName"
const surname = "LastTestName"
const gender = "Male"
const nationality = "Ukrainian"
const dob = commonElements.createGitDateFormat("11.12.2000")
const schoolYear_1 = "5"
const schoolYear_2 = "7"
const curriculum_1 = "2"
const curriculum_2 = "1"
const specialRequire_1 = "TestReq1"
const specialRequire_2 = "TestReq2"
const schoolType_1 = "Co-ed"
const schoolType_2 = "International"
const schoolSpecifics_1 = "TestSpec1"
const schoolSpecifics_2 = "TestSpec2"
const schoolTypeState_1 = true
const schoolTypeState_2 = false
const childQuestionLabel = ["First name", "Surname", "Gender", "Nationality", "Date of birth"];
const schoolSearchLabel = ["Current school year", "Preferred curriculum", "Please tell us of any", "School type", "School specifics"];
const needAnalysisUpdMsg = "details have been updated. Thank you."

describe('Client Corporate structure page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to need analysis tab and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await needAnalysisPage.clickNeedAnalysisTab();
        expect(await needAnalysisPage.getNeedAnalysisLabelText()).toBe("Needs analysis");
    });

    it('Verify children section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_3);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickAddPersonBtn();
        await needAnalysisPage.setChildDetails(childQuestionLabel, firstName, surname, gender, nationality, dob);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[0])).toBe(firstName);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[1])).toBe(surname);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[2])).toBe(gender);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[3])).toBe(nationality);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[4]))).toBe(dob);
        await commonElements.refreshPage();
    });
    it('Verify schoolSearch section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_8);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setSchoolSearchDetails(schoolSearchLabel, schoolYear_1, curriculum_1, specialRequire_1, schoolType_1, schoolType_2, schoolSpecifics_1, schoolTypeState_1, schoolTypeState_2)
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[0])).toBe(schoolYear_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[1])).toBe(curriculum_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[2])).toBe(specialRequire_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[3])).toBe(schoolType_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[4])).toBe(schoolSpecifics_1);
    });
    it('Verify edti schoolSearch section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_8);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setSchoolSearchDetails(schoolSearchLabel, schoolYear_2, curriculum_2, specialRequire_2, schoolType_1, schoolType_2, schoolSpecifics_2, schoolTypeState_2, schoolTypeState_1)
        await commonElements.clickCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[0])).toBe(schoolYear_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[1])).toBe(curriculum_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[2])).toBe(specialRequire_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[3])).toBe(schoolType_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[4])).toBe(schoolSpecifics_1);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setSchoolSearchDetails(schoolSearchLabel, schoolYear_2, curriculum_2, specialRequire_2, schoolType_1, schoolType_2, schoolSpecifics_2, schoolTypeState_2, schoolTypeState_1)
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[0])).toBe(schoolYear_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[1])).toBe(curriculum_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[2])).toBe(specialRequire_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[3])).toBe(schoolType_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolSearchLabel[4])).toBe(schoolSpecifics_2);
    });
    it('Verify remove btn', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_3);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickRemovePersonBtn();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
    });
});


