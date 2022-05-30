import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import AssigneePage from '../../../pageobjects/assignment/Assignee.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const addressName_1 = "testAddress1"
const addressName_2 = "testAddress2"
const address1_1= "Address 1_1"
const address1_2= "Address 1_2"
const address2_1= "Address 2_1"
const address2_2= "Address 2_2"
const address3_1= "Address 3_1"
const address3_2= "Address 3_2"
const address4_1= "Address 4_1"
const address4_2= "Address 4_2"
const city_1= "CityTest1"
const city_2= "CityTest2"
const state_1= "StateTest1"
const state_2= "StateTest2"
const postalCode_1= "03242"
const postalCode_2= "03222"
const country_1= "Ukraine"
const country_2= "United Kingdom"
const addAddressMsg = "The address has been added. Thank you."
const updateAddressMsg = "The address has been updated. Thank you."

xdescribe('Client Corporate structure page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Assignee Pet tab and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await AssigneePage.clickAssigneeTab();
        await AssigneePage.clickAddressTab();
        expect(await AssigneePage.getAssigneeLabelText()).toBe("Addresses");
    });
    it('Verify address form ', async () => {
        await AssigneePage.clickAddAddressBtn();
        await AssigneePage.setAddress(addressName_1,address1_1,address2_1,address3_1,address4_1,city_1,state_1,postalCode_1,country_1)
        await commonElements.clickSaveBtn();
        await AssigneePage.clickAddressEditBtnByName(addressName_1);
        expect(await AssigneePage.getAddressNameValue()).toBe(addressName_1);
        expect(await AssigneePage.getAddressValue(1)).toBe(address1_1);
        expect(await AssigneePage.getAddressValue(2)).toBe(address2_1);
        expect(await AssigneePage.getAddressValue(3)).toBe(address3_1);
        expect(await AssigneePage.getAddressValue(1)).toBe(address4_1);
        expect(await AssigneePage.getCityValue()).toBe(city_1);
        expect(await AssigneePage.getStateValue()).toBe(state_1);
        expect(await AssigneePage.getCountryValue()).toBe(country_1);
        await commonElements.clickCancelBtn();
    });
    it('Verify pet Edit form ', async () => {
        await AssigneePage.clickAddressEditBtnByName(addressName_1);
        await AssigneePage.setAddress(addressName_2,address1_2,address2_2,address3_2,address4_2,city_2,state_2,postalCode_2,country_2)
        await commonElements.clickCancelBtn();
        await AssigneePage.clickAddressEditBtnByName(addressName_1);
        expect(await AssigneePage.getAddressNameValue()).toBe(addressName_1);
        expect(await AssigneePage.getAddressValue(1)).toBe(address1_1);
        expect(await AssigneePage.getAddressValue(2)).toBe(address2_1);
        expect(await AssigneePage.getAddressValue(3)).toBe(address3_1);
        expect(await AssigneePage.getAddressValue(1)).toBe(address4_1);
        expect(await AssigneePage.getCityValue()).toBe(city_1);
        expect(await AssigneePage.getStateValue()).toBe(state_1);
        expect(await AssigneePage.getCountryValue()).toBe(country_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isPopupMsgDisplayed(updateAddressMsg)).toBe(true);
        await commonElements.waitPopupMsgForNotDisplayed(updateAddressMsg);
        await AssigneePage.clickAddressEditBtnByName(addressName_1);
        expect(await AssigneePage.getAddressNameValue()).toBe(addressName_1);
        expect(await AssigneePage.getAddressValue(1)).toBe(address1_1);
        expect(await AssigneePage.getAddressValue(2)).toBe(address2_1);
        expect(await AssigneePage.getAddressValue(3)).toBe(address3_1);
        expect(await AssigneePage.getAddressValue(1)).toBe(address4_1);
        expect(await AssigneePage.getCityValue()).toBe(city_1);
        expect(await AssigneePage.getStateValue()).toBe(state_1);
        expect(await AssigneePage.getCountryValue()).toBe(country_1);
        await commonElements.clickCancelBtn();
       
    });
});
