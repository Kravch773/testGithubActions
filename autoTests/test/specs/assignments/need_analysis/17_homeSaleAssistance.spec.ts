import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const needAnalysisSection_17 ="Home sale assistance"
const state_1 = "Yes"
const state_2 = "No"
const kindOfHome_1 = "Single Family home"
const kindOfHome_2 = "Condominium"
const purchaseDate_1 = commonElements.getCurrentDateNo0Format()
const purchaseDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(11)
const currency_1 = "USD"
const currency_2 = "EUR"
const currencyValue_1 = "100"
const currencyValue_2 = "220"
const currencyTerm_1 = "One off"
const ageOfhome_1 ="2"
const ageOfhome_2 ="5"
const numOfbedrooms_1 = "2"
const numOfbedrooms_2 = "4" 
const numOfbathrooms_1 = "1"
const numOfbathrooms_2 = "3" 
const cityWater_1 = "cityWater"
const cityWater_2 = "sewer"
const typeOfheating_1 = "test1"
const typeOfheating_2 = "test2"
const homeLand_1 = "2 acres"
const homeLand_2 = "5 acres"
const periodHomeSale_1 = "testPeriod1"
const periodHomeSale_2 = "testPeriod2"
const otherDetails_1="testDetails1"
const otherDetails_2= "testDetails2"
const saleAssistanceQuestionLabel = ["Are you considering selling","What kind of home will you","date of home","price of home","Age of home","Number of bedrooms","Number of bathrooms","City water and sewer","Type of heating","Is the home located on more","How soon would you like to list","Anything else we"]
const needAnalysisUpdMsg = "Home sale assistance details have been updated. Thank you."

describe('Need analysis Home sale assistance test', () => {

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
    it('Verify Home sale assistance section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_17);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setSaleAssistanceDetails(saleAssistanceQuestionLabel,state_1,kindOfHome_1,purchaseDate_1,currency_1,currencyValue_1,currencyTerm_1,ageOfhome_1,numOfbedrooms_1,numOfbathrooms_1,cityWater_1,typeOfheating_1,homeLand_1,periodHomeSale_1,otherDetails_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[0])).toBe(state_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[1])).toBe(kindOfHome_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[2]))).toBe(purchaseDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[3])).toContain(currencyValue_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[4])).toBe(ageOfhome_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[5])).toBe(numOfbedrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[6])).toBe(numOfbathrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[7])).toBe(cityWater_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[8])).toBe(typeOfheating_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[9])).toBe(homeLand_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[10])).toBe(periodHomeSale_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[11])).toBe(otherDetails_1);
    });

    it('Verify edit Home sale assistance section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_17);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setSaleAssistanceDetails(saleAssistanceQuestionLabel,state_1,kindOfHome_2,purchaseDate_2,currency_2,currencyValue_2,currencyTerm_1,ageOfhome_2,numOfbedrooms_2,numOfbathrooms_2,cityWater_2,typeOfheating_2,homeLand_2,periodHomeSale_2,otherDetails_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[0])).toBe(state_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[1])).toBe(kindOfHome_1);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[2]))).toBe(purchaseDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[3])).toContain(currencyValue_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[4])).toBe(ageOfhome_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[5])).toBe(numOfbedrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[6])).toBe(numOfbathrooms_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[7])).toBe(cityWater_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[8])).toBe(typeOfheating_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[9])).toBe(homeLand_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[10])).toBe(periodHomeSale_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[11])).toBe(otherDetails_1);
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.setSaleAssistanceDetails(saleAssistanceQuestionLabel,state_1,kindOfHome_2,purchaseDate_2,currency_2,currencyValue_2,currencyTerm_1,ageOfhome_2,numOfbedrooms_2,numOfbathrooms_2,cityWater_2,typeOfheating_2,homeLand_2,periodHomeSale_2,otherDetails_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[0])).toBe(state_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[1])).toBe(kindOfHome_2);
        expect(await commonElements.createStandartDateForm(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[2]))).toBe(purchaseDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[3])).toContain(currencyValue_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[4])).toBe(ageOfhome_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[5])).toBe(numOfbedrooms_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[6])).toBe(numOfbathrooms_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[7])).toBe(cityWater_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[8])).toBe(typeOfheating_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[9])).toBe(homeLand_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[10])).toBe(periodHomeSale_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[11])).toBe(otherDetails_2);  
        await needAnalysisPage.clickEditAnalysisBtn();
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(state_2, saleAssistanceQuestionLabel[0]);
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisDropDownByLabel(saleAssistanceQuestionLabel[1]))).toBe("true"); 
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[2]))).toBe("true");
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[3]))).toBe("true");
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[4]))).toBe("true");
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[5]))).toBe("true");
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[6]))).toBe("true");
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[7]))).toBe("true");
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[8]))).toBe("true");
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[9]))).toBe("true");
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[10]))).toBe("true");
        expect(await needAnalysisPage.getDisabledAtribute(await needAnalysisPage.getNeedAnalysisInputByLabel(saleAssistanceQuestionLabel[11]))).toBe("true");
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(saleAssistanceQuestionLabel[0])).toBe(state_2);
    });
});


