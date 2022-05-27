import { ChainablePromiseElement } from 'webdriverio';
import commonElements from '../../helper/commonElements';
import Page from '../Page';

class policiesPage {

    public get policiesLabel(): string {
        return '//client-packages-list//h1'
    }
    public get policiesTab(): string {
        return '//a[contains(@href,"/packages")]'
    }
    public get addPolicyBtn(): string {
        return '//btn/a[contains(@href,"/packages/new")]'
    }
    public get policyNameInput(): string {
        return '#name'
    }
    public get notesInput(): string {
        return '#notes'
    }
    public get billingMethodDD(): string {
        return '#billedAs'
    }
    public get activePolicyChb(): string {
        return '#isActive'
    }
    public get positionDD(): string {
        return '#position'
    }
    getServiceSelectByLabel(label): string {
        return `//th[text()="${label}"]/..//select`
    }
    getTimeVariantSelectByLabel(label): string {
        return `//th[text()="${label}"]/..//select/option[contains(text(), 'Day') or contains(text(), 'Hours')]/..`
    }
    public get originAllAvailableBtn(): string {
        return '//div[@id="originCountries"]//btn[@title="Make all available"]'
    }
    public get originAllNotAvailableBtn(): string {
        return '//div[@id="originCountries"]//btn[@title="Make all not-available"]'
    }
    public get destinationAllAvailableBtn(): string {
        return '//div[@id="destinationCountries"]//btn[@title="Make all available"]'
    }
    public get destinationAllNotAvailableBtn(): string {
        return '//div[@id="destinationCountries"]//btn[@title="Make all not-available"]'
    }
    public get originSelectedAvailableBtn(): string {
        return '//div[@id="originCountries"]//btn[@title="Make selected available"]'
    }
    public get originSelectedNotAvailableBtn(): string {
        return '//div[@id="originCountries"]//btn[@title="Make selected not-available"]'
    }
    public get destinationSelectedAvailableBtn(): string {
        return '//div[@id="destinationCountries"]//btn[@title="Make selected available"]'
    }
    public get destinationSelectedNotAvailableBtn(): string {
        return '//div[@id="destinationCountries"]//btn[@title="Make selected not-available"]'
    }
    getPolicyActiveStatus(policyName): string {
        return `//a[text()=" ${policyName} "]/../span`
    }
    public get originCountriesQty(): string {
        return '(//countries-comparison[@label="Origin countries"]//a)'
    }
    public get destinationCountriesQty(): string {
        return '(//countries-comparison[@label="Destination countries"]//a)'
    }
    public get coreServiceIcon(): string {
        return '//div/span[contains(@class,"CORE")]'
    }
    public get flexibleServiceIcon(): string {
        return '//div/span[contains(@class,"FLEXIBLE")]'
    }
    public get notIncludedServiceIcon(): string {
        return '//div/span[contains(@class,"glyphicon-remove")]'
    }
    getcountryLiByName(countryName): string {
        return `(//li[text()=" ${countryName} "])`
    }
    public get editPolicyBtn(): string {
        return '(//btn[@icon="pencil"])'
    }
    public get removePolicyBtn(): string {
        return '#delete-button'
    }
    public async getPoliciesLabelText(): Promise<string> {
        return await Page.getElementText(this.policiesLabel);
    }
    public async clickPoliciesTab(): Promise<void> {
        await Page.click(this.policiesTab);
    }
    public async clickAddPolicy(): Promise<void> {
        await Page.click(this.addPolicyBtn);
    }
    public async setNewPolicy(policyName, notesText, billingmethod, isActivePolicy, position): Promise<void> {
        await commonElements.setInputValue(policyName, this.policyNameInput);
        await commonElements.setInputValue(notesText, this.notesInput,);
        await commonElements.setDropDownValue(billingmethod, this.billingMethodDD);
        await commonElements.setChb(this.activePolicyChb, isActivePolicy);
        await commonElements.setDropDownValue(position, this.positionDD);
    }
    public async setIncludedPackageByLabel(serviceLabel, includedOption): Promise<void> {
        await commonElements.setDropDownValue(includedOption, this.getServiceSelectByLabel(serviceLabel));
    }
    public async setTimeVariantByLabel(serviceLabel, timeOption): Promise<void> {
        await Page.waitUntilClickable(this.getTimeVariantSelectByLabel(serviceLabel))
        await commonElements.setDropDownValue(timeOption, this.getTimeVariantSelectByLabel(serviceLabel));
    }
    public async isTimeSelectClickable(serviceLabel): Promise<boolean> {
        return Page.isElementClickable(this.getTimeVariantSelectByLabel(serviceLabel));
    }
    public async clickOriginAllAvailable(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.originAllAvailableBtn)
        await Page.click(this.originAllAvailableBtn);
    }
    public async clickOriginAllNotAvailable(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.originAllNotAvailableBtn)
        await Page.click(this.originAllNotAvailableBtn);
    }
    public async clickDestinationAllAvailable(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.destinationAllAvailableBtn)
        await Page.click(this.destinationAllAvailableBtn);
    }
    public async clickDestinationAllNotAvailable(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.destinationAllNotAvailableBtn)
        await Page.click(this.destinationAllNotAvailableBtn);
    }
    public async clickOriginSelectedAvailable(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.originSelectedAvailableBtn)
        await Page.click(this.originSelectedAvailableBtn);
    }
    public async clickOriginSelectedNotAvailable(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.originSelectedNotAvailableBtn)
        await Page.click(this.originSelectedNotAvailableBtn);
    }
    public async clickDestinationSelectedAvailable(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.destinationSelectedAvailableBtn)
        await Page.click(this.destinationSelectedAvailableBtn);
    }
    public async clickDestinationSelectedNotAvailable(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.destinationSelectedNotAvailableBtn)
        await Page.click(this.destinationSelectedNotAvailableBtn);
    }
    public async getPolicyStatusText(policyName): Promise<string> {
        return Page.getElementText(this.getPolicyActiveStatus(policyName));
    }
    public async getOriginCountriesQty(): Promise<string> {
        return await Page.getElementText(this.originCountriesQty + "[3]");
    }
    public async getDestinationCountriesQty(): Promise<string> {
        return await Page.getElementText(this.destinationCountriesQty + "[3]");
    }
    public async getCoreServiceIconQty(): Promise<number> {
        return await Page.getElementsQty(this.coreServiceIcon);
    }
    public async getFlexibleServiceIconQty(): Promise<number> {
        return await Page.getElementsQty(this.flexibleServiceIcon);
    }
    public async getNotIncludedServiceIconQty(): Promise<number> {
        return await Page.getElementsQty(this.notIncludedServiceIcon);
    }
    public async clickCountryLiByName(countryName, numOfCountry): Promise<void> {
        await Page.click(this.getcountryLiByName(countryName) + `[${numOfCountry}]`);
    }
    public async clickEditPolicyBtn(): Promise<void> {
        await Page.click(this.editPolicyBtn + "[3]");
    }
    public async clickRemovePolicyBtn(): Promise<void> {
        await Page.click(this.removePolicyBtn);
    }
    public async getPoliciesQty(): Promise<number> {
        return Page.getElementsQty(this.originCountriesQty);
    }
}
export default new policiesPage();


