import commonElements from '../../helper/commonElements';
import passSignIn from '../../helper/passSignIn';
import assignmentsPage from '../../pageobjects/clients/assignments.page';
import clientsPage from '../../pageobjects/clients/clients.page';
import clientsAssigneesPage from '../../pageobjects/clients/clientsAssignees.page';

const assignmentLabelText = "All client's assignment"
const qaClientId = "238"
const assigneeName = "test"
const assigneeId = "317"
const assignmentLeadLabel = "or filter by assignment lead"
const filterByAssignmentLead_1 = "Sergey Zhizhoma"
const filterByAssignmentLead_2 = "Unassigned"
const typeLabel = "type"
const typeFilter_1 = "Commuter"
const typeFilter_2 = "New hire"
const typeFilter_3 = "Repatriation"
const statusLabel = "status"
const statusFilter_1 = "Initiated"
const statusFilter_2 = "Pre Departure"

describe('All clients assignment page test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('open ClientsPage and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        expect(await assignmentsPage.getAssignmentsLabelText()).toBe(assignmentLabelText)
    });
    it('Verify K2 ID / Assignee Input field', async () => {
        await assignmentsPage.setIdAssigneeInputValue(assigneeName);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect((await clientsAssigneesPage.getAssigneeName(i + 1)).toLowerCase()).toContain(assigneeName);
        }
        await commonElements.clearSearchInput(assignmentsPage.K2ID_AssigneeInput);
        await assignmentsPage.setIdAssigneeInputValue(assigneeId);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect((await assignmentsPage.getAssigneeID(i + 1)).toLowerCase()).toContain(assigneeId);
        }
        await commonElements.clearSearchInput(assignmentsPage.K2ID_AssigneeInput);
    });
    it('Verify assignment lead dropdown', async () => {
        await assignmentsPage.setFilterDDbyLabel(assignmentLeadLabel,filterByAssignmentLead_1);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await assignmentsPage.getManagedText(i + 1)).toContain(filterByAssignmentLead_1);
        }
        await assignmentsPage.setFilterDDbyLabel(assignmentLeadLabel,filterByAssignmentLead_2);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await assignmentsPage.getUnassignedManagedText(i + 1)).toContain(filterByAssignmentLead_2.toUpperCase());
        }
        await assignmentsPage.setFilterDDbyLabel(assignmentLeadLabel,"all");
    });
    it('Verify country select dropdown', async () => {
        await assignmentsPage.setFilterDDbyLabel(typeLabel,typeFilter_1);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await assignmentsPage.getAssignmentTypeText(i + 1)).toContain(typeFilter_1);
        }
        await assignmentsPage.setFilterDDbyLabel(typeLabel,typeFilter_2);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await assignmentsPage.getAssignmentTypeText(i + 1)).toContain(typeFilter_2);
        }
        await assignmentsPage.setFilterDDbyLabel(typeLabel,typeFilter_3);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await assignmentsPage.getAssignmentTypeText(i + 1)).toContain(typeFilter_3);
        }
        await assignmentsPage.setFilterDDbyLabel(typeLabel,"all");
    });
    it('Verify country select dropdown', async () => {
        await assignmentsPage.setFilterDDbyLabel(statusLabel,statusFilter_1);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await assignmentsPage.getStatusText(i + 1)).toContain(statusFilter_1.toUpperCase());
        }
        await assignmentsPage.setFilterDDbyLabel(statusLabel,statusFilter_2);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await assignmentsPage.getStatusText(i + 1)).toContain(statusFilter_2.toUpperCase());
        }
        await assignmentsPage.setFilterDDbyLabel(statusLabel,"all");
    });
});


