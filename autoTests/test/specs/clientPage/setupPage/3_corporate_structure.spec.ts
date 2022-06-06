import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import clientsPage from '../../../pageobjects/clients/clients.page';
import setupPage from '../../../pageobjects/clients/setup.page';

const qaClientId = "330"
const corporateStructureLabel = "Corporate structure"
const subsidiaryName_1 = "QATEST"
const subsidiaryName_2 = "SubTest"
const parentName_1 = "Test Subsidiary"
const parentName_2 = "QA Test Client"
const currencyValue_1 = "AUD"
const currencyValue_2 = "USD"
const invAddresValue_1 = "Second Address"
const invAddresValue_2 = "Test Address"
const noteValue_1 = "TestNOTE11"
const noteValue_2 = "TestNOTE22"
const blockForInitState_1 = true
const blockForInitState_2 = false
const subsidiaryAddedMsg = "Subsidiary created"
const subsidiaryRemovedMsg = "Subsidiary removed successfully"
const subsidiaryUpdMsg = "Subsidiary updated successfully"

describe('Client Corporate structure page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Corporate structure and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await setupPage.clickSetupTab();
        await setupPage.clickCorporatestructureTab();
        expect(await setupPage.getCorpStructureText()).toContain(corporateStructureLabel)
    });
    it('Verify Corporate structure tab', async () => {
        await setupPage.clickAddSubsidiaryBtn();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        await setupPage.setSubsidiary(subsidiaryName_1, parentName_1, currencyValue_1, invAddresValue_1, noteValue_1, blockForInitState_1);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isTabelElementExistingByName(subsidiaryName_1)).toBe(false);
        await setupPage.clickAddSubsidiaryBtn();
        await setupPage.setSubsidiary(subsidiaryName_1, parentName_1, currencyValue_1, invAddresValue_1, noteValue_1, blockForInitState_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(subsidiaryAddedMsg)).toBe(true);
        expect(await setupPage.isTabelElementExistingByName(subsidiaryName_1)).toBe(true);
    });
    it('Verify edit Subsidiary form', async () => {
        await setupPage.clickEditTabelBtnByName(subsidiaryName_1);
        await setupPage.setSubsidiary(subsidiaryName_2, parentName_2, currencyValue_2, invAddresValue_2, noteValue_2, blockForInitState_2);
        await commonElements.clickCancelBtn();
        await setupPage.setSearchInput(subsidiaryName_1);
        expect(await setupPage.isTabelElementExistingByName(subsidiaryName_1)).toBe(true);
        expect(await setupPage.isCorpStructureLabelDisplayed(subsidiaryName_1,parentName_1)).toBe(true);
        expect(await setupPage.isCorpStructureLabelDisplayed(subsidiaryName_1,currencyValue_1)).toBe(true);
        expect(await setupPage.isCorpStructureLabelDisplayed(subsidiaryName_1,noteValue_1)).toBe(true);
        await setupPage.clickEditTabelBtnByName(subsidiaryName_1);
        await setupPage.setSubsidiary(subsidiaryName_2, parentName_2, currencyValue_2, invAddresValue_2, noteValue_2, blockForInitState_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(subsidiaryUpdMsg)).toBe(true);
        await setupPage.setSearchInput(subsidiaryName_2);
        expect(await setupPage.isTabelElementExistingByName(subsidiaryName_2)).toBe(true);
        expect(await setupPage.isCorpStructureLabelDisplayed(subsidiaryName_2,parentName_2)).toBe(true);
        expect(await setupPage.isCorpStructureLabelDisplayed(subsidiaryName_2,currencyValue_2)).toBe(true);
        expect(await setupPage.isCorpStructureLabelDisplayed(subsidiaryName_2,noteValue_2)).toBe(true);
    });
    it('Verify Corporate structure search and remove btn', async () => {
        await setupPage.setSearchInput(subsidiaryName_2)
        expect(await setupPage.isTabelElementExistingByName(subsidiaryName_2)).toBe(true);
        await setupPage.clearSearchInput();
        expect(await setupPage.isTabelElementExistingByName(subsidiaryName_2)).toBe(true);
        await setupPage.removeTabelElementByName(subsidiaryName_2,"no");
        expect(await setupPage.isTabelElementExistingByName(subsidiaryName_2)).toBe(true);
        await setupPage.removeTabelElementByName(subsidiaryName_2,"yes");
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(subsidiaryRemovedMsg)).toBe(true);
        expect(await setupPage.isTabelElementExistingByName(subsidiaryName_2)).toBe(false);
    });
});
