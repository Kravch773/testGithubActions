import assigneePage from "../pageobjects/assignment/assignee.page";
import documentsPage from "../pageobjects/clients/documents.page";
import commonElements from "./commonElements";
import passSignIn from "./passSignIn";

const defFilePath = "../autoTests/testFiles/QAtest.docx"
const defFileName = "QAtest.docx"
class addServiceDocument {

    public async addDocumentByServiceName(serviceName, filePath = defFilePath): Promise<void> {
        await browser.newWindow(`https://${passSignIn.enviromentName}.k2relo.com/staff/clients/${passSignIn.clientId}/assignment/${passSignIn.assignmentId}/documents`)
        await browser.switchWindow(`assignment/${passSignIn.assignmentId}/documents`)
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

    public async removeDocumentByName(fileName = defFileName): Promise<void> {
        await browser.switchWindow(`assignment/${passSignIn.assignmentId}/documents`);
        await assigneePage.clickRemoveDocBtnByName(fileName, "yes");
        await commonElements.checkPopUpMsgAndForNotDisplayed("The document was removed successfully");
        await browser.closeWindow();
        await browser.switchWindow("/services");
    }
}
export default new addServiceDocument();
