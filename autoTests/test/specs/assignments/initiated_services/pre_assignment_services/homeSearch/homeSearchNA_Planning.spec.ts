import commonElements from '../../../../../helper/commonElements';
import familyMembers from '../../../../../helper/familyMembers';
import passSignIn from '../../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../../pageobjects/assignment/initiatedServices.page';
import needAnalysisPage from '../../../../../pageobjects/assignment/needAnalysis.page';
import homeSearchPage from '../../../../../pageobjects/assignment/services/homeSearch.page';
import assignmentsPage from '../../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../../pageobjects/clients/clients.page';

const startDate = commonElements.getCurrentDateNo0Format()
const serviceName = "Home search"
const orientationDate_1 = commonElements.getCurrentDateNo0Format()
const orientationDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const tourPerson_1 = "Mr Test Assignee"
const tourPerson_2 = "Other"
const homeSearchPlace_1 = "TestPlace_1"
const homeSearchPlace_2 = "TestPlace_2"
const currentHome_1 = "TestStreet 1, Test City"
const currentHome_2 = "TestStreet 2, Test City2"
const chbState_1 = true
const chbState_2 = false
const address_1 = ["TestStreet_11", "TestStreet_12", "TestStreet_13", "TestStreet_14"]
const city_1 = "London"
const state_1 = "testState_1"
const postalCode_1 = "045453"
const country_1 = "United Kingdom"
const partnerName_1 = "Roebuck"
const homePlanningQuestionLabel = ["Date(s) you would like to", "who will be attending the tour", "staying when on home search", "about your current home"]
const needAnalysisUpdMsg = "Home search planning details have been updated. Thank you."


describe('Home search NA test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / Home search page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / " + serviceName);
        // await familyMembers.addFamilyMember();
    });
    it('Verify HomeSearch(Planning) section ', async () => {
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickHomePlaningEditBtn();
        await needAnalysisPage.setHomePlanningDetails(homePlanningQuestionLabel, orientationDate_1, tourPerson_1, tourPerson_2, homeSearchPlace_1, currentHome_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[0]))).toContain(orientationDate_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(chbState_1);
        // expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(chbState_2); // bug label didnt changed
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[3])).toBe(currentHome_1);
    });
    it('Verify edit HomeSearch(Planning) section', async () => {
        await homeSearchPage.clickHomePlaningEditBtn();
        await needAnalysisPage.setHomePlanningDetails(homePlanningQuestionLabel, orientationDate_2, tourPerson_2, tourPerson_1, homeSearchPlace_2, currentHome_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[0]))).toContain(orientationDate_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(chbState_1);
        // expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(chbState_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[3])).toBe(currentHome_1);
        await commonElements.refreshPage();
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickHomePlaningEditBtn();
        await needAnalysisPage.setHomePlanningDetails(homePlanningQuestionLabel, orientationDate_2, tourPerson_2, tourPerson_1, homeSearchPlace_2, currentHome_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[0]))).toContain(orientationDate_2);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(chbState_2);
        // expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(chbState_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[3])).toBe(currentHome_2);
        await commonElements.refreshPage();
    });

    it('Verify Partner HomeSearch(Planning) section ', async () => {
        await initiatedServicesPage.clickAddPartnerToServiceBtn();
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await commonElements.setAddress(address_1[0], address_1[1], address_1[2], address_1[3], city_1, state_1, postalCode_1, country_1)
        await needAnalysisPage.setHomePlanningDetails(homePlanningQuestionLabel, orientationDate_1, tourPerson_1, tourPerson_2, homeSearchPlace_1, currentHome_1);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await homeSearchPage.getPlannigDateValue(homePlanningQuestionLabel[0])).toBe(orientationDate_1);
        expect(await homeSearchPage.getArrangedPlaceValue(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_1);
        expect(await homeSearchPage.getCurrentHomeValue(homePlanningQuestionLabel[3])).toBe(currentHome_1);
        await homeSearchPage.clickHomeSearchNAToggle();
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[0]))).toContain(orientationDate_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(chbState_1);
        // expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(chbState_2); // bug label didnt changed
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[3])).toBe(currentHome_1);
    });
    it('Verify Edit Partner HomeSearch(Planning) section ', async () => {
        await needAnalysisPage.setHomePlanningDetails(homePlanningQuestionLabel, orientationDate_2, tourPerson_2, tourPerson_1, homeSearchPlace_2, currentHome_2);
        await commonElements.refreshPage();
        expect(await homeSearchPage.getPlannigDateValue(homePlanningQuestionLabel[0])).toBe(orientationDate_1);
        expect(await homeSearchPage.getArrangedPlaceValue(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_1);
        expect(await homeSearchPage.getCurrentHomeValue(homePlanningQuestionLabel[3])).toBe(currentHome_1);
        await homeSearchPage.clickHomeSearchNAToggle();
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[0]))).toContain(orientationDate_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(chbState_1);
        // expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(chbState_2); // bug label didnt changed
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[3])).toBe(currentHome_1);
        await needAnalysisPage.setHomePlanningDetails(homePlanningQuestionLabel, orientationDate_2, tourPerson_2, tourPerson_1, homeSearchPlace_2, currentHome_2);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await homeSearchPage.getPlannigDateValue(homePlanningQuestionLabel[0])).toBe(orientationDate_2);
        expect(await homeSearchPage.getArrangedPlaceValue(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_2);
        expect(await homeSearchPage.getCurrentHomeValue(homePlanningQuestionLabel[3])).toBe(currentHome_2);
        await homeSearchPage.clickHomeSearchNAToggle();
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[0]))).toContain(orientationDate_2);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(chbState_2);
        // expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(chbState_2); // bug label didnt changed
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[2])).toBe(homeSearchPlace_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePlanningQuestionLabel[3])).toBe(currentHome_2);
    });
    it('Verify Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate)
    });
    it('Verify remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await initiatedServicesPage.isNoServiceLabelExisting()).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await initiatedServicesPage.isNoServiceLabelExisting()).toBe(true);
    });
});
