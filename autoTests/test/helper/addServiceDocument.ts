import assigneePage from "../pageobjects/assignment/assignee.page";
import documentsPage from "../pageobjects/clients/documents.page";
import Page from "../pageobjects/Page";
import commonElements from "./commonElements";
import passSignIn from "./passSignIn";

const defFilePath = "../autoTests/testFiles/QAtest.docx"
const defFileName = "QAtest.docx"
class addServiceDocument {

    public getRemoveDocBtnByServiceName(label): string {
        return `//span[contains(text(),"${label}")]/ancestor::tr//span[text()="remove"]`
    }
    public async clickRemoveDocBtnByServiceName(serviceName, confirm): Promise<void> {
        await Page.click(this.getRemoveDocBtnByServiceName(serviceName));
        await Page.click(commonElements.getRemoveConfirmBtn(confirm));
    }
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

    public async removeDocumentByName(serviceName): Promise<void> {
        await browser.switchWindow(`assignment/${passSignIn.assignmentId}/documents`);
        await this.clickRemoveDocBtnByServiceName(serviceName, "yes");
        await commonElements.checkPopUpMsgAndForNotDisplayed("The document was removed successfully");
        await browser.closeWindow();
        await browser.switchWindow("/services");
    }
}
export default new addServiceDocument();
