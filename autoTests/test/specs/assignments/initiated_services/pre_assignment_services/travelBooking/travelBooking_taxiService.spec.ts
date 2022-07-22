import commonElements from '../../../../../helper/commonElements';
import passSignIn from '../../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../../pageobjects/assignment/initiatedServices.page';
import travelBookingPage from '../../../../../pageobjects/assignment/services/travelBooking.page';
import assignmentsPage from '../../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../../pageobjects/clients/clients.page';

const serviceName = "Travel booking"
const bookingServiceName = "Taxi"
const bookingPurpose_1 = "Home search"
const bookingPurpose_2 = "Other"
const specifics = "testSpecifics"
const managedChbState_1 = true
const managedChbState_2 = false
const payingPerson_1 = "K2"
const payingPerson_2 = "Test Subsidiary (Client)"
const bookingFee_1 = "500"
const bookingFee_2 = "330"
const collectionPoint_1 = "TestPoint"
const collectionPoint_2 = "TestPoint_2"
const collectionDate_1 = commonElements.getCurrentDateNo0Format()
const collectionDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(8)
const passengers_1 = "2"
const passengers_2 = "4"
const carSeats_1 = "4"
const carSeats_2 = "6"
const bags_1 = "5"
const bags_2 = "4"
const notes_1 = "testNotes_1"
const notes_2 = "testNotes_2"


describe('Travel booking Service taxi Serivce test', () => {

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
    it('Verify Taxi booking service form ', async () => {
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        await travelBookingPage.setTaxiBookingsService(bookingPurpose_1,managedChbState_1,payingPerson_1,bookingFee_1,collectionPoint_1,collectionDate_1,passengers_1,carSeats_1,bags_1,notes_1);
        await commonElements.clickSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_1);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_1);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_1);
        expect(await travelBookingPage.getCollectionPointValue()).toBe(collectionPoint_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.getCollectionDateCalendarValue())).toBe(collectionDate_1);
        expect(await travelBookingPage.getPassengersInputValue()).toBe(passengers_1);
        expect(await travelBookingPage.getCarSeatsValue()).toBe(carSeats_1);
        expect(await travelBookingPage.getBagsValue()).toBe(bags_1);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_1);
    })
    it('Verify Edit Taxi booking service form ', async () => {
        await travelBookingPage.setTaxiBookingsService(bookingPurpose_2,managedChbState_2,payingPerson_2,bookingFee_2,collectionPoint_2,collectionDate_2,passengers_2,carSeats_2,bags_2,notes_2);
        await commonElements.setInputValue(specifics, travelBookingPage.specificsInput);
        await commonElements.refreshPage();
        await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_1);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_1);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_1);
        expect(await travelBookingPage.getCollectionPointValue()).toBe(collectionPoint_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.getCollectionDateCalendarValue())).toBe(collectionDate_1);
        expect(await travelBookingPage.getPassengersInputValue()).toBe(passengers_1);
        expect(await travelBookingPage.getCarSeatsValue()).toBe(carSeats_1);
        expect(await travelBookingPage.getBagsValue()).toBe(bags_1);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_1);
        await travelBookingPage.setTaxiBookingsService(bookingPurpose_2,managedChbState_2,payingPerson_2,bookingFee_2,collectionPoint_2,collectionDate_2,passengers_2,carSeats_2,bags_2,notes_2);
        await commonElements.setInputValue(specifics, travelBookingPage.specificsInput);
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
        expect(await travelBookingPage.getCollectionPointValue()).toBe(collectionPoint_2);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.getCollectionDateCalendarValue())).toBe(collectionDate_2);
        expect(await travelBookingPage.getPassengersInputValue()).toBe(passengers_2);
        expect(await travelBookingPage.getCarSeatsValue()).toBe(carSeats_2);
        expect(await travelBookingPage.getBagsValue()).toBe(bags_2);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_2);
    })
});
