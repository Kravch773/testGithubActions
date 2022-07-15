import commonElements from '../../../../helper/commonElements';
import familyMembers from '../../../../helper/familyMembers';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import needAnalysisPage from '../../../../pageobjects/assignment/needAnalysis.page';
import homeSearchPage from '../../../../pageobjects/assignment/services/homeSearch.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const serviceName = "Home search"
const address_1 = ["TestStreet_11", "TestStreet_12", "TestStreet_13", "TestStreet_14"]
const city_1 = "London"
const state_1 = "testState_1"
const postalCode_1 = "045453"
const country_1 = "United Kingdom"
const partnerName_1 = "Roebuck"
const currency_1 = "USD"
const currency_2 = "EUR"
const currencyValue_1 = "500"
const currencyValue_2 = "144"
const currencyTerm_1 = "Weekly"
const currencyTerm_2 = "One off"
const startDate_1 = commonElements.getCurrentDateNo0Format()
const startDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(8)
const leaseName_1 = "Company name"
const leaseName_2 = "Assignee's name"
const payingPerson_1 = "QA Test Client will pay"
const payingPerson_2 = "Mr Test Assignee will pay"
const leaseSpecifics_1 = "testSpecific1"
const leaseSpecifics_2 = "testSpecific2"
const homeLeaseQuestionLabel = ["Budget", "What date would you like", "Whose name is the lease", "Who is paying?", "Lease specifics"]
const needAnalysisUpdMsg = "Home search details have been updated. Thank you."


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

    it('Verify HomeSearch(Lease) NA section', async () => {
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickLeaseNATabBtn();
        await homeSearchPage.clickHomeLeaseEditBtn();
        await needAnalysisPage.setHomeLeaseDetails(homeLeaseQuestionLabel, currency_1, currencyValue_1, currencyTerm_1, startDate_1, leaseName_1, payingPerson_1, leaseSpecifics_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await homeSearchPage.clickLeaseNATabBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[0])).toContain(currencyValue_1);
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[1]))).toBe(startDate_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[3])).toBe(payingPerson_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[2])).toBe(leaseName_1);
    });
    it('Verify edit HomeSearch(Lease) NA section', async () => {
        await homeSearchPage.clickHomeLeaseEditBtn();
        await needAnalysisPage.setHomeLeaseDetails(homeLeaseQuestionLabel, currency_2, currencyValue_2, currencyTerm_2, startDate_2, leaseName_2, payingPerson_2, leaseSpecifics_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[0])).toContain(currencyValue_1);
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[1]))).toBe(startDate_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[3])).toBe(payingPerson_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[2])).toBe(leaseName_1);
        await homeSearchPage.clickHomeLeaseEditBtn();
        await needAnalysisPage.setHomeLeaseDetails(homeLeaseQuestionLabel, currency_2, currencyValue_2, currencyTerm_2, startDate_2, leaseName_2, payingPerson_2, leaseSpecifics_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await homeSearchPage.clickLeaseNATabBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[0])).toContain(currencyValue_2);
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[1]))).toBe(startDate_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[3])).toBe(payingPerson_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[2])).toBe(leaseName_2);
    });

    it('Verify Partner HomeSearch(Lease) section ', async () => {
        await initiatedServicesPage.clickAddPartnerToServiceBtn();
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await commonElements.setAddress(address_1[0], address_1[1], address_1[2], address_1[3], city_1, state_1, postalCode_1, country_1);
        await homeSearchPage.clickLeaseNATabBtn();
        await needAnalysisPage.setHomeLeaseDetails(homeLeaseQuestionLabel, currency_1, currencyValue_1, currencyTerm_1, startDate_1, leaseName_1, payingPerson_1, leaseSpecifics_1);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        await homeSearchPage.clickLeaseNATabBtn();
        expect(await initiatedServicesPage.getBudgetCurrencyAmountValue()).toBe(currencyValue_1);
        expect(await initiatedServicesPage.getBudgetCurrencyValue()).toBe(currency_1);
        expect(await initiatedServicesPage.getBudgetcurrencyTermValue()).toBe(currencyTerm_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homeLeaseQuestionLabel[1])).toBe(startDate_1);
        expect(await commonElements.getRadioBtnState(leaseName_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_1);
    });
    it('Verify NA Labels after set partner sections data', async () => {
        await commonElements.refreshPage();
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickLeaseNATabBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[0])).toContain(currencyValue_1);
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[1]))).toBe(startDate_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[3])).toBe(payingPerson_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_1);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[2])).toBe(leaseName_1);
        await commonElements.refreshPage();
    });

    it('Verify Edit Partner HomeSearch(Lease) section ', async () => {
        await homeSearchPage.clickLeaseNATabBtn();
        await needAnalysisPage.setHomeLeaseDetails(homeLeaseQuestionLabel, currency_2, currencyValue_2, currencyTerm_2, startDate_2, leaseName_2, payingPerson_2, leaseSpecifics_2);
        await commonElements.refreshPage();
        await homeSearchPage.clickLeaseNATabBtn();
        expect(await initiatedServicesPage.getBudgetCurrencyAmountValue()).toBe(currencyValue_1);
        expect(await initiatedServicesPage.getBudgetCurrencyValue()).toBe(currency_1);
        expect(await initiatedServicesPage.getBudgetcurrencyTermValue()).toBe(currencyTerm_1);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homeLeaseQuestionLabel[1])).toBe(startDate_1);
        expect(await commonElements.getRadioBtnState(leaseName_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_1);
        await homeSearchPage.clickLeaseNATabBtn();
        await needAnalysisPage.setHomeLeaseDetails(homeLeaseQuestionLabel, currency_2, currencyValue_2, currencyTerm_2, startDate_2, leaseName_2, payingPerson_2, leaseSpecifics_2);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        await homeSearchPage.clickLeaseNATabBtn();
        expect(await initiatedServicesPage.getBudgetCurrencyAmountValue()).toBe(currencyValue_2);
        expect(await initiatedServicesPage.getBudgetCurrencyValue()).toBe(currency_2);
        expect(await initiatedServicesPage.getBudgetcurrencyTermValue()).toBe(currencyTerm_2);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homeLeaseQuestionLabel[1])).toBe(startDate_2);
        expect(await commonElements.getRadioBtnState(leaseName_2)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(true);
        expect(await initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_2);
    });
    it('Verify NA Labels after edit partner sections data', async () => {
        await commonElements.refreshPage();
        await homeSearchPage.clickHomeSearchNAToggle();
        await homeSearchPage.clickLeaseNATabBtn();
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[0])).toContain(currencyValue_2);
        expect(await commonElements.createStandartDateForm(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[1]))).toBe(startDate_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[3])).toBe(payingPerson_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[4])).toBe(leaseSpecifics_2);
        expect(await homeSearchPage.getHomeSearchNAAnswerText(homeLeaseQuestionLabel[2])).toBe(leaseName_2);
        await commonElements.refreshPage();
    });
    it('Verify Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate_1)
    });
    it('Verify remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await initiatedServicesPage.isNoServiceLabelExisting()).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await initiatedServicesPage.isNoServiceLabelExisting()).toBe(true);
    });
});
