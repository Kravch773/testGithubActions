import commonElements from '../../../../helper/commonElements';
import familyMembers from '../../../../helper/familyMembers';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import needAnalysisPage from '../../../../pageobjects/assignment/needAnalysis.page';
import homeSearchPage from '../../../../pageobjects/assignment/services/homeSearch.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const startDate = commonElements.getCurrentDateNo0Format()
const serviceName = "Home search"
const propertyKind_1 = "Flat/apartment"
const propertyKind_2 = "House"
const locationSpecifics_1 = "LocationSpecific1"
const locationSpecifics_2 = "LocationSpecific2"
const numOfbedrooms_1 = "2"
const numOfbedrooms_2 = "4"
const numOfbathrooms_1 = "1"
const numOfbathrooms_2 = "3"
const toKnownLocations_1 = "locationTest1"
const toKnownLocations_2 = "locationTest2"
const importantDetails_1 = "City"
const importantDetails_2 = "Close to work"
const propertySpecifics_1_1 = "PropertyTestSpec1_1"
const propertySpecifics_1_2 = "PropertyTestSpec1_2"
const propertySpecifics_2_1 = "PropertyTestSpec2_1"
const propertySpecifics_2_2 = "PropertyTestSpec2_2"
const kindOfProperties_1 = "Modern"
const kindOfProperties_2 = "Balcony"
const homePropertyQuestionLabel = ["What kind of property would", "Property specifics", "Number of bedrooms", "Number of bathrooms", "Locations which you", "Please tell us what else is", "Property location specifics", "Please tell us a little more", "Property specifics"]
const needAnalysisUpdMsg = "Home search details have been updated. Thank you."

const address_1 = ["TestStreet_11", "TestStreet_12", "TestStreet_13", "TestStreet_14"]
const city_1 = "London"
const state_1 = "testState_1"
const postalCode_1 = "045453"
const country_1 = "United Kingdom"
const partnerName_1 = "Roebuck"

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
    });
    it('Verify HomeSearch(Property) section', async () => {
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickPropertyNATabBtn();
        await homeSearchPage.clickHomePropertyEditBtn();
        await commonElements.setChbByLabel(propertyKind_1, true);
        await commonElements.setChbByLabel(propertyKind_2, false);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(propertySpecifics_1_1, homePropertyQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbedrooms_1, homePropertyQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbathrooms_1, homePropertyQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(toKnownLocations_1, homePropertyQuestionLabel[4]);
        await commonElements.setChbByLabel(importantDetails_1, true);
        await commonElements.setChbByLabel(importantDetails_2, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(locationSpecifics_1, homePropertyQuestionLabel[6]);
        await commonElements.setChbByLabel(kindOfProperties_1, true);
        await commonElements.setChbByLabel(kindOfProperties_2, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(propertySpecifics_2_1, homePropertyQuestionLabel[8]);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await homeSearchPage.clickPropertyNATabBtn();
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_2)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[4])).toBe(toKnownLocations_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_2)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[6])).toBe(locationSpecifics_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_2)).toBe(false);
        expect(await homeSearchPage.gethomePropertySpecificAnswerText_2()).toBe(propertySpecifics_2_1);
    });

    it('Verify edit HomeSearch(Property) section', async () => {
        await homeSearchPage.clickPropertyNATabBtn();
        await homeSearchPage.clickHomePropertyEditBtn();
        await commonElements.setChbByLabel(propertyKind_1, true);
        await commonElements.setChbByLabel(propertyKind_2, false);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(propertySpecifics_1_2, homePropertyQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbedrooms_2, homePropertyQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbathrooms_2, homePropertyQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(toKnownLocations_2, homePropertyQuestionLabel[4]);
        await commonElements.setChbByLabel(importantDetails_2, true);
        await commonElements.setChbByLabel(importantDetails_1, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(locationSpecifics_2, homePropertyQuestionLabel[6]);
        await commonElements.setChbByLabel(kindOfProperties_2, true);
        await commonElements.setChbByLabel(kindOfProperties_1, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(propertySpecifics_2_2, homePropertyQuestionLabel[8]);
        await commonElements.clickDialogWindowCancelBtn();
        await homeSearchPage.clickPropertyNATabBtn();
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_2)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[4])).toBe(toKnownLocations_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_2)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[6])).toBe(locationSpecifics_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_2)).toBe(false);
        expect(await homeSearchPage.gethomePropertySpecificAnswerText_2()).toBe(propertySpecifics_2_1);

        await homeSearchPage.clickPropertyNATabBtn();
        await homeSearchPage.clickHomePropertyEditBtn();
        await commonElements.setChbByLabel(propertyKind_2, true);
        await commonElements.setChbByLabel(propertyKind_1, false);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(propertySpecifics_1_2, homePropertyQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbedrooms_2, homePropertyQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbathrooms_2, homePropertyQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(toKnownLocations_2, homePropertyQuestionLabel[4]);
        await commonElements.setChbByLabel(importantDetails_2, true);
        await commonElements.setChbByLabel(importantDetails_1, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(locationSpecifics_2, homePropertyQuestionLabel[6]);
        await commonElements.setChbByLabel(kindOfProperties_2, true);
        await commonElements.setChbByLabel(kindOfProperties_1, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(propertySpecifics_2_2, homePropertyQuestionLabel[8]);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await homeSearchPage.clickPropertyNATabBtn();
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_1)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[4])).toBe(toKnownLocations_2);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_1)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[6])).toBe(locationSpecifics_2);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_1)).toBe(false);
        expect(await homeSearchPage.gethomePropertySpecificAnswerText_2()).toBe(propertySpecifics_2_2);
    });
    it('Verify HomeSearch(Property) section', async () => {
        await initiatedServicesPage.clickAddPartnerToServiceBtn();
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await commonElements.setAddress(address_1[0], address_1[1], address_1[2], address_1[3], city_1, state_1, postalCode_1, country_1)
        await homeSearchPage.clickPropertyNATabBtn();
        await commonElements.setChbByLabel(propertyKind_1, true);
        await commonElements.setChbByLabel(propertyKind_2, false);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(propertySpecifics_1_1, homePropertyQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbedrooms_1, homePropertyQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbathrooms_1, homePropertyQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(toKnownLocations_1, homePropertyQuestionLabel[4]);
        await commonElements.setChbByLabel(importantDetails_1, true);
        await commonElements.setChbByLabel(importantDetails_2, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(locationSpecifics_1, homePropertyQuestionLabel[6]);
        await commonElements.setChbByLabel(kindOfProperties_1, true);
        await commonElements.setChbByLabel(kindOfProperties_2, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(propertySpecifics_2_1, homePropertyQuestionLabel[8]);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await homeSearchPage.clickPropertyNATabBtn();
        expect(await commonElements.getChbState(propertyKind_1)).toBe(true);
        expect(await commonElements.getChbState(propertyKind_2)).toBe(false);
        expect(await initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(homePropertyQuestionLabel[4])).toBe(toKnownLocations_1);
        expect(await commonElements.getChbState(importantDetails_1)).toBe(true);
        expect(await commonElements.getChbState(importantDetails_2)).toBe(false);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[6])).toBe(locationSpecifics_1);
        expect(await commonElements.getChbState(kindOfProperties_1)).toBe(true);
        expect(await commonElements.getChbState(kindOfProperties_2)).toBe(false);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[8])).toBe(propertySpecifics_2_1);
    });

    it('Verify NA Labels after set partner sections data', async () => {
        await commonElements.refreshPage();
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickPropertyNATabBtn();
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_2)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[4])).toBe(toKnownLocations_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_2)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[6])).toBe(locationSpecifics_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_2)).toBe(false);
        expect(await homeSearchPage.gethomePropertySpecificAnswerText_2()).toBe(propertySpecifics_2_1);
        await commonElements.refreshPage();
    });

    it('Verify Edit HomeSearch(Property) section', async () => {
        await homeSearchPage.clickPropertyNATabBtn();
        await commonElements.setChbByLabel(propertyKind_2, true);
        await commonElements.setChbByLabel(propertyKind_1, false);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(propertySpecifics_1_2, homePropertyQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbedrooms_2, homePropertyQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbathrooms_2, homePropertyQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(toKnownLocations_2, homePropertyQuestionLabel[4]);
        await commonElements.setChbByLabel(importantDetails_2, true);
        await commonElements.setChbByLabel(importantDetails_1, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(locationSpecifics_2, homePropertyQuestionLabel[6]);
        await commonElements.setChbByLabel(kindOfProperties_2, true);
        await commonElements.setChbByLabel(kindOfProperties_1, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(propertySpecifics_2_2, homePropertyQuestionLabel[8]);
        await commonElements.refreshPage();
        await homeSearchPage.clickPropertyNATabBtn();
        expect(await commonElements.getChbState(propertyKind_1)).toBe(true);
        expect(await commonElements.getChbState(propertyKind_2)).toBe(false);
        expect(await initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(homePropertyQuestionLabel[4])).toBe(toKnownLocations_1);
        expect(await commonElements.getChbState(importantDetails_1)).toBe(true);
        expect(await commonElements.getChbState(importantDetails_2)).toBe(false);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[6])).toBe(locationSpecifics_1);
        expect(await commonElements.getChbState(kindOfProperties_1)).toBe(true);
        expect(await commonElements.getChbState(kindOfProperties_2)).toBe(false);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[8])).toBe(propertySpecifics_2_1);
        await homeSearchPage.clickPropertyNATabBtn();
        await commonElements.setChbByLabel(propertyKind_2, true);
        await commonElements.setChbByLabel(propertyKind_1, false);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(propertySpecifics_1_2, homePropertyQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbedrooms_2, homePropertyQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbathrooms_2, homePropertyQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(toKnownLocations_2, homePropertyQuestionLabel[4]);
        await commonElements.setChbByLabel(importantDetails_2, true);
        await commonElements.setChbByLabel(importantDetails_1, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(locationSpecifics_2, homePropertyQuestionLabel[6]);
        await commonElements.setChbByLabel(kindOfProperties_2, true);
        await commonElements.setChbByLabel(kindOfProperties_1, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(propertySpecifics_2_2, homePropertyQuestionLabel[8]);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await homeSearchPage.clickPropertyNATabBtn();
        expect(await commonElements.getChbState(propertyKind_2)).toBe(true);
        expect(await commonElements.getChbState(propertyKind_1)).toBe(false);
        expect(await initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_2);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_2);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_2);
        expect(await initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(homePropertyQuestionLabel[4])).toBe(toKnownLocations_2);
        expect(await commonElements.getChbState(importantDetails_2)).toBe(true);
        expect(await commonElements.getChbState(importantDetails_1)).toBe(false);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[6])).toBe(locationSpecifics_2);
        expect(await commonElements.getChbState(kindOfProperties_2)).toBe(true);
        expect(await commonElements.getChbState(kindOfProperties_1)).toBe(false);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homePropertyQuestionLabel[8])).toBe(propertySpecifics_2_2);
    });

    it('Verify  NA Labels after edited partner sections data changed', async () => {
        await commonElements.refreshPage();
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickPropertyNATabBtn();
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(propertyKind_1)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[4])).toBe(toKnownLocations_2);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(importantDetails_1)).toBe(false);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homePropertyQuestionLabel[6])).toBe(locationSpecifics_2);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(kindOfProperties_1)).toBe(false);
        expect(await homeSearchPage.gethomePropertySpecificAnswerText_2()).toBe(propertySpecifics_2_2);
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
