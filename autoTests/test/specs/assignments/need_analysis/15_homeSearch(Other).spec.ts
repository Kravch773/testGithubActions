import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const needAnalysisSection_15 = "Home search (Other info)"
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
const homeOtherQuestionLabel = ["Will you require a property that","Will you require rental furniture","Would you consider a basment","If there is no lift, what is the maximum","Do you plan to have","Are there any large or unusal","If so please describe"]
const needAnalysisUpdMsg = "Home search details have been updated. Thank you."

describe('Need Analysis Home search (Other info) tab test', () => {

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
    it('Verify Home search (Other info) section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_15);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setHomeOtherDetails(homeOtherQuestionLabel, propertyType_1,payingRentalPerson_1,state_1,numOfFloor_1,largeItemDescribe_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[0])).toBe(propertyType_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[1])).toBe(payingRentalPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[2])).toBe(state_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[3])).toBe(numOfFloor_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[4])).toBe(state_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[5])).toBe(state_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_1);
    });

    it('Verify edit Home search (Other info) section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_15);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setHomeOtherDetails(homeOtherQuestionLabel, propertyType_2,payingRentalPerson_2,state_2,numOfFloor_2,largeItemDescribe_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[0])).toBe(propertyType_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[1])).toBe(payingRentalPerson_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[2])).toBe(state_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[3])).toBe(numOfFloor_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[4])).toBe(state_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[5])).toBe(state_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_15);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setHomeOtherDetails(homeOtherQuestionLabel, propertyType_2,payingRentalPerson_2,state_2,numOfFloor_2,largeItemDescribe_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[0])).toBe(propertyType_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[1])).toBe(payingRentalPerson_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[2])).toBe(state_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[3])).toBe(numOfFloor_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[4])).toBe(state_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[5])).toBe(state_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(homeOtherQuestionLabel[6])).toBe(largeItemDescribe_2);
    });
});


