import addServiceDocument from '../../../../helper/addServiceDocument';
import commonElements from '../../../../helper/commonElements';
import familyMembers from '../../../../helper/familyMembers';
import financeTransactions from '../../../../helper/financeTransactions';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import needAnalysisPage from '../../../../pageobjects/assignment/needAnalysis.page';
import orientationPage from '../../../../pageobjects/assignment/services/orientation.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const startDate = commonElements.getCurrentDateNo0Format()
const serviceName = "Orientation"
const partnerName_1 = "Roebuck"
const address_1 = ["testStreet11", "testStreet21", "testStreet31", "testStreet41"]
const address_2 = ["testStreet12", "testStreet22", "testStreet32", "testStreet42"]
const city_1 = "TestCity1"
const city_2 = "TestCity2"
const stateCountry_1 = "TestState1"
const stateCountry_2 = "TestState2"
const postalCode_1 = "012345"
const postalCode_2 = "654321"
const country_1 = "United Kingdom"
const country_2 = "United States"
const contactPerson_1 = "Test Assignee (assignee)"
const contactPerson_2 = "Test Partner (partner)"
const peopleAttending_1 = "Test Assignee"
const peopleAttending_2 = "Test Partner"
const notes_1 = "testNote1"
const notes_2 = "testNote2"
const orientationDate_1 = commonElements.getCurrentDateNo0Format()
const orientationDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const state_1 = "testState_1"
const state_2 = "testState_2"
const orientationLocations_1 = "testLocation1"
const orientationLocations_2 = "testLocation2"
const tourPerson_1 = "Test Assignee"
const tourPerson_2 = "Test Partner"
const orientationQuestionLabel = ["Date(s) you would like to", "who will be attending the tour", "when on orientation", "orientation locations (if known)"]
const needAnalysisUpdMsg = "Orientation details have been updated. Thank you."
const purchaseOrderDetails_1 = ["Roebuck Removals ", "Orientation Service", "USD - US Dollar", "500", "testDescrpt1", commonElements.getCurrentDateNo0Format()]
const purchaseOrderDetails_2 = ["Roebuck Removals", "Orientation Service", "EUR - Euro", "800", "descrpt2", commonElements.getCurrentDatePlusDaysNo0Format(8)]
const salesOrderDetails_1 = ["Orientation Other", "225", "descript1", commonElements.getCurrentDateNo0Format()]
const salesOrderDetails_2 = ["Orientation Other", "565", "2descript", commonElements.getCurrentDatePlusDaysNo0Format(8)]
const recurringPODetails = ["Roebuck Removals ", "K2 Managment Fee - Orientation", "USD - US Dollar", "50", "Weekly", "testDescrpt1"]


describe('Cultural training Service, test', () => {

    before(async () => {
        await passSignIn.signIn();
    });
    it('Go to Services / Furniture rental Page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / " + serviceName);
        await familyMembers.addFamilyMember();
    });

    it('Verify Orientation form', async () => {
        await orientationPage.clickOrientationNAToggle();
        await initiatedServicesPage.clickNeedAnalysisServiceEditBtn();
        await needAnalysisPage.setOrientationDetails(orientationQuestionLabel, orientationDate_1, tourPerson_1, tourPerson_2, address_1, city_1, state_1, postalCode_1, country_1, orientationLocations_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        await orientationPage.clickOrientationNAToggle();
        expect(await orientationPage.getRequesteDateAnswerLabelText()).toContain(orientationDate_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(false);
        expect(await orientationPage.getPreferredlocationsAnswerLabelText()).toContain(orientationLocations_1);
        expect(await orientationPage.orientationNAAddressLabelText()).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${state_1}\n${postalCode_1}`);
    });
    it('Verify edit Orientation section', async () => {
        await initiatedServicesPage.clickNeedAnalysisServiceEditBtn();
        await needAnalysisPage.setOrientationDetails(orientationQuestionLabel, orientationDate_2, tourPerson_2, tourPerson_1, address_2, city_2, state_2, postalCode_2, country_2, orientationLocations_2);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await orientationPage.getRequesteDateAnswerLabelText()).toContain(orientationDate_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(false);
        expect(await orientationPage.getPreferredlocationsAnswerLabelText()).toContain(orientationLocations_1);
        expect(await orientationPage.orientationNAAddressLabelText()).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${state_1}\n${postalCode_1}`);
        await initiatedServicesPage.clickNeedAnalysisServiceEditBtn();
        await needAnalysisPage.setOrientationDetails(orientationQuestionLabel, orientationDate_2, tourPerson_2, tourPerson_1, address_2, city_2, state_2, postalCode_2, country_2, orientationLocations_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await orientationPage.getRequesteDateAnswerLabelText()).toContain(orientationDate_2);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(false);
        expect(await orientationPage.getPreferredlocationsAnswerLabelText()).toContain(orientationLocations_2);
        expect(await orientationPage.orientationNAAddressLabelText()).toContain(`${address_2[0]}\n${address_2[1]}\n${address_2[2]}\n${address_2[3]}\n${city_2}\n${state_2}\n${postalCode_2}`);
    });

    it('Verify Cultural training form', async () => {
        await commonElements.refreshPage();
        await initiatedServicesPage.clickAddPartnerToServiceBtn();
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_1, notes_1);
        await commonElements.setAddress(address_1[0], address_1[1], address_1[2], address_1[3], city_1, stateCountry_1, postalCode_1, country_1);
        await commonElements.setChbByLabel(peopleAttending_1, true);
        await commonElements.setChbByLabel(peopleAttending_2, false);
        await orientationPage.setOrientationPreferredLocations(orientationLocations_1);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getCountyStateValue()).toBe(stateCountry_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
        expect(await commonElements.getCountryValue()).toBe(country_1);
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1);
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1);
        expect(await commonElements.getChbState(peopleAttending_1)).toBe(true);
        expect(await commonElements.getChbState(peopleAttending_2)).toBe(false);
        expect(await orientationPage.getOrientationPreferredLocationsValue()).toBe(orientationLocations_1);
    });
    xit('Verify NA Cultural training Labels', async () => { //bug labes doesnt change
        await orientationPage.clickOrientationNAToggle();
        expect(await orientationPage.getRequesteDateAnswerLabelText()).toContain(orientationDate_2);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(false);
        expect(await orientationPage.getPreferredlocationsAnswerLabelText()).toContain(orientationLocations_2);
        expect(await orientationPage.orientationNAAddressLabelText()).toContain(`${address_2[0]}\n${address_2[1]}\n${address_2[2]}\n${address_2[3]}\n${city_2}\n${state_2}\n${postalCode_2}`);
        await commonElements.refreshPage();
    });
    it('Verify Cultural training edit form witout saving ', async () => {
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await commonElements.setAddress(address_2[0], address_2[1], address_2[2], address_2[3], city_2, stateCountry_2, postalCode_2, country_2);
        await commonElements.setChbByLabel(peopleAttending_1, false);
        await commonElements.setChbByLabel(peopleAttending_2, true);
        await orientationPage.setOrientationPreferredLocations(orientationLocations_2);
        await commonElements.refreshPage();
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getCountyStateValue()).toBe(stateCountry_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
        expect(await commonElements.getCountryValue()).toBe(country_1);
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1);
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1);
        expect(await commonElements.getChbState(peopleAttending_1)).toBe(true);
        expect(await commonElements.getChbState(peopleAttending_2)).toBe(false);
        expect(await orientationPage.getOrientationPreferredLocationsValue()).toBe(orientationLocations_1);
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await commonElements.setAddress(address_2[0], address_2[1], address_2[2], address_2[3], city_2, stateCountry_2, postalCode_2, country_2);
        await commonElements.setChbByLabel(peopleAttending_1, false);
        await commonElements.setChbByLabel(peopleAttending_2, true);
        await orientationPage.setOrientationPreferredLocations(orientationLocations_2);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getAddressLine1Value()).toBe(address_2[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_2[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_2[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_2[3]);
        expect(await commonElements.getCityValue()).toBe(city_2);
        expect(await commonElements.getCountyStateValue()).toBe(stateCountry_2);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_2);
        expect(await commonElements.getCountryValue()).toBe(country_2);
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_2);
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2);
        expect(await commonElements.getChbState(peopleAttending_2)).toBe(true);
        expect(await commonElements.getChbState(peopleAttending_1)).toBe(false);
        expect(await orientationPage.getOrientationPreferredLocationsValue()).toBe(orientationLocations_2);
    });
    xit('Verify edited NA Cultural training Labels', async () => {//bug labes doesnt change
        await orientationPage.clickOrientationNAToggle();
        expect(await orientationPage.getRequesteDateAnswerLabelText()).toContain(orientationDate_1);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(tourPerson_2)).toBe(false);
        expect(await orientationPage.getPreferredlocationsAnswerLabelText()).toContain(orientationLocations_1);
        expect(await orientationPage.orientationNAAddressLabelText()).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${state_1}\n${postalCode_1}`);
        await commonElements.refreshPage();
    });
    it('Verify Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate);
    });
    it('Verify remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await initiatedServicesPage.isNoServiceLabelExisting()).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await initiatedServicesPage.isNoServiceLabelExisting()).toBe(true);
        await familyMembers.removeFamilyMember();
    });
    it('Verify service documents', async () => {
        await addServiceDocument.addDocumentByServiceName(serviceName);
        await initiatedServicesPage.clickAddServiceDocuments();
        await initiatedServicesPage.clickDocumentChbByName();
        await initiatedServicesPage.clickCancelDocumentBtn();
        expect(await initiatedServicesPage.isNoDocumentsLabelDisplayed()).toBe(true);
        await initiatedServicesPage.clickAddServiceDocuments();
        await initiatedServicesPage.clickDocumentChbByName();
        await initiatedServicesPage.clickAddDocuments();
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getDocumentUploadDate())).toContain(startDate);
    });
    it('Verify remove service document', async () => {
        await initiatedServicesPage.removeServiceDocument();
        expect(await initiatedServicesPage.isDocumentRemovedMsgDisplayed()).toBe(true);
        await addServiceDocument.removeDocumentByName(serviceName);
    });
    it('Verify service PurchaseOrder', async () => {
        await financeTransactions.clickAddPurchaseOrderBtn();
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isInvalidFinanceFormMsgDispayed()).toBe(true);
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.clickAddPurchaseOrderBtn();
        await financeTransactions.setPurchaseOrder(purchaseOrderDetails_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isTransactionsAddedMsgDispayed()).toBe(true);
        await financeTransactions.clickEditPurchaseOrderBtn();
        expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_1[0])
        expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_1[1])
        expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_1[2])
        expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_1[3])
        expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_1[4])
        expect(await commonElements.createStandartDateForm(await financeTransactions.getPaymentDueValue())).toBe(purchaseOrderDetails_1[5])
        await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.clickEditPurchaseOrderBtn();
        expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_1[0])
        expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_1[1])
        expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_1[2])
        expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_1[3])
        expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_1[4])
        expect(await commonElements.createStandartDateForm(await financeTransactions.getPaymentDueValue())).toBe(purchaseOrderDetails_1[5])
        await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isPurchaseTransactionUpdMsgDispayed()).toBe(true)
        await financeTransactions.clickEditPurchaseOrderBtn();
        expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_2[0])
        expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_2[1])
        expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_2[2])
        expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_2[3])
        expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_2[4])
        expect(await commonElements.createStandartDateForm(await financeTransactions.getPaymentDueValue())).toBe(purchaseOrderDetails_2[5])
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.cancelPurchaseOrder();
        expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    });
    it('Verify service Sales Order', async () => {
        await financeTransactions.clickAddSalesOrderBtn();
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isInvalidFinanceFormMsgDispayed()).toBe(true);
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.clickAddSalesOrderBtn();
        await financeTransactions.setSalesOrder(salesOrderDetails_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isTransactionsAddedMsgDispayed()).toBe(true);
        await financeTransactions.clickEditSalesOrderBtn();
        expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_1[0])
        expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_1[1])
        expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_1[2])
        expect(await commonElements.createStandartDateForm(await financeTransactions.getInvoicingDateValue())).toBe(salesOrderDetails_1[3])
        await financeTransactions.editSalesOrder(salesOrderDetails_2);
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.clickEditSalesOrderBtn();
        expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_1[0])
        expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_1[1])
        expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_1[2])
        expect(await commonElements.createStandartDateForm(await financeTransactions.getInvoicingDateValue())).toBe(salesOrderDetails_1[3])
        await financeTransactions.editSalesOrder(salesOrderDetails_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isSalesOrderUpdMsgDispayed()).toBe(true);
        await financeTransactions.clickEditSalesOrderBtn();
        expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_2[0])
        expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_2[1])
        expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_2[2])
        expect(await commonElements.createStandartDateForm(await financeTransactions.getInvoicingDateValue())).toBe(salesOrderDetails_2[3])
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.cancelSalesOrder();
        expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    });
    it('Verify service Recurring Purchase Orders', async () => {
        let endDate = commonElements.getCurrentDatePlusDaysNo0Format(8);
        await financeTransactions.clickAddRecurringPOBtn();
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isInvalidFinanceFormMsgDispayed()).toBe(true);
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.clickAddRecurringPOBtn();
        await financeTransactions.setRecurringPO(recurringPODetails, startDate, endDate);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isTransactionsAddedMsgDispayed()).toBe(true);
        expect(await financeTransactions.isRecurringPOLabelDisplayed(recurringPODetails[0])).toBe(true);
        expect(await financeTransactions.isRecurringPOLabelDisplayed(recurringPODetails[1])).toBe(true);
        expect(await financeTransactions.isRecurringPOLabelDisplayed(await financeTransactions.formRecurringPOPartnerCost(recurringPODetails[2], recurringPODetails[3]))).toBe(true);
        expect(await commonElements.createStandartDateForm(await financeTransactions.getRecurringPOPaymentDueLabel())).toBe(startDate)
        expect(await financeTransactions.isRecurringPOLabelDisplayed(recurringPODetails[5])).toBe(true);
        await financeTransactions.cancelRecurringPO();
        expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    });

});
