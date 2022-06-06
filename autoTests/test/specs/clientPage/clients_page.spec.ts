import passSignIn from '../../helper/passSignIn';
import clientsPage from '../../pageobjects/clients/clients.page';
import Page from '../../pageobjects/Page';

const clientName = "train"
const officeLabel = "or filter by office"
const filterByOfficeDropDownItem = "Capetown"
const countryLabel = ", by country"
const filterByCountryDropDownItem = "France"
const managerLabel = ", by account manager"
const filterByManagerDropDownItem = "Carl Sundstrom"
const statusLabel = ", by status"
const filterByStatusDropDownItem = "Active"

describe('Our clients page test', () => {
    before(async () => {
        await passSignIn.signIn();
    });
    it('open ClientsPage and check label', async () => {
        await clientsPage.openClientsPage();
        expect(await clientsPage.getHeaderText()).toEqual("Our clients")
    })
    it('check search input and filter dropdowns', async () => {
        expect(await clientsPage.checkSearchByNameInput()).toBe(true);
        expect(await clientsPage.checkSelectFilter(officeLabel)).toBe(true);
        expect(await clientsPage.checkSelectFilter(countryLabel)).toBe(true);
        expect(await clientsPage.checkSelectFilter(managerLabel)).toBe(true);
        expect(await clientsPage.checkSelectFilter(statusLabel)).toBe(true);
    });
    it('Verify ClientName Input field', async () => {
        await clientsPage.setNameInput(clientName);
        for (var i = 0; i < (await Page.getElements(clientsPage.clientsNameElements)).length; i++) {
            expect(await (await Page.getElementText(clientsPage.clientsNameElements + `[${i + 1}]`)).toLowerCase()).toContain(clientName)
        }
        await clientsPage.clearInputNameField();
    });
    it('Verify offices select dropdown', async () => {
        await clientsPage.setSelectedFilter(officeLabel, filterByOfficeDropDownItem);
        for (var i = 0; i < (await Page.getElements(clientsPage.officeElements)).length; i++) {
            expect(await clientsPage.getOfficeElementText(i)).toContain(filterByOfficeDropDownItem);
        }
        await clientsPage.setSelectedFilter(officeLabel, "all offices");
    });
    it('Verify country select dropdown', async () => {
        await clientsPage.setSelectedFilter(countryLabel, filterByCountryDropDownItem);
        for (var i = 0; i < (await Page.getElements(clientsPage.countryElements)).length; i++) {
            expect(await clientsPage.getCountryElementText(i)).toContain(filterByCountryDropDownItem);
        }
        await clientsPage.setSelectedFilter(countryLabel, "all countries");
    });
    it('Verify managers select dropdown', async () => {
        await clientsPage.setSelectedFilter(managerLabel, filterByManagerDropDownItem);
        for (var i = 0; i < (await Page.getElements(clientsPage.managersElements)).length; i++) {
            expect(await clientsPage.getManagersElementText(i)).toContain(filterByManagerDropDownItem);
        }
        await clientsPage.setSelectedFilter(managerLabel, "all managers");
    });

    it('Verify status select dropdown', async () => {
        await clientsPage.setSelectedFilter(statusLabel, filterByStatusDropDownItem);
        for (var i = 0; i < (await Page.getElements(clientsPage.statusElements)).length; i++) {
            expect(await clientsPage.getStatusElementText(i)).toContain(filterByStatusDropDownItem.toUpperCase());
        }
        await clientsPage.setSelectedFilter(statusLabel, "all statuses");
    });
});


