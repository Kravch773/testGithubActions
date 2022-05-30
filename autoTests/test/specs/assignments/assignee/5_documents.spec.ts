import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assigneePage from '../../../pageobjects/assignment/assignee.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';
import documentsPage from '../../../pageobjects/clients/documents.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const categoryType_1 = "Contract"
const categoryType_2 = "Policy"
const categoryType_3= "Photo"
const categoryType_4 = "Passport/ID"
const categoryType_5 = "Feedback"
const filePath = "../autoTests/testFiles/QAtest.docx"
const fileName = "QAtest.docx"
const filePath_2 = "../autoTests/testFiles/QAtest.exe"
const clientName = "Ivan QA"
const userPermision_1 = "Client"
const userPermision_2 = "Assignee"
const addedFileMsg = "The document upload was successful. Thank you."
const fileUpdateMsg = `The document '${fileName}' was updated successfully. Thank you.`
const fileDelMsg = 'The document was removed successfully'
//add service test
describe('Client Corporate structure page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Assignee documents tab and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickDocumentsTab();
        expect(await assigneePage.getDocumentsLabelText()).toBe("Assignee documents");
    });

    it('Verify add document form', async () => {
        await documentsPage.clickAddNewDocumentBtn();
        await documentsPage.uploadFile(filePath);
        expect(await documentsPage.isFileUploaded()).toBe(true);
        await commonElements.clickCancelBtn();
        await documentsPage.clickAddNewDocumentBtn();
        await documentsPage.uploadFile(filePath);
        expect(await documentsPage.isFileUploaded()).toBe(true);
        await commonElements.setRbtByLabel(categoryType_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(addedFileMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(addedFileMsg);
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(categoryType_1)
        expect(await documentsPage.getDateTextByFileName(fileName)).toContain(await commonElements.getCurrentDate())
        expect(await documentsPage.getUploaderTextByFileName(fileName)).toBe(clientName)
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(false)
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(false)
    });

    it('Verify edit form', async () => {
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(categoryType_2);
        await commonElements.setChbByLabel(userPermision_2, true);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(fileUpdateMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(fileUpdateMsg);
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(categoryType_2);
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(false);
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(true);
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(categoryType_3);
        await commonElements.setChbByLabel(userPermision_1, true);
        await commonElements.setChbByLabel(userPermision_2, false);
        await commonElements.clickSaveBtn();
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(categoryType_3)
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(true);
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(false);
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(categoryType_4);
        await commonElements.clickSaveBtn();
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(categoryType_4)
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(categoryType_5);
        await commonElements.setChbByLabel(userPermision_1, true);
        await commonElements.setChbByLabel(userPermision_2, true);
        await commonElements.clickSaveBtn();
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(categoryType_5)
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(true);
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(true);
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await documentsPage.clickFileRemoveBtn();
        await commonElements.clickCancelBtn();
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await documentsPage.clickFileRemoveBtn();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        await commonElements.clickCancelBtn();
       
    });
    it('Verify remove btn', async () => {
        expect(await assigneePage.getDocQty()).toBe(1);
        await assigneePage.clickRemoveDocBtnByName(fileName,"no");
        expect(await assigneePage.getDocQty()).toBe(1);
        await assigneePage.clickRemoveDocBtnByName(fileName,"yes");
        expect(await commonElements.isPopupMsgDisplayed(fileDelMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(fileDelMsg);
    });
    it('Verify unsupported file error', async () => {
        await documentsPage.clickAddNewDocumentBtn();
        await documentsPage.uploadFile(filePath_2);
        expect(await documentsPage.isRetryBtnDisplayed()).toBe(true);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
    });
});


