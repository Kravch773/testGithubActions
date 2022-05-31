import addServiceDocument from '../../../../helper/addServiceDocument';
import commonElements from '../../../../helper/commonElements';
import familyMembers from '../../../../helper/familyMembers';
import financeTransactions from '../../../../helper/financeTransactions';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import tempAcomodationPage from '../../../../pageobjects/assignment/services/tempAcomodation.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const serviceName = "Temp. accommodation (Destination)"
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
const startDate_1 = "12.7.2022"
const startDate_2 = "22.7.2022"
const endDate_1 = "31.7.2022"
const endDate_2 = "31.7.2022"
const vacateDue_1 = "19.7.2022"
const vacateDue_2 = "24.7.2022"
const rentCurrency_1 = "USD"
const rentCurrency_2 = "EUR"
const rentAmount_1 = "2550"
const rentAmount_2 = "4000"
const rentPaymentTerm_1 = "Monthly"
const rentPaymentTerm_2 = "Weekly"
const notes_1 = "testNote1"
const notes_2 = "testNote2"
const purchaseOrderDetails_1 = ["Roebuck Removals ", "Temp Accomodation Destination - Other", "USD - US Dollar", "500", "testDescrpt1", "17.5.2022"]
const purchaseOrderDetails_2 = ["Roebuck Removals", "Temp Accomodation Destination - Other", "EUR - Euro", "800", "descrpt2", "22.5.2022"]
const salesOrderDetails_1 = ["Temp Accommodation Parking", "225", "descript1", "22.5.2022"]
const salesOrderDetails_2 = ["Temp Accommodation Parking", "565", "2descript", "12.7.2022"]
const recurringPODetails = ["Roebuck Removals ", "K2 Disbursement Fee", "USD - US Dollar", "50", "Weekly", "testDescrpt1"]
const negotiatedDate_1 = "17.11.2022"
const negotiatedDate_2 = "26.11.2022"
const newEndDate_1 = "12.10.2022"
const newEndDate_2 = "11.12.2022"
const reason_1 = "testReason"
const reason_2 = "ReasonTest"
const extensionConfirm_1 = true
const extensionConfirm_2 = false
const isGitActionTest = true

describe('Temp Accommodation(Origin) Service, test', () => {

    before(async () => {
        await passSignIn.signIn();
    });
    it('Go to Services / Temp accommodation (Origin) tab and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / Temp accommodation (Destination)");
    });
    it('Verify Temp accommodation (Origin) Initiation details form', async () => {
        await familyMembers.addFamilyMember();
        await initiatedServicesPage.clickAddPartnerToServiceBtn();
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_1, notes_1);
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true)
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await initiatedServicesPage.clickSaveChangesPartnerBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true)
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_2)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2)
    });
    it('Verify Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await initiatedServicesPage.getInitiatedPartnerDate()).toBe(await commonElements.getCurrentDate(isGitActionTest));
    });
    it('Verify remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await initiatedServicesPage.isNoServiceLabelExisting()).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await initiatedServicesPage.isNoServiceLabelExisting()).toBe(true);
        await familyMembers.removeFamilyMember();
    });
    //Add New Accommodation for tests
    it('Verify Accommodation form', async () => {
        await tempAcomodationPage.setTempAcomodationDetails(startDate_1, endDate_1, vacateDue_1, rentCurrency_1, rentAmount_1, rentPaymentTerm_1, notes_1);
        await commonElements.setAddress(address_1[0], address_1[1], address_1[2], address_1[3], city_1, stateCountry_1, postalCode_1, country_1);
        await commonElements.clickSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
        expect(await commonElements.getCountryValue()).toBe(country_1);
        expect(await commonElements.getStartDateValue()).toBe(startDate_1);
        expect(await commonElements.getEndDateValue()).toBe(endDate_1);
        expect(await tempAcomodationPage.getVacateDueValue()).toBe(vacateDue_1);
        expect(await tempAcomodationPage.getRentCurrencyValue()).toBe(rentCurrency_1);
        expect(await tempAcomodationPage.getRentCurrencyAmountValue()).toBe(rentAmount_1);
        expect(await tempAcomodationPage.getRentPaymentTermValue()).toBe(rentPaymentTerm_1);
        expect(await tempAcomodationPage.getAccommodationNotesValue()).toBe(notes_1);
    });

    it('Verify edit form Accommodation witout saving ', async () => {
        await tempAcomodationPage.setTempAcomodationDetails(startDate_2, endDate_2, vacateDue_2, rentCurrency_2, rentAmount_2, rentPaymentTerm_2, notes_2);
        await commonElements.setAddress(address_2[0], address_2[1], address_2[2], address_2[3], city_2, stateCountry_2, postalCode_2, country_2);
        await commonElements.refreshPage();
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
        expect(await commonElements.getCountryValue()).toBe(country_1);
        expect(await commonElements.getStartDateValue()).toBe(startDate_1);
        expect(await commonElements.getEndDateValue()).toBe(endDate_1);
        expect(await tempAcomodationPage.getVacateDueValue()).toBe(vacateDue_1);
        expect(await tempAcomodationPage.getRentCurrencyValue()).toBe(rentCurrency_1);
        expect(await tempAcomodationPage.getRentCurrencyAmountValue()).toBe(rentAmount_1);
        expect(await tempAcomodationPage.getRentPaymentTermValue()).toBe(rentPaymentTerm_1);
        expect(await tempAcomodationPage.getAccommodationNotesValue()).toBe(notes_1);

    });
    it('Verify edit form Accommodation with saving ', async () => {
        await tempAcomodationPage.setTempAcomodationDetails(startDate_2, endDate_2, vacateDue_2, rentCurrency_2, rentAmount_2, rentPaymentTerm_2, notes_2);
        await commonElements.setAddress(address_2[0], address_2[1], address_2[2], address_2[3], city_2, stateCountry_2, postalCode_2, country_2);
        await commonElements.clickSaveBtn();
        await commonElements.refreshPage();
        expect(await commonElements.getAddressLine1Value()).toBe(address_2[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_2[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_2[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_2[3]);
        expect(await commonElements.getCityValue()).toBe(city_2);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_2);
        expect(await commonElements.getCountryValue()).toBe(country_2);
        expect(await commonElements.getStartDateValue()).toBe(startDate_2);
        expect(await commonElements.getEndDateValue()).toBe(endDate_2);
        expect(await tempAcomodationPage.getVacateDueValue()).toBe(vacateDue_2);
        expect(await tempAcomodationPage.getRentCurrencyValue()).toBe(rentCurrency_2);
        expect(await tempAcomodationPage.getRentCurrencyAmountValue()).toBe(rentAmount_2);
        expect(await tempAcomodationPage.getRentPaymentTermValue()).toBe(rentPaymentTerm_2);
        expect(await tempAcomodationPage.getAccommodationNotesValue()).toBe(notes_2);
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
        expect(await initiatedServicesPage.getDocumentUploadDate()).toContain(await commonElements.getCurrentDate(isGitActionTest));
        await initiatedServicesPage.removeServiceDocument();
        expect(await initiatedServicesPage.isDocumentRemovedMsgDisplayed()).toBe(true);
        await addServiceDocument.removeDocumentByName();
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
        expect(await financeTransactions.getPaymentDueValue()).toBe(purchaseOrderDetails_1[5])
        await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.clickEditPurchaseOrderBtn();
        expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_1[0])
        expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_1[1])
        expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_1[2])
        expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_1[3])
        expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_1[4])
        expect(await financeTransactions.getPaymentDueValue()).toBe(purchaseOrderDetails_1[5])
        await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isPurchaseTransactionUpdMsgDispayed()).toBe(true)
        await financeTransactions.clickEditPurchaseOrderBtn();
        expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_2[0])
        expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_2[1])
        expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_2[2])
        expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_2[3])
        expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_2[4])
        expect(await financeTransactions.getPaymentDueValue()).toBe(purchaseOrderDetails_2[5])
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
        expect(await financeTransactions.getInvoicingDateValue()).toBe(salesOrderDetails_1[3])
        await financeTransactions.editSalesOrder(salesOrderDetails_2);
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.clickEditSalesOrderBtn();
        expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_1[0])
        expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_1[1])
        expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_1[2])
        expect(await financeTransactions.getInvoicingDateValue()).toBe(salesOrderDetails_1[3])
        await financeTransactions.editSalesOrder(salesOrderDetails_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await financeTransactions.isSalesOrderUpdMsgDispayed()).toBe(true);
        await financeTransactions.clickEditSalesOrderBtn();
        expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_2[0])
        expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_2[1])
        expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_2[2])
        expect(await financeTransactions.getInvoicingDateValue()).toBe(salesOrderDetails_2[3])
        await commonElements.clickDialogWindowCancelBtn();
        await financeTransactions.cancelSalesOrder();
        expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    });
    it('Verify service Recurring Purchase Orders', async () => {
        let startDate = await commonElements.getCurrentDateNo0InMonth();
        let endDate = await commonElements.getCurrentDatePlusDaysNo0InMonth(8);
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
        expect(await financeTransactions.isRecurringPOLabelDisplayed(await commonElements.getCurrentDate(isGitActionTest))).toBe(true);
        expect(await financeTransactions.isRecurringPOLabelDisplayed(recurringPODetails[5])).toBe(true);
        await financeTransactions.cancelRecurringPO();
        expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    });

    it('Verify Lease extensions', async () => {
        await tempAcomodationPage.clickAddExtension();
        await tempAcomodationPage.setLeaseExtensions(negotiatedDate_1, newEndDate_1, rentCurrency_1, rentAmount_1, rentPaymentTerm_1, reason_1, extensionConfirm_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await tempAcomodationPage.isLeaseExtensionsSubmitMsgDisplayed()).toBe(true)
        await tempAcomodationPage.clickEditExtensionsBtn();
        expect(await tempAcomodationPage.getNegotiatedDate()).toBe(negotiatedDate_1);
        expect(await tempAcomodationPage.getNewEndDate()).toBe(newEndDate_1);
        expect(await tempAcomodationPage.getDialogWindowRentCurrencyAmountValue()).toBe(rentAmount_1);
        expect(await tempAcomodationPage.getDialogWindowRentCurrencyValue()).toBe(rentCurrency_1);
        expect(await tempAcomodationPage.getDialogWindowRentPaymentTermValue()).toBe(rentPaymentTerm_1);
        expect(await tempAcomodationPage.getExtensionReasonValue()).toBe(reason_1);
        expect(await tempAcomodationPage.getExtensionConfirmed()).toBe(extensionConfirm_1);
        await tempAcomodationPage.setLeaseExtensions(negotiatedDate_2, newEndDate_2, rentCurrency_2, rentAmount_2, rentPaymentTerm_2, reason_2, extensionConfirm_2);
        await commonElements.clickDialogWindowCancelBtn();
        await tempAcomodationPage.clickEditExtensionsBtn();
        expect(await tempAcomodationPage.getNegotiatedDate()).toBe(negotiatedDate_1);
        expect(await tempAcomodationPage.getNewEndDate()).toBe(newEndDate_1);
        expect(await tempAcomodationPage.getDialogWindowRentCurrencyAmountValue()).toBe(rentAmount_1);
        expect(await tempAcomodationPage.getDialogWindowRentCurrencyValue()).toBe(rentCurrency_1);
        expect(await tempAcomodationPage.getDialogWindowRentPaymentTermValue()).toBe(rentPaymentTerm_1);
        expect(await tempAcomodationPage.getExtensionReasonValue()).toBe(reason_1);
        expect(await tempAcomodationPage.getExtensionConfirmed()).toBe(extensionConfirm_1);
        await tempAcomodationPage.setLeaseExtensions(negotiatedDate_2, newEndDate_2, rentCurrency_2, rentAmount_2, rentPaymentTerm_2, reason_2, extensionConfirm_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await tempAcomodationPage.isLeaseExtensionsUpdMsgDisplayed()).toBe(true)
        await tempAcomodationPage.clickEditExtensionsBtn();
        expect(await tempAcomodationPage.getNegotiatedDate()).toBe(negotiatedDate_2);
        expect(await tempAcomodationPage.getNewEndDate()).toBe(newEndDate_2);
        expect(await tempAcomodationPage.getDialogWindowRentCurrencyAmountValue()).toBe(rentAmount_2);
        expect(await tempAcomodationPage.getDialogWindowRentCurrencyValue()).toBe(rentCurrency_2);
        expect(await tempAcomodationPage.getDialogWindowRentPaymentTermValue()).toBe(rentPaymentTerm_2);;
        expect(await tempAcomodationPage.getExtensionReasonValue()).toBe(reason_2);
        expect(await tempAcomodationPage.getExtensionConfirmed()).toBe(extensionConfirm_2);
        await commonElements.clickDialogWindowCancelBtn();
    });
    it('Verify Lease extensions remove and no require fields msg error ', async () => {
        await tempAcomodationPage.clickAddExtension();
        await commonElements.clickDialogWindowSaveBtn();
        await commonElements.clickDialogWindowCancelBtn();
        expect(await financeTransactions.isInvalidFinanceFormMsgDispayed()).toBe(true);
        await tempAcomodationPage.removeExtensionWithConfirm("no");
        expect(await tempAcomodationPage.isNoExtensionLabelExisting()).toBe(false);
        await tempAcomodationPage.removeExtensionWithConfirm("yes");
        expect(await tempAcomodationPage.isLeaseExtensionRemoveMsgDisplayed()).toBe(true);
        expect(await tempAcomodationPage.isNoExtensionLabelExisting()).toBe(true);
    });


});
