import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_4 = "Other party members"
const firstName_1 = "FirstTestName"
const firstName_2 = "FirstTestName_2"
const surname_1 = "LastTestName"
const surname_2 = "LastTestName_2"
const gender_1 = "Male"
const gender_2 = "Female"
const nationality_1 = "Ukrainian"
const nationality_2 = "British"
const otherPQuestionLabel=["First name","Surname","Gender","Nationality"];
const needAnalysisUpdMsg = "Other party member details have been updated. Thank you."

describe('Need analysis other members tab test', () => {

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

    it('Verify other person section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_4);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickAddPersonBtn();
        await needAnalysisPage.setPersonDetails(otherPQuestionLabel,firstName_1, surname_1, gender_1, nationality_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[0])).toBe(firstName_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[1])).toBe(surname_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[2])).toBe(gender_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[3])).toBe(nationality_1);
    });
    it('Verify edit other person section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_4);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPersonDetails(otherPQuestionLabel,firstName_2, surname_2, gender_2, nationality_2);
        await commonElements.clickCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[0])).toBe(firstName_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[1])).toBe(surname_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[2])).toBe(gender_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[3])).toBe(nationality_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_4);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPersonDetails(otherPQuestionLabel,firstName_2, surname_2, gender_2, nationality_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[0])).toBe(firstName_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[1])).toBe(surname_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[2])).toBe(gender_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[3])).toBe(nationality_2);
    });

    it('Verify remove other person ', async () => {
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickRemovePersonBtn();
        await commonElements.clickCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[0])).toBe(firstName_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[1])).toBe(surname_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[2])).toBe(gender_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(otherPQuestionLabel[3])).toBe(nationality_2);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickRemovePersonBtn();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
    });
});


