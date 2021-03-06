import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assigneePage from '../../../pageobjects/assignment/assignee.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

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
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickAddressTab();
        expect(await assigneePage.getAssigneeLabelText()).toBe("Addresses");
    });
    it('Verify address form ', async () => {
        await assigneePage.clickAddAddressBtn();
        await assigneePage.setAddress(addressName_1,address1_1,address2_1,address3_1,address4_1,city_1,state_1,postalCode_1,country_1)
        await commonElements.clickSaveBtn();
        await assigneePage.clickAddressEditBtnByName(addressName_1);
        expect(await assigneePage.getAddressNameValue()).toBe(addressName_1);
        expect(await assigneePage.getAddressValue(1)).toBe(address1_1);
        expect(await assigneePage.getAddressValue(2)).toBe(address2_1);
        expect(await assigneePage.getAddressValue(3)).toBe(address3_1);
        expect(await assigneePage.getAddressValue(1)).toBe(address4_1);
        expect(await assigneePage.getCityValue()).toBe(city_1);
        expect(await assigneePage.getStateValue()).toBe(state_1);
        expect(await assigneePage.getCountryValue()).toBe(country_1);
        await commonElements.clickCancelBtn();
    });
    it('Verify pet Edit form ', async () => {
        await assigneePage.clickAddressEditBtnByName(addressName_1);
        await assigneePage.setAddress(addressName_2,address1_2,address2_2,address3_2,address4_2,city_2,state_2,postalCode_2,country_2)
        await commonElements.clickCancelBtn();
        await assigneePage.clickAddressEditBtnByName(addressName_1);
        expect(await assigneePage.getAddressNameValue()).toBe(addressName_1);
        expect(await assigneePage.getAddressValue(1)).toBe(address1_1);
        expect(await assigneePage.getAddressValue(2)).toBe(address2_1);
        expect(await assigneePage.getAddressValue(3)).toBe(address3_1);
        expect(await assigneePage.getAddressValue(1)).toBe(address4_1);
        expect(await assigneePage.getCityValue()).toBe(city_1);
        expect(await assigneePage.getStateValue()).toBe(state_1);
        expect(await assigneePage.getCountryValue()).toBe(country_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(updateAddressMsg)).toBe(true);
        await assigneePage.clickAddressEditBtnByName(addressName_1);
        expect(await assigneePage.getAddressNameValue()).toBe(addressName_1);
        expect(await assigneePage.getAddressValue(1)).toBe(address1_1);
        expect(await assigneePage.getAddressValue(2)).toBe(address2_1);
        expect(await assigneePage.getAddressValue(3)).toBe(address3_1);
        expect(await assigneePage.getAddressValue(1)).toBe(address4_1);
        expect(await assigneePage.getCityValue()).toBe(city_1);
        expect(await assigneePage.getStateValue()).toBe(state_1);
        expect(await assigneePage.getCountryValue()).toBe(country_1);
        await commonElements.clickCancelBtn();
       
    });
});
