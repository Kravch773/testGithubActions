
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';
import initiatedServicesPage from '../initiatedServices.page';

class departureServicesPage {
    public getDepartureServiceSection(departureServiceName): string {
        return `//h2[contains(text(),"${departureServiceName}")]/ancestor::service-collection-view`
    }
    public getSavePartnerServiceBtn(departureServiceName): string {
        return this.getDepartureServiceSection(departureServiceName) + "//departure-vendor-section-details//button"
    }
    public getSubsectionSaveBtn(departureServiceName): string {
        return this.getDepartureServiceSection(departureServiceName) + "//departure-subsection//button"
    }
    public getCompletionDateInputByName(departureServiceName): string {
        return this.getDepartureServiceSection(departureServiceName) + "//input";
    }
    public getLeaseEndDateCalendarByName(departureServiceName): string {
        return this.getDepartureServiceSection(departureServiceName) + '//label[text()=" Lease end date "]/ancestor::field-template//input'
    }
    public get checkOutCalendarByName(): string {
        return '//label[text()=" Check out "]/ancestor::field-template//input'
    }
    public get assigneePresentChb(): string {
        return '//label[text()=" Assignee present "]/ancestor::field-template//input'
    }
    public get cleaningArrangeChb(): string {
        return '//label[text()=" Cleaning arranged "]/ancestor::field-template//input'
    }
    public getDateofCleaningCalendarByName(departureServiceName): string {
        return this.getDepartureServiceSection(departureServiceName) + '//label[text()=" Date of cleaning "]/ancestor::field-template//input'
    }
    public get accessArrangementInput(): string {
        return '//label[text()=" Access arrangements "]/ancestor::field-template//textarea'
    }
    public get checkOutReportReceivedChb(): string {
        return '//label[text()=" Check out report received "]/ancestor::field-template//input'
    }
    public get workToBeCarriedInput(): string {
        return '//label[text()=" Work to be carried out "]/ancestor::field-template//textarea'
    }
    public get startDateCalendar(): string {
        return '//label[text()=" Start date "]/ancestor::field-template//input'
    }
    public get endDateCalendar(): string {
        return '//label[text()=" End date "]/ancestor::field-template//input'
    }
    public get originalDepositCurrency(): string {
        return '//label[text()=" Original deposit amount "]/ancestor::field-template//k2-select'
    }
    public get originalDepositAmount(): string {
        return '#originalDepositAmount'
    }
    public get landlordReturnedDepositDD(): string {
        return '//label[text()=" Landlord returned deposit to "]/ancestor::field-template//select'
    }
    public get depositAmountInput(): string {
        return '#depositAmount'
    }
    public get deductionsInput(): string {
        return '#deductions'
    }
    public get reasonForDeductionsInput(): string {
        return '//label[text()=" Reason for deductions "]/ancestor::field-template//textarea'
    }
    public get creditBackToTheaccountChb(): string {
        return '//label[text()=" Credit back to the account "]/ancestor::field-template//input'
    }
    public get addNewCancellationBtn(): string {
        return '//button[text()="Add new cancellation"]'
    }
    public get startMeterReadingInput(): string {
        return '//label[text()=" Beginning meter reading "]/ancestor::field-template//input'
    }
    public get endMeterReadingInput(): string {
        return '//label[text()=" End meter reading "]/ancestor::field-template//input'
    }
    public get disconnectionDateCalendar(): string {
        return '//label[text()=" Disconnection date "]/ancestor::field-template//input'
    }
    public get disconnectionCostInput(): string {
        return '#disconnectionCost'
    }
    public get paidByDD(): string {
        return '//label[text()=" Paid by "]/ancestor::field-template//select'
    }
    public get utilityTypesDD(): string {
        return '#utilityTypesId'
    }
    public get providerInput(): string {
        return '#provider'
    }
    public get departureUtilitySaveBtn(): string {
        return '//departure-utility-cancellation-form//button'
    }
    public get utilityRemoveBtn(): string {
        return '//deletable-item-options//span[text()="remove"]'
    }
    public get utilityNoAddedServiceLabel(): string {
        return '//departure-utility-cancellation-subsection//div[text()=" There are no property utility cancellations. "]'
    }
    public async clickAddServicePartnterBtnByName(departureServiceName): Promise<void> {
        await Page.click(this.getDepartureServiceSection(departureServiceName) + initiatedServicesPage.addPartnerToServiceBtn);
    }
    public async clickSavePartnerServiceBtn(departureServiceName): Promise<void> {
        await Page.click(this.getSavePartnerServiceBtn(departureServiceName));
    }
    public async clickSubsectionSaveBtn(departureServiceName): Promise<void> {
        await Page.click(this.getSubsectionSaveBtn(departureServiceName));
    }
    public async setCompletionDateByName(departureServiceName, value): Promise<void> {
        await commonElements.setDateValue(this.getCompletionDateInputByName(departureServiceName), value);
    }
    public async getCompletionDateByName(departureServiceName): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.getCompletionDateInputByName(departureServiceName)));
    }
    public async isDepartureNoServiceLabelExisting(departureServiceName): Promise<boolean> {
        return await Page.isElementExisting(this.getDepartureServiceSection(departureServiceName) + initiatedServicesPage.noServicePartnerlabel, 1000);
    }
    public async getLeaseEndDateValueByName(departureServiceName): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.getLeaseEndDateCalendarByName(departureServiceName)));
    }
    public async getCheckOutDateValueByName(): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.checkOutCalendarByName));
    }
    public async getDateofCleaningValueByName(departureServiceName): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.getDateofCleaningCalendarByName(departureServiceName)));
    }
    public async getAccessArrangementValue(): Promise<string> {
        return await Page.getElementValue(this.accessArrangementInput);
    }
    public async setPropertyCheckOut(departureServiceName, leaseEndDate, checkOut, chbState, dateOfCleaning, accessArrangements): Promise<void> {
        await commonElements.setDateValue(this.getLeaseEndDateCalendarByName(departureServiceName), leaseEndDate);
        await commonElements.setDateValue(this.checkOutCalendarByName, checkOut);
        await commonElements.setChb(this.assigneePresentChb, chbState);
        await commonElements.setChb(this.cleaningArrangeChb, chbState);
        await commonElements.setDateValue(this.getDateofCleaningCalendarByName(departureServiceName), dateOfCleaning);
        await commonElements.setInputValue(accessArrangements, this.accessArrangementInput);
        await commonElements.setChb(this.checkOutReportReceivedChb, chbState);
    }
    public async setPropertyDilapidations(departureServiceName, leaseEndDate, workToBeCarried, startDate, endDate): Promise<void> {
        await commonElements.setDateValue(this.getLeaseEndDateCalendarByName(departureServiceName), leaseEndDate);
        await commonElements.setInputValue(workToBeCarried, this.workToBeCarriedInput)
        await commonElements.setDateValue(this.startDateCalendar, startDate);
        await commonElements.setDateValue(this.endDateCalendar, endDate);
    }
    public async getWorkToBeCarriedValue(): Promise<string> {
        return await Page.getElementValue(this.workToBeCarriedInput);
    }
    public async getStartDatedValue(): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.startDateCalendar));
    }
    public async getEndDateValue(): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.endDateCalendar));
    }
    public async setDepositManagement(departureServiceName, leaseEndDate, originalDepositCurrency, originalDepositAmount, landlord, finalAmount, deductions, reason, creditBackState): Promise<void> {
        await commonElements.setDateValue(this.getLeaseEndDateCalendarByName(departureServiceName), leaseEndDate);
        await commonElements.setSelectValue(originalDepositCurrency, this.originalDepositCurrency);
        await commonElements.setInputValue(originalDepositAmount, this.originalDepositAmount);
        await commonElements.setDropDownValue(landlord, this.landlordReturnedDepositDD);
        await commonElements.setInputValue(finalAmount, this.depositAmountInput);
        await commonElements.setInputValue(deductions, this.deductionsInput);
        await commonElements.setInputValue(reason, this.reasonForDeductionsInput);
        await commonElements.setChb(this.creditBackToTheaccountChb, creditBackState);
    }
    public async getOriginalDepositCurrencyValue(): Promise<string> {
        return await Page.getElementText(this.originalDepositCurrency);
    }
    public async geOriginaDepositAmountValue(): Promise<string> {
        return await Page.getElementValue(this.originalDepositAmount);
    }
    public async getLandlordReturnedDepositValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.landlordReturnedDepositDD);
    }
    public async getDepositAmountValue(): Promise<string> {
        return await Page.getElementValue(this.depositAmountInput);
    }
    public async getDeductionsValue(): Promise<string> {
        return await Page.getElementValue(this.deductionsInput);
    }
    public async getReasonForDeductionsValue(): Promise<string> {
        return await Page.getElementValue(this.reasonForDeductionsInput);
    }
    public async setPropertyUtilities(departureServiceName, leaseEndDate, startMeterReading, endMeterReading, disconnectionDate, disconnectionCost, paymentMadeBy): Promise<void> {
        await commonElements.setDateValue(this.getLeaseEndDateCalendarByName(departureServiceName), leaseEndDate);
        await commonElements.setInputValue(startMeterReading, this.startMeterReadingInput);
        await commonElements.setInputValue(endMeterReading, this.endMeterReadingInput);
        await commonElements.setDateValue(this.disconnectionDateCalendar, disconnectionDate);
        await commonElements.setInputValue(disconnectionCost, this.disconnectionCostInput);
        await commonElements.setDropDownValue(paymentMadeBy, this.paidByDD);
    }
    public async clickAddNewCancellationBtn(): Promise<void> {
        await Page.click(this.addNewCancellationBtn);
    }
    public async setUtilityTypes(utilityType, providerName): Promise<void> {
        await commonElements.setDropDownValue(utilityType, this.utilityTypesDD);
        await commonElements.setInputValue(providerName, this.providerInput);
    }
    public async getStartMeterReadingValue(): Promise<string> {
        return await Page.getElementValue(this.startMeterReadingInput);
    }
    public async getEndMeterReadingValue(): Promise<string> {
        return await Page.getElementValue(this.endMeterReadingInput);
    }
    public async getDisconnectionDateValue(): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.disconnectionDateCalendar));
    }
    public async getDisconnectionCostValue(): Promise<string> {
        return await Page.getElementValue(this.disconnectionCostInput);
    }
    public async getPaidByValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.paidByDD);
    }
    public async clickDepartureUtilitySaveBtn(): Promise<void> {
        await Page.click(this.departureUtilitySaveBtn);
    }
    public async removeUtilityWithConfirm(confirmLabel): Promise<void> {
        await Page.scrollElementIntoView(this.utilityRemoveBtn)
        await Page.click(this.utilityRemoveBtn);
        await Page.waitElementForDisplayed(commonElements.getRemoveConfirmBtn(confirmLabel));
        await (await Page.getElement(commonElements.getRemoveConfirmBtn(confirmLabel))).click({ y: (-1) });
    }
    public async isNoAddedUtilityServiceLabelExisting(): Promise<boolean> {
        return await Page.isElementExisting(this.utilityNoAddedServiceLabel);
    }
    public async isRemovedUtilityMsgDisplayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("Item deleted successfully. Thank you");
    }
}
export default new departureServicesPage();
