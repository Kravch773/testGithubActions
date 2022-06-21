import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const needAnalysisSection_14 = "Home search (Lease)"
const currency_1 = "USD"
const currency_2 = "EUR"
const currencyValue_1 = "500"
const currencyValue_2 = "144"
const currencyTerm_1 = "Weekly"
const currencyTerm_2 = "One off"
const startDate_1 = commonElements.getCurrentDateNo0Format()
const startDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(8)
const leaseName_1 = "Company name"
const leaseName_2 = "Assignee's name"
const payingPerson_1 = "QA Test Client will pay"
const payingPerson_2 = "Mr Test Assignee will pay"
const leaseSpecifics_1 = "testSpecific1"
const leaseSpecifics_2 = "testSpecific2"
const homeLeaseQuestionLabel = ["Budget","What date would you like","Whose name is the lease","Who is paying?","Lease specifics"]
const needAnalysisUpdMsg = "Home search details have been updated. Thank you."

describe('Need analysis HomeSearch(Lease) tab test', () => {

    before(async () => {
        await passSignIn.signIn();
    });
    it('Go to need analysis tab and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await needAnalysisPage.clickNeedAnalysisTab();
        expect(await needAnalysisPage.getNeedAnalysisLabelText()).toBe("Needs analysis");
    });
    it('Verify HomeSearch(Lease) section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_14);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setHomeLeaseDetails(homeLeaseQuestionLabel,currency_1,currencyValue_1,currencyTerm_1,startDate_1,leaseName_1,payingPerson_1,leaseSpecifics_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[0])).toContain(currencyValue_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[1]))).toBe(startDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[2])).toBe(leaseName_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[3])).toBe(payingPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_1);
    });
    it('Verify edit HomeSearch(Lease) section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_14);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setHomeLeaseDetails(homeLeaseQuestionLabel,currency_2,currencyValue_2,currencyTerm_2,startDate_2,leaseName_2,payingPerson_2,leaseSpecifics_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[0])).toContain(currencyValue_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[1]))).toBe(startDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[2])).toBe(leaseName_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[3])).toBe(payingPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_14);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setHomeLeaseDetails(homeLeaseQuestionLabel,currency_2,currencyValue_2,currencyTerm_2,startDate_2,leaseName_2,payingPerson_2,leaseSpecifics_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[0])).toContain(currencyValue_2);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[1]))).toBe(startDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[2])).toBe(leaseName_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[3])).toBe(payingPerson_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_2);
    });
});


