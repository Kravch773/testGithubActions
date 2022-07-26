import commonElements from '../../../../../helper/commonElements';
import familyMembers from '../../../../../helper/familyMembers';
import passSignIn from '../../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../../pageobjects/assignment/initiatedServices.page';
import needAnalysisPage from '../../../../../pageobjects/assignment/needAnalysis.page';
import schoolSearchServicePage from '../../../../../pageobjects/assignment/services/schoolSearchService.page';
import assignmentsPage from '../../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../../pageobjects/clients/clients.page';

const serviceName = "School search"
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
const schoolSearchDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(10)
const schoolSearchDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(20)
const tourPerson_1 = "Test Assignee"
const tourPerson_2 = "Other"
const address_1 = ["TestStreet_11", "TestStreet_12", "TestStreet_13", "TestStreet_14"]
const address_2 = ["TestStreet_21", "TestStreet_22", "TestStreet_23", "TestStreet_24"]
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
const schoolSearchLabel = ["Current school year", "Preferred curriculum", "special requirements", "School type", "School specifics"];
const needAnalysisUpdMsg = "details have been updated. Thank you."

describe('SchoolSearch , documents and finance test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / schoolSearch  page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / " + serviceName);
    });
    it('Verify schoolSearch section', async () => {
        await familyMembers.addFamilyMember("Child");
        await commonElements.refreshPage();
        await schoolSearchServicePage.clickSchoolSrchNAToggle();
        await schoolSearchServicePage.clickSchoolSrchNABtn();
        await needAnalysisPage.setSchoolSearchPlaning(schoolsrchQuestionLabel, schoolSearchDate_1, tourPerson_1, tourPerson_2, address_1, city_1, state_1, postalCode_1, country_1, currency_1, currencyValue_1, currencyTerm_1, payingPerson_1, tourpersonState_1, tourpersonState_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        await schoolSearchServicePage.clickSchoolSrchNAToggle();
        expect(await commonElements.createStandartDateForm(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText("Requested dates for school search"))).toBe(schoolSearchDate_1);
        expect(await schoolSearchServicePage.isAttendingPersonSelected(tourPerson_1)).toBe(true);
        expect(await schoolSearchServicePage.isAttendingPersonSelected(tourPerson_2)).toBe(false);
        expect(await schoolSearchServicePage.getSchoolSearchFullAddressText()).toContain(address_1[0] + address_1[1] + address_1[2] + address_1[3] + city_1 + state_1 + postalCode_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[3])).toContain(currencyValue_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[5])).toBe(payingPerson_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[6])).toBe(payingPerson_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[7])).toBe(payingPerson_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[8])).toBe(payingPerson_1);
    });
    it('Verify edti schoolSearch section', async () => {
        await schoolSearchServicePage.clickSchoolSrchNABtn();
        await needAnalysisPage.setSchoolSearchPlaning(schoolsrchQuestionLabel, schoolSearchDate_2, tourPerson_2, tourPerson_1, address_2, city_2, state_2, postalCode_2, country_2, currency_2, currencyValue_2, currencyTerm_2, payingPerson_2, tourpersonState_1, tourpersonState_2);
        await commonElements.clickDialogWindowCancelBtn();
        await commonElements.refreshPage();
        await schoolSearchServicePage.clickSchoolSrchNAToggle();
        expect(await commonElements.createStandartDateForm(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText("Requested dates for school search"))).toBe(schoolSearchDate_1);
        expect(await schoolSearchServicePage.isAttendingPersonSelected(tourPerson_1)).toBe(true);
        expect(await schoolSearchServicePage.isAttendingPersonSelected(tourPerson_2)).toBe(false);
        expect(await schoolSearchServicePage.getSchoolSearchFullAddressText()).toContain(address_1[0] + address_1[1] + address_1[2] + address_1[3] + city_1 + state_1 + postalCode_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[3])).toContain(currencyValue_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[5])).toBe(payingPerson_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[6])).toBe(payingPerson_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[7])).toBe(payingPerson_1);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[8])).toBe(payingPerson_1);
        await schoolSearchServicePage.clickSchoolSrchNABtn();
        await needAnalysisPage.setSchoolSearchPlaning(schoolsrchQuestionLabel, schoolSearchDate_2, tourPerson_2, tourPerson_1, address_2, city_2, state_2, postalCode_2, country_2, currency_2, currencyValue_2, currencyTerm_2, payingPerson_2, tourpersonState_1, tourpersonState_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        await schoolSearchServicePage.clickSchoolSrchNAToggle();
        expect(await commonElements.createStandartDateForm(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText("Requested dates for school search"))).toBe(schoolSearchDate_2);
        expect(await schoolSearchServicePage.isAttendingPersonSelected(tourPerson_1)).toBe(false);
        expect(await schoolSearchServicePage.isAttendingPersonSelected(tourPerson_2)).toBe(true);
        expect(await schoolSearchServicePage.getSchoolSearchFullAddressText()).toContain(address_2[0] + address_2[1] + address_2[2] + address_2[3] + city_2 + state_2 + postalCode_2);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[3])).toContain(currencyValue_2);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[5])).toBe(payingPerson_2);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[6])).toBe(payingPerson_2);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[7])).toBe(payingPerson_2);
        expect(await schoolSearchServicePage.getSchoolSearchServiceAnalysisAnswerText(schoolsrchQuestionLabel[8])).toBe(payingPerson_2);
 
    });

    it('Verify schoolSearch section', async () => {
        await schoolSearchServicePage.clickSchoolSrchEditBtn();
        await needAnalysisPage.setSchoolSearchDetails(schoolSearchLabel, schoolYear_1, curriculum_1, specialRequire_1, schoolType_1, schoolType_2, schoolSpecifics_1, schoolTypeState_1, schoolTypeState_2)
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[0])).toBe(schoolYear_1);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[1])).toBe(curriculum_1);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[2])).toBe(specialRequire_1);
        expect(await schoolSearchServicePage.isSchoolPreferencesSelected(schoolType_1)).toBe(true);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText("Specifics")).toBe(schoolSpecifics_1);

    });
    it('Verify edti schoolSearch section', async () => {
        await schoolSearchServicePage.clickSchoolSrchEditBtn();
        await needAnalysisPage.setSchoolSearchDetails(schoolSearchLabel, schoolYear_2, curriculum_2, specialRequire_2, schoolType_2, schoolType_1, schoolSpecifics_2, schoolTypeState_1, schoolTypeState_2)
        await commonElements.clickDialogWindowCancelBtn();
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[0])).toBe(schoolYear_1);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[1])).toBe(curriculum_1);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[2])).toBe(specialRequire_1);
        expect(await schoolSearchServicePage.isSchoolPreferencesSelected(schoolType_1)).toBe(true);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText("Specifics")).toBe(schoolSpecifics_1);
        await schoolSearchServicePage.clickSchoolSrchEditBtn();
        await needAnalysisPage.setSchoolSearchDetails(schoolSearchLabel, schoolYear_2, curriculum_2, specialRequire_2, schoolType_2, schoolType_1, schoolSpecifics_2, schoolTypeState_1, schoolTypeState_2)
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[0])).toBe(schoolYear_2);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[1])).toBe(curriculum_2);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[2])).toBe(specialRequire_2);
        expect(await schoolSearchServicePage.isSchoolPreferencesSelected(schoolType_1)).toBe(false);
        expect(await schoolSearchServicePage.isSchoolPreferencesSelected(schoolType_2)).toBe(true);
        expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText("Specifics")).toBe(schoolSpecifics_2);
        await familyMembers.removeFamilyMember();
    });
});
