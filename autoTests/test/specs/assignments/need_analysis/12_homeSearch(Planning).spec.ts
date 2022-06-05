import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_12 = "Home search (Planning)"
const orientationDate_1 = commonElements.getCurrentDateNo0Format()
const orientationDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const tourPerson_1 ="Mr Test Assignee"
const tourPerson_2 ="Other"
const homeSearchPlace_1 = "TestPlace_1"
const homeSearchPlace_2 = "TestPlace_2"
const currentHome_1 = "TestStreet 1, Test City"
const currentHome_2 = "TestStreet 2, Test City2"
const homePlanningQuestionLabel = ["Date(s) you would like to", "who will be attending the tour", "staying when on home search","about your current home"]
const needAnalysisUpdMsg = "Home search planning details have been updated. Thank you."

describe('Need analysis HomeSearch(Planning) tab test', () => {

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
    it('Verify HomeSearch(Planning) section ', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_12);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setHomePlanningDetails(homePlanningQuestionLabel, orientationDate_1,tourPerson_1,tourPerson_2, homeSearchPlace_1, currentHome_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[0]))).toContain(orientationDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[1])).toBe(tourPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[3])).toBe(currentHome_1);
    });
    it('Verify edit HomeSearch(Planning) section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_12);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setHomePlanningDetails(homePlanningQuestionLabel, orientationDate_2,tourPerson_2,tourPerson_1, homeSearchPlace_2, currentHome_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[0]))).toContain(orientationDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[1])).toBe(tourPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[3])).toBe(currentHome_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_12);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setHomePlanningDetails(homePlanningQuestionLabel, orientationDate_2,tourPerson_2,tourPerson_1, homeSearchPlace_2, currentHome_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[0]))).toContain(orientationDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[1])).toBe(tourPerson_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePlanningQuestionLabel[3])).toBe(currentHome_2);

    });
});


