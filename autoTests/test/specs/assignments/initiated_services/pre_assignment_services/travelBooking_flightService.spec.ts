import commonElements from '../../../../helper/commonElements';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import travelBookingPage from '../../../../pageobjects/assignment/services/travelBooking.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const serviceName = "Travel booking"
const bookingServiceName = "Flight"
const bookingPurpose_1 = "Home search"
const bookingPurpose_2 = "Other"
const specifics = "testSpecifics"
const managedChbState_1 = true
const managedChbState_2 = false
const payingPerson_1 = "K2"
const payingPerson_2 = "Test Subsidiary (Client)"
const bookingFee_1 = "500"
const bookingFee_2 = "330"
const departureAirport_1 = "Arvaikheer"
const departureAirport_2 = "Wheeler"
const departureDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(7)
const departureDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(11)
const airline_1 = "GTB23"
const airline_2 = "FR654"
const flight_1 = "422"
const flight_2 = "889"
const arrivalAirportName_1 = "Heathrow"
const arrivalAirportName_2 = "Luton"
const arrivalDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(8)
const arrivalDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(12)
const notes_1 = "testNotes_1"
const notes_2 = "testNotes_2"

describe('Travel booking Service, flight service test', () => {

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
    it('Verify Flight booking service form ', async () => {
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        await travelBookingPage.setFlightBookingsService(bookingPurpose_1,managedChbState_1,payingPerson_1,bookingFee_1,departureAirport_1,departureDate_1,airline_1,flight_1,arrivalAirportName_1,arrivalDate_1,notes_1);
        await commonElements.clickSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_1);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_1);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_1);
        expect(await travelBookingPage.getDepartureAirportLabelText()).toContain(departureAirport_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.getDepartureDateCalendarValue())).toBe(departureDate_1);
        expect(await travelBookingPage.getAirlineValue()).toBe(airline_1);
        expect(await travelBookingPage.getFlightValue()).toBe(flight_1);
        expect(await travelBookingPage.getArrivalAirportLabelText()).toContain(arrivalAirportName_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.getArrivalDateCalendarValue())).toBe(arrivalDate_1);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_1);
    })
    it('Verify Flight booking service form ', async () => {
        await travelBookingPage.setFlightBookingsService(bookingPurpose_2,managedChbState_2,payingPerson_2,bookingFee_2,departureAirport_2,departureDate_2,airline_2,flight_2,arrivalAirportName_2,arrivalDate_2,notes_2);
        await commonElements.setInputValue(specifics, travelBookingPage.specificsInput)
        await commonElements.refreshPage();
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_1);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_1);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_1);
        expect(await travelBookingPage.getDepartureAirportLabelText()).toContain(departureAirport_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.getDepartureDateCalendarValue())).toBe(departureDate_1);
        expect(await travelBookingPage.getAirlineValue()).toBe(airline_1);
        expect(await travelBookingPage.getFlightValue()).toBe(flight_1);
        expect(await travelBookingPage.getArrivalAirportLabelText()).toContain(arrivalAirportName_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.getArrivalDateCalendarValue())).toBe(arrivalDate_1);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_1);   
        await travelBookingPage.setFlightBookingsService(bookingPurpose_2,managedChbState_2,payingPerson_2,bookingFee_2,departureAirport_2,departureDate_2,airline_2,flight_2,arrivalAirportName_2,arrivalDate_2,notes_2);
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
        expect(await travelBookingPage.getDepartureAirportLabelText()).toContain(departureAirport_2);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.getDepartureDateCalendarValue())).toBe(departureDate_2);
        expect(await travelBookingPage.getAirlineValue()).toBe(airline_2);
        expect(await travelBookingPage.getFlightValue()).toBe(flight_2);
        expect(await travelBookingPage.getArrivalAirportLabelText()).toContain(arrivalAirportName_2);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.getArrivalDateCalendarValue())).toBe(arrivalDate_2);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_2);   
    })
});
