import Page from "../pageobjects/Page";
import commonElements from "./commonElements";

class addServiceDocument {

    public get addPurchaseOrderBtn(): string {
        return '//button[text()=" Add purchase order "]'
    }
    public get addSalesOrderBtn(): string {
        return '//button[text()=" Add sales order "]'
    }
    public get addRecurringPOBtn(): string {
        return '//button[text()=" Add recurring PO "]'
    }
    public get partnerSelect(): string {
        return '//label[text()=" Partner "]/../../..//k2-select'
    }
    public get productSelect(): string {
        return '//label[text()=" Product "]/../../..//k2-select'
    }
    public get currencyDD(): string {
        return '//label[text()=" Currency "]/../../..//select'
    }
    public get itemAmountInput(): string {
        return '//label[text()=" Item amount "]/../../..//input'
    }
    public get descriptionInput(): string {
        return '//label[text()=" Description "]/../../..//input'
    }
    public get paymentDueCalendar(): string {
        return '//label[text()=" Payment due "]/../../..//input'
    }
    public get editPurchaseOrderBtn(): string {
        return '//transactions-purchases-oneoff//a[text()="edit"]'
    }
    public get editSalesOrderBtn(): string {
        return '//transactions-invoices-oneoff//a[text()="edit"]'
    }
    public get editRecurringPOBtn(): string {
        return '//transactions-purchases-recurring-po//a[text()="edit"]'
    }
    public get cancelPurchaseOrderBtn(): string {
        return '//transactions-purchases-oneoff//a[text()=" cancel "]'
    }
    public get cancelSalesOrderBtn(): string {
        return '//transactions-invoices-oneoff//a[text()="cancel"]'
    }
    public get cancelRecurringPOBtn(): string {
        return '//transactions-purchases-recurring-po//a[text()=" cancel "]'
    }
    public get invoicingDateCalendar(): string {
        return '//label[text()=" Invoicing date "]/../../..//input'
    }
    public get recurringAmountInput(): string {
        return '//label[text()=" Recurring amount "]/../../..//input'
    }
    public get frequencyDD(): string {
        return '//label[text()=" Frequency "]/../../..//select'
    }
    public get startBillingDateCalendar(): string {
        return '//label[text()=" Recurring Start billing date "]/../../..//input'
    }
    public get endBillingDateCalendar(): string {
        return '//label[text()=" Recurring End billing date "]/../../..//input'
    }
    public getRecurringPOLabel(labelText): string {
        return `//transactions-purchases-recurring-po//tr//*[contains(text(),"${labelText}")]`
    }
    get recurringPOPaymentDueLabel(): string {
        return `//transactions-purchases-recurring-po//tr//date/time`
    }
    public async clickAddPurchaseOrderBtn(): Promise<void> {
        await Page.click(this.addPurchaseOrderBtn)
    }
    public async clickAddSalesOrderBtn(): Promise<void> {
        await Page.click(this.addSalesOrderBtn)
    }
    public async clickAddRecurringPOBtn(): Promise<void> {
        await Page.click(this.addRecurringPOBtn)
    }
    public async clickAddOrderBtn(): Promise<void> {
        await Page.click(commonElements.dialogWindowSaveChangesBtn)
    }
    public async setPurchaseOrder(purchaseOrderDetails) {
        await commonElements.setSelectValue(purchaseOrderDetails[0], this.partnerSelect);
        await commonElements.setSelectValue(purchaseOrderDetails[1], this.productSelect);
        await commonElements.setDropDownValue(purchaseOrderDetails[2], this.currencyDD);
        await commonElements.setInputValue(purchaseOrderDetails[3], this.itemAmountInput);
        await commonElements.setInputValue(purchaseOrderDetails[4], this.descriptionInput);
        await commonElements.setDateValue(this.paymentDueCalendar, purchaseOrderDetails[5]);
    }
    public async editPurchaseOrder(purchaseOrderDetails) {
        await commonElements.setDropDownValue(purchaseOrderDetails[2], this.currencyDD);
        await commonElements.setInputValue(purchaseOrderDetails[3], this.itemAmountInput);
        await commonElements.setInputValue(purchaseOrderDetails[4], this.descriptionInput);
        await commonElements.setDateValue(this.paymentDueCalendar, purchaseOrderDetails[5]);
    }
    public async getPartnerValue(): Promise<string> {
        return await Page.getElementText(this.partnerSelect);
    }
    public async getProductValue(): Promise<string> {
        return await Page.getElementText(this.productSelect);
    }
    public async getCurrencyValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.currencyDD);
    }
    public async getItemAmountValue(): Promise<string> {
        return await Page.getElementValue(this.itemAmountInput);
    }
    public async getDescriptionValue(): Promise<string> {
        return await Page.getElementValue(this.descriptionInput);
    }
    public async getPaymentDueValue(): Promise<string> {
        return await Page.getElementValue(this.paymentDueCalendar);
    }
    public async getRecurringAmountValue(): Promise<string> {
        return await Page.getElementValue(this.recurringAmountInput);
    }
    public async getFrequencyValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.frequencyDD);
    }
    public async getStartBillingDateValue(): Promise<string> {
        return await Page.getElementValue(this.startBillingDateCalendar);
    }
    public async getInvoicingDateValue(): Promise<string> {
        return await Page.getElementValue(this.invoicingDateCalendar);
                // return await commonElements.createStandartDateForm(await Page.getElementValue(this.invoicingDateCalendar));
    }
    public async getEndBillingDateValue(): Promise<string> {
                // return await commonElements.createStandartDateForm(await Page.getElementValue(this.endBillingDateCalendar));
        return await Page.getElementValue(this.endBillingDateCalendar);
    }
    public async clickEditPurchaseOrderBtn(): Promise<void> {
        await Page.click(this.editPurchaseOrderBtn);
    }
    public async clickEditSalesOrderBtn(): Promise<void> {
        await Page.click(this.editSalesOrderBtn);
    }
    public async clickEditRecurringPOBtn(): Promise<void> {
        await Page.click(this.editRecurringPOBtn);
    }
    public async cancelPurchaseOrder(): Promise<void> {
        await Page.click(this.cancelPurchaseOrderBtn);
        await commonElements.setRbtByLabel("Input error");
        await commonElements.clickDialogWindowSaveBtn();
    }
    public async cancelSalesOrder(): Promise<void> {
        await Page.click(this.cancelSalesOrderBtn);
        await commonElements.setRbtByLabel("Input error");
        await commonElements.clickDialogWindowSaveBtn();
    }
    public async cancelRecurringPO(): Promise<void> {
        await Page.click(this.cancelRecurringPOBtn);
        await commonElements.setRbtByLabel("Input error");
        await commonElements.clickDialogWindowSaveBtn();
    }
    public async setSalesOrder(salesOrderDetails): Promise<void> {
        await commonElements.setSelectValue(salesOrderDetails[0], this.productSelect);
        await commonElements.setInputValue(salesOrderDetails[1], this.itemAmountInput);
        await commonElements.setInputValue(salesOrderDetails[2], this.descriptionInput);
        await commonElements.setDateValue(this.invoicingDateCalendar, salesOrderDetails[3]);
    }
    public async editSalesOrder(salesOrderDetails): Promise<void> {
        await commonElements.setInputValue(salesOrderDetails[1], this.itemAmountInput);
        await commonElements.setInputValue(salesOrderDetails[2], this.descriptionInput);
        await commonElements.setDateValue(this.invoicingDateCalendar, salesOrderDetails[3]);
    }
    public async setRecurringPO(recurringPODetails, startDate, endDate): Promise<void> {
        await commonElements.setSelectValue(recurringPODetails[0], this.partnerSelect);
        await commonElements.setSelectValue(recurringPODetails[1], this.productSelect);
        await commonElements.setDropDownValue(recurringPODetails[2], this.currencyDD);
        await commonElements.setInputValue(recurringPODetails[3], this.recurringAmountInput);
        await commonElements.setDropDownValue(recurringPODetails[4], this.frequencyDD);
        await commonElements.setInputValue(recurringPODetails[5], this.descriptionInput);
        await commonElements.setDateValue(this.startBillingDateCalendar, startDate);
        await commonElements.setDateValue(this.endBillingDateCalendar, endDate);
    }
    public async isRecurringPOLabelDisplayed(labelText): Promise<boolean> {
        return await Page.isElementDisplayed(this.getRecurringPOLabel(labelText));
    }
    public async getRecurringPOPaymentDueLabel():Promise<string>{
        return await Page.getElementText(this.recurringPOPaymentDueLabel);
    }
    public async formRecurringPOPartnerCost(fullCurrency, amount): Promise<string> {
        let currency = fullCurrency.split(" - ");
        return currency[0] + " " + amount;
    }
    public async isInvalidFinanceFormMsgDispayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("The form is invalid. Please correct the highlighted fields.");
    }
    public async isTransactionsAddedMsgDispayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("transaction was recorded successfully");
    }
    public async isTransactionsCancelledMsgDispayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("The transaction was successfully cancelled. Thank you.");
    }
    public async isPurchaseTransactionUpdMsgDispayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("The purchase transaction was updated successfully");
    }
    public async isSalesOrderUpdMsgDispayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("The sales transaction was updated successfully");
    }
}
export default new addServiceDocument();
