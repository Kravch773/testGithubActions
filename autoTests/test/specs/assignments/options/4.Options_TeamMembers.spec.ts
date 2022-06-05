import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assignmentOptionPage from '../../../pageobjects/assignment/assignmentOption.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const k2TeamLabel_1 = "Assignment lead"
const k2TeamLabel_2 = "K2 Origin"
const k2TeamLabel_3 = "K2 Destination"
const k2TeamLabel_4 = "Immigration"
const k2TeamLabel_5 = "HHG - origin"
const k2TeamLabel_6 = "HHG - destination"
const k2TeamLabel_7 = "Commercial"
const k2TeamLabel_8 = "Assignment"
const testMemberPerson_1 = "Sergey"
const testMemberPerson_2 = "Ivan"
const teamMembersSavedMsg = "The assignment team was successfully updated. Thank you"

describe('Options_TeamMember tab test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('open Options_TeamMember and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await assignmentOptionPage.clickAssignmentOptionTab();
        await assignmentOptionPage.clickK2TeamTab();
        expect(await assignmentOptionPage.getK2TeamLabelText()).toBe("The K2 team");
    });
    it('Verify Options_TeamMember form', async () => {
        await assignmentOptionPage.setK2TeamMembers(testMemberPerson_1);
        await commonElements.clickSaveBtn();
        await commonElements.isPopupMsgDisplayed(teamMembersSavedMsg);
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_1)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_2)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_3)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_4)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_5)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_6)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_7)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_8)).toContain(testMemberPerson_1);
    });
    it('Verify remove team member ', async () => {
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_1);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_2);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_3);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_4);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_5);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_6);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_7);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_8);
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_1)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_2)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_3)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_4)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_5)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_6)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_7)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_8)).toContain(testMemberPerson_1);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_1);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_2);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_3);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_4);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_5);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_6);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_7);
        await assignmentOptionPage.clickPersonRemoveIcon(k2TeamLabel_8);
        await commonElements.clickSaveBtn();
        await commonElements.isPopupMsgDisplayed(teamMembersSavedMsg);
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.isTeamMemberPersonNotExisting(k2TeamLabel_1)).toBe(true);
        expect(await assignmentOptionPage.isTeamMemberPersonNotExisting(k2TeamLabel_2)).toBe(true);
        expect(await assignmentOptionPage.isTeamMemberPersonNotExisting(k2TeamLabel_3)).toBe(true);
        expect(await assignmentOptionPage.isTeamMemberPersonNotExisting(k2TeamLabel_4)).toBe(true);
        expect(await assignmentOptionPage.isTeamMemberPersonNotExisting(k2TeamLabel_5)).toBe(true);
        expect(await assignmentOptionPage.isTeamMemberPersonNotExisting(k2TeamLabel_6)).toBe(true);
        expect(await assignmentOptionPage.isTeamMemberPersonNotExisting(k2TeamLabel_7)).toBe(true);
        expect(await assignmentOptionPage.isTeamMemberPersonNotExisting(k2TeamLabel_8)).toBe(true);
        await assignmentOptionPage.setK2TeamMembers(testMemberPerson_1);
        await commonElements.clickSaveBtn();
        await commonElements.isPopupMsgDisplayed(teamMembersSavedMsg);
    });
    it('Verify edit team member form', async () => {
        await assignmentOptionPage.setK2TeamMembers(testMemberPerson_2);
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_1)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_2)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_3)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_4)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_5)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_6)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_7)).toContain(testMemberPerson_1);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_8)).toContain(testMemberPerson_1);
        await assignmentOptionPage.setK2TeamMembers(testMemberPerson_2);
        await commonElements.clickSaveBtn();
        await commonElements.isPopupMsgDisplayed(teamMembersSavedMsg);
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_1)).toContain(testMemberPerson_2);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_2)).toContain(testMemberPerson_2);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_3)).toContain(testMemberPerson_2);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_4)).toContain(testMemberPerson_2);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_5)).toContain(testMemberPerson_2);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_6)).toContain(testMemberPerson_2);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_7)).toContain(testMemberPerson_2);
        expect(await assignmentOptionPage.getPersonNameTextByLabel(k2TeamLabel_8)).toContain(testMemberPerson_2);

    });

});