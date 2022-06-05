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
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue("K2-31970");
        await Page.click('//td/a[text()=" K2-31970 "]');
        await assignmentOptionPage.clickAssignmentOptionTab();
        await assignmentOptionPage.clickLinkedAssignmentsTab();
        expect(await assignmentOptionPage.getAssignmentsLabelText()).toContain("Linked assignments");
    });
    it('Verify Edit assignment_1', async () => {
        
    });

});
