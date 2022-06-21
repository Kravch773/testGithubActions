import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import clientsPage from '../../../pageobjects/clients/clients.page';
import setupPage from '../../../pageobjects/clients/setup.page';

const originRegionLabel = "Supported origin regions"
const europeLabel = "Europe"
const europeCountryLabel = "Austria"
const americasLable = "Americas"
const americasCountryLabel = "Aruba"
const asiaLabel = "Asia"
const asiaCountryLabel = "Japan"
const australiaLabel = "Australasia"
const australiaCounryLabel = "Australia"
const africaLabel = "Africa"
const africaCountryLabel = "Benin"
const savedRegionsMsg = "Service region mappings have been updated successfully"

describe('Client origin regions page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to origin regions tab and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await setupPage.clickSetupTab();
        await setupPage.clickOriginRegionTab();
        expect(await setupPage.getOriginRegionLabelText()).toContain(originRegionLabel);
        expect(await setupPage.getCheckBoxQty()).toBe(179);
    });
    it('Verify europe regions checkboxes', async () => {
        await commonElements.setChbByLabel(europeLabel, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(europeLabel)).toBe(false);
        expect(await commonElements.getChbState(europeCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(europeLabel, true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(europeLabel)).toBe(false);
        expect(await commonElements.getChbState(europeCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(europeLabel, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(europeLabel)).toBe(true);
        expect(await commonElements.getChbState(europeCountryLabel)).toBe(true);
        await commonElements.setChbByLabel(europeCountryLabel, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(europeLabel)).toBe(false);
        expect(await commonElements.getChbState(europeCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(europeCountryLabel, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(europeLabel)).toBe(true);
        expect(await commonElements.getChbState(europeCountryLabel)).toBe(true);
    });
    it('Verify americas regions checkboxes', async () => {
        await commonElements.setChbByLabel(americasLable, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(americasLable)).toBe(false);
        expect(await commonElements.getChbState(americasCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(americasLable, true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(americasLable)).toBe(false);
        expect(await commonElements.getChbState(americasCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(americasLable, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(americasLable)).toBe(true);
        expect(await commonElements.getChbState(americasCountryLabel)).toBe(true);
        await commonElements.setChbByLabel(americasCountryLabel, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(americasLable)).toBe(false);
        expect(await commonElements.getChbState(americasCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(americasCountryLabel, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(americasLable)).toBe(true);
        expect(await commonElements.getChbState(americasCountryLabel)).toBe(true);
    });
    it('Verify asia regions checkboxes', async () => {
        await commonElements.setChbByLabel(asiaLabel, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(asiaLabel)).toBe(false);
        expect(await commonElements.getChbState(asiaCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(asiaLabel, true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(asiaLabel)).toBe(false);
        expect(await commonElements.getChbState(asiaCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(asiaLabel, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(asiaLabel)).toBe(true);
        expect(await commonElements.getChbState(asiaCountryLabel)).toBe(true);
        await commonElements.setChbByLabel(asiaCountryLabel, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(asiaLabel)).toBe(false);
        expect(await commonElements.getChbState(asiaCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(asiaCountryLabel, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(asiaLabel)).toBe(true);
        expect(await commonElements.getChbState(asiaCountryLabel)).toBe(true);
    });
    it('Verify australia regions checkboxes', async () => {
        await commonElements.setChbByLabel(australiaLabel, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(australiaLabel)).toBe(false);
        expect(await commonElements.getChbState(australiaCounryLabel)).toBe(false);
        await commonElements.setChbByLabel(australiaLabel, true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(australiaLabel)).toBe(false);
        expect(await commonElements.getChbState(australiaCounryLabel)).toBe(false);
        await commonElements.setChbByLabel(australiaLabel, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(australiaLabel)).toBe(true);
        expect(await commonElements.getChbState(australiaCounryLabel)).toBe(true);
        await commonElements.setChbByLabel(australiaCounryLabel, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(australiaLabel)).toBe(false);
        expect(await commonElements.getChbState(australiaCounryLabel)).toBe(false);
        await commonElements.setChbByLabel(australiaCounryLabel, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(australiaLabel)).toBe(true);
        expect(await commonElements.getChbState(australiaCounryLabel)).toBe(true);
    });
    it('Verify africa regions checkboxes', async () => {
        await commonElements.setChbByLabel(africaLabel, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(africaLabel)).toBe(false);
        expect(await commonElements.getChbState(africaCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(africaLabel, true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(africaLabel)).toBe(false);
        expect(await commonElements.getChbState(africaCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(africaLabel, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(africaLabel)).toBe(true);
        expect(await commonElements.getChbState(africaCountryLabel)).toBe(true);
        await commonElements.setChbByLabel(africaCountryLabel, false);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(africaLabel)).toBe(false);
        expect(await commonElements.getChbState(africaCountryLabel)).toBe(false);
        await commonElements.setChbByLabel(africaCountryLabel, true);
        await setupPage.clickSaveChangesBtn();
        await expect(await commonElements.checkPopUpMsgAndForNotDisplayed(savedRegionsMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.getChbState(africaLabel)).toBe(true);
        expect(await commonElements.getChbState(africaCountryLabel)).toBe(true);
    });
});
