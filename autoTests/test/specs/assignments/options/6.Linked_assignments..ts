import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assignmentOptionPage from '../../../pageobjects/assignment/assignmentOption.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';
import Page from '../../../pageobjects/Page';

const qaClientId = "330"
const assignmentId = "K2-31970"

describe('Client briefing notes page test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('open ClientsPage and check label', async () => {
        a await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await assignmentOptionPage.clickAssignmentOptionTab();
        await assignmentOptionPage.clickLinkedAssignmentsTab();
        expect(await assignmentOptionPage.getAssignmentsLabelText()).toContain("Linked assignments");
    });
    it('Verify Edit assignment_1', async () => {
        
    });

});
