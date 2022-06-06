import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import clientsPage from '../../../pageobjects/clients/clients.page';
import setupPage from '../../../pageobjects/clients/setup.page';

const qaClientId = "330"
const addressesLabel = "Addresses"
const addressName_1 = "TestQAAddress"
const addressName_2 = "QAAddressForTest2"
const FAO_1 = "testFAO"
const FAO_2 = "FAOTest"
const address_1 = ["testStreet11", "testStreet21", "testStreet31", "testStreet41"]
const address_2 = ["testStreet12", "testStreet22", "testStreet32", "testStreet42"]
const city_1 = "Paris"
const city_2 = "Rome"
const countryState_1 = "TestState1"
const countryState_2 = "TestState2"
const postalZip_1 = "2131241"
const postalZip_2 = "1234"
const country_1 = "France"
const country_2 = "Italy"
const addressAddedMsg = "The address record for '"+addressName_1+"' has been created. Thank you."
const addressRemovedMsg = "Address removed"
const addressUpdMsh = "Address record updated"

describe('Client Addresses page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Addresses page ', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await setupPage.clickSetupTab();
        await setupPage.clickAddressesTab();
        expect(await setupPage.getAdressesTabLabelText()).toContain(addressesLabel);
    });

    it('Verify add address form', async () => {
        await setupPage.clickAddAddressesBtn();
        await setupPage.setNewClientAddress(addressName_1, FAO_1, address_1, city_1, countryState_1, postalZip_1, country_1)
        await commonElements.clickCancelBtn();
        expect(await setupPage.isAddressExistingByName(addressName_1)).toBe(false);
        await setupPage.clickAddAddressesBtn();
        await setupPage.setNewClientAddress(addressName_1, FAO_1, address_1, city_1, countryState_1, postalZip_1, country_1)
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(addressAddedMsg)).toBe(true);
        expect(await setupPage.isAddressExistingByName(addressName_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,FAO_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,address_1[0])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,address_1[1])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,address_1[2])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,address_1[3])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,city_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,countryState_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,postalZip_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,country_1)).toBe(true);
    });
    it('Verify edit btn', async () => {
        await setupPage.clickAddressEditByName(addressName_1);
        await setupPage.setNewClientAddress(addressName_2, FAO_2, address_2, city_2, countryState_2, postalZip_2, country_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.isAddressExistingByName(addressName_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,FAO_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,address_1[0])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,address_1[1])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,address_1[2])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,address_1[3])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,city_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,countryState_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,postalZip_1)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_1,country_1)).toBe(true);
        await setupPage.clickAddressEditByName(addressName_1);
        await setupPage.setNewClientAddress(addressName_2, FAO_2, address_2, city_2, countryState_2, postalZip_2, country_2);
        await commonElements.clickSaveBtn();
        await commonElements.checkPopUpMsgAndForNotDisplayed(addressUpdMsh);
        expect(await setupPage.isAddressExistingByName(addressName_2)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_2,FAO_2)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_2,address_2[0])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_2,address_2[1])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_2,address_2[2])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_2,address_2[3])).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_2,city_2)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_2,countryState_2)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_2,postalZip_2)).toBe(true);
        expect(await setupPage.isAddressLabelDisplayed(addressName_2,country_2)).toBe(true);
    });
    it('Verify required fields', async () => {
        await setupPage.clickAddAddressesBtn();
        await commonElements.clickSaveBtn();
        expect(await setupPage.getErrorsMsgQty()).toBe(3);
        await commonElements.clickCancelBtn();
    });
    it('Verify remove address', async () => {
        expect(await setupPage.isAddressExistingByName(addressName_2)).toBe(true);
        await setupPage.removeAddressByName(addressName_2,"no");
        expect(await setupPage.isAddressExistingByName(addressName_2)).toBe(true);
        await setupPage.removeAddressByName(addressName_2,"yes");
        expect(await commonElements.isPopupMsgDisplayed(addressRemovedMsg)).toBe(true);
        expect(await setupPage.isAddressExistingByName(addressName_2)).toBe(false);
    });




});
