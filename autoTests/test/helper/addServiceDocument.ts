import assigneePage from "../pageobjects/assignment/assignee.page";
import documentsPage from "../pageobjects/clients/documents.page";
import commonElements from "./commonElements";
const defFilePath = "../autoTests/testFiles/QAtest.docx"
const defFileName = "QAtest.docx"
const defFAssigneeId = "31970"
class addServiceDocument {

    public async addDocumentByServiceName(serviceName, assigneeId = defFAssigneeId, filePath = defFilePath): Promise<void> {
        await browser.newWindow(`https://staging.k2relo.com/staff/clients/330/assignment/${assigneeId}/documents`)
        await browser.switchWindow(`assignment/${assigneeId}/documents`)
        await commonElements.clickCloseBtn();
        await documentsPage.clickAddNewDocumentBtn();
        await documentsPage.uploadFile(filePath);
        await commonElements.setRbtByLabel("Contract");
        await commonElements.setChbByLabel(serviceName, true);
        await commonElements.setChbByLabel("Assignee", true);
        if (await documentsPage.isFileUploaded() == true) { await commonElements.clickSaveBtn(); }
        await commonElements.checkPopUpMsgAndForNotDisplayed("The document upload was successful. Thank you.");
        await browser.switchWindow("/services");
    }

    public async removeDocumentByName(fileName = defFileName, assigneeId = defFAssigneeId): Promise<void> {
        await browser.switchWindow(`assignment/${assigneeId}/documents`);
        await assigneePage.clickRemoveDocBtnByName(fileName, "yes");
        await commonElements.checkPopUpMsgAndForNotDisplayed("The document was removed successfully");
        await browser.closeWindow();
        await browser.switchWindow("/services");
    }
}
export default new addServiceDocument();
