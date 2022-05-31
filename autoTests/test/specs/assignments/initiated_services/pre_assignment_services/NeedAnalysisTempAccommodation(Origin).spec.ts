import commonElements from '../../../../helper/commonElements';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import needAnalysisPage from '../../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const serviceName = "Temp. accommodation (Origin)"
const tempAccommodationQuestionLabel = ["Arrival date,", "Accomodation needed", "If you are paying yourself,", "Preferred accommodation locations", "Number of bedrooms", "Number of bathrooms", "Do you require any additional", "Are you or any of your", "Who will be paying"]
const budgetAnswerLabel = "Budget"
const needAnalysisUpdMsg = "Temporary accommodation (Origin) details have been updated. Thank you."
const arrivalDate_1 = "11.12.2022"
const arrivalDate_2 = "22.11.2022"
const accomodationDate_1 = "20.12.2022"
const accomodationDate_2 = "22.11.2022"
const currency_1 = "USD"
const currency_2 = "EUR"
const currencyValue_1 = "2 000"
const currencyValue_2 = "4 020"
const currencyTerm_1 = "Weekly"
const currencyTerm_2 = "One off"
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
const payingPerson_1 = "QA Test Client will pay"
const payingPerson_2 = "Mr Test Assignee will pay"
const payingPersonType_1 = "CLIENT"
const payingPersonType_2 = "ASSIGNEE"


xdescribe('Temp Accommodation(Origin) Service, Need Analysis Section test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / Temp accommodation (Origin) tab and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / Temp accommodation (Origin)");
    });

    it('Verify Temp accommodation (Origin) Needs analysis form', async () => {
        await initiatedServicesPage.clickNeedAnalysisServiceToggle();
        await initiatedServicesPage.clickNeedAnalysisServiceEditBtn();
        await needAnalysisPage.setTempAccommodationOrigin(tempAccommodationQuestionLabel, arrivalDate_1, accomodationDate_1, currency_1, currencyValue_1, currencyTerm_1, accommodationLocations_1, numOfbedrooms_1, numOfbathrooms_1, additionalItems_1, familySmokers_1, payingPerson_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[0])).toContain(arrivalDate_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[1])).toBe(accomodationDate_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyValue_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyTerm_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[3])).toContain(accommodationLocations_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[4])).toContain(numOfbedrooms_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[5])).toBe(numOfbathrooms_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[6])).toBe(additionalItems_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[7])).toBe(familySmokers_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[8])).toBe(payingPersonType_1);
    });
    it('Verify Edit Temp accommodation (Origin) Needs analysis form', async () => {
        await initiatedServicesPage.clickNeedAnalysisServiceEditBtn();
        await needAnalysisPage.setTempAccommodationOrigin(tempAccommodationQuestionLabel, arrivalDate_2, accomodationDate_2, currency_2, currencyValue_2, currencyTerm_2, accommodationLocations_2, numOfbedrooms_2, numOfbathrooms_2, additionalItems_2, familySmokers_2, payingPerson_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[0])).toContain(arrivalDate_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[1])).toBe(accomodationDate_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyValue_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyTerm_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[3])).toContain(accommodationLocations_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[4])).toContain(numOfbedrooms_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[5])).toBe(numOfbathrooms_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[6])).toBe(additionalItems_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[7])).toBe(familySmokers_1);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[8])).toBe(payingPersonType_1);
        await commonElements.refreshPage();
        await initiatedServicesPage.clickNeedAnalysisServiceToggle();
        await initiatedServicesPage.clickNeedAnalysisServiceEditBtn();
        await needAnalysisPage.setTempAccommodationOrigin(tempAccommodationQuestionLabel, arrivalDate_2, accomodationDate_2, currency_2, currencyValue_2, currencyTerm_2, accommodationLocations_2, numOfbedrooms_2, numOfbathrooms_2, additionalItems_2, familySmokers_2, payingPerson_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[0])).toContain(arrivalDate_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[1])).toBe(accomodationDate_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyValue_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(budgetAnswerLabel)).toContain(currencyTerm_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[3])).toContain(accommodationLocations_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[4])).toContain(numOfbedrooms_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[5])).toBe(numOfbathrooms_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[6])).toBe(additionalItems_2);
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[7])).toContain(familySmokers_2.toLowerCase());
        expect(await initiatedServicesPage.getServiceAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[8])).toBe(payingPersonType_2);
    });

});