import commonElements from '../../../../helper/commonElements';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import travelBookingPage from '../../../../pageobjects/assignment/services/travelBooking.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const serviceName = "Travel booking"
const bookingServiceName = "Hotel"
const bookingPurpose_1 = "Home search"
const bookingPurpose_2 = "Other"
const specifics = "testSpecifics"
const managedChbState_1 = true
const managedChbState_2 = false
const payingPerson_1 = "K2"
const payingPerson_2 = "Test Subsidiary (Client)"
const bookingFee_1 = "500"
const bookingFee_2 = "330"
const hotelName_1 = "TestHotel_1"
const hotelName_2 = "TestHotel_2"
const checkInDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(3)
const checkInDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const dateCheckout_1 = commonElements.getCurrentDatePlusDaysNo0Format(4)
const dateCheckout_2 = commonElements.getCurrentDatePlusDaysNo0Format(7)
const guests_1 = "2"
const guests_2 = "3"
const preferences_1 = "TestPreferences_1"
const preferences_2 = "TestPreferences_2"
const notes_1 = "testNotes_1"
const notes_2 = "testNotes_2"
const address_1 = ["testStreet11", "testStreet21", "testStreet31", "testStreet41"]
const address_2 = ["testStreet12", "testStreet22", "testStreet32", "testStreet42"]
const city_1 = "TestCity1"
const city_2 = "TestCity2"
const stateCountry_1 = "TestState1"
const stateCountry_2 = "TestState2"
const postalCode_1 = "012345"
const postalCode_2 = "654321"

describe('Travel booking Service hotel service test', () => {

    before(async () => {
        await passSignIn.signIn();
    });
    it('Go to Services / Travel booking page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / Travel booking");
    });
    it('Verify Hotel booking service form ', async () => {
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        await travelBookingPage.setHotelBookingsService(bookingPurpose_1, managedChbState_1, payingPerson_1, bookingFee_1, hotelName_1, checkInDate_1, dateCheckout_1, guests_1, preferences_1, notes_1);
        await travelBookingPage.setServiceAddress(address_1, city_1, stateCountry_1, postalCode_1);
        await commonElements.clickSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_1);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_1);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_1);
        expect(await travelBookingPage.hotelNameValue()).toBe(hotelName_1);
        expect(await travelBookingPage.checkInDateValue()).toBe(checkInDate_1);
        expect(await travelBookingPage.checkoutDateValue()).toBe(dateCheckout_1);
        expect(await travelBookingPage.guestsValue()).toBe(guests_1);
        expect(await travelBookingPage.preferencesValue()).toBe(preferences_1);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_1);
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getCountyStateValue()).toBe(stateCountry_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);

    })
    it('Verify Edit Hotel booking service form ', async () => {
        await travelBookingPage.setHotelBookingsService(bookingPurpose_2, managedChbState_2, payingPerson_2, bookingFee_2, hotelName_2, checkInDate_2, dateCheckout_2, guests_2, preferences_2, notes_2);
        await travelBookingPage.setServiceAddress(address_2, city_2, stateCountry_2, postalCode_2);
        await commonElements.setInputValue(specifics, travelBookingPage.specificsInput)
        await commonElements.refreshPage();
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_1);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_1);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_1);
        expect(await travelBookingPage.hotelNameValue()).toBe(hotelName_1);
        expect(await travelBookingPage.checkInDateValue()).toBe(checkInDate_1);
        expect(await travelBookingPage.checkoutDateValue()).toBe(dateCheckout_1);
        expect(await travelBookingPage.guestsValue()).toBe(guests_1);
        expect(await travelBookingPage.preferencesValue()).toBe(preferences_1);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_1);
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getCountyStateValue()).toBe(stateCountry_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
        await travelBookingPage.setHotelBookingsService(bookingPurpose_2, managedChbState_2, payingPerson_2, bookingFee_2, hotelName_2, checkInDate_2, dateCheckout_2, guests_2, preferences_2, notes_2);
        await travelBookingPage.setServiceAddress(address_2, city_2, stateCountry_2, postalCode_2);
        await commonElements.setInputValue(specifics, travelBookingPage.specificsInput)
        await commonElements.clickSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_2);
        expect(await travelBookingPage.getSpecificsInput()).toBe(specifics);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_2);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_2);
        expect(await travelBookingPage.hotelNameValue()).toBe(hotelName_2);
        expect(await travelBookingPage.checkInDateValue()).toBe(checkInDate_2);
        expect(await travelBookingPage.checkoutDateValue()).toBe(dateCheckout_2);
        expect(await travelBookingPage.guestsValue()).toBe(guests_2);
        expect(await travelBookingPage.preferencesValue()).toBe(preferences_2);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_2);
        expect(await commonElements.getAddressLine1Value()).toBe(address_2[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_2[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_2[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_2[3]);
        expect(await commonElements.getCityValue()).toBe(city_2);
        expect(await commonElements.getCountyStateValue()).toBe(stateCountry_2);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_2);
    })
});
