import { ChainablePromiseElement } from 'webdriverio';

import Page from '../Page';

class ClientsPage {

    public get clientsBtn(): string {
        return '[href="/staff/clients"]';
    }
    public get headerText(): string {
        return '//div[@class="head"]/div/h1';
    }
    public get searchByNameInput(): string {
        return '//text-filter[@placeholder="Search by name"]/div/input'
    }
    public get clientsNameElements(): string {
        return '(//td[@class="key-column"]/a)'
    }
    public get officeElements(): string {
        return `(//*[contains(@href,'/staff/k2-users/teams/offices/')])`
    }
    public get countryElements(): string {
        return "(//*[contains(@class,'flag-icon')]/../..)"
    }
    selectFilter(filterLabel): string {
        return `//label[contains(text(),'${filterLabel}')]/../select-filter/select`
    }
    public get managersElements(): string {
        return `(//td/a[contains(@href,'/staff/k2-users/teams/users')])`
    }
    public get statusElements(): string {
        return `(//span[contains(text(),"ACTIVE")])`
    }
    public get addClient():string {
        return '//a[@href="/staff/clients/new"]'
    }
     public async openClientsPage(): Promise<void> {
        await Page.click(this.clientsBtn);
    }
    public async openQAClientPageById(id): Promise<void> {
        await Page.openURL(`staff/clients/${id}`)
    }
    public async getHeaderText(): Promise<string> {
        return await Page.getElementText(this.headerText);
    }
    public async checkSearchByNameInput(): Promise<boolean> {
        return await Page.isElementDisplayed(this.searchByNameInput);
    }
    public async checkSelectFilter(filterLabele): Promise<boolean> {
        return await Page.isElementDisplayed(this.selectFilter(filterLabele))
    }
    public async setSearchInput (value): Promise<void> {
        await Page.setValue(this.searchByNameInput, value);
    }
    public async setNameInput(value): Promise<void> {
        await Page.setValue(this.searchByNameInput, value);
    }
    public async clearInputNameField():Promise<void>{
        await Page.setValue(this.searchByNameInput, " ");
        await browser.keys(['\uE003'])   
    }
    public async setSelectedFilter(filterLabel, value) {
        await Page.clickDropdownItemByText(this.selectFilter(filterLabel), value);
    }
    public async getOfficeElementText(i) {
        return await Page.getElementText(this.officeElements + `[${i + 1}]`);
    }
    public async getCountryElementText(i){
        return await Page.getElementText(this.countryElements + `[${i + 1}]`);
    }
    public async getManagersElementText(i){
        return await Page.getElementText(this.managersElements + `[${i + 1}]`);
    }
    public async getStatusElementText(i){
        return await Page.getElementText(this.statusElements + `[${i + 1}]`);
    }
    // public async checkAddClient(){
    //     await Page.click(this.addClient);
    // }
    public async clickClientsBtn() {
        await Page.click(this.clientsNameElements)
    }
}

export default new ClientsPage();
