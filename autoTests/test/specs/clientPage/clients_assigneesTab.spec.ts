import commonElements from '../../helper/commonElements';
import passSignIn from '../../helper/passSignIn';
import clientsPage from '../../pageobjects/clients/clients.page';
import clientsAssigneesPage from '../../pageobjects/clients/clientsAssignees.page';

const assigneesLabelText = "Assignees"
const qaClientId = "238"
const assigneeName = "test"
const subsidiaryFilterLabel = "or filter by subsidiary"
const filterBySubsidiary_1 = "Training Client"
const filterBySubsidiary_2 = "Test subsidiary"
const onAssignmentLabel = "or on assignment"
const onAssignmentValue_1 = "Yes"
const onAssignmentValue_2 = "No"

describe('Clients Assignees page test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('open ClientsPage and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await clientsAssigneesPage.clickAssigneesTab();
        expect(await clientsAssigneesPage.getAssigneesLabelText()).toBe(assigneesLabelText)
    });

    it('Verify ClientName Input field', async () => {
        await clientsAssigneesPage.setAssingeeInputValue(assigneeName);
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect((await clientsAssigneesPage.getAssigneeName(i + 1)).toLowerCase()).toContain(assigneeName)
        }
        await commonElements.clearSearchInput(clientsAssigneesPage.searchAssigneeInput);
    });

    it('Verify offices select dropdown', async () => {
        await commonElements.setDropDownValue( filterBySubsidiary_1,clientsAssigneesPage.getfilterDDbyLabel(subsidiaryFilterLabel));
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await clientsAssigneesPage.getEntityLabelText(i + 1)).toContain(filterBySubsidiary_1);
        }
        await commonElements.setDropDownValue(filterBySubsidiary_2,clientsAssigneesPage.getfilterDDbyLabel(subsidiaryFilterLabel));
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await clientsAssigneesPage.getEntityLabelText(i + 1)).toContain(filterBySubsidiary_2);
        }
        await commonElements.setDropDownValue("all",clientsAssigneesPage.getfilterDDbyLabel(subsidiaryFilterLabel));
    });

    it('Verify country select dropdown', async () => {
        await commonElements.setDropDownValue(onAssignmentValue_1,clientsAssigneesPage.getfilterDDbyLabel(onAssignmentLabel));
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await clientsAssigneesPage.getOnAssignmentLabelText(i + 1)).toContain(onAssignmentValue_1.toUpperCase());
        }
        await commonElements.setDropDownValue(onAssignmentValue_2,clientsAssigneesPage.getfilterDDbyLabel(onAssignmentLabel));
        for (var i = 0; i < (await clientsAssigneesPage.getAssigneesQty()); i++) {
            expect(await clientsAssigneesPage.getOnAssignmentLabelText(i + 1)).toContain(onAssignmentValue_2.toUpperCase());
        }
        await commonElements.setDropDownValue("all",clientsAssigneesPage.getfilterDDbyLabel(onAssignmentLabel));
    });
});


