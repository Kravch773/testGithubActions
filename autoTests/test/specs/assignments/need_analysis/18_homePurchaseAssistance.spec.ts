import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_18 ="Home purchase assistance"
const kindOfHome_1 = "Single Family home"
const kindOfHome_2 = "Condominium"
const numOfbedrooms_1 = "2"
const numOfbedrooms_2 = "4" 
const numOfbathrooms_1 = "1"
const numOfbathrooms_2 = "3" 
const locations_1 = "cityWater"
const locations_2 = "sewer"
const importantDetails_1 = "Suburbs"
const importantDetails_2 = "Close to airport"
const otherDetails_1="testDetails1"
const otherDetails_2= "testDetails2"
const purchaseAssistanceQuestionLabel = ["What type of home will","Number of bedrooms","Number of bathrooms","Locations which you would","Please tell us what else is important","Anything else we should know?"]
const needAnalysisUpdMsg = "Home purchase assistance details have been updated. Thank you."

describe('Neeed analysis Home purchase assistance tab test', () => {

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
    it('Verify Home purchase assistance section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_18);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPurchaseAssistance(purchaseAssistanceQuestionLabel,kindOfHome_1,numOfbedrooms_1,numOfbathrooms_1,locations_1,importantDetails_1,otherDetails_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[0])).toBe(kindOfHome_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[1])).toBe(numOfbedrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[2])).toBe(numOfbathrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[3])).toContain(locations_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[4])).toBe(importantDetails_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[5])).toBe(otherDetails_1);
      });

    it('Verify edit Home purchase assistance section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_18);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPurchaseAssistance(purchaseAssistanceQuestionLabel,kindOfHome_2,numOfbedrooms_2,numOfbathrooms_2,locations_2,importantDetails_2,otherDetails_2);
        await commonElements.clickCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[0])).toBe(kindOfHome_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[1])).toBe(numOfbedrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[2])).toBe(numOfbathrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[3])).toContain(locations_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[4])).toBe(importantDetails_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[5])).toBe(otherDetails_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_18);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPurchaseAssistance(purchaseAssistanceQuestionLabel,kindOfHome_2,numOfbedrooms_2,numOfbathrooms_2,locations_2,importantDetails_2,otherDetails_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[0])).toBe(kindOfHome_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[1])).toBe(numOfbedrooms_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[2])).toBe(numOfbathrooms_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[3])).toContain(locations_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[4])).toBe(importantDetails_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(purchaseAssistanceQuestionLabel[5])).toBe(otherDetails_2);
    });
});


