import commonElements from "../../helper/commonElements";
import Page from "../Page";
import needAnalysisPage from "./needAnalysis.page";

class initiatedServicesPage {
    public get initiatedServicesLabel(): string {
        return '//assignment-services//h1[contains(text(),"Services /")]'
    }
    public get initiatedServicesTab(): string {
        return '//a[contains(@href,"/initiation")]'
    }
    public get addPartnerToServiceBtn(): string {
        return '//button[text()=" Add partner to service "]'
    }
    public get addPartnerBtn(): string {
        return '//button[text()="Add partner"]'
    }
    public get searchBtn(): string {
        return '//button[text()="Search"]/..'
    }
    public get contactPersonDD(): string {
        return '//label[text()=" Contact person "]/../../..//select'
    }
    public get notesToPartnerInput(): string {
        return '//label[text()=" Notes to partner "]/../../..//textarea'
    }
    public get initiatePartnerBtn(): string {
        return '//button[text()="Initiate partner"]'
    }
    public get sendEmailBtn(): string {
        return '//button[text()=" Send email "]'
    }
    public get removePartnerBtn(): string {
        return '//vendor-section-details//span[text()="remove"]'
    }
    public get noServicePartnerlabel(): string {
        return '//*[contains(text(),"There are no service delivery partners")]'
    }
    public get initiatedPartnerDateLabel(): string {
        return '//div[text()=" Partner was initiated on "]//time'
    }
    public get addServiceDocumentBtn(): string {
        return '//button[text()="Add document"]'
    }
    public get addDocumentsBtn(): string {
        return '//button[contains(text(),"Add document(s)")][not(@disabled)]'
    }
    public get cancelDocumentBtn(): string {
        return '//submit-control//a[text()="cancel"]'
    }
    public get documentUploadDate(): string {
        return '//documents-section//td//time'
    }
    public get removeServiceDocumentBtn(): string {
        return '//table//span[text()="remove"]'
    }
    public get noDocumentsLabel(): string {
        return '//div[text()="There are no documents for this service."]'
    }
    public get saveChangesPartnerBtn(): string {
        return '//vendor-section-details//button[@type="submit"]'
    }
    public get needAnalysisServiceEditBtn(): string {
        return '//edit-needs-analysis-subsection-button//button[text()="Edit"]'
    }
    public get needAnalysisServiceToggle(): string {
        return '//h2[text()="Needs analysis data"]/../../../..//a[@class="toggle pull-right"]'
    }
    public getPartnerByName(partnerName): string {
        return `//vendor-initiation-search//h3//span[contains(text(),"${partnerName}")]`
    }
    public getServiceTabByName(serviceName): string {
        return `//a[contains(@href,"services")][contains(text(),"${serviceName}")]`
    }
    public getDocumentChbByName(fileName): string {
        return `//a[contains(text(),"${fileName}")]/../../../..//input[@type="checkbox"]`
    }
    public getServiceAnalysisAnswerByLabel(label): string {
        return `//edit-needs-analysis-subsection-button/../../..//strong[contains(text(),"${label}")]/ancestor::div[1]//div`
    }
    public get selectAddressLabel(): string {
        return '//a[text()="Select address"]'
    }
    public getAddressBlockByStreetName(streetName): string {
        return `//span[text()="${streetName}"]/ancestor::address-block`
    }
    public get leaseStartCalendar(): string {
        return '//label[text()=" Lease start date "]/ancestor::field-template//input'
    }
    public get leaseEndCalendar(): string {
        return '//label[text()=" Lease end date "]/ancestor::field-template//input'
    }
    public get tenancyExpiryTriggerCalendar(): string {
        return '//label[text()=" Tenancy expiry trigger "]/ancestor::field-template//input'
    }
    public get noticeRequiredInput(): string {
        return '//label[text()=" Notice required "]/ancestor::field-template//input'
    }
    public get noticeRequiredDD(): string {
        return '#noticePeriodUnits'
    }
    public get breakClauseAfterInput(): string {
        return '//label[text()=" Break clause after "]/ancestor::field-template//input'
    }
    public get breakClauseDetailsInput(): string {
        return '//label[text()=" Break clause details "]/ancestor::field-template//textarea'
    }
    public get renewDetailsInput(): string {
        return '//label[text()=" Renew details "]/ancestor::field-template//textarea'
    }
    public get addLeaseDetailsBtn(): string {
        return '//button[text()="Add lease details"]'
    }
    public getBreakClauseRbtByLabel(label): string {
        return `//label[@for="breakClause"]/ancestor::field-template//span[text()="${label}"]/..//input`
    }
    public getRenewOptionRbtByLabel(label): string {
        return `//label[@for="renewOption"]/ancestor::field-template//span[text()="${label}"]/..//input`
    }
    public getLeaseEditBtnByNum(num): string {
        return `(//tenancy-leases-subsection//a[text()="edit"])[${num}]`
    }
    public get originalDepositCurrencySelect(): string {
        return `//label[contains(text(),"Original deposit amount")]/ancestor::field-template//k2-select`
    }
    public get originalDepositAmountInput(): string {
        return `//label[contains(text(),"Original deposit amount")]/ancestor::field-template//input`
    }
    public get depositPaidToDD(): string {
        return `//label[contains(text(),"Deposit paid to")]/ancestor::field-template//select`
    }
    public get depositPaidByDD(): string {
        return `//label[contains(text(),"Deposit paid by")]/ancestor::field-template//select`
    }
    public get depositPaymentSaveBtn(): string {
        return '//deposit-payment-subsection//button'
    }
    public async getServiceName(): Promise<string> {
        return await Page.getElementText(this.initiatedServicesLabel);
    }
    public async clickInitiatedServicesTab(): Promise<void> {
        await Page.click(this.initiatedServicesTab);
    }
    public async clickServiceByName(serviceName): Promise<void> {
        await Page.click(this.getServiceTabByName(serviceName));
    }
    public async clickAddPartnerToServiceBtn(): Promise<void> {
        await Page.click(this.addPartnerToServiceBtn);
    }
    public async clickAddPartnerBtn(): Promise<void> {
        await Page.click(this.addPartnerBtn);
    }
    public async clickSearchBtn(): Promise<void> {
        await Page.click(this.searchBtn);
    }
    public async clickPartnerByName(partnerName): Promise<void> {
        await Page.click(this.getPartnerByName(partnerName));
    }
    public async clickInitiatePartnerBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.initiatePartnerBtn);
        await Page.click(this.initiatePartnerBtn);
    }
    public async clickSendEmailBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.sendEmailBtn);
        await Page.click(this.sendEmailBtn);
    }
    public async getContactPersonValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.contactPersonDD);
    }
    public async getNotesToPartnerValue(): Promise<string> {
        return await Page.getElementValue(this.notesToPartnerInput);
    }
    public async isServiceDetailsSavedMsgDisplayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("The service details have been updated successfully.");
    }
    public async isInitiateServiceMsgDisplayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("Your email has been queued for delivery");
    }
    public async isInitiatedOffPlatformMsgDisplayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("The partner was marked as initiated off platform on");
    }
    public async isPartnerRemovedMsgDisplayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed("The service details for this partner have been removed successfully.");
    }
    public getHomeSearchNAChbIcon(chbLabel): string {
        return `//div[contains(text(),"${chbLabel}")]//icon`
    }
    public getInitiatedPartnerDate(): Promise<string> {
        return Page.getElementText(this.initiatedPartnerDateLabel);
    }
    public async isNoServiceLabelExisting(): Promise<boolean> {
        return await Page.isElementExisting(this.noServicePartnerlabel, 1000);
    }
    public async clickRemovePartnerWithConfirm(confirmLabel): Promise<void> {
        await Page.scrollElementIntoView(commonElements.removeBtn)
        await Page.click(commonElements.removeBtn)
        await Page.waitElementForDisplayed(commonElements.getRemoveConfirmBtn(confirmLabel));
        await (await Page.getElement(commonElements.getRemoveConfirmBtn(confirmLabel))).click({ y: (-1) });
    }
    public async clickAddServiceDocuments(): Promise<void> {
        await Page.click(this.addServiceDocumentBtn);
    }
    public async clickAddDocuments(): Promise<void> {
        await Page.click(this.addDocumentsBtn);
    }
    public async clickCancelDocumentBtn(): Promise<void> {
        await Page.click(this.cancelDocumentBtn)
    }
    public async getDocumentUploadDate(): Promise<string> {
        return await Page.getElementText(this.documentUploadDate)
    }
    public async removeServiceDocument(): Promise<void> {
        await Page.click(this.removeServiceDocumentBtn);
        await Page.click(commonElements.getRemoveConfirmBtn("yes"))
    }
    public async isNoDocumentsLabelDisplayed(): Promise<boolean> {
        return await Page.isElementDisplayed(this.noDocumentsLabel)
    }
    public async clickDocumentChbByName(fileName = "QAtest.docx"): Promise<void> {
        await commonElements.setChb(this.getDocumentChbByName(fileName), true)
    }
    public async isDocumentRemovedMsgDisplayed(): Promise<boolean> {
        return await commonElements.checkPopUpMsgAndForNotDisplayed(" The document has been successfully removed. Thank you.")
    }
    public async waitPartnerFormForDisplayed(): Promise<void> {
        await Page.waitElementForDisplayed(this.notesToPartnerInput);
    }
    public async clickSaveChangesPartnerBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.saveChangesPartnerBtn)
        await Page.click(this.saveChangesPartnerBtn)
    }
    public async setInitiationDetails(contactPerson, notesToPartner): Promise<void> {
        await commonElements.setDropDownValue(contactPerson, this.contactPersonDD);
        await commonElements.setInputValue(notesToPartner, this.notesToPartnerInput);
    }
    public async clickNeedAnalysisServiceEditBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.needAnalysisServiceEditBtn);
        await Page.click(this.needAnalysisServiceEditBtn);
    }
    public async clickNeedAnalysisServiceToggle(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.needAnalysisServiceToggle);
        await Page.click(this.needAnalysisServiceToggle);
    }
    public async getServiceAnalysisAnswerTextByLabel(label): Promise<string> {
        return await Page.getElementText(this.getServiceAnalysisAnswerByLabel(label))
    }
    public async setBudget(currency, currencyValue, currencyTerm, label = "Budget"): Promise<void> {
        await needAnalysisPage.setNeedAnalysisSelectByLabel(currency, label);
        await needAnalysisPage.setNeedAnalysisInputByLabel(currencyValue, label);
        await needAnalysisPage.setNeedAnalysisDropDownByLabel(currencyTerm, label);
    }
    public async getBudgetCurrencyValue(label = "Budget"): Promise<string> {
        return await Page.getElementText(needAnalysisPage.getNeedAnalysisSelectByLabel(label));
    }
    public async getBudgetCurrencyAmountValue(label = "Budget"): Promise<string> {
        return await Page.getElementValue(needAnalysisPage.getNeedAnalysisInputByLabel(label));
    }
    public async getBudgetcurrencyTermValue(label = "Budget"): Promise<string> {
        return await commonElements.getDropDownValueText(needAnalysisPage.getNeedAnalysisDropDownByLabel(label));
    }
    public async getServiceNeedAnalysisInputValueByLabel(label): Promise<string> {
        return await Page.getElementValue(needAnalysisPage.getNeedAnalysisInputByLabel(label));
    }
    public async getServiceNeedAnalysisDDValueByLabel(label): Promise<string> {
        return await commonElements.getDropDownValueText(needAnalysisPage.getNeedAnalysisDropDownByLabel(label));
    }
    public async getServiceNeedAnalysisSelectValueByLabel(label): Promise<string> {
        return await Page.getElementText(needAnalysisPage.getNeedAnalysisSelectByLabel(label));
    }
    public async getServiceNeedAnalysisTextAreaValueByLabel(label): Promise<string> {
        return await Page.getElementValue(needAnalysisPage.getNeedAnalysisTextareaByLabel(label));
    }
    public async clickSelectAddress(): Promise<void> {
        await Page.click(this.selectAddressLabel);
    }
    public async clickAddressBlockByStreetName(streetName): Promise<void> {
        await Page.click(this.getAddressBlockByStreetName(streetName));
    }
    public async getAddressBlockTextByStreetName(streetName): Promise<string> {
        return await Page.getElementText(this.getAddressBlockByStreetName(streetName));
    }
    public async getNAChbLabelIconState(chbLabel): Promise<boolean> {
        if (await Page.getElementAttribute(this.getHomeSearchNAChbIcon(chbLabel), "mattooltip") == "Yes") { return true; }
        if (await Page.getElementAttribute(this.getHomeSearchNAChbIcon(chbLabel), "mattooltip") == "No") { return false; }
    }
    public async setNewLeaseDetail(startDate, endDate, tenancyExpiryDate, breakClauseRbt, noticeRequired, noticeRequiredPeriod, renewOptionRbt): Promise<void> {
        await commonElements.setDateValue(this.leaseStartCalendar, startDate);
        await commonElements.setDateValue(this.leaseEndCalendar, endDate);
        await commonElements.setDateValue(this.tenancyExpiryTriggerCalendar, tenancyExpiryDate);
        await commonElements.setRbt(this.getBreakClauseRbtByLabel(breakClauseRbt));
        await commonElements.setInputValue(noticeRequired, this.noticeRequiredInput);
        await commonElements.setDropDownValue(noticeRequiredPeriod, this.noticeRequiredDD);
        await commonElements.setRbt(this.getRenewOptionRbtByLabel(renewOptionRbt));
    }
    public async setLeaseBreakClauseDetail(breakClauseAfter, breakClauseDetails): Promise<void> {
        await commonElements.setInputValue(breakClauseAfter, this.breakClauseAfterInput);
        await commonElements.setInputValue(breakClauseDetails, this.breakClauseDetailsInput);
    }
    public async setLeaseRenewDetails(renewDetails): Promise<void> {
        await commonElements.setInputValue(renewDetails, this.renewDetailsInput);
    }
    public async clickAddLeaseDetailsBtn(): Promise<void> {
        await Page.click(this.addLeaseDetailsBtn);
    }
    public async getLeaseStartDate():Promise<string> {
        return await Page.getElementValue(this.leaseStartCalendar);
    }
    public async getLeaseEndDate():Promise<string> {
        return await Page.getElementValue(this.leaseEndCalendar);
    }
    public async getTenancyExpiryTriggerDate():Promise<string> {
        return await Page.getElementValue(this.tenancyExpiryTriggerCalendar);
    }
    public async getNoticeRequiredValue():Promise<string> {
        return await Page.getElementValue(this.noticeRequiredInput);
    }
    public async getNoticePeriodUnitsValue():Promise<string> {
        return await commonElements.getDropDownValueText(this.noticeRequiredDD);
    }
    public async getBreakClauseAfterValue():Promise<string> {
        return await Page.getElementValue(this.breakClauseAfterInput);
    }
    public async getBreakClauseDetailsValue():Promise<string> {
        return await Page.getElementValue(this.breakClauseDetailsInput);
    }
    public async getRenewDetailsValue():Promise<string> {
        return await Page.getElementValue(this.renewDetailsInput);
    }
    public async clickLeaseEditBtnByNum(num): Promise<void> {
       await Page.click(this.getLeaseEditBtnByNum(num));
    }
    public async getBreakClauseRbtStateByLabel(breakClauseRbt): Promise<boolean> { 
        return await Page.isElementSelected(this.getBreakClauseRbtByLabel(breakClauseRbt));
    }
    public async geRenewOptionRbtStateByLabel(breakClauseRbt): Promise<boolean> { 
        return await Page.isElementSelected(this.getRenewOptionRbtByLabel(breakClauseRbt));
    }
    public async setDepositPayment(depositCurrency, depositAmount, payingPerson, paidToPerson): Promise<void> {
        await commonElements.setSelectValue(depositCurrency, this.originalDepositCurrencySelect);
        await commonElements.setInputValue(depositAmount, this.originalDepositAmountInput);
        await commonElements.setDropDownValue(payingPerson, this.depositPaidByDD);
        await commonElements.setDropDownValue(paidToPerson, this.depositPaidToDD);
    }
    public async getOriginalDepositCurrencyValue(): Promise<string> {
        return await Page.getElementText(this.originalDepositCurrencySelect);
    }
    public async getOriginalDepositAmountValue(): Promise<string> {
        return await Page.getElementValue(this.originalDepositAmountInput);
    }
    public async getDepositPaidToValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.depositPaidToDD);
    }
    public async getDepositPaidByValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.depositPaidByDD);
    }
    public async clickDepositPaymentSaveBtn(): Promise<void> {
        await Page.click(this.depositPaymentSaveBtn);
    }
}
export default new initiatedServicesPage();
