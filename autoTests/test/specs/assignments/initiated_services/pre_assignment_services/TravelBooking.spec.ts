import addServiceDocument from '../../../../helper/addServiceDocument';
import commonElements from '../../../../helper/commonElements';
import financeTransactions from '../../../../helper/financeTransactions';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import tempAcomodationPage from '../../../../pageobjects/assignment/services/tempAcomodation.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const serviceName = "Travel booking"
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
const contactPerson_1 = "FirstTestName_2 LastTestName_2 (assignee)"
const contactPerson_2 = "Partner q (partner)"
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
const purchaseOrderDetails_1 = ["Roebuck Removals ", "K2 Managment Fee - Travel Booking", "USD - US Dollar", "500", "testDescrpt1", "17.5.2022"]
const purchaseOrderDetails_2 = ["Roebuck Removals", "K2 Managment Fee - Travel Booking", "EUR - Euro", "800", "descrpt2", "22.5.2022"]
const salesOrderDetails_1 = ["Travel Booking - Other", "225", "descript1", "22.5.2022"]
const salesOrderDetails_2 = ["Travel Booking - Other", "565", "2descript", "12.7.2022"]
const recurringPODetails = ["Roebuck Removals ", "K2 Disbursement Fee", "USD - US Dollar", "50", "Weekly", "testDescrpt1"]

xdescribe('Travel booking Service, documents and finance test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / Travel booking tab and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / Travel booking");
    });
    it('Go to Services / Travel booking tab and check label', async () => {

    })


    // it('Verify service documents', async () => {
    //     await addServiceDocument.addDocumentByServiceName(serviceName);
    //     await initiatedServicesPage.clickAddServiceDocuments();
    //     await initiatedServicesPage.clickDocumentChbByName();
    //     await initiatedServicesPage.clickCancelDocumentBtn();
    //     expect(await initiatedServicesPage.isNoDocumentsLabelDisplayed()).toBe(true);
    //     await initiatedServicesPage.clickAddServiceDocuments();
    //     await initiatedServicesPage.clickDocumentChbByName();
    //     await initiatedServicesPage.clickAddDocuments();
    //     expect(await initiatedServicesPage.getDocumentUploadDate()).toContain(await commonElements.getCurrentDate());
    //     await initiatedServicesPage.removeServiceDocument();
    //     expect(await initiatedServicesPage.isDocumentRemovedMsgDisplayed()).toBe(true);
    //     await addServiceDocument.removeDocumentByName();
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
    //     expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_1[0])
    //     expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_1[1])
    //     expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_1[2])
    //     expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_1[3])
    //     expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_1[4])
    //     expect(await financeTransactions.getPaymentDueValue()).toBe(purchaseOrderDetails_1[5])
    //     await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.clickEditPurchaseOrderBtn();
    //     expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_1[0])
    //     expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_1[1])
    //     expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_1[2])
    //     expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_1[3])
    //     expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_1[4])
    //     expect(await financeTransactions.getPaymentDueValue()).toBe(purchaseOrderDetails_1[5])
    //     await financeTransactions.editPurchaseOrder(purchaseOrderDetails_2);
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isPurchaseTransactionUpdMsgDispayed()).toBe(true)
    //     await financeTransactions.clickEditPurchaseOrderBtn();
    //     expect(await financeTransactions.getPartnerValue()).toContain(purchaseOrderDetails_2[0])
    //     expect(await financeTransactions.getProductValue()).toBe(purchaseOrderDetails_2[1])
    //     expect(await financeTransactions.getCurrencyValue()).toBe(purchaseOrderDetails_2[2])
    //     expect(await financeTransactions.getItemAmountValue()).toBe(purchaseOrderDetails_2[3])
    //     expect(await financeTransactions.getDescriptionValue()).toBe(purchaseOrderDetails_2[4])
    //     expect(await financeTransactions.getPaymentDueValue()).toBe(purchaseOrderDetails_2[5])
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
    //     expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_1[0])
    //     expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_1[1])
    //     expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_1[2])
    //     expect(await financeTransactions.getInvoicingDateValue()).toBe(salesOrderDetails_1[3])
    //     await financeTransactions.editSalesOrder(salesOrderDetails_2);
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.clickEditSalesOrderBtn();
    //     expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_1[0])
    //     expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_1[1])
    //     expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_1[2])
    //     expect(await financeTransactions.getInvoicingDateValue()).toBe(salesOrderDetails_1[3])
    //     await financeTransactions.editSalesOrder(salesOrderDetails_2);
    //     await commonElements.clickDialogWindowSaveBtn();
    //     expect(await financeTransactions.isSalesOrderUpdMsgDispayed()).toBe(true);
    //     await financeTransactions.clickEditSalesOrderBtn();
    //     expect(await financeTransactions.getProductValue()).toContain(salesOrderDetails_2[0])
    //     expect(await financeTransactions.getItemAmountValue()).toBe(salesOrderDetails_2[1])
    //     expect(await financeTransactions.getDescriptionValue()).toBe(salesOrderDetails_2[2])
    //     expect(await financeTransactions.getInvoicingDateValue()).toBe(salesOrderDetails_2[3])
    //     await commonElements.clickDialogWindowCancelBtn();
    //     await financeTransactions.cancelSalesOrder();
    //     expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    // });
    // it('Verify service Recurring Purchase Orders', async () => {
    //     let startDate = await commonElements.getCurrentDateNo0InMonth();
    //     let endDate = await commonElements.getCurrentDatePlusDaysNo0InMonth(8);
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
    //     expect(await financeTransactions.isRecurringPOLabelDisplayed(await commonElements.getCurrentDate())).toBe(true);
    //     expect(await financeTransactions.isRecurringPOLabelDisplayed(recurringPODetails[5])).toBe(true);
    //     await financeTransactions.cancelRecurringPO();
    //     expect(await financeTransactions.isTransactionsCancelledMsgDispayed()).toBe(true);
    // });

});
