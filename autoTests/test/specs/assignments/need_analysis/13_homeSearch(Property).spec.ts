import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const needAnalysisSection_13 = "Home search (Property)"
const propertyKind_1 = "Flat/apartment"
const propertyKind_2 = "Other"
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

describe('Need analysis HomeSearch(Property) tab test', () => {

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
    it('Verify HomeSearch(Property) section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_13);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, propertyKind_1, homePropertyQuestionLabel[0]);
        await needAnalysisPage.setNeedAnalysisChbByLabel(false, propertyKind_2, homePropertyQuestionLabel[0]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(propertySpecifics_1_1, homePropertyQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbedrooms_1, homePropertyQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbathrooms_1, homePropertyQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(toKnownLocations_1, homePropertyQuestionLabel[4]);
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, importantDetails_1, homePropertyQuestionLabel[5]);
        await needAnalysisPage.setNeedAnalysisChbByLabel(false, importantDetails_2, homePropertyQuestionLabel[5]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(locationSpecifics_1, homePropertyQuestionLabel[6]);
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, kindOfProperties_1, homePropertyQuestionLabel[7]);
        await needAnalysisPage.setNeedAnalysisChbByLabel(false, kindOfProperties_2, homePropertyQuestionLabel[7]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(propertySpecifics_2_1,homePropertyQuestionLabel[8] );
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[0])).toBe(propertyKind_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[4])).toBe(toKnownLocations_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[5])).toBe(importantDetails_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[6])).toBe(locationSpecifics_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[7])).toBe(kindOfProperties_1);
        expect(await needAnalysisPage.gethomePropertySpecificsText_3()).toBe(propertySpecifics_2_1);
    });

    it('Verify edit HomeSearch(Property) section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_13);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, propertyKind_2, homePropertyQuestionLabel[0]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(propertySpecifics_2_1, homePropertyQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbedrooms_2, homePropertyQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbathrooms_2, homePropertyQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(toKnownLocations_2, homePropertyQuestionLabel[4]);
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, importantDetails_2, homePropertyQuestionLabel[5])
        await needAnalysisPage.setNeedAnalysisInputByLabel(locationSpecifics_2, homePropertyQuestionLabel[6]);
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, kindOfProperties_2, homePropertyQuestionLabel[7]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(propertySpecifics_2_2,homePropertyQuestionLabel[8] );
        await commonElements.clickDialogWindowCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[0])).toBe(propertyKind_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[1])).toBe(propertySpecifics_1_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[4])).toBe(toKnownLocations_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[5])).toBe(importantDetails_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[6])).toBe(locationSpecifics_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[7])).toBe(kindOfProperties_1);
        expect(await needAnalysisPage.gethomePropertySpecificsText_3()).toBe(propertySpecifics_2_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_13);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, propertyKind_2, homePropertyQuestionLabel[0]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(propertySpecifics_2_1, homePropertyQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbedrooms_2, homePropertyQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfbathrooms_2, homePropertyQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(toKnownLocations_2, homePropertyQuestionLabel[4]);
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, importantDetails_2, homePropertyQuestionLabel[5])
        await needAnalysisPage.setNeedAnalysisInputByLabel(locationSpecifics_2, homePropertyQuestionLabel[6]);
        await needAnalysisPage.setNeedAnalysisChbByLabel(true, kindOfProperties_2, homePropertyQuestionLabel[7]);
        await commonElements.setInputValue(propertySpecifics_2_2, needAnalysisPage.homePropertySpecifics_3);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[0])).toBe(propertyKind_1+"\n"+propertyKind_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[1])).toBe(propertySpecifics_2_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[2])).toBe(numOfbedrooms_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[3])).toBe(numOfbathrooms_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[4])).toBe(toKnownLocations_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[5])).toBe(importantDetails_1+"\n"+importantDetails_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[6])).toBe(locationSpecifics_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homePropertyQuestionLabel[7])).toBe(kindOfProperties_1+"\n"+kindOfProperties_2);
        expect(await needAnalysisPage.gethomePropertySpecificsText_3()).toBe(propertySpecifics_2_2);
    });
});


