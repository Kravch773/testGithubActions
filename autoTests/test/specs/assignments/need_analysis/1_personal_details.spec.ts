import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const needAnalysisSection_1 = "Personal details"
const title_1 = "Test"
const title_2 = "Mr"
const firstName_1 = "FirstTestName"
const firstName_2 = "Test"
const surname_1 = "LastTestName"
const surname_2 = "Assignee"
const gender_1 = "Male"
const gender_2 = "Female"
const nationality_1 = "Ukrainian"
const nationality_2 = "British"
const dualNationality_1 = "American"
const dualNationality_2 = "Czech"
const language_1 = "English"
const language_2 = "Italian"
const languageLvl_1 = "Written"
const languageLvl_2 = "Basic"
const phoneCountry_1 = "United Kingdom"
const phoneCountry_2 = "United States"
const homephone_1 = "2015550125"
const homephone_2 = "2015550133"
const workphone_1 = "2015550135"
const workphone_2 = "2015550177"
const mobilephone_1 = "2015550145"
const mobilephone_2 = "2015550199"
const preferedphone_1 = "Home"
const preferedphone_2 = "Work"
const preferedEmail_1 = "Primary"
const preferedEmail_2 = "Alternate"
const alternateEmail_1 = "Testmail@mailqa.com"
const alternateEmail_2 = "Testmail2@mailqa.com"
const martialStatus_1 = "Divorced"
const martialStatus_2 = "Married"
const dob_1 = commonElements.createGitDateFormat("11.12.2000")
const dob_2 = commonElements.createGitDateFormat("22.10.1992")
const pQuestionLabel=["Title","First name","Surname","Gender","Nationality","Dual nationality","Languages spoken","Home","Work", "Mobile/cell","Preferred phone", "Preferred email address","Alternate email address", "Marital status","Date of birth"];
const needAnalysisUpdMsg = " Assignee details have been updated. Thank you."

describe('Need analysis personal details tab test', () => {

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

    it('Verify Personal details section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_1);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPersonalDetails(pQuestionLabel,title_1, firstName_1, surname_1, gender_1, nationality_1, dualNationality_1, language_1, languageLvl_1, phoneCountry_1, homephone_1, workphone_1, mobilephone_1, preferedphone_1, preferedEmail_1, alternateEmail_1, martialStatus_1, dob_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[0])).toBe(title_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[1])).toBe(firstName_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[2])).toBe(surname_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[3])).toBe(gender_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[4])).toBe(nationality_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[5])).toBe(dualNationality_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[6])).toContain(language_1 + " - " + languageLvl_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[7])).toContain(homephone_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[8])).toContain(workphone_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[9])).toContain(mobilephone_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[10])).toBe(preferedphone_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[11])).toBe(preferedEmail_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[12])).toBe(alternateEmail_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[13])).toBe(martialStatus_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[14]))).toBe(dob_1);
    });
    it('Verify edit presonal details section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_1);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPersonalDetails(pQuestionLabel,title_2, firstName_2, surname_2, gender_2, nationality_2, dualNationality_2, language_2, languageLvl_2, phoneCountry_2, homephone_2, workphone_2, mobilephone_2, preferedphone_2, preferedEmail_2, alternateEmail_2, martialStatus_2, dob_2);
        await commonElements.clickCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[0])).toBe(title_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[1])).toBe(firstName_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[2])).toBe(surname_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[3])).toBe(gender_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[4])).toBe(nationality_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[5])).toBe(dualNationality_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[6])).toContain(language_1 + " - " + languageLvl_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[7])).toContain(homephone_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[8])).toContain(workphone_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[9])).toContain(mobilephone_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[10])).toBe(preferedphone_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[11])).toBe(preferedEmail_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[12])).toBe(alternateEmail_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[13])).toBe(martialStatus_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[14]))).toBe(dob_1);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_1);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setPersonalDetails(pQuestionLabel, title_2, firstName_2, surname_2, gender_2, nationality_2, dualNationality_2, language_2, languageLvl_2, phoneCountry_2, homephone_2, workphone_2, mobilephone_2, preferedphone_2, preferedEmail_2, alternateEmail_2, martialStatus_2, dob_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(needAnalysisUpdMsg);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[0])).toBe(title_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[1])).toBe(firstName_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[2])).toBe(surname_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[3])).toBe(gender_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[4])).toBe(nationality_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[5])).toBe(dualNationality_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[6])).toContain(language_2 + " - " + languageLvl_2);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[7])).toContain(homephone_2);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[8])).toContain(workphone_2);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[9])).toContain(mobilephone_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[10])).toBe(preferedphone_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[11])).toBe(preferedEmail_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[12])).toBe(alternateEmail_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[13])).toBe(martialStatus_2);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(pQuestionLabel[14]))).toBe(dob_2);
    });

});


