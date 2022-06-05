import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_3 = "Children"
const firstName_1 = "FirstTestName"
const firstName_2 = "FirstTestName_2"
const surname_1 = "LastTestName"
const surname_2 = "LastTestName_2"
const gender_1 = "Male"
const gender_2 = "Female"
const nationality_1 = "Ukrainian"
const nationality_2 = "British"
const dob_1 = commonElements.createGitDateFormat("11.12.2000")
const dob_2 = commonElements.createGitDateFormat("22.10.1992")
const childQuestionLabel=["First name","Surname","Gender","Nationality","Date of birth"];
const needAnalysisUpdMsg = "Children details have been updated. Thank you."

describe('Need analysis children tab test', () => {

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
        await needAnalysisPage.setChildDetails(childQuestionLabel,firstName_1, surname_1, gender_1, nationality_1, dob_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[0])).toBe(firstName_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[1])).toBe(surname_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[2])).toBe(gender_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[3])).toBe(nationality_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[4]))).toBe(dob_1);
    });
    it('Verify edit children section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_3);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setChildDetails(childQuestionLabel,firstName_2, surname_2, gender_2, nationality_2, dob_2);
        await commonElements.clickCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[0])).toBe(firstName_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[1])).toBe(surname_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[2])).toBe(gender_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[3])).toBe(nationality_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[4]))).toBe(dob_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_3);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setChildDetails(childQuestionLabel,firstName_2, surname_2, gender_2, nationality_2, dob_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[0])).toBe(firstName_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[1])).toBe(surname_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[2])).toBe(gender_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[3])).toBe(nationality_2);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[4]))).toBe(dob_2);
    });
    it('Verify remove children', async () => {
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickRemovePersonBtn();
        await commonElements.clickCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[0])).toBe(firstName_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(childQuestionLabel[1])).toBe(surname_2);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickRemovePersonBtn();
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
    });
});


