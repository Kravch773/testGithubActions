import commonElements from '../../../../../helper/commonElements';
import passSignIn from '../../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../../pageobjects/assignment/initiatedServices.page';
import needAnalysisPage from '../../../../../pageobjects/assignment/needAnalysis.page';
import homeSearchPage from '../../../../../pageobjects/assignment/services/homeSearch.page';
import assignmentsPage from '../../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../../pageobjects/clients/clients.page';

const startDate = commonElements.getCurrentDateNo0Format()
const serviceName = "Home search"
const address_1 = ["TestStreet_11", "TestStreet_12", "TestStreet_13", "TestStreet_14"]
const city_1 = "London"
const countryState_1 = "testState_1"
const postalCode_1 = "045453"
const country_1 = "United Kingdom"
const partnerName_1 = "Roebuck"

const propertyType_1 = "Furnished"
const propertyType_2 = "Unfurnished"
const payingRentalPerson_1 = "Myself"
const payingRentalPerson_2 = "My company"
const state_1 = "Yes"
const state_2 = "No"
const numOfFloor_1 = "4"
const numOfFloor_2 = "7"
const largeItemDescribe_1 = "testItem1"
const largeItemDescribe_2 = "testItem2"
const homeOtherQuestionLabel = ["Will you require a property that", "Will you require rental furniture", "Would you consider a basment", "If there is no lift, what is the maximum", "Do you plan to have", "Are there any large or unusal", "If so please describe"]
const needAnalysisUpdMsg = "Home search details have been updated. Thank you."


describe('Home search NA Other test', () => {

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
    });
    it('Verify Home search (Other info) section', async () => {
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickOtherNATabBtn();
        await homeSearchPage.clickHomeOtherEditBtn();
        await needAnalysisPage.setHomeOtherDetails(homeOtherQuestionLabel, propertyType_1,payingRentalPerson_1,state_1,numOfFloor_1,largeItemDescribe_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await homeSearchPage.clickOtherNATabBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[0])).toBe(propertyType_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[1])).toBe(payingRentalPerson_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[2])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[3])).toBe(numOfFloor_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[4])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[5])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_1);
    });

    it('Verify edit Home search (Other info) section', async () => {
        await homeSearchPage.clickOtherNATabBtn();
        await homeSearchPage.clickHomeOtherEditBtn();
        await needAnalysisPage.setHomeOtherDetails(homeOtherQuestionLabel, propertyType_2,payingRentalPerson_2,state_2,numOfFloor_2,largeItemDescribe_2);
        await commonElements.clickDialogWindowCancelBtn();
        await homeSearchPage.clickOtherNATabBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[0])).toBe(propertyType_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[1])).toBe(payingRentalPerson_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[2])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[3])).toBe(numOfFloor_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[4])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[5])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_1);
        await homeSearchPage.clickHomeOtherEditBtn();
        await needAnalysisPage.setHomeOtherDetails(homeOtherQuestionLabel, propertyType_2,payingRentalPerson_2,state_2,numOfFloor_2,largeItemDescribe_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await homeSearchPage.clickOtherNATabBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[0])).toBe(propertyType_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[1])).toBe(payingRentalPerson_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[2])).toBe(state_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[3])).toBe(numOfFloor_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[4])).toBe(state_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[5])).toBe(state_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_2);
    });
    it('Verify Partner HomeSearch(Other) section ', async () => {
        await initiatedServicesPage.clickAddPartnerToServiceBtn();
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await commonElements.setAddress(address_1[0], address_1[1], address_1[2], address_1[3], city_1, countryState_1, postalCode_1, country_1);
        await homeSearchPage.clickOtherNATabBtn();
        await needAnalysisPage.setHomeOtherDetails(homeOtherQuestionLabel, propertyType_1, payingRentalPerson_1, state_1, numOfFloor_1, largeItemDescribe_1);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await homeSearchPage.clickOtherNATabBtn();
        expect(await commonElements.getRadioBtnState(propertyType_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingRentalPerson_1)).toBe(true);
        expect(await homeSearchPage.getHomeSearchOtherRbtnStateByLabel(homeOtherQuestionLabel[2])).toBe(state_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homeOtherQuestionLabel[3])).toBe(numOfFloor_1);
        expect(await homeSearchPage.getHomeSearchOtherRbtnStateByLabel(homeOtherQuestionLabel[4])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchOtherRbtnStateByLabel(homeOtherQuestionLabel[5])).toBe(state_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_1);
    });

    it('Verify NA Labels after set partner sections data', async () => {
        await commonElements.refreshPage();
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickOtherNATabBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[0])).toBe(propertyType_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[1])).toBe(payingRentalPerson_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[2])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[3])).toBe(numOfFloor_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[4])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[5])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_1);
        await commonElements.refreshPage();
    });

    it('Verify Edit Partner HomeSearch(Other) section ', async () => {
        await homeSearchPage.clickOtherNATabBtn();
        await needAnalysisPage.setHomeOtherDetails(homeOtherQuestionLabel, propertyType_2, payingRentalPerson_2, state_2, numOfFloor_2, largeItemDescribe_2);
        await commonElements.refreshPage();
        await homeSearchPage.clickOtherNATabBtn();
        expect(await commonElements.getRadioBtnState(propertyType_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingRentalPerson_1)).toBe(true);
        expect(await homeSearchPage.getHomeSearchOtherRbtnStateByLabel(homeOtherQuestionLabel[2])).toBe(state_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homeOtherQuestionLabel[3])).toBe(numOfFloor_1);
        expect(await homeSearchPage.getHomeSearchOtherRbtnStateByLabel(homeOtherQuestionLabel[4])).toBe(state_1);
        expect(await homeSearchPage.getHomeSearchOtherRbtnStateByLabel(homeOtherQuestionLabel[5])).toBe(state_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_1);
        await needAnalysisPage.setHomeOtherDetails(homeOtherQuestionLabel, propertyType_2, payingRentalPerson_2, state_2, numOfFloor_2, largeItemDescribe_2);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await homeSearchPage.clickOtherNATabBtn();
        expect(await commonElements.getRadioBtnState(propertyType_2)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingRentalPerson_2)).toBe(true);
        expect(await homeSearchPage.getHomeSearchOtherRbtnStateByLabel(homeOtherQuestionLabel[2])).toBe(state_2);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homeOtherQuestionLabel[3])).toBe(numOfFloor_2);
        expect(await homeSearchPage.getHomeSearchOtherRbtnStateByLabel(homeOtherQuestionLabel[4])).toBe(state_2);
        expect(await homeSearchPage.getHomeSearchOtherRbtnStateByLabel(homeOtherQuestionLabel[5])).toBe(state_2);
        expect(await initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_2);

    });
    it('Verify NA Labels after edit partner sections data', async () => {
        await commonElements.refreshPage();
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickOtherNATabBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[0])).toBe(propertyType_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[1])).toBe(payingRentalPerson_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[2])).toBe(state_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[3])).toBe(numOfFloor_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[4])).toBe(state_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[5])).toBe(state_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_2);
        await commonElements.refreshPage();
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
