import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assignmentOptionPage from '../../../pageobjects/assignment/assignmentOption.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';


const purchaseOrder_1 = "purchaseOrder_1"
const purchaseOrder_2 = "purchaseOrder_2"
const accountCode_1 = "accountCode_1"
const accountCode_2 = "accountCode_2"
const companyCode_1 = "testCode_1"
const companyCode_2 = "testCode_2"
const costCenter_1 = "cost_1"
const costCenter_2 = "cost_2"
const clientEmployee_1 = "testEmployee_1"
const clientEmployee_2 = "testEmployee_2"
const clientAssignment_1 = "testAssignment_1"
const clientAssignment_2 = "testAssignment_2"
const clientSystemEmployee_1 = "testSystem_1"
const clientSystemEmployee_2 = "testSystem_2"


describe('Options_Initiation_Fields test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('open Options initiation fields and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await assignmentOptionPage.clickAssignmentOptionTab();
        await assignmentOptionPage.clickInitiationFieldsTab();
        expect(await assignmentOptionPage.getInitiationFieldsLabelText()).toBe("Initiation fields");
    });

    xit('Verify require fields error msg', async () => {
        await assignmentOptionPage.clearInitiationField();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorInputMsgDispalyed()).toBe(true);
    });

    it('Verify Edit initiation fields', async () => {
        await assignmentOptionPage.setInitiationFields(purchaseOrder_1, accountCode_1, companyCode_1, costCenter_1, clientEmployee_1, clientAssignment_1, clientSystemEmployee_1);
        await commonElements.clickSaveBtn();
        await browser.pause(2000); //No popUp msg
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.getPurchasaeOrderValue()).toBe(purchaseOrder_1);
        expect(await assignmentOptionPage.getAccountCodeValue()).toBe(accountCode_1);
        expect(await assignmentOptionPage.getCompanyCodeValue()).toBe(companyCode_1);
        expect(await assignmentOptionPage.getCostCenterValue()).toBe(costCenter_1);
        expect(await assignmentOptionPage.getClientEmployeeValue()).toBe(clientEmployee_1);
        expect(await assignmentOptionPage.getClientAssignmentValue()).toBe(clientAssignment_1);
        expect(await assignmentOptionPage.getClientSystemEmployeeValue()).toBe(clientSystemEmployee_1);
        await assignmentOptionPage.setInitiationFields(purchaseOrder_2, accountCode_2, companyCode_2, costCenter_2, clientEmployee_2, clientAssignment_2, clientSystemEmployee_2);
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.getPurchasaeOrderValue()).toBe(purchaseOrder_1);
        expect(await assignmentOptionPage.getAccountCodeValue()).toBe(accountCode_1);
        expect(await assignmentOptionPage.getCompanyCodeValue()).toBe(companyCode_1);
        expect(await assignmentOptionPage.getCostCenterValue()).toBe(costCenter_1);
        expect(await assignmentOptionPage.getClientEmployeeValue()).toBe(clientEmployee_1);
        expect(await assignmentOptionPage.getClientAssignmentValue()).toBe(clientAssignment_1);
        expect(await assignmentOptionPage.getClientSystemEmployeeValue()).toBe(clientSystemEmployee_1);
        await assignmentOptionPage.setInitiationFields(purchaseOrder_2, accountCode_2, companyCode_2, costCenter_2, clientEmployee_2, clientAssignment_2, clientSystemEmployee_2);
        await commonElements.clickSaveBtn();
        await browser.pause(2000); //No popUp msg
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.getPurchasaeOrderValue()).toBe(purchaseOrder_2);
        expect(await assignmentOptionPage.getAccountCodeValue()).toBe(accountCode_2);
        expect(await assignmentOptionPage.getCompanyCodeValue()).toBe(companyCode_2);
        expect(await assignmentOptionPage.getCostCenterValue()).toBe(costCenter_2);
        expect(await assignmentOptionPage.getClientEmployeeValue()).toBe(clientEmployee_2);
        expect(await assignmentOptionPage.getClientAssignmentValue()).toBe(clientAssignment_2);
        expect(await assignmentOptionPage.getClientSystemEmployeeValue()).toBe(clientSystemEmployee_2);
    });
});
