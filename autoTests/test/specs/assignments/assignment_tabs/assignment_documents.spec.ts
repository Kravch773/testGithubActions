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
const categoryType_3 = "Photo"
const categoryType_4 = "Passport/ID"
const categoryType_5 = "Feedback"
const relatedServices_1 = "Visa & Immigration"
const relatedServices_2 = "Travel booking"
const relatedServices_3 = "Home sale"
const docType_1 = "Assignment"
const docType_2 = "Assignee"
const filePath = "../autoTests/testFiles/QAtest.docx"
const fileName = "QAtest.docx"
const filePath_2 = "../autoTests/testFiles/QAtest.exe"
const uploader = "Ivan QA"
const userPermision_1 = "Client"
const userPermision_2 = "Assignee"
const addedFileMsg = "The document upload was successful. Thank you."
const fileUpdateMsg = `The document '${fileName}' was updated successfully. Thank you.`
const fileDelMsg = ` The document was removed successfully`
const isGitActionTest = true

describe('Assignments documents page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Assignee documents tab and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await documentsPage.clickDocumentsTab();
        expect(await documentsPage.getAssigneeDocumentsPageLabelText()).toBe("Documents");
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
        await commonElements.setChbByLabel(relatedServices_1, true);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(addedFileMsg)).toBe(true);
        expect(await documentsPage.getAssigneeDocCategoryTextByName(fileName)).toBe(categoryType_1);
        expect(await documentsPage.getAssigneeDocTypeTextByName(fileName)).toBe(docType_1.toUpperCase());
        expect(await documentsPage.isDocumentTagDisplayed(fileName, relatedServices_1)).toBe(true);
        expect(await documentsPage.getDateTextByFileName(fileName)).toContain(await commonElements.createGitDateFormat(await commonElements.getCurrentDate(),isGitActionTest));
        expect(await documentsPage.getUploaderTextByFileName(fileName)).toBe(uploader);
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(false);
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(false);
    });
    it('Verify edit documents form', async () => {
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(categoryType_2);
        await commonElements.setChbByLabel(relatedServices_2, true);
        await commonElements.setChbByLabel(userPermision_2, true);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(fileUpdateMsg)).toBe(true);
        expect(await documentsPage.getAssigneeDocCategoryTextByName(fileName)).toBe(categoryType_2);
        expect(await documentsPage.getAssigneeDocTypeTextByName(fileName)).toBe(docType_1.toUpperCase());
        expect(await documentsPage.isDocumentTagDisplayed(fileName, relatedServices_1)).toBe(true);
        expect(await documentsPage.isDocumentTagDisplayed(fileName, relatedServices_2)).toBe(true);
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(false);
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(true);
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(categoryType_3);
        await commonElements.setChbByLabel(userPermision_1, true);
        await commonElements.setChbByLabel(userPermision_2, false);
        await commonElements.setChbByLabel(relatedServices_1, false);
        await commonElements.setChbByLabel(relatedServices_2, false);
        await commonElements.setChbByLabel(relatedServices_3, true);
        await commonElements.clickSaveBtn();
        expect(await documentsPage.getAssigneeDocCategoryTextByName(fileName)).toBe(categoryType_3)
        expect(await documentsPage.isDocumentTagDisplayed(fileName, relatedServices_3)).toBe(true);
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(true);
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(false);
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(categoryType_4);
        await commonElements.clickSaveBtn();
        expect(await documentsPage.getAssigneeDocCategoryTextByName(fileName)).toBe(categoryType_4)
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(categoryType_5);
        await commonElements.setChbByLabel(userPermision_1, true);
        await commonElements.setChbByLabel(userPermision_2, true);
        //await commonElements.setRbt(docType_2);
        await commonElements.clickSaveBtn();
        expect(await documentsPage.getAssigneeDocCategoryTextByName(fileName)).toBe(categoryType_5)
        // expect(await documentsPage.getAssigneeDocTypeTextByName(fileName)).toBe(docType_2.toUpperCase());     Bug
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
    it('Verify remove documents', async () => {
        expect(await assigneePage.getDocQty()).toBe(1);
        await assigneePage.clickRemoveDocBtnByName(fileName, "no");
        expect(await assigneePage.getDocQty()).toBe(1);
        await assigneePage.clickRemoveDocBtnByName(fileName, "yes");
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(fileDelMsg)).toBe(true);
    });
    it('Verify unsupported file error', async () => {
        await documentsPage.clickAddNewDocumentBtn();
        await documentsPage.uploadFile(filePath_2);
        expect(await documentsPage.isRetryBtnDisplayed()).toBe(true);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
    });

});


