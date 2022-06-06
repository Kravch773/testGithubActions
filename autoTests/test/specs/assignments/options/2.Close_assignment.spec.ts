import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assignmentOptionPage from '../../../pageobjects/assignment/assignmentOption.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';
import Page from '../../../pageobjects/Page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const reasonLabel_1 = "Assignee cancelled"
const reasonLabel_2 = "Client cancelled"
const reasonLabel_3 = "Lost to competitor"
const reasonLabel_4 = "Natural conclusion"
const closedAndarchivedMsg = "This assignment has been closed successfully."

describe('Client close assignment page test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('open ClientsPage and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await assignmentOptionPage.clickAssignmentOptionTab();
        await assignmentOptionPage.clickCloseAssignmentTab();
        expect(await assignmentOptionPage.getCloseAssignmentLabelText()).toBe("Close assignment");
    });
    it('Verify close assignment date ', async () => {
        await commonElements.setRbtByLabel(reasonLabel_1);
        await assignmentOptionPage.clickCloseAndArchiveBtn();
        await commonElements.isPopupMsgDisplayed(closedAndarchivedMsg);
        await assignmentOptionPage.clickAssignmentOptionTab();
        await assignmentOptionPage.clickCloseAssignmentTab();
        expect(await commonElements.createStandartDateForm(await assignmentOptionPage.getArchiveAssignmentDate())).toContain(commonElements.getCurrentDateNo0Format());
        await assignmentOptionPage.clickReOpenAssignmentBtn();
        expect(await assignmentOptionPage.isAssignmentStatusbarDisplayed()).toBe(true);
    });
});
