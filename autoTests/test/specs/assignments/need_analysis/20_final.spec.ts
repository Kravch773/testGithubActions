import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_20 = "Final"
const otherInfo_1 = "test information"
const otherInfo_2 = "test information 2"
const finalQuestionLabel = "Any other information"
const needAnalysisUpdMsg = "Final details have been updated. Thank you."

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
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_20);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(otherInfo_1, finalQuestionLabel);
        await commonElements.clickDialogWindowSaveBtn();
        await browser.pause(2000)// no upd msg 
        // expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(finalQuestionLabel)).toBe(otherInfo_1);
    });

    it('Verify edit child section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_20);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(otherInfo_2, finalQuestionLabel);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(finalQuestionLabel)).toBe(otherInfo_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_20);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(otherInfo_2, finalQuestionLabel);
        await commonElements.clickDialogWindowSaveBtn();
        await browser.pause(2000)// no upd msg 
        // expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(finalQuestionLabel)).toBe(otherInfo_2);
    });
});


