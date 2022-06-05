import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_9 = "Temp accommodation (Origin)"
const arrivalDate_1 = commonElements.getCurrentDateNo0Format()
const arrivalDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(8)
const accomodationDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(12)
const accomodationDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(15)
const currency_1 = "USD"
const currency_2 = "EUR"
const currencyValue_1 = "700"
const currencyValue_2 = "220"
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
const tempAccommodationQuestionLabel = ["Arrival date,", "Accomodation needed", "If you are paying yourself,", "Preferred accommodation locations", "Number of bedrooms", "Number of bathrooms", "Do you require any additional", "Are you or any of your", "Who will be paying"]
const needAnalysisUpdMsg = "Temporary accommodation (Origin) details have been updated. Thank you."

describe('Need analysis TempAccommodation(Origin) tab test', () => {

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
    it('Verify TempAccommodation(Origin) section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_9);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setTempAccommodationOrigin(tempAccommodationQuestionLabel, arrivalDate_1, accomodationDate_1, currency_1, currencyValue_1, currencyTerm_1, accommodationLocations_1, numOfbedrooms_1, numOfbathrooms_1, additionalItems_1, familySmokers_1, payingPerson_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[0]))).toContain(arrivalDate_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[1]))).toContain(accomodationDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[2])).toContain(currencyValue_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[3])).toContain(accommodationLocations_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[4])).toContain(numOfbedrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[5])).toBe(numOfbathrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[6])).toBe(additionalItems_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[7])).toBe(familySmokers_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[8])).toBe(payingPerson_1);
    });


    it('Verify edit TempAccommodation(Origin) section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_9);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setTempAccommodationOrigin(tempAccommodationQuestionLabel, arrivalDate_2, accomodationDate_2, currency_2, currencyValue_2, currencyTerm_2, accommodationLocations_2, numOfbedrooms_2, numOfbathrooms_2, additionalItems_2, familySmokers_2, payingPerson_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[0]))).toContain(arrivalDate_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[1]))).toContain(accomodationDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[2])).toContain(currencyValue_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[3])).toContain(accommodationLocations_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[4])).toContain(numOfbedrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[5])).toBe(numOfbathrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[6])).toBe(additionalItems_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[7])).toBe(familySmokers_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[8])).toBe(payingPerson_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_9);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setTempAccommodationOrigin(tempAccommodationQuestionLabel, arrivalDate_2, accomodationDate_2, currency_2, currencyValue_2, currencyTerm_2, accommodationLocations_2, numOfbedrooms_2, numOfbathrooms_2, additionalItems_2, familySmokers_2, payingPerson_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[0]))).toContain(arrivalDate_2);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[1]))).toContain(accomodationDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[2])).toContain(currencyValue_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[3])).toContain(accommodationLocations_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[4])).toContain(numOfbedrooms_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[5])).toBe(numOfbathrooms_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[6])).toBe(additionalItems_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[7])).toBe(familySmokers_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(tempAccommodationQuestionLabel[8])).toBe(payingPerson_2);

    });
});


