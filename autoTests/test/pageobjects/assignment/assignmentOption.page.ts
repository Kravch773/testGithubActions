import commonElements from "../../helper/commonElements";
import Page from "../Page";

class assignmentOptionPage {

    public get assignmentOptionTab(): string {
        return '//li/a[contains(@href,"/options")]'
    }
    public get assignmentOptionLabel(): string {
        return '//edit-assignment/h1'
    }
    public get k2InvoicingOfficeDD(): string {
        return '#k2InvoicingOffice'
    }
    public get originCity(): string {
        return '//label[@for="originRegionsId"]/../../../../../../..//div[@class="city"]'
    }
    public get destinationCity(): string {
        return '//label[@for="destinationRegionsId"]/../../../../../../..//div[@class="city"]'
    }
    public get removeCityIcon(): string {
        return '//a[@class="glyphicon glyphicon-remove-circle remove"]'
    }
    //2.Close assignment
    public get closeAssignmentTab(): string {
        return '//li/a[contains(@href,"/options/close")]'
    }
    public get closeAssignmentLabel(): string {
        return '//ng-component/headline/h1'
    }
    public get closeAndArchiveBtn(): string {
        return '//button[@class="btn btn-default"]'
    }
    public get reOpenAssignmentBtn(): string {
        return '//button[text()=" Re-open assignment "]'
    }
    public get archiveAssignmentDate(): string {
        return '//date-time/time'
    }
    public get assignmentStatusBar():string{
        return '//assignment-status-bar'
    }
    //3 Initiation fields
    public get purchaseOrderInput(): string {
        return '#purchaseOrder'
    }
    public get accountCodeInput(): string {
        return '#accountCode'
    }
    public get companyCodeInput(): string {
        return '#companyCode'
    }
    public get costCenterInput(): string {
        return '#costCenter'
    }
    public get clientEmployeeInput(): string {
        return '#clientEmployee'
    }
    public get clientAssignmentInput(): string {
        return '#clientAssignmentId'
    }
    public get clientSystemEmployeeInput(): string {
        return '#clientSystemEmployeeId'
    }
    public get initiationFieldsTab(): string {
        return '//a[contains(@href,"options/initiation-fields")]'
    }
    public get initiationFieldsLabel(): string {
        return '//ng-component/h1'
    }
    public get tasksLabel(): string {
        return '//auto-tasks-list//h1'
    }
    //4.team members 
    public getTeamMemberPersonInputByLabel(label): string {
        return `//label[text()=" ${label} "]/../../..//input`
    }
    public getPersonNameByLabel(label): string {
        return `//label[contains(text()," ${label} ")]/../../..//a[contains(@href,"teams/users/")]`
    }
    public getRemovePersonIconByLabel(label): string {
        return `//label[contains(text()," ${label} ")]/../../..//a[contains(@class,"glyphicon-remove-circle")]`
    }
    public get teamMembersTab(): string {
        return '//a[contains(@href,"/options/team")]'
    }
    public get teamMembersLabel(): string {
        return '//ng-component/h1'
    }
    //5.tasks
    public get tasksTab(): string {
        return '//a[contains(@href,"/options/tasks")]'
    }
    public get addNewTaskBtn(): string {
        return '//btn/a[contains(@href,"/tasks/new")]'
    }
    public get taskNameInput(): string {
        return '#taskLabel'
    }
    public get triggerDateInput(): string {
        return '#startDate'
    }
    public get servicesDD(): string {
        return '#servicesId'
    }
    public get assignToSelect(): string {
        return '//label[text()=" Assign to "]/../../..//k2-select'
    }
    public get popUpCb(): string {
        return '#alertable'
    }
    public get customTaskRemoveBtn(): string {
        return '//span[text()="remove"]'
    }
    public getTaskTimeLabel(taskName): string {
        return `//p[@class="text-wrap"][text()="${taskName}"]/../..//time`
    }
    public getTaskServiceLabel(taskName): string {
        return `//p[@class="text-wrap"][text()="${taskName}"]/../..//a[contains(@href,"/services/")]`
    }
    public getTaskDoneBtn(taskName): string {
        return `//p[@class="text-wrap"][text()="${taskName}"]/../..//a[text()=" done "]`
    }
    public getTaskCb(taskName): string {
        return `//p[@class="text-wrap"][text()="${taskName}"]/../..//input[@type="checkbox"]`
    }
    public get reassignBtn(): string {
        return '//button[@type="button"][text()=" Reassign "]'
    }
    public getRemoveConfirmBtn(confirm): string {
        return `//span[text()="${confirm}"]`
    }
    public get newLinkNameInput(): string {
        return '#address1'
    }
    public getEditTaskBtnByName(name):string{
        return `//table//p[text()="${name}"]/ancestor::tr//span[text()="edit"]`
    }
    public getRemoveTaskBtnByName(name):string{
        return `//table//p[text()="${name}"]/ancestor::tr//span[text()="remove"]`
    }
    //6.Linked assignments
    public get linkedAssignmentsTab(): string {
        return '//a[contains(@href,"/options/tasks")]'
    }
    public get addNewLinkBtn(): string {
        return '//btn/a[contains(@href,"/links/new")]'
    }
    public get linkedAssignmentsLabel(): string {
        return '//ng-component/h1'
    }
    //
    public async clickAssignmentOptionTab(): Promise<void> {
        await Page.click(this.assignmentOptionTab);
    }
    public async getAssignmentLabelText(): Promise<string> {
        return await Page.getElementText(this.assignmentOptionLabel);
    }
    public async setInvoicingOffice(officeName): Promise<void> {
        return await commonElements.setDropDownValue(officeName, this.k2InvoicingOfficeDD);
    }
    public async getOriginCountryValue(): Promise<string> {
        return await Page.getElementText(commonElements.originRegionsSelect);
    }
    public async getDestinationCountryValue(): Promise<string> {
        return await Page.getElementText(commonElements.destinationRegionsSelect);
    }
    public async getOriginCityValue(): Promise<string> {
        return await Page.getElementText(this.originCity);
    }
    public async getDestinationCityValue(): Promise<string> {
        return await Page.getElementText(this.destinationCity);
    }
    public async getAssignmentType(): Promise<string> {
        return await commonElements.getDropDownValueText(commonElements.assignmentTypeDD)
    }
    public async getSubsidiaryValue(): Promise<string> {
        return await Page.getElementText(commonElements.subsidiarySelect);
    }
    public async getInvoicingOfficeValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.k2InvoicingOfficeDD)
    }
    public async getClientContact(): Promise<string> {
        return await Page.getElementText(commonElements.clientContactInput);
    }
    public async getserviceLvlValue(): Promise<string> {
        return await commonElements.getDropDownValueText(commonElements.serviceLvlDD)
    }
    public async clickRemoveCityIcon(): Promise<void> {
        return await Page.click(this.removeCityIcon);
    }
    public async isOriginCityNotExisting(): Promise<boolean> {
       return await Page.isElementNotExisting(this.originCity);
    }
    public async isDestinationCityNotExistin(): Promise<boolean> {
        return await Page.isElementNotExisting(this.destinationCity);
    }
    //2.Close assignment
    public async clickCloseAssignmentTab(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.closeAssignmentTab);
        await Page.click(this.closeAssignmentTab);
    }
    public async getCloseAssignmentLabelText(): Promise<string> {
        return await Page.getElementText(this.closeAssignmentLabel);
    }
    public async clickCloseAndArchiveBtn(): Promise<void> {
        await Page.click(this.closeAndArchiveBtn);
    }
    public async clickReOpenAssignmentBtn(): Promise<void> {
        return Page.click(this.reOpenAssignmentBtn);
    }
    public async getArchiveAssignmentDate(): Promise<string> {
        return await Page.getElementText(this.archiveAssignmentDate);
    }
    public async isAssignmentStatusbarDisplayed():Promise<boolean>{
        return await Page.isElementDisplayed(this.assignmentStatusBar);
    }
    //3.Initiation fields
    public async setInitiationFields(purchaseOrder, accountCode, companyCode, costCenter, clientEmployee, clientAssignment, clientSystemEmployee): Promise<void> {
        await Page.setValue(this.purchaseOrderInput, purchaseOrder);
        await Page.setValue(this.accountCodeInput, accountCode);
        await Page.setValue(this.companyCodeInput, companyCode);
        await Page.setValue(this.costCenterInput, costCenter);
        await Page.setValue(this.clientEmployeeInput, clientEmployee);
        await Page.setValue(this.clientAssignmentInput, clientAssignment);
        await Page.setValue(this.clientSystemEmployeeInput, clientSystemEmployee);
    }
    public async getPurchasaeOrderValue(): Promise<string> {
        return await Page.getElementValue(this.purchaseOrderInput);
    }
    public async getAccountCodeValue(): Promise<string> {
        return await Page.getElementValue(this.accountCodeInput);
    }
    public async getCompanyCodeValue(): Promise<string> {
        return await Page.getElementValue(this.companyCodeInput);
    }
    public async getCostCenterValue(): Promise<string> {
        return await Page.getElementValue(this.costCenterInput);
    }
    public async getClientEmployeeValue(): Promise<string> {
        return await Page.getElementValue(this.clientEmployeeInput);
    }
    public async getClientAssignmentValue(): Promise<string> {
        return await Page.getElementValue(this.clientAssignmentInput);
    }
    public async getClientSystemEmployeeValue(): Promise<string> {
        return await Page.getElementValue(this.clientSystemEmployeeInput);
    }
    public async clearInitiationField(): Promise<void> {
        await Page.clearValue(this.purchaseOrderInput);
        await Page.clearValue(this.accountCodeInput);
        await Page.clearValue(this.companyCodeInput);
        await Page.clearValue(this.costCenterInput);
        await Page.clearValue(this.clientEmployeeInput);
        await Page.clearValue(this.clientAssignmentInput);
        await Page.clearValue(this.clientSystemEmployeeInput);
    }
    public async clickInitiationFieldsTab(): Promise<void> {
        await Page.scrollElementIntoView(this.initiationFieldsTab);
        await Page.click(this.initiationFieldsTab);
    }
    public async getInitiationFieldsLabelText(): Promise<string> {
       return await Page.getElementText(this.initiationFieldsLabel);
    }
    // 4. teamMembers
    public async getK2TeamLabelText(): Promise<string> {
        return Page.getElementText(this.teamMembersLabel);
    }
    public async clickK2TeamTab(): Promise<void> {
        await Page.click(this.teamMembersTab);
    }
    public async setK2TeamMembers(testTeamMemner):Promise<void>{
        await commonElements.setPersonInput(testTeamMemner, this.getTeamMemberPersonInputByLabel("Assignment lead"))
        await commonElements.setPersonInput(testTeamMemner, this.getTeamMemberPersonInputByLabel("K2 Origin"))
        await commonElements.setPersonInput(testTeamMemner, this.getTeamMemberPersonInputByLabel("K2 Destination"))
        await commonElements.setPersonInput(testTeamMemner, this.getTeamMemberPersonInputByLabel("Immigration"))
        await commonElements.setPersonInput(testTeamMemner, this.getTeamMemberPersonInputByLabel("HHG - origin"))
        await commonElements.setPersonInput(testTeamMemner, this.getTeamMemberPersonInputByLabel("HHG - destination"))
        await commonElements.setPersonInput(testTeamMemner, this.getTeamMemberPersonInputByLabel("Commercial"))
        await commonElements.setPersonInput(testTeamMemner, this.getTeamMemberPersonInputByLabel("Assignment  Management"))
    }
    public async clickPersonRemoveIcon(label): Promise<void> {
        await Page.scrollElementIntoView(this.getRemovePersonIconByLabel(label));
        await Page.click(this.getRemovePersonIconByLabel(label));
    }
    //5.tasks
    public async clickTasksTab(): Promise<void> {
        await Page.click(this.tasksTab);
    }
    public async getTasksLabelText(): Promise<string> {
        return await Page.getElementText(this.tasksLabel);
    }
    public async clickAddNewTaskBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.addNewTaskBtn);
        await Page.click(this.addNewTaskBtn);
    }
    public async setTask(taskName, triggerDate, serviceName, popUpState, assignTo): Promise<void> {
        await Page.setValue(this.taskNameInput, taskName);
        await commonElements.setDateValue(this.triggerDateInput, triggerDate);
        await commonElements.setDropDownValue(serviceName, this.servicesDD);
        await commonElements.setChb(this.popUpCb, popUpState);
        await commonElements.setSelectValue(assignTo, this.assignToSelect);
    }

    public async getCustomTasksQty(): Promise<number> {
        return await Page.getElementsQty(this.customTaskRemoveBtn);
    }
    public async getTaskTimeByTextByName(taskName): Promise<string> {
        return await Page.getElementText(this.getTaskTimeLabel(taskName));
    }
    public async getTaskServiceTextByName(taskName): Promise<string> {
        return await Page.getElementText(this.getTaskServiceLabel(taskName));
    }
    public async clickRemoveTaskBtnByName(taskName, confirm): Promise<void> {
        await Page.click(this.getRemoveTaskBtnByName(taskName));
        await this.clickRemoveTaskConfirmBtn(confirm);
    }
    public async isTestDoneBtnExist(taskName): Promise<boolean> {
        return await Page.isElementExisting(this.getTaskDoneBtn(taskName));
    }
    public async reassignTaskByName(taskName, reassignPerson): Promise<void> {
        await commonElements.setChb(this.getTaskCb(taskName), true);
        await commonElements.setSelectValue(reassignPerson);
        await Page.click(this.reassignBtn);
    }
    public async clickRemoveTaskConfirmBtn(confirm): Promise<void> {
        await Page.click(this.getRemoveConfirmBtn(confirm));
    }
    public async getPersonNameTextByLabel(label): Promise<string> {
        return await Page.getElementText(this.getPersonNameByLabel(label));
    }
    public async isTeamMemberPersonNotExisting(label): Promise<boolean> {
        return await Page.isElementNotExisting(this.getRemovePersonIconByLabel(label))
    }
    public async isTaskExisting(name):Promise<boolean>{
        return await Page.isElementExisting(this.getEditTaskBtnByName(name),3000);
    }
    public async clickEditTaskBtnByName(name):Promise<void>{
         await Page.click(this.getEditTaskBtnByName(name));
    }
    //6.linked
    public async clickLinkedAssignmentsTab(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.linkedAssignmentsTab)
        await Page.click(this.linkedAssignmentsTab);
    }
    public async clickAddNewLinkBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.addNewLinkBtn)
        await Page.click(this.addNewLinkBtn)
    }
    public async getAssignmentsLabelText(): Promise<string> {
        return await Page.getElementText(this.linkedAssignmentsLabel);
    }

}

export default new assignmentOptionPage();
