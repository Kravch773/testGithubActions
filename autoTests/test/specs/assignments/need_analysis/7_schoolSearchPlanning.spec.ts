import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const needAnalysisSection_7 = "School search planning"
const schoolSearchDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(10)
const schoolSearchDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(20)
const tourPerson_1 = "Mr Test Assignee"
const tourPerson_2 = "Other"
const address_1 = ["TestStreet_11","TestStreet_12","TestStreet_13","TestStreet_14"]
const address_2 = ["TestStreet_21","TestStreet_22","TestStreet_23","TestStreet_24"]
const city_1 = "London"
const city_2 = "London"
const state_1 = "testState_1"
const state_2 = "testState_2"
const postalCode_1 = "045453"
const postalCode_2 = "222353"
const country_1 = "United Kingdom"
const country_2 = "United States"
const currency_1 = "USD"
const currency_2 = "EUR"
const currencyValue_1 = "500"
const currencyValue_2 = "720"
const currencyTerm_1 = "In total"
const currencyTerm_2 = "Per term"
const payingPerson_1 = "QA Test Client will pay"
const payingPerson_2 = "Mr Test Assignee will pay"
const tourpersonState_1 = true
const tourpersonState_2 = false
const schoolsrchQuestionLabel = ["Date(s) you would like to do", "Please confirm who will", "If K2 are not arranging your accomodation", "If you are paying fees yourself,", "for application fees?", "for activity fees?", "deposit fees?", "tuition fees?", "other fees?"]
const needAnalysisUpdMsg = "School search planning details have been updated. Thank you."

describe('Need analysis school search planning test', () => {

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
    it('Verify school search planning section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_7);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setSchoolSearchPlaning(schoolsrchQuestionLabel,schoolSearchDate_1,tourPerson_1,tourPerson_2,address_1,city_1,state_1,postalCode_1,country_1,currency_1,currencyValue_1,currencyTerm_1,payingPerson_1,tourpersonState_1,tourpersonState_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[0]))).toBe(schoolSearchDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[1])).toBe(tourPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[2])).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${state_1}\n${postalCode_1}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[3])).toContain(currencyValue_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[5])).toBe(payingPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[6])).toBe(payingPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[7])).toBe(payingPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[8])).toBe(payingPerson_1);
    });
    it('Verify edit school search planning section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_7);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setSchoolSearchPlaning(schoolsrchQuestionLabel,schoolSearchDate_2,tourPerson_1,tourPerson_2,address_2,city_2,state_2,postalCode_2,country_2,currency_2,currencyValue_2,currencyTerm_2,payingPerson_2,tourpersonState_2,tourpersonState_1);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[0]))).toBe(schoolSearchDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[1])).toBe(tourPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[2])).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${state_1}\n${postalCode_1}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[3])).toContain(currencyValue_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[5])).toBe(payingPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[6])).toBe(payingPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[7])).toBe(payingPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[8])).toBe(payingPerson_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_7);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setSchoolSearchPlaning(schoolsrchQuestionLabel,schoolSearchDate_2,tourPerson_1,tourPerson_2,address_2,city_2,state_2,postalCode_2,country_2,currency_2,currencyValue_2,currencyTerm_2,payingPerson_2,tourpersonState_2,tourpersonState_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[0]))).toBe(schoolSearchDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[1])).toBe(tourPerson_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[2])).toContain(`${address_2[0]}\n${address_2[1]}\n${address_2[2]}\n${address_2[3]}\n${city_2}\n${state_2}\n${postalCode_2}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[3])).toContain(currencyValue_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[5])).toBe(payingPerson_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[6])).toBe(payingPerson_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[7])).toBe(payingPerson_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(schoolsrchQuestionLabel[8])).toBe(payingPerson_2);

    }); 
});


