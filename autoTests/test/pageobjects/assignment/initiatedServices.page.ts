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
        return `//span[text()="${streetName}"]/ancestor::formatted-address`
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
    public async getNAChbLabelIconState(chbLabel): Promise<boolean> {
        if (await Page.getElementAttribute(this.getHomeSearchNAChbIcon(chbLabel), "mattooltip") == "Yes") { return true; }
        if (await Page.getElementAttribute(this.getHomeSearchNAChbIcon(chbLabel), "mattooltip") == "No") { return false; }
    }
}
export default new initiatedServicesPage();
