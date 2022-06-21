import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const needAnalysisSection_11 = "Orientation"
const orientationDate_1 = commonElements.getCurrentDateNo0Format()
const orientationDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(5)
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
const orientationLocations_1 = "testLocation1"
const orientationLocations_2 = "testLocation2"
const tourPerson_1 ="Mr Test Assignee"
const tourPerson_2 ="Other"
const orientationQuestionLabel = ["Date(s) you would like to", "who will be attending the tour", "when on orientation","orientation locations (if known)"]
const needAnalysisUpdMsg = "Orientation details have been updated. Thank you."

describe('Need analyis Orientation tab test', () => {

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
    it('Verify Orientation form', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_11);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setOrientationDetails(orientationQuestionLabel, orientationDate_1,tourPerson_1,tourPerson_2, address_1, city_1, state_1, postalCode_1, country_1, orientationLocations_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[0]))).toContain(orientationDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[1])).toContain(tourPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[2])).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${state_1}\n${postalCode_1}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[3])).toBe(orientationLocations_1);
    });


    it('Verify edit Orientation section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_11);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setOrientationDetails(orientationQuestionLabel, orientationDate_2,tourPerson_2,tourPerson_1, address_2, city_2, state_2, postalCode_2, country_2, orientationLocations_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[0]))).toContain(orientationDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[1])).toContain(tourPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[2])).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${state_1}\n${postalCode_1}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[3])).toBe(orientationLocations_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_11);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setOrientationDetails(orientationQuestionLabel, orientationDate_2,tourPerson_2,tourPerson_1, address_2, city_2, state_2, postalCode_2, country_2, orientationLocations_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[0]))).toContain(orientationDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[1])).toContain(tourPerson_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[2])).toContain(`${address_2[0]}\n${address_2[1]}\n${address_2[2]}\n${address_2[3]}\n${city_2}\n${state_2}\n${postalCode_2}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(orientationQuestionLabel[3])).toBe(orientationLocations_2);

    });
});


