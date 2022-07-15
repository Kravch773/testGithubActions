import addServiceDocument from '../../../../helper/addServiceDocument';
import commonElements from '../../../../helper/commonElements';
import financeTransactions from '../../../../helper/financeTransactions';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import tenancyManagementPage from '../../../../pageobjects/assignment/services/tenancyManagement.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';
import Page from '../../../../pageobjects/Page';

const startDate = commonElements.getCurrentDateNo0Format()
const serviceName = " Tenancy management"
const property = "Existing property"
const propertyAddress_1 = " TestStreet_11 (TestStreet_11)"
const propertyAddress_2 = " TestStreet_21 (TestStreet_21)"
const servicesRequired_1 = "Lease management"
const servicesRequired_2 = "Deposit payment"
const servicesRequired_3 = "Property inspection"
const agentDetails_1 = "testAgenDetails_1"
const agentDetails_2 = "testAgenDetails_2"
const landlordDetails_1 = "testLandlordDetails_1"
const landlordDetails_2 = "testLandlordDetails_2"

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
const accommodationAddedMsg = "A new tenancy management instance has been added successfully. Thank you."
const accommodationUpdMsg = "The service collection has been updated successfully"
const accommodationRemoveMsg = "The service collection has been deleted successfully"


const purchaseOrderDetails_1 = ["Roebuck Removals ", "Temporary Accomodation EM", "USD - US Dollar", "500", "testDescrpt1", startDate]
const purchaseOrderDetails_2 = ["Roebuck Removals", "Temporary Accomodation EM", "EUR - Euro", "800", "descrpt2", commonElements.getCurrentDatePlusDaysNo0Format(8)]
const salesOrderDetails_1 = ["Hessel Fee", "225", "descript1", startDate]
const salesOrderDetails_2 = ["Hessel Fee", "565", "2descript", commonElements.getCurrentDatePlusDaysNo0Format(10)]
const recurringPODetails = ["Roebuck Removals ", "K2 Management Fee - Expense Management", "USD - US Dollar", "50", "Weekly", "testDescrpt1"]


describe('Vehicle move Service, documents and finance test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / Vehicle move page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await Page.click('//paginator//a[text()=" 2 "]');
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / " + serviceName);
    });

    it('Verify ', async () => {
        await tenancyManagementPage.clickAddNewAccommodationBtn();
        await commonElements.setRbtByLabel(property);
        await tenancyManagementPage.setExistingAddressesDD(propertyAddress_1);
        await commonElements.setChbByLabel(servicesRequired_1, true);
        await commonElements.setChbByLabel(servicesRequired_2, false);
        await commonElements.setChbByLabel(servicesRequired_3, false);
        await tenancyManagementPage.setAgentDetails(agentDetails_1);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationAddedMsg)).toBe(true);
        expect(await initiatedServicesPage.getAddressBlockTextByStreetName(address_1[0])).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${stateCountry_1}\n${postalCode_1}\n${country_1}`)
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_2)).toBe(false);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_3)).toBe(false);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_1);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_1);
    });
    it('Verify edit ', async () => {
        await tenancyManagementPage.clickAccommodationEditBtn();
        await tenancyManagementPage.setExistingAddressesDD(propertyAddress_2);
        await commonElements.setChbByLabel(servicesRequired_1, false);
        await commonElements.setChbByLabel(servicesRequired_2, true);
        await commonElements.setChbByLabel(servicesRequired_3, true);
        await tenancyManagementPage.setAgentDetails(agentDetails_2);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_2);
        await commonElements.clickDialogWindowCancelBtn();
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getAddressBlockTextByStreetName(address_1[0])).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${stateCountry_1}\n${postalCode_1}\n${country_1}`)
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_2)).toBe(false);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_3)).toBe(false);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_1);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_1);
        await tenancyManagementPage.clickAccommodationEditBtn();
        await tenancyManagementPage.setExistingAddressesDD(propertyAddress_2);
        await commonElements.setChbByLabel(servicesRequired_1, false);
        await commonElements.setChbByLabel(servicesRequired_2, true);
        await commonElements.setChbByLabel(servicesRequired_3, true);
        await tenancyManagementPage.setAgentDetails(agentDetails_2);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationUpdMsg)).toBe(true);
        expect(await initiatedServicesPage.getAddressBlockTextByStreetName(address_1[0])).toContain(`${address_2[0]}\n${address_2[1]}\n${address_2[2]}\n${address_2[3]}\n${city_2}\n${stateCountry_2}\n${postalCode_2}\n${country_2}`)
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_1)).toBe(false);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_3)).toBe(true);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_2);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_2);
    });
    it('Verify edit 2', async () => {
        await tenancyManagementPage.setAgentDetails(agentDetails_1);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_1);
        await tenancyManagementPage.clickAccommodationSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_1);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_1);
        await tenancyManagementPage.setAgentDetails(agentDetails_2);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_1);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_1);
        await tenancyManagementPage.setAgentDetails(agentDetails_2);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_2);
        await tenancyManagementPage.clickAccommodationSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_2);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_2);
    });

    // it('Verify service documents', async () => {
    //     await addServiceDocument.addDocumentByServiceName(serviceName);
    //     await initiatedServicesPage.clickAddServiceDocuments();
    //     await initiatedServicesPage.clickDocumentChbByName();
    //     await initiatedServicesPage.clickCancelDocumentBtn();
    //     expect(await initiatedServicesPage.isNoDocumentsLabelDisplayed()).toBe(true);
    //     await initiatedServicesPage.clickAddServiceDocuments();
    //     await initiatedServicesPage.clickDocumentChbByName();
    //     await initiatedServicesPage.clickAddDocuments();
    //     expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getDocumentUploadDate())).toContain(startDate);
    // });
    // it('Verify remove service document', async () => {
    //     await initiatedServicesPage.removeServiceDocument();
    //     expect(await initiatedServicesPage.isDocumentRemovedMsgDisplayed()).toBe(true);
    //     await addServiceDocument.removeDocumentByName(serviceName);
    // });
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
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getPaymentDueValue())).toBe(purchaseOrderDetails_1[5])
    //     await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.clickEditPurchaseOrderBtn();
    //     expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_1[0]);
    //     expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_1[1]);
    //     expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_1[2]);
    //     expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_1[3]);
    //     expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_1[4]);
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getPaymentDueValue())).toBe(purchaseOrderDetails_1[5])
    //     await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isPurchaseTransactionUpdMsgDispayed()).toBe(true)
    //     await financeTransactions.clickEditPurchaseOrderBtn();
    //     expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_2[0]);
    //     expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_2[1]);
    //     expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_2[2]);
    //     expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_2[3]);
    //     expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_2[4]);
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
    //     expect(await commonElements.createStandartDateForm(await financeTransactions.getInvoicingDateValue())).toBe(salesOrderDetails_2[3])
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
});
