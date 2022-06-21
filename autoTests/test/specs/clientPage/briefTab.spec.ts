import commonElements from '../../helper/commonElements';
import passSignIn from '../../helper/passSignIn';
import briefPage from '../../pageobjects/clients/brief.page';
import clientsPage from '../../pageobjects/clients/clients.page';

const briefLabelText = "Client briefing notes"
const briefingNotesLabel_1 = "Client overview"
const briefingNotesLabel_2 = "Contract and fee set up"
const briefingNotesLabel_3 = "Meeting reviews and reporting"
const briefingNotesLabel_4 = "Service specifics"
const briefingNotesLabel_5 = "Billing"
const briefingNotesText_1 = "Test Client overview Note"
const briefingNotesText_2 = "Test Contract and fee set up Note"
const briefingNotesText_3 = "Test Meeting reviews and reporting Note"
const briefingNotesText_4 = "Test Service specifics Note"
const briefingNotesText_5 = "Test Billing Note"
const clientBriefUpdMsg = " Client brief has been saved"

describe('Client briefing notes page test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('open ClientsPage and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await briefPage.clickBriefTab();
        expect(await briefPage.getBriefLabelText()).toBe(briefLabelText)
    });
    it('Verify Client overview briefing note', async () => {
        await briefPage.clickAddContentBtnByLabel(briefingNotesLabel_1);
        await commonElements.setNoteInput(briefingNotesText_1);
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_1)).toBe(briefingNotesText_1)
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_1);
        await commonElements.setNoteInput(briefingNotesText_1 + "EditTest");
        await commonElements.clickCancelBtn();
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_1)).toBe(briefingNotesText_1);
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_1);
        await commonElements.setNoteInput(briefingNotesText_1 + "EditTest");
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_1)).toBe(briefingNotesText_1 + "EditTest");
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_1);
        await commonElements.clearNoteInput();
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.isAddContentBtnDisplayed(briefingNotesLabel_1)).toBe(true);
    });
    it('Verify Client overview briefing note', async () => {
        await briefPage.clickAddContentBtnByLabel(briefingNotesLabel_2);
        await commonElements.setNoteInput(briefingNotesText_2);
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_2)).toBe(briefingNotesText_2)
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_2);
        await commonElements.setNoteInput(briefingNotesText_2 + "EditTest");
        await commonElements.clickCancelBtn();
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_2)).toBe(briefingNotesText_2);
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_2);
        await commonElements.setNoteInput(briefingNotesText_2 + "EditTest");
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_2)).toBe(briefingNotesText_2 + "EditTest");
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_2);
        await commonElements.clearNoteInput();
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.isAddContentBtnDisplayed(briefingNotesLabel_2)).toBe(true);
    });
    it('Verify Client overview briefing note', async () => {
        await briefPage.clickAddContentBtnByLabel(briefingNotesLabel_3);
        await commonElements.setNoteInput(briefingNotesText_3);
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_3)).toBe(briefingNotesText_3)
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_3);
        await commonElements.setNoteInput(briefingNotesText_3 + "EditTest");
        await commonElements.clickCancelBtn();
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_3)).toBe(briefingNotesText_3);
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_3);
        await commonElements.setNoteInput(briefingNotesText_3 + "EditTest");
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_3)).toBe(briefingNotesText_3 + "EditTest");
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_3);
        await commonElements.clearNoteInput();
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.isAddContentBtnDisplayed(briefingNotesLabel_3)).toBe(true);
    });
    it('Verify Client overview briefing note', async () => {
        await briefPage.clickAddContentBtnByLabel(briefingNotesLabel_4);
        await commonElements.setNoteInput(briefingNotesText_4);
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_4)).toBe(briefingNotesText_4)
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_4);
        await commonElements.setNoteInput(briefingNotesText_4 + "EditTest");
        await commonElements.clickCancelBtn();
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_4)).toBe(briefingNotesText_4);
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_4);
        await commonElements.setNoteInput(briefingNotesText_4 + "EditTest");
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_4)).toBe(briefingNotesText_4 + "EditTest");
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_4);
        await commonElements.clearNoteInput();
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.isAddContentBtnDisplayed(briefingNotesLabel_4)).toBe(true);
    });
    it('Verify Client overview briefing note', async () => {
        await briefPage.clickAddContentBtnByLabel(briefingNotesLabel_5);
        await commonElements.setNoteInput(briefingNotesText_5);
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_5)).toBe(briefingNotesText_5)
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_5);
        await commonElements.setNoteInput(briefingNotesText_5 + "EditTest");
        await commonElements.clickCancelBtn();
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_5)).toBe(briefingNotesText_5);
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_5);
        await commonElements.setNoteInput(briefingNotesText_5 + "EditTest");
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await briefPage.getNoteTextByLabel(briefingNotesLabel_5)).toBe(briefingNotesText_5 + "EditTest");
        await briefPage.clickEditNoteBtnByLabel(briefingNotesLabel_5);
        await commonElements.clearNoteInput();
        await commonElements.clickSaveChangesBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(clientBriefUpdMsg)).toBe(true);
        expect(await briefPage.isAddContentBtnDisplayed(briefingNotesLabel_5)).toBe(true);
    });
});