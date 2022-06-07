import commonElements from '../../helper/commonElements';
import passSignIn from '../../helper/passSignIn';
import clientsPage from '../../pageobjects/clients/clients.page';
import documentsPage from '../../pageobjects/clients/documents.page';

const qaClientId = "330"
const documentsLabelText = "Client documents"
const contractRB = "Contract"
const policyRB = "Policy"
const pricingRB = "Pricing"
const reportingRB = "Reporting"
const miscOtherRB = "Misc/Other"
const filePath = "../autoTests/testFiles/QAtest.docx"
const fileName = "QAtest.docx"
const filePath_2 = "../autoTests/testFiles/QAtest.exe"
const addedFileMsg = "Your upload for this client was successfully recorded"
const clientName = "Ivan QA"
const userPermision_1 = "Client"
const userPermision_2 = "Assignee"
const fileUpdateMsg = " Your client document was updated successfully."
const fileDelMsg = "The document '" + fileName + "' was removed successfully."

describe('Client document page test', () => {

    before(async () => {
        await passSignIn.signIn();
        
    });

    it('Open Client document page and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await documentsPage.clickDocumentsTab();
        expect(await documentsPage.getDocumentsPageLabelText()).toBe(documentsLabelText)
    });

    it('Verify add document form', async () => {
        await documentsPage.clickAddNewDocumentBtn();
        await documentsPage.uploadFile(filePath);
        expect(await documentsPage.isFileUploaded()).toBe(true);
        await commonElements.clickCancelBtn();
        expect(await documentsPage.isDocumentExisting(fileName)).toBe(false);
        await documentsPage.clickAddNewDocumentBtn();
        await documentsPage.uploadFile(filePath);
        expect(await documentsPage.isFileUploaded()).toBe(true);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(addedFileMsg)).toBe(true);
        expect(await documentsPage.isDocumentExisting(fileName)).toBe(true);
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(contractRB)
        expect(await commonElements.createStandartDateForm(await documentsPage.getDateTextByFileName(fileName))).toBe(await commonElements.getCurrentDateNo0Format())
        expect(await documentsPage.getUploaderTextByFileName(fileName)).toBe(clientName)
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(false)
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(false)
    });

    it('Verify edit form', async () => {
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(policyRB);
        await commonElements.setChbByLabel(userPermision_2, true);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(fileUpdateMsg)).toBe(true);
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(policyRB);
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(false);
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(true);
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(reportingRB);
        await commonElements.setChbByLabel(userPermision_1, true);
        await commonElements.setChbByLabel(userPermision_2, false);
        await commonElements.clickSaveBtn();
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(reportingRB)
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(true);
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(false);
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(pricingRB);
        await commonElements.clickSaveBtn();
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(pricingRB)
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await commonElements.setRbtByLabel(miscOtherRB);
        await commonElements.setChbByLabel(userPermision_1, true);
        await commonElements.setChbByLabel(userPermision_2, true);
        await commonElements.clickSaveBtn();
        expect(await documentsPage.getCategoryTextByFileName(fileName)).toBe(miscOtherRB)
        expect(await documentsPage.getUserPermisonStatus(userPermision_1, fileName)).toBe(true);
        expect(await documentsPage.getUserPermisonStatus(userPermision_2, fileName)).toBe(true);
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await documentsPage.clickFileRemoveBtn();
        await commonElements.clickCancelBtn();
        expect(await documentsPage.isDocumentExisting(fileName)).toBe(true);
        await documentsPage.clickEditBtnDocumentByName(fileName);
        await documentsPage.clickFileRemoveBtn();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        await commonElements.clickCancelBtn();
    });

    it('Verify remove document', async () => {
        await documentsPage.clickRemoveBtnDocumentByName(fileName);
        await commonElements.clickRemoveConfirmBtn("no");
        expect(await documentsPage.isDocumentExisting(fileName)).toBe(true);
        await documentsPage.clickRemoveBtnDocumentByName(fileName);
        await commonElements.clickRemoveConfirmBtn("yes");
        expect(await commonElements.isPopupMsgDisplayed(fileDelMsg)).toBe(true)
        expect(await documentsPage.isDocumentExisting(fileName)).toBe(false);
    });
    it('Verify unsupported file error', async () => {
        await documentsPage.clickAddNewDocumentBtn();
        await documentsPage.uploadFile(filePath_2);
        expect(await documentsPage.isRetryBtnDisplayed()).toBe(true);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
    });
});
