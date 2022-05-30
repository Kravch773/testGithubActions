import { ChainablePromiseElement } from 'webdriverio';
import Page from '../Page';

class clientsAsignees {
    public get assigneesTab(): string {
        return '//a[contains(@href,"/assignees")]'
    }
    public get assigneesLabel(): string {
        return '//client-assignees-list//h1'
    }
    public get searchAssigneeInput(): string {
        return '//client-assignees-list//input'
    }
    getfilterDDbyLabel(label): string {
        return `//label[text()="${label}"]/..//select`
    }
    public get assigneesNames(): string {
        return '(//td[@class="key-column"])'
    }
    getEntityLabel(num): string {
        return `(//td[@class="key-column"])[${num}]/../td[@class="p2"][1]`
    }
    getOnAssignmentLabel(num): string {
        return `(//td[@class="text-center"])[${num}]`
    }
    public async clickAssigneesTab(): Promise<void> {
        await Page.click(this.assigneesTab);
    }
    public async getAssigneesLabelText(): Promise<string> {
        return await Page.getElementText(this.assigneesLabel);
    }
    public async setAssingeeInputValue(value): Promise<void> {
        await Page.setValue(this.searchAssigneeInput, value);
    }
    public async getAssigneesQty(): Promise<number> {
        return await Page.getElementsQty(this.assigneesNames)
    }
    public async getAssigneeName(numOfAssignee): Promise<string> {
        return await Page.getElementText(this.assigneesNames + `[${numOfAssignee}]`)
    }
    public async getEntityLabelText(num): Promise<string> {
        return await Page.getElementText(this.getEntityLabel(num));
    }
    public async getOnAssignmentLabelText(num): Promise<string> {
        return await Page.getElementText(this.getOnAssignmentLabel(num));
    }

}
export default new clientsAsignees();
