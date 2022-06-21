import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import clientsPage from '../../../pageobjects/clients/clients.page';
import setupPage from '../../../pageobjects/clients/setup.page';

const HHGAllowancesLabel = "HHG shipping allowances"
const HHGName_1 = "HHG_QA"
const HHGName_2 = "HHG_QA_2"
const shipingType_1 = "Air"
const shipingType_2 = "Sea (LCL)"
const shipingType_3 = "Road"
const weightValue_1 = "500"
const weightValue_2 = "20"
const weightValue_3 = "110"
const weightType_1 = " Weight Kgs"
const weightType_2 = " Volume CuFt"
const weightType_3 = " Volume CBM"
const allowanceAddedMsg ="The client allowance was recorded successfully. Thank you"
const allowanceUpdMsg ="The client allowance record was updated successfully. Thank you"
const allowanceRemoveMsg = "The client allowance record was deleted successfully. Thank you"

describe('Client HHG shipping allowances page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to HHG shipping allowances tab and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await setupPage.clickSetupTab();
        await setupPage.clickHHGAllowancesTab();
        expect(await setupPage.getHHGAllowancesLabelText()).toContain(HHGAllowancesLabel)
    });

    it('Verify allowance form', async () => {
        await setupPage.clickaAddAllowancesBtn();
        await commonElements.setInputValue(HHGName_1,setupPage.allowanceLabelInput)
        await setupPage.setAllowance(1, shipingType_1, weightType_1, weightValue_1);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getEditBtnQty()).toBe(1);
        await setupPage.clickaAddAllowancesBtn();
        await commonElements.setInputValue(HHGName_1,setupPage.allowanceLabelInput)
        await setupPage.setAllowance(1, shipingType_1, weightType_1, weightValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(allowanceAddedMsg)).toBe(true);
        expect(await setupPage.isAllowancesLabelTextDisplayed(HHGName_1, weightValue_1 + weightType_1)).toBe(true);
        expect(await setupPage.isAllowancesLabelTextDisplayed(HHGName_1, " - ")).toBe(true);
    });

    it('Verify edit and additional allowances icon', async () => {
        await setupPage.clickEditTabelBtnByName(HHGName_1);
        await commonElements.setInputValue(HHGName_2,setupPage.allowanceLabelInput)
        await setupPage.clickAddAllowanceIcon();
        await setupPage.setAllowance(2, shipingType_2, weightType_2, weightValue_2);
        await setupPage.clickAddAllowanceIcon();
        await setupPage.setAllowance(3, shipingType_3, weightType_3, weightValue_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(allowanceUpdMsg)).toBe(true);
        expect(await setupPage.isAllowancesLabelTextDisplayed(HHGName_2, weightValue_1 + weightType_1)).toBe(true);
        expect(await setupPage.isAllowancesLabelTextDisplayed(HHGName_2, weightValue_2 + weightType_2)).toBe(true);
        expect(await setupPage.isAllowancesLabelTextDisplayed(HHGName_2, weightValue_2 + weightType_2)).toBe(true);
        await setupPage.clickEditTabelBtnByName(HHGName_2);
        await setupPage.clickRemoveAllowanceIcon(3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(allowanceUpdMsg)).toBe(true);
        expect(await setupPage.isAllowancesLabelTextDisplayed(HHGName_2, weightValue_1 + weightType_1)).toBe(true);
        expect(await setupPage.isAllowancesLabelTextDisplayed(HHGName_2, weightValue_2 + weightType_2)).toBe(true);
        expect(await setupPage.isAllowancesLabelTextDisplayed(HHGName_2, " - ")).toBe(true);
    });

    it('Verify remove Btn', async () => {
        expect(await setupPage.isTabelElementExistingByName(HHGName_2)).toBe(true);
        await setupPage.removeTabelElementByName(HHGName_2,"no");
        expect(await setupPage.isTabelElementExistingByName(HHGName_2)).toBe(true);
        await setupPage.removeTabelElementByName(HHGName_2,"yes");
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(allowanceRemoveMsg)).toBe(true);
        expect(await setupPage.isTabelElementExistingByName(HHGName_2)).toBe(false);
    });




});
