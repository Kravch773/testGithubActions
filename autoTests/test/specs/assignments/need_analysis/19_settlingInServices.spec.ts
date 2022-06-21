import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const needAnalysisSection_19 = "Settling in services"
const serviceRequests_1 = "Handyman"
const serviceRequests_2 = "Opening a bank account"
const serviceRequests_3 = "Medical facilities"
const serviceRequests_4 = "Local registration"
const requestSpecifics_1 = "testSpecifics1"
const requestSpecifics_2 = "testSpecifics2"
const purchaseAssistanceQuestionLabel = ["Service requests", "Service request specifics"]
const needAnalysisUpdMsg = "Settling in service details have been updated. Thank you."

describe('Client Corporate structure page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });
    it('Go to need analysis tab and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);;
        await needAnalysisPage.clickNeedAnalysisTab();
        expect(await needAnalysisPage.getNeedAnalysisLabelText()).toBe("Needs analysis");
    });
    it('Verify Settling in services section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_19);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, serviceRequests_1, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, serviceRequests_2, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisChbByLabel(false, serviceRequests_3, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisChbByLabel(false, serviceRequests_4, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisInputByLabel(requestSpecifics_1,purchaseAssistanceQuestionLabel[1])
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[0])).toBe(`${serviceRequests_1}\n${serviceRequests_2}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[1])).toBe(requestSpecifics_1);
    });

    it('Verify edit child section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_19);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setNeedAnalysisChbByLabel(false, serviceRequests_1, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisChbByLabel(false, serviceRequests_2, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, serviceRequests_3, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, serviceRequests_4, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisInputByLabel(requestSpecifics_2,purchaseAssistanceQuestionLabel[1])
        await commonElements.clickDialogWindowCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[0])).toBe(`${serviceRequests_1}\n${serviceRequests_2}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[1])).toBe(requestSpecifics_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_19);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setNeedAnalysisChbByLabel(false, serviceRequests_1, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisChbByLabel(false, serviceRequests_2, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, serviceRequests_3, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, serviceRequests_4, purchaseAssistanceQuestionLabel[0])
        await needAnalysisPage.setNeedAnalysisInputByLabel(requestSpecifics_2,purchaseAssistanceQuestionLabel[1])
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[0])).toBe(`${serviceRequests_3}\n${serviceRequests_4}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[1])).toBe(requestSpecifics_2);
    });
});


