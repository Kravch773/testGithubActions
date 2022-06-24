import commonElements from '../../../../helper/commonElements';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import needAnalysisPage from '../../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const serviceName = "Temp. accommodation (Destination)"
const budgetAnswerLabel = "Budget"
const arrivalDate_1 = commonElements.getCurrentDateNo0Format()
const arrivalDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(2)
const accomodationDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const accomodationDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(10)
const accommodationLocations_1 = "testLoc1"
const accommodationLocations_2 = "testLoc2"
const numOfbedrooms_1 = "2"
const numOfbedrooms_2 = "4"
const numOfbathrooms_1 = "1"
const numOfbathrooms_2 = "2"
const additionalItems_1 = "testItem1"
const additionalItems_2 = "testItem2"
const familySmokers_1 = "Yes"
const familySmokers_2 = "No"
const currency_1 = "USD"
const currency_2 = "EUR"
const currencyValue_1 = "600"
const currencyValue_2 = "820"
const currencyTerm_1 = "Weekly"
const currencyTerm_2 = "One off"
const payingPerson_1 = "QA Test Client will pay"
const payingPerson_2 = "Mr Test Assignee will pay"
const tempAccommodationQuestionLabel = ["Arrival date,", "Accommodation needed until", "Preferred accommodation locations", "Number of bedrooms", "Number of bathrooms", "Do you require any additional", "Are you or any of your family", "If you are paying yourself, please tell", "Who will be paying for"]
const payingPersonType_1 = "CLIENT"
const payingPersonType_2 = "ASSIGNEE"
const needAnalysisUpdMsg = "Temporary accommodation (Destination) details have been updated. Thank you."


describe('Temp Accommodation(Destination) Service, Need Analysis Section test', () => {

    before(async () => {
        await passSignIn.signIn();
    });
    it('Go to Services / Temp accommodation (Destination) tab and check label', async () => {

        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / Temp accommodation (Destination)");
    });
    it('Verify Temp accommodation (Destination) Needs analysis form', async () => {
        await initiatedServicesPage.clickNeedAnalysisServiceToggle();
        await initiatedServicesPage.clickNeedAnalysisServiceEditBtn();
        await needAnalysisPage.setTempAccommodationDestination(tempAccommodationQuestionLabel, arrivalDate_1, accomodationDate_1, accommodationLocations_1, numOfbedrooms_1, numOfbathrooms_1, additionalItems_1, familySmokers_1, currency_1, currencyValue_1, currencyTerm_1, payingPerson_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[0]))).toContain(arrivalDate_1);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[1]))).toContain(accomodationDate_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[2])).toBe(accommodationLocations_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[3])).toBe(numOfbedrooms_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[4])).toBe(numOfbathrooms_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[5])).toBe(additionalItems_1);
        expect(await (await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[6])).toLowerCase()).toContain(familySmokers_1.toLowerCase());
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyValue_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyTerm_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[8])).toBe(payingPersonType_1);
    });
    it('Verify Edit Temp accommodation (Destination) Needs analysis form', async () => {
        await initiatedServicesPage.clickNeedAnalysisServiceEditBtn();
        await needAnalysisPage.setTempAccommodationDestination(tempAccommodationQuestionLabel, arrivalDate_1, accomodationDate_1, accommodationLocations_1, numOfbedrooms_1, numOfbathrooms_1, additionalItems_1, familySmokers_1, currency_1, currencyValue_1, currencyTerm_1, payingPerson_1);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[0]))).toContain(arrivalDate_1);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[1]))).toContain(accomodationDate_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[2])).toBe(accommodationLocations_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[3])).toBe(numOfbedrooms_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[4])).toBe(numOfbathrooms_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[5])).toBe(additionalItems_1);
        expect(await (await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[6])).toLowerCase()).toContain(familySmokers_1.toLowerCase());
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyValue_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyTerm_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[8])).toBe(payingPersonType_1);
        await commonElements.refreshPage();
        await initiatedServicesPage.clickNeedAnalysisServiceToggle();
        await initiatedServicesPage.clickNeedAnalysisServiceEditBtn();
        await needAnalysisPage.setTempAccommodationDestination(tempAccommodationQuestionLabel, arrivalDate_2, accomodationDate_2, accommodationLocations_2, numOfbedrooms_2, numOfbathrooms_2, additionalItems_2, familySmokers_2, currency_2, currencyValue_2, currencyTerm_2, payingPerson_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[0]))).toContain(arrivalDate_2);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[1]))).toContain(accomodationDate_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[2])).toBe(accommodationLocations_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[3])).toBe(numOfbedrooms_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[4])).toBe(numOfbathrooms_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[5])).toBe(additionalItems_2);
        expect(await (await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[6])).toLowerCase()).toContain(familySmokers_2.toLowerCase());
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyValue_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyTerm_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[8])).toBe(payingPersonType_2);
    });
});
