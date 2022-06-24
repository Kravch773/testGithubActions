import { ChainablePromiseElement } from 'webdriverio';
import commonElements from '../../helper/commonElements';
import Page from '../Page';

class documentsPage {

    public get documentsTab(): string {
        return '//a[contains(@href,"/documents")]'
    }
    public get addNewDocumentBtn(): string {
        return '//a[contains(@href,"/documents/new")]'
    }
    public get uploadFileInput(): string {
        return '//input[@title="file input"]'
    }
    public get documentsPageLabel(): string {
        return '//client-documents-list//h1'
    }
    public get assigneeDocumentsPageLabel(): string {
        return '//assignment-documents-list//h1'
    }
    getDocumentCategoryByName(name): string {
        return `//a[contains(text(),"${name}")]/../../../..//td[2]`
    }
    getDocumentAddedDateByName(name): string {
        return `//a[contains(text(),"${name}")]/../../../..//time`
    }
    getDocumentClientPermisionByName(name): string {
        return `(//a[contains(text(),"${name}")]/../../../..//true-false-icon//span)[1]`
    }
    getDocumentAssingeePermisionByName(name): string {
        return `(//a[contains(text(),"${name}")]/../../../..//true-false-icon//span)[2]`
    }
    getDocumentUploaderByName(name): string {
        return `//a[contains(text(),"${name}")]/../../../..//td/a`
    }
    getEditBtnDocumentByName(name): string {
        return `//a[contains(text(),"${name}")]/../../../..//span[text()="edit"]`
    }
    getRemoveBtnDocumentByName(name): string {
        return `//a[contains(text(),"${name}")]/../../../..//span[@class="remove"]`
    }
    getDocumentsTagByName(name,tag):string{
        return `//a[contains(@href,"/${name}")]/../../..//tag/span[contains(text(),"${tag}")]`
    }
    getAssigneeDocumentsTypeByName(name):string{
        return `(//a[contains(text(),"${name}")]/../../../..//td[text()])[1]`
    }
    getAssigneeDocumentsCategoryByName(name):string{
        return `(//a[contains(text(),"${name}")]/../../../..//td[text()])[2]`
    }
    
    public get fileRemoveBtn(): string {
        return `//button/span[contains(@class,"glyphicon-remove")]`
    }
    public get retryBtn(): string {
        return '//button[text()=" Retry "]'
    }
    public getDocumentLabelByFileName(fileName):string{ 
        return `//document-link//a[contains(text(),"${fileName}")]`
    }
    public async getDocumentsPageLabelText(): Promise<string> {
        return Page.getElementText(this.documentsPageLabel);
    }
    public async getAssigneeDocumentsPageLabelText(): Promise<string> {
        return await Page.getElementText(this.assigneeDocumentsPageLabel)
    }
    public async clickDocumentsTab(): Promise<void> {
        await Page.click(this.documentsTab);
    }
    public async clickAddNewDocumentBtn(): Promise<void> {
        await Page.click(this.addNewDocumentBtn);
    }
    public async uploadFile(filePath): Promise<void> {
        const remoteFilePath = await browser.uploadFile(filePath)
        await $(this.uploadFileInput).setValue(remoteFilePath);
    }
    public async getCategoryTextByFileName(fileName): Promise<string> {
        return await Page.getElementText(this.getDocumentCategoryByName(fileName));
    }
    public async getDateTextByFileName(fileName): Promise<string> {
        return await Page.getElementText(this.getDocumentAddedDateByName(fileName));
    }
    public async getUploaderTextByFileName(fileName): Promise<string> {
        return await Page.getElementText(this.getDocumentUploaderByName(fileName));
    }
    public async getUserPermisonStatus(userType, fileName): Promise<boolean> {
        if (userType == "Client") {
            let status = await Page.getElementAttribute(this.getDocumentClientPermisionByName(fileName), "class");
            if (status.includes("glyphicon-remove")) { return false }
            if (status.includes("glyphicon-ok")) { return true }
        }
        if (userType == "Assignee") {
            let status = await Page.getElementAttribute(this.getDocumentAssingeePermisionByName(fileName), "class");
            if (status.includes("glyphicon-remove")) { return false }
            if (status.includes("glyphicon-ok")) { return true }
        }
    }
    public async isFileUploaded(): Promise<boolean> {
        return await Page.isElementDisplayed(this.fileRemoveBtn);
    }
    public async clickFileRemoveBtn(): Promise<void> {
        await Page.click(this.fileRemoveBtn);
    }
    public async clickEditBtnDocumentByName(name): Promise<void> {
        await Page.click(this.getEditBtnDocumentByName(name))
    }
    public async clickRemoveBtnDocumentByName(name): Promise<void> {
        await Page.click(this.getRemoveBtnDocumentByName(name))
    }
    public async isRetryBtnDisplayed(): Promise<boolean> {
        return await Page.isElementDisplayed(this.retryBtn)
    }
    public async isDocumentTagDisplayed(docName,tag):Promise<boolean>{
        return await Page.isElementDisplayed(this.getDocumentsTagByName(docName,tag))
    }
    public async getAssigneeDocTypeTextByName(name):Promise<string>{
        return await Page.getElementText(this.getAssigneeDocumentsTypeByName(name));
    }
    public async getAssigneeDocCategoryTextByName(name):Promise<string>{
        return await Page.getElementText(this.getAssigneeDocumentsCategoryByName(name));
    }
    public async isDocumentExisting(docName):Promise<boolean>{
        return await Page.isElementExisting(this.getRemoveBtnDocumentByName(docName),2000);
    }
}
export default new documentsPage();
