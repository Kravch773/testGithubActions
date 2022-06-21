import assigneePage from "../pageobjects/assignment/assignee.page";
import commonElements from "./commonElements";
import passSignIn from "./passSignIn";

const personType = "Partner"
const title = "Ms"
const firstName = "Test"
const lastName = "Partner"
const gender = "Female"
const nationality = "American"
const dateOfBirth = "12.11.1990"
const maritalStatus = "Single"
const email = "QatestMail@qamail.com"
const phone = "7400123458"
const notes = "TestNotes"
const addedPersonMsg = "has been added to the assignment"
const removedPersonMsg = "has been removed successfully. Thank you."

class addServiceDocument {

    public async addFamilyMember(memberType = personType): Promise<void> {
        await browser.newWindow(`https://${passSignIn.enviromentName}.k2relo.com/staff/clients/${passSignIn.clientId}/assignment/${passSignIn.assignmentId}/assignee/family`)
        await browser.switchWindow(`assignment/${passSignIn.assignmentId}/assignee/family`);
        await commonElements.clickCloseBtn();
        await assigneePage.clickAddPersonBtn();
        if (memberType == "Child") { await assigneePage.setChildMember(memberType, title, firstName, lastName, gender, nationality, dateOfBirth, ""); }
        else { await assigneePage.setAdditionalMember(memberType, title, firstName, lastName, gender, nationality, dateOfBirth, maritalStatus, email, phone, phone, phone, notes); }
        await commonElements.clickSaveBtn();
        await commonElements.checkPopUpMsgAndForNotDisplayed(addedPersonMsg);
        await browser.closeWindow();
        await browser.switchWindow("/services");
    }

    public async removeFamilyMember(originTabName = "/services"): Promise<void> {
        await browser.newWindow(`https://${passSignIn.enviromentName}.k2relo.com/staff/clients/${passSignIn.clientId}/assignment/${passSignIn.assignmentId}/assignee/family`)
        await commonElements.clickCloseBtn()
        await assigneePage.clickFamilyTab();
        await assigneePage.clickFamilyRemoveBtnByName(firstName, lastName)
        await commonElements.checkPopUpMsgAndForNotDisplayed(removedPersonMsg);
        await browser.closeWindow();
        await browser.switchWindow(originTabName);
    }
}
export default new addServiceDocument();
