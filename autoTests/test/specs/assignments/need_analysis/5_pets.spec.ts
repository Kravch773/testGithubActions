import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_5 = "Pets"
const name_1 = "TestName"
const name_2 = "TestName_2"
const species_1 = "Bird"
const species_2 = "Cat"
const breed_1 = "testBreed_1"
const breed_2 = "testBreed_1"
const age_1 = "2"
const age_2 = "5"
const weight_1 = "1"
const weight_2 = "5"
const petQuestionLabel=["Name","Species","Breed","Age","Weight"];
const needAnalysisUpdMsg = "Pet details have been updated. Thank you."

describe('Need analysis pets tab test', () => {

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
    it('Verify pets section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_5);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickAddPersonBtn();
        await needAnalysisPage.setPetDetails(petQuestionLabel,name_1, species_1, breed_1, age_1, weight_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[0])).toBe(name_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[1])).toBe(species_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[2])).toBe(breed_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[3])).toBe(age_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[4])).toBe(weight_1);
    });
    it('Verify edit pets section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_5);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPetDetails(petQuestionLabel,name_2, species_2, breed_2, age_2, weight_2);
        await commonElements.clickCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[0])).toBe(name_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[1])).toBe(species_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[2])).toBe(breed_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[3])).toBe(age_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[4])).toBe(weight_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_5);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPetDetails(petQuestionLabel,name_2, species_2, breed_2, age_2, weight_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[0])).toBe(name_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[1])).toBe(species_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[2])).toBe(breed_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[3])).toBe(age_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[4])).toBe(weight_2);
    });
    it('Verify remove pets', async () => {
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickRemovePersonBtn();
        await commonElements.clickCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[0])).toBe(name_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[1])).toBe(species_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[2])).toBe(breed_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[3])).toBe(age_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(petQuestionLabel[4])).toBe(weight_2);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickRemovePersonBtn();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
    });
});


