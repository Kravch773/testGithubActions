import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import clientsPage from '../../../pageobjects/clients/clients.page';
import Page from '../../../pageobjects/Page';
import setupPage from '../../../pageobjects/clients/setup.page';

const supServicesLabel = "Supported services"
const serviceListUpdateMsg= "Enabled service list updated successfully"

describe('Client Supported Services page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Supported Services tab and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await setupPage.clickSetupTab();
        await setupPage.clickSupServiceTab();
        expect(await setupPage.getSupServiceLabelText()).toContain(supServicesLabel)
    });

    it('Verify service checkboxes and toggleAll btn', async () => {
        await setupPage.clickToggleAllBtn();
        (await Page.getElements(commonElements.chbElement)).forEach(async element => {
            expect(await Page.isElementSelected(element)).toBe(false);
        });
        await commonElements.refreshPage();
        (await Page.getElements(commonElements.chbElement)).forEach(async element => {
            expect(await Page.isElementSelected(element)).toBe(true);
        });
        await setupPage.clickToggleAllBtn();
        await setupPage.clickSaveChangesBtn();
        expect(await commonElements.isPopupMsgDisplayed(serviceListUpdateMsg)).toBe(true);
        await commonElements.refreshPage();
        (await Page.getElements(commonElements.chbElement)).forEach(async element => {
            expect(await Page.isElementSelected(element)).toBe(false);
        });
        await setupPage.clickToggleAllBtn();
        await setupPage.clickSaveChangesBtn();
        expect(await commonElements.isPopupMsgDisplayed(serviceListUpdateMsg)).toBe(true);

    });





});
