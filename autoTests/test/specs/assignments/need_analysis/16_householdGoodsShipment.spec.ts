import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import needAnalysisPage from '../../../pageobjects/assignment/needAnalysis.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const needAnalysisSection_16 = "Household goods shipment"
const stateYes = "Yes"
const stateNo = "No"
const address_1 = "testStreet1"
const address_2 = "testStreet2"
const city_1 = "TestCity1"
const city_2 = "TestCity1"
const stateCountry_1 = "TestState1"
const stateCountry_2 = "TestState2"
const postalCode_1 = "012345"
const postalCode_2 = "654321"
const country_1 = "United Kingdom"
const country_2 = "United States"
const propertyType_1 = "Flat/apartment"
const propertyType_2 = "Other"
const apartmentFloor_1 = "2"
const apartmentFloor_2 = ""
const numOfBed_1 = "3"
const numOfBed_2 = "4"
const preMoveDates_1 = "11.10.2022"
const preMoveDates_2 = "19.11.2022"
const packDate_1 = "12.11.2022"
const packDate_2 = "18.12.2022"
const arrivalDate_1 = "10.10.2022"
const arrivalDate_2 = "11.11.2022"
const deliveryDate_1 ="10.10.2022"
const deliveryDate_2 ="15.11.2022"
const highItemsDescribe_1 = "Fridge"
const highItemsDescribe_2 = "TV"
const transportDescribe_1 = "Car"
const transportDescribe_2 = "Bicycle"
const unusualItemsDescribe_1 = "testItem1"
const unusualItemsDescribe_2 = "testItem2"
const hhgQuestionLabel = ["Home address", "Home address country", "Property type", "Apartment floor", "Number of bedrooms", "Preferred pre-move survey dates", "Preferred pack dates", "Do you have a delivery address","Delivery address","Delivery address country","Date of arrival to delivery","Preferred delivery dates","Do you have any high value","Are you transporting a vehicle","Do you have any large or unusual","Do you have goods","Have you moved internationally"]
const needAnalysisUpdMsg = "Household goods shipment details have been updated. Thank you."

xdescribe('Client Corporate structure page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });
    it('Go to need analysis tab and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await needAnalysisPage.clickNeedAnalysisTab();
        expect(await needAnalysisPage.getNeedAnalysisLabelText()).toBe("Needs analysis");
    });
    it('Verify Household goods shipment section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_16);
        await needAnalysisPage.clickEditAnalysisBtn();
        await commonElements.setInputValue(address_1, needAnalysisPage.getAddressInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(city_1, needAnalysisPage.getCityInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(stateCountry_1, needAnalysisPage.getStateInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(postalCode_1, needAnalysisPage.getPostalCodeInput(hhgQuestionLabel[0]));
        await needAnalysisPage.setNeedAnalysisSelectByLabel(country_1, hhgQuestionLabel[1]);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(propertyType_1, hhgQuestionLabel[2]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(apartmentFloor_1, hhgQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfBed_1, hhgQuestionLabel[4]);
        await needAnalysisPage.setNeedAnalysisDateByLabel(preMoveDates_1, hhgQuestionLabel[5])
        await needAnalysisPage.setNeedAnalysisDateByLabel(packDate_1, hhgQuestionLabel[6])
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateYes, hhgQuestionLabel[7]);
        await commonElements.setInputValue(address_2, needAnalysisPage.getAddressInput(hhgQuestionLabel[8]));
        await commonElements.setInputValue(city_2, needAnalysisPage.getCityInput(hhgQuestionLabel[8]));
        await commonElements.setInputValue(stateCountry_2, needAnalysisPage.getStateInput(hhgQuestionLabel[8]));
        await commonElements.setInputValue(postalCode_2, needAnalysisPage.getPostalCodeInput(hhgQuestionLabel[8]));
        await needAnalysisPage.setNeedAnalysisSelectByLabel(country_2, hhgQuestionLabel[9]);
        await needAnalysisPage.setNeedAnalysisDateByLabel(arrivalDate_1, hhgQuestionLabel[10])
        await needAnalysisPage.setNeedAnalysisDateByLabel(deliveryDate_1, hhgQuestionLabel[11])
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateYes, hhgQuestionLabel[12]);
        await commonElements.setInputValue(highItemsDescribe_1, needAnalysisPage.hightItemsDescribeInput);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateYes, hhgQuestionLabel[13]);
        await commonElements.setInputValue(transportDescribe_1, needAnalysisPage.transportDescribeInput);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateYes, hhgQuestionLabel[14]);
        await commonElements.setInputValue(unusualItemsDescribe_1, needAnalysisPage.unusualItemsDescribeInput);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateYes, hhgQuestionLabel[15]);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateYes, hhgQuestionLabel[16]);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[0])).toContain(`${address_1}\n${city_1}\n${stateCountry_1}\n${postalCode_1}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[1])).toBe(country_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[2])).toBe(propertyType_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[3])).toBe(apartmentFloor_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[4])).toBe(numOfBed_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[5])).toBe(preMoveDates_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[6])).toBe(packDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[7])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[8])).toContain(`${address_2}\n${city_2}\n${stateCountry_2}\n${postalCode_2}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[9])).toBe(country_2);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[10])).toBe(arrivalDate_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[11])).toBe(deliveryDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[12])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[13])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[14])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[15])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[16])).toBe(stateYes);
    });

    it('Verify edit Household goods shipment section', async () => {
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_16);
        await needAnalysisPage.clickEditAnalysisBtn();
        await commonElements.setInputValue(address_2, needAnalysisPage.getAddressInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(city_2, needAnalysisPage.getCityInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(stateCountry_2, needAnalysisPage.getStateInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(postalCode_2, needAnalysisPage.getPostalCodeInput(hhgQuestionLabel[0]));
        await needAnalysisPage.setNeedAnalysisSelectByLabel(country_2, hhgQuestionLabel[1]);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(propertyType_2, hhgQuestionLabel[2]);
        // await needAnalysisPage.setNeedAnalysisInputByLabel(apartmentFloor_1, hhgQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfBed_2, hhgQuestionLabel[4]);
        await needAnalysisPage.setNeedAnalysisDateByLabel(preMoveDates_2, hhgQuestionLabel[5])
        await needAnalysisPage.setNeedAnalysisDateByLabel(packDate_2, hhgQuestionLabel[6])
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateYes, hhgQuestionLabel[7]);
        await commonElements.setInputValue(address_1, needAnalysisPage.getAddressInput(hhgQuestionLabel[8]));
        await commonElements.setInputValue(city_1, needAnalysisPage.getCityInput(hhgQuestionLabel[8]));
        await commonElements.setInputValue(stateCountry_1, needAnalysisPage.getStateInput(hhgQuestionLabel[8]));
        await commonElements.setInputValue(postalCode_1, needAnalysisPage.getPostalCodeInput(hhgQuestionLabel[8]));
        await needAnalysisPage.setNeedAnalysisSelectByLabel(country_1, hhgQuestionLabel[9]);
        await needAnalysisPage.setNeedAnalysisDateByLabel(arrivalDate_2, hhgQuestionLabel[10])
        await needAnalysisPage.setNeedAnalysisDateByLabel(deliveryDate_2, hhgQuestionLabel[11])
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[12]);
        // await commonElements.setInputValue(highItemsDescribe_1, needAnalysisPage.hightItemsDescribeInput);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[13]);
        // await commonElements.setInputValue(transportDescribe_1, needAnalysisPage.transportDescribeInput);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[14]);
        // await commonElements.setInputValue(unusualItemsDescribe_1, needAnalysisPage.unusualItemsDescribeInput);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[15]);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[16]);
        await commonElements.clickDialogWindowCancelBtn();
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[0])).toContain(`${address_1}\n${city_1}\n${stateCountry_1}\n${postalCode_1}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[1])).toBe(country_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[2])).toBe(propertyType_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[3])).toBe(apartmentFloor_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[4])).toBe(numOfBed_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[5])).toBe(preMoveDates_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[6])).toBe(packDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[7])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[8])).toContain(`${address_2}\n${city_2}\n${stateCountry_2}\n${postalCode_2}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[9])).toBe(country_2);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[10])).toBe(arrivalDate_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[11])).toBe(deliveryDate_1);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[12])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[13])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[14])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[15])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[16])).toBe(stateYes);
        await needAnalysisPage.clickAnalysisQuestionSection(needAnalysisSection_16);
        await needAnalysisPage.clickEditAnalysisBtn();
        await commonElements.setInputValue(address_2, needAnalysisPage.getAddressInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(city_2, needAnalysisPage.getCityInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(stateCountry_2, needAnalysisPage.getStateInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(postalCode_2, needAnalysisPage.getPostalCodeInput(hhgQuestionLabel[0]));
        await needAnalysisPage.setNeedAnalysisSelectByLabel(country_2, hhgQuestionLabel[1]);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(propertyType_2, hhgQuestionLabel[2]);
        // await needAnalysisPage.setNeedAnalysisInputByLabel(apartmentFloor_1, hhgQuestionLabel[3]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(numOfBed_2, hhgQuestionLabel[4]);
        await needAnalysisPage.setNeedAnalysisDateByLabel(preMoveDates_2, hhgQuestionLabel[5])
        await needAnalysisPage.setNeedAnalysisDateByLabel(packDate_2, hhgQuestionLabel[6])
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateYes, hhgQuestionLabel[7]);
        await commonElements.setInputValue(address_1, needAnalysisPage.getAddressInput(hhgQuestionLabel[8]));
        await commonElements.setInputValue(city_1, needAnalysisPage.getCityInput(hhgQuestionLabel[8]));
        await commonElements.setInputValue(stateCountry_1, needAnalysisPage.getStateInput(hhgQuestionLabel[8]));
        await commonElements.setInputValue(postalCode_1, needAnalysisPage.getPostalCodeInput(hhgQuestionLabel[8]));
        await needAnalysisPage.setNeedAnalysisSelectByLabel(country_1, hhgQuestionLabel[9]);
        await needAnalysisPage.setNeedAnalysisDateByLabel(arrivalDate_2, hhgQuestionLabel[10])
        await needAnalysisPage.setNeedAnalysisDateByLabel(deliveryDate_2, hhgQuestionLabel[11])
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[12]);
        // await commonElements.setInputValue(highItemsDescribe_1, needAnalysisPage.hightItemsDescribeInput);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[13]);
        // await commonElements.setInputValue(transportDescribe_1, needAnalysisPage.transportDescribeInput);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[14]);
        // await commonElements.setInputValue(unusualItemsDescribe_1, needAnalysisPage.unusualItemsDescribeInput);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[15]);
        await needAnalysisPage.clickNeedAnalysisRadioBtnByLabel(stateNo, hhgQuestionLabel[16]);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(needAnalysisUpdMsg)).toBe(true);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[0])).toContain(`${address_2}\n${city_2}\n${stateCountry_2}\n${postalCode_2}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[1])).toBe(country_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[2])).toBe(propertyType_2);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[3])).toBe(apartmentFloor_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[4])).toBe(numOfBed_2);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[5])).toBe(preMoveDates_2);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[6])).toBe(packDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[7])).toBe(stateYes);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[8])).toContain(`${address_1}\n${city_1}\n${stateCountry_1}\n${postalCode_1}`);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[9])).toBe(country_1);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[10])).toBe(arrivalDate_2);
        // expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[11])).toBe(deliveryDate_2);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[12])).toBe(stateNo);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[13])).toBe(stateNo);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[14])).toBe(stateNo);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[15])).toBe(stateNo);
        expect(await needAnalysisPage.getAnalysisAnswerTextByLabel(hhgQuestionLabel[16])).toBe(stateNo);
    });
});


