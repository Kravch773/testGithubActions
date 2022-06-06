import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_6 = "Assignment details"
const startDate_1 = commonElements.getCurrentDateNo0Format()
const startDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const endDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(15)
const endDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(25)
const previousPlace_1 = "TestPlace"
const previousPlace_2 = "TestPlace_2"
const arrivalDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(35)
const arrivalDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(50)
const visaType_1 = "Type1"
const visaType_2 = "Type2"
const visaApprovalDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(355)
const visaApprovalDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(700)
const rBtnAnswer_1 = "Yes"
const rBtnAnswer_2 = "No"
const assignmentQuestionLabel = ["Your assignment start", "Assignment end", "Have you lived in", "If so where?", "Date of arrival in", "If applicable is your visa/immigratio", "Visa type", "Estimated visa approval"]
const needAnalysisUpdMsg = "Assignment details have been updated. Thank you."

describe('Need analysis Assignment details tab test', () => {

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
    it('Verify Assignment details section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_6);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setAssignmentDetails(assignmentQuestionLabel, startDate_1, endDate_1, rBtnAnswer_1, previousPlace_1, arrivalDate_1, rBtnAnswer_1, visaType_1, visaApprovalDate_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[0]))).toBe(startDate_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[1]))).toBe(endDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[2])).toBe(rBtnAnswer_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[3])).toBe(previousPlace_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[4]))).toBe(arrivalDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[5])).toBe(rBtnAnswer_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[6])).toBe(visaType_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[7]))).toBe(visaApprovalDate_1);
    });
    it('Verify edit Assignment details section', async () => {
        await commonElements.refreshPage();
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_6);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setAssignmentDetails(assignmentQuestionLabel, startDate_2, endDate_2, rBtnAnswer_2, previousPlace_2, arrivalDate_2, rBtnAnswer_2, visaType_2, visaApprovalDate_2); await commonElements.clickSaveBtn();
        await commonElements.clickDialogWindowCancelBtn();
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[0]))).toBe(startDate_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[1]))).toBe(endDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[2])).toBe(rBtnAnswer_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[3])).toBe(previousPlace_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[4]))).toBe(arrivalDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[5])).toBe(rBtnAnswer_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[6])).toBe(visaType_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[7]))).toBe(visaApprovalDate_1);
        await commonElements.refreshPage();
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_6);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setAssignmentDetails(assignmentQuestionLabel, startDate_2, endDate_2, rBtnAnswer_2, previousPlace_2, arrivalDate_2, rBtnAnswer_2, visaType_2, visaApprovalDate_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[0]))).toBe(startDate_2);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[1]))).toBe(endDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[2])).toBe(rBtnAnswer_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[3])).toBe(previousPlace_2);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[4]))).toBe(arrivalDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[5])).toBe(rBtnAnswer_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[6])).toBe(visaType_2);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(assignmentQuestionLabel[7]))).toBe(visaApprovalDate_2);
    });
});


