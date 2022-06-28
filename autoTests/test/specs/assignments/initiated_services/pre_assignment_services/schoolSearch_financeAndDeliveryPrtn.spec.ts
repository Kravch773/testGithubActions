import commonElements from '../../../../helper/commonElements';
import familyMembers from '../../../../helper/familyMembers';
import financeTransactions from '../../../../helper/financeTransactions';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import needAnalysisPage from '../../../../pageobjects/assignment/needAnalysis.page';
import schoolSearchServicePage from '../../../../pageobjects/assignment/services/schoolSearchService.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const startDate = commonElements.getCurrentDateNo0Format()
const serviceName = "School search"
const purchaseOrderDetails_1 = ["Roebuck Removals ", "School Search Service", "USD - US Dollar", "500", "testDescrpt1", startDate]
const purchaseOrderDetails_2 = ["Roebuck Removals", "School Search Service", "EUR - Euro", "800", "descrpt2", commonElements.getCurrentDatePlusDaysNo0Format(8)]
const salesOrderDetails_1 = ["Application Fees", "225", "descript1", startDate]
const salesOrderDetails_2 = ["Application Fees", "565", "2descript", commonElements.getCurrentDatePlusDaysNo0Format(10)]
const recurringPODetails = ["Roebuck Removals ", "K2 Managment Fee - School Search", "USD - US Dollar", "50", "Weekly", "testDescrpt1"]
const notes_1 = "testNote1"
const notes_2 = "testNote2"
const partnerName_1 = "Roebuck"
const peopleAttending_1 = "Mr Test Assignee"
const peopleAttending_2 = "Test Partner"
const schoolYear_1 = "5"
const schoolYear_2 = "7"
const curriculum_1 = "2"
const curriculum_2 = "1"
const specialRequire_1 = "TestReq1"
const specialRequire_2 = "TestReq2"
const schoolType_1 = "Co-ed"
const schoolType_2 = "International"
const schoolSpecifics_1 = "TestSpec1"
const schoolSpecifics_2 = "TestSpec2"
const schoolTypeState_1 = true
const schoolTypeState_2 = false

const schoolSearchLabel = ["Current school year", "Preferred curriculum", "special requirement", "School type", "pecifics"];
const needAnalysisUpdMsg = "details have been updated. Thank you."

const address_1 = ["TestStreet_11", "TestStreet_12", "TestStreet_13", "TestStreet_14"]
const address_2 = ["TestStreet_21", "TestStreet_22", "TestStreet_23", "TestStreet_24"]
const city_1 = "London"
const city_2 = "London"
const state_1 = "testState_1"
const state_2 = "testState_2"
const postalCode_1 = "045453"
const postalCode_2 = "222353"
const country_1 = "United Kingdom"
const country_2 = "United States"
const currency_1 = "USD"
const currency_2 = "EUR"
const currencyValue_1 = "500"
const currencyValue_2 = "720"
const currencyTerm_1 = "In total"
const currencyTerm_2 = "Per term"


describe('SchoolSearch Finance And Delivery Partner test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / Departure services page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / " + serviceName);

    });
    // it('Verify service PurchaseOrder', async () => {
    //     await financeTransactions.clickAddPurchaseOrderBtn();
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isInvalidFinanceFormMsgDispayed()).toBe(true);
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.clickAddPurchaseOrderBtn();
    //     await financeTransactions.setPurchaseOrder(purchaseOrderDetails_1);
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isTransactionsAddedMsgDispayed()).toBe(true);
    //     await financeTransactions.clickEditPurchaseOrderBtn();
    //     expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_1[0]);
    //     expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_1[1]);
    //     expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_1[2]);
    //     expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_1[3]);
    //     expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_1[4]);
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getPaymentDueValue())).toBe(purchaseOrderDetails_1[5]);
    //     await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.clickEditPurchaseOrderBtn();
    //     expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_1[0]);
    //     expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_1[1]);
    //     expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_1[2]);
    //     expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_1[3]);
    //     expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_1[4]);
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getPaymentDueValue())).toBe(purchaseOrderDetails_1[5]);
    //     await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isPurchaseTransactionUpdMsgDispayed()).toBe(true)
    //     await financeTransactions.clickEditPurchaseOrderBtn();
    //     expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_2[0])
    //     expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_2[1])
    //     expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_2[2])
    //     expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_2[3])
    //     expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_2[4])
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getPaymentDueValue())).toBe(purchaseOrderDetails_2[5])
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.cancelPurchaseOrder();
    //     expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    // });
    // it('Verify service Sales Order', async () => {
    //     await financeTransactions.clickAddSalesOrderBtn();
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isInvalidFinanceFormMsgDispayed()).toBe(true);
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.clickAddSalesOrderBtn();
    //     await financeTransactions.setSalesOrder(salesOrderDetails_1);
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isTransactionsAddedMsgDispayed()).toBe(true);
    //     await financeTransactions.clickEditSalesOrderBtn();
    //     expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_1[0]);
    //     expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_1[1]);
    //     expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_1[2]);
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getInvoicingDateValue())).toBe(salesOrderDetails_1[3]);
    //     await financeTransactions.editSalesOrder(salesOrderDetails_2);
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.clickEditSalesOrderBtn();
    //     expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_1[0]);
    //     expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_1[1]);
    //     expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_1[2]);
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getInvoicingDateValue())).toBe(salesOrderDetails_1[3]);
    //     await financeTransactions.editSalesOrder(salesOrderDetails_2);
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isSalesOrderUpdMsgDispayed()).toBe(true);
    //     await financeTransactions.clickEditSalesOrderBtn();
    //     expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_2[0]);
    //     expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_2[1]);
    //     expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_2[2]);
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getInvoicingDateValue())).toBe(salesOrderDetails_2[3]);
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.cancelSalesOrder();
    //     expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    // });
    // it('Verify service Recurring Purchase Orders', async () => {
    //     let endDate = commonElements.getCurrentDatePlusDaysNo0Format(8);
    //     await financeTransactions.clickAddRecurringPOBtn();
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isInvalidFinanceFormMsgDispayed()).toBe(true);
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.clickAddRecurringPOBtn();
    //     await financeTransactions.setRecurringPO(recurringPODetails, startDate, endDate);
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isTransactionsAddedMsgDispayed()).toBe(true);
    //     expect(await financeTransactions.isRecurringPOLabelDisplayed(recurringPODetails[0])).toBe(true);
    //     expect(await financeTransactions.isRecurringPOLabelDisplayed(recurringPODetails[1])).toBe(true);
    //     expect(await financeTransactions.isRecurringPOLabelDisplayed(await financeTransactions.formRecurringPOPartnerCost(recurringPODetails[2], recurringPODetails[3]))).toBe(true);
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getRecurringPOPaymentDueLabel())).toBe(startDate)
    //     expect(await financeTransactions.isRecurringPOLabelDisplayed(recurringPODetails[5])).toBe(true);
    //     await financeTransactions.cancelRecurringPO();
    //     expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    // });

    it('Add Partner and Verify SchoolSearch NA form date in Initiation details form', async () => {
        await familyMembers.addFamilyMember("Child");
        await commonElements.refreshPage();
        await schoolSearchServicePage.clickSchoolSrchEditBtn();
        await needAnalysisPage.setSchoolSearchDetails(schoolSearchLabel, schoolYear_1, curriculum_1, specialRequire_1, schoolType_1, schoolType_2, schoolSpecifics_1, schoolTypeState_1, schoolTypeState_2)
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await initiatedServicesPage.clickAddPartnerToServiceBtn();
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
    });


    // xit('Set Collection address NA form', async () => { // bug or feature
    //     await schoolSearchServicePage.clickSchoolSrchNAToggle();
    //     await schoolSearchServicePage.clickSchoolSrchNABtn();
    //     await commonElements.setAddress(address_1[0], address_1[1], address_1[2], address_1[3], city_1, state_1, postalCode_1, country_1, "//mat-dialog-content");
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
    //     await commonElements.refreshPage();
    //     expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
    //     expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
    //     expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
    //     expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
    //     expect(await commonElements.getCityValue()).toBe(city_1);
    //     expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
    //     expect(await commonElements.getCountryValue()).toBe(country_1);
    // });

    it('Verify Set Collection address and budget partner form', async () => {
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        await commonElements.setAddress(address_1[0], address_1[1], address_1[2], address_1[3], city_1, state_1, postalCode_1, country_1);
        await initiatedServicesPage.setBudget(currency_1, currencyValue_1, currencyTerm_1);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
        expect(await commonElements.getCountryValue()).toBe(country_1);
        expect(await initiatedServicesPage.getBudgetCurrencyValue()).toBe(currency_1);
        expect(await initiatedServicesPage.getBudgetCurrencyAmountValue()).toBe(currencyValue_1);
        expect(await initiatedServicesPage.getBudgetcurrencyTermValue()).toBe(currencyTerm_1);
    });
    it('Verify Edit Collection address and budget  form', async () => {
        await commonElements.setAddress(address_2[0], address_2[1], address_2[2], address_2[3], city_2, state_2, postalCode_2, country_2);
        await initiatedServicesPage.setBudget(currency_2, currencyValue_2, currencyTerm_2);
        await commonElements.refreshPage();
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
        expect(await commonElements.getCountryValue()).toBe(country_1);
        expect(await initiatedServicesPage.getBudgetCurrencyValue()).toBe(currency_1);
        expect(await initiatedServicesPage.getBudgetCurrencyAmountValue()).toBe(currencyValue_1);
        expect(await initiatedServicesPage.getBudgetcurrencyTermValue()).toBe(currencyTerm_1);
        await commonElements.setAddress(address_2[0], address_2[1], address_2[2], address_2[3], city_2, state_2, postalCode_2, country_2);
        await initiatedServicesPage.setBudget(currency_2, currencyValue_2, currencyTerm_2);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getAddressLine1Value()).toBe(address_2[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_2[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_2[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_2[3]);
        expect(await commonElements.getCityValue()).toBe(city_2);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_2);
        expect(await commonElements.getCountryValue()).toBe(country_2);
        expect(await initiatedServicesPage.getBudgetCurrencyValue()).toBe(currency_2);
        expect(await initiatedServicesPage.getBudgetCurrencyAmountValue()).toBe(currencyValue_2);
        expect(await initiatedServicesPage.getBudgetcurrencyTermValue()).toBe(currencyTerm_2);
    });

    xit('Verify SchoolSearch details NA form match Initiation details form', async () => {
        await schoolSearchServicePage.clickSchoolSrchEditBtn();
        await needAnalysisPage.setSchoolSearchDetails(schoolSearchLabel, schoolYear_2, curriculum_2, specialRequire_2, schoolType_2, schoolType_1, schoolSpecifics_2, schoolTypeState_1, schoolTypeState_2)
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await schoolSearchServicePage.getCurrentSchoolYearValue()).toBe(schoolYear_2);
        expect(await schoolSearchServicePage.getPreferredCurriculumValue()).toBe(curriculum_2);
        expect(await schoolSearchServicePage.getSpecificsValue()).toBe(schoolSpecifics_2);
        expect(await schoolSearchServicePage.getSpecialRequirementsValue()).toBe(specialRequire_2);
    });

    it('Verify set SchoolSearch Initiation details form ', async () => {
        await initiatedServicesPage.setInitiationDetails(peopleAttending_1, notes_1);
        await schoolSearchServicePage.setSchoolSearchPartnerDetails(schoolSearchLabel, schoolYear_1, curriculum_1, specialRequire_1, schoolType_1, schoolType_2, schoolSpecifics_1);
        await commonElements.setChbByLabel(peopleAttending_1, true);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(peopleAttending_1);
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1);
        expect(await schoolSearchServicePage.getCurrentSchoolYearValue()).toBe(schoolYear_1);
        expect(await schoolSearchServicePage.getPreferredCurriculumValue()).toBe(curriculum_1);
        expect(await schoolSearchServicePage.getSpecificsValue()).toBe(schoolSpecifics_1);
        expect(await schoolSearchServicePage.getSpecialRequirementsValue()).toBe(specialRequire_1);
        expect(await commonElements.getChbState(schoolType_1)).toBe(true);
        expect(await commonElements.getChbState(schoolType_2)).toBe(false);
        expect(await commonElements.getChbState(peopleAttending_1)).toBe(true);

    });
    it('Verify edit SchoolSearch Initiation details form and NA labels', async () => { //NA labels didt changed 
        await initiatedServicesPage.setInitiationDetails(peopleAttending_2, notes_2);
        await schoolSearchServicePage.setSchoolSearchPartnerDetails(schoolSearchLabel, schoolYear_2, curriculum_2, specialRequire_2, schoolType_2, schoolType_1, schoolSpecifics_2);
        await commonElements.setChbByLabel(peopleAttending_1, false);
        await commonElements.setChbByLabel(peopleAttending_2, true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(peopleAttending_1);
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1);
        expect(await schoolSearchServicePage.getCurrentSchoolYearValue()).toBe(schoolYear_1);
        expect(await schoolSearchServicePage.getPreferredCurriculumValue()).toBe(curriculum_1);
        expect(await schoolSearchServicePage.getSpecificsValue()).toBe(schoolSpecifics_1);
        expect(await schoolSearchServicePage.getSpecialRequirementsValue()).toBe(specialRequire_1);
        expect(await commonElements.getChbState(schoolType_1)).toBe(true);
        expect(await commonElements.getChbState(schoolType_2)).toBe(false);
        expect(await commonElements.getChbState(peopleAttending_1)).toBe(true);

        await initiatedServicesPage.setInitiationDetails(peopleAttending_2, notes_2);
        await schoolSearchServicePage.setSchoolSearchPartnerDetails(schoolSearchLabel, schoolYear_2, curriculum_2, specialRequire_2, schoolType_2, schoolType_1, schoolSpecifics_2);
        await commonElements.setChbByLabel(peopleAttending_1, false);
        await commonElements.setChbByLabel(peopleAttending_2, true);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(peopleAttending_2);
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2);
        expect(await schoolSearchServicePage.getCurrentSchoolYearValue()).toBe(schoolYear_2);
        expect(await schoolSearchServicePage.getPreferredCurriculumValue()).toBe(curriculum_2);
        expect(await schoolSearchServicePage.getSpecificsValue()).toBe(schoolSpecifics_2);
        expect(await schoolSearchServicePage.getSpecialRequirementsValue()).toBe(specialRequire_2);
        expect(await commonElements.getChbState(schoolType_1)).toBe(false);
        expect(await commonElements.getChbState(schoolType_2)).toBe(true);
        expect(await commonElements.getChbState(peopleAttending_1)).toBe(false);
        expect(await commonElements.getChbState(peopleAttending_2)).toBe(true);
        // await commonElements.refreshPage();
        // expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[0])).toBe(schoolYear_2);
        // expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[1])).toBe(curriculum_2);
        // expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText(schoolSearchLabel[2])).toBe(specialRequire_2);
        // expect(await schoolSearchServicePage.isSchoolPreferencesSelected(schoolType_1)).toBe(false);
        // expect(await schoolSearchServicePage.isSchoolPreferencesSelected(schoolType_2)).toBe(true);
        // expect(await schoolSearchServicePage.getSchoolSearchChildDetailsAnswerText("Specifics")).toBe(schoolSpecifics_2);
    });
    it('Verify Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate)
    });
    it('Verify remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await initiatedServicesPage.isNoServiceLabelExisting()).toBe(true);
        await familyMembers.removeFamilyMember();
    });
});
