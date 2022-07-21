
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';
import initiatedServicesPage from '../initiatedServices.page';

class languageTrainingPage {
    public get homeSearchNAToggle(): string {
        return '//collapsible-block//span[contains(@class,"glyphicon-plus")]'
    }
    public get homePlaningEditBtn(): string {
        return '//strong[contains(text(),"do your home search")]/ancestor::simple-tab//button'
    }
    public get homePropertyEditBtn(): string {
        return '//strong[contains(text(),"kind of property would you be")]/ancestor::simple-tab//button'
    }
    public get homeLeaseEditBtn(): string {
        return '//strong[contains(text(),"Budget (excluding utilities)")]/ancestor::simple-tab//button'
    }
    public get homeOTherEditBtn(): string {
        return '//strong[contains(text(),"require a property")]/ancestor::simple-tab//button'
    }
    public get propertyNATabBtn(): string {
        return '//ul//a[text()="Property"]'
    }
    public get leaseNATabBtn(): string {
        return '//ul//a[text()="Lease"]'
    }
    public get otherNATabBtn(): string {
        return '//ul//a[text()="Other"]'
    }
    public get homePropertySpecificLabel_2(): string {
        return '(//strong[text()="Property specifics:"])[2]/../../div[2]'
    }
    public getHomeSearchNAAnswerLabel(questionText): string {
        return `//home-search-needs-analysis-section//strong[contains(text(),"${questionText}")]/../..//div[2]`
    }

    public getHomeSearchOtherRbtnByLabel(questionLabel, rbtnLabel): string {
        return `//label[contains(text(), "${questionLabel}")]/ancestor::field-template//span[text()="${rbtnLabel}"]/../input`
    }
    public get finalOfferCalendar(): string {
        return `//label[contains(text(),"Final offer sent")]/ancestor::field-template//input`
    }
    public get landlordCalendar(): string {
        return `//label[contains(text(),"Landlord acceptance")]/ancestor::field-template//input`
    }
    public get tenantLeaseCalendar(): string {
        return `//label[contains(text(),"Tenant lease signature date")]/ancestor::field-template//input`
    }
    public get negotiatedClausesInput(): string {
        return `//label[contains(text(),"negotiated clauses")]/ancestor::field-template//textarea`
    }
    public get checkInCalendar(): string {
        return `//label[contains(text(),"Check in")]/ancestor::field-template//input`
    }
    public get checkInIssuesInput(): string {
        return `//label[contains(text(),"Check in issues")]/ancestor::field-template//textarea`
    }
    public get personOngoingRentPayDD(): string {
        return `//label[contains(text(),"Ongoing rent paid by")]/ancestor::field-template//select`
    }
    public get personOngoingUtilitiesPayDD(): string {
        return `//label[contains(text(),"Ongoing utilities paid by")]/ancestor::field-template//select`
    }
    public get moveInCalendar(): string {
        return `//label[contains(text(),"Move in date")]/ancestor::field-template//input`
    }
    public getLeaseNegotiationRbt(rbtnLabel): string {
        return `//label[contains(text(),"Is lease negotiation")]/ancestor::field-template//span[text()="${rbtnLabel}"]/../input`
    }
    public getProRatedAmountRbt(rbtnLabel): string {
        return `//label[contains(text(),"Pro-rated first amount")]/ancestor::field-template//span[text()="${rbtnLabel}"]/../input`
    }
    public get homeSearchResultSaveBtn(): string {
        return '//home-search-result-subsection//button'
    }
    
    public get k2InvoiceCalendar(): string {
        return `//label[contains(text(),"K2 invoice date")]/ancestor::field-template//input`
    }
    public async clickHomeSearchNAToggle(): Promise<void> {
        await Page.click(this.homeSearchNAToggle);
    }
    public async clickHomePlaningEditBtn(): Promise<void> {
        await Page.click(this.homePlaningEditBtn);
    }
    public async clickHomePropertyEditBtn(): Promise<void> {
        await Page.click(this.homePropertyEditBtn);
    }
    public async clickHomeLeaseEditBtn(): Promise<void> {
        await Page.click(this.homeLeaseEditBtn);
    }
    public async clickHomeOtherEditBtn(): Promise<void> {
        await Page.click(this.homeOTherEditBtn);
    }
    public async getHomeSearchNAAnswerText(questionText): Promise<string> {
        return await Page.getElementText(this.getHomeSearchNAAnswerLabel(questionText));
    }
    public async gethomePropertySpecificAnswerText_2(): Promise<string> {
        return await Page.getElementText(this.homePropertySpecificLabel_2);
    }
    public async clickPropertyNATabBtn(): Promise<void> {
        await Page.click(this.propertyNATabBtn);
    }
    public async clickLeaseNATabBtn(): Promise<void> {
        await Page.click(this.leaseNATabBtn);
    }
    public async clickOtherNATabBtn(): Promise<void> {
        await Page.click(this.otherNATabBtn);
    }
    public async getPlannigDateValue(questionLabel): Promise<string> {
        return initiatedServicesPage.getServiceNeedAnalysisInputValueByLabel(questionLabel);
    }
    public async getArrangedPlaceValue(questionLabel): Promise<string> {
        return initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(questionLabel);
    }
    public async getCurrentHomeValue(questionLabel): Promise<string> {
        return initiatedServicesPage.getServiceNeedAnalysisTextAreaValueByLabel(questionLabel);
    }
    public async getHomeSearchOtherRbtnStateByLabel(questionLabel): Promise<string> {
        if (await Page.isElementSelected(this.getHomeSearchOtherRbtnByLabel(questionLabel, "Yes")) == true) { return "Yes"; }
        if (await Page.isElementSelected(this.getHomeSearchOtherRbtnByLabel(questionLabel, "No")) == true) { return "No"; }
    }
    public async setHomeServiceResult(leaseNegotiation, finalOfferDate, landlordDate, tenantLeaseDate, negotiatedClauses, proRatedAmountRbt, checkInDate, checkInIssues, personOngoingRent, personOngoingUtilities, moveInDate): Promise<void> {
        await commonElements.setRbt(this.getLeaseNegotiationRbt(leaseNegotiation));
        await commonElements.setDateValue(this.finalOfferCalendar, finalOfferDate);
        await commonElements.setDateValue(this.landlordCalendar, landlordDate);
        await commonElements.setDateValue(this.tenantLeaseCalendar, tenantLeaseDate);
        await commonElements.setInputValue(negotiatedClauses, this.negotiatedClausesInput);
        await commonElements.setRbt(this.getProRatedAmountRbt(proRatedAmountRbt));
        await commonElements.setDateValue(this.checkInCalendar, checkInDate);
        await commonElements.setInputValue(checkInIssues, this.checkInIssuesInput);
        await commonElements.setDropDownValue(personOngoingRent, this.personOngoingRentPayDD);
        await commonElements.setDropDownValue(personOngoingUtilities, this.personOngoingUtilitiesPayDD);
        await commonElements.setDateValue(this.moveInCalendar, moveInDate);
    }
    public async clickHomeSearchResultSaveBtn(): Promise<void> {
        await Page.click(this.homeSearchResultSaveBtn);
    }
    public async getFinalOfferDateValue(): Promise<string> {
        return await Page.getElementValue(this.finalOfferCalendar);
    }
    public async getLandlordDateValue(): Promise<string> {
        return await Page.getElementValue(this.landlordCalendar);
    }
    public async getTenantLeaseDateValue(): Promise<string> {
        return await Page.getElementValue(this.tenantLeaseCalendar);
    }
    public async getNegotiatedClausesValue(): Promise<string> {
        return await Page.getElementValue(this.negotiatedClausesInput);
    }
    public async getCheckInDateValue(): Promise<string> {
        return await Page.getElementValue(this.checkInCalendar);
    }
    public async getCheckInIssuesValue(): Promise<string> {
        return await Page.getElementValue(this.checkInIssuesInput);
    }
    public async getPersonOngoingRentPayValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.personOngoingRentPayDD);
    }
    public async getPersonOngoingUtilitiesPayValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.personOngoingUtilitiesPayDD);
    }
    public async getMoveInDate(): Promise<string> {
        return await Page.getElementValue(this.moveInCalendar);
    }
    public async setK2InvoiceCalendar(k2Date):Promise<void>{
        await commonElements.setDateValue(this.k2InvoiceCalendar,k2Date);
    }
    public async getK2InvoiceDateValue():Promise<string>{
        return await Page.getElementValue(this.k2InvoiceCalendar);
    }
}
export default new languageTrainingPage();
