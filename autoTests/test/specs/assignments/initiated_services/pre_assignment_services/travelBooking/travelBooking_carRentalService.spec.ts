import commonElements from '../../../../../helper/commonElements';
import passSignIn from '../../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../../pageobjects/assignment/initiatedServices.page';
import travelBookingPage from '../../../../../pageobjects/assignment/services/travelBooking.page';
import assignmentsPage from '../../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../../pageobjects/clients/clients.page';
import Page from '../../../../../pageobjects/Page';

const serviceName = "Travel booking"
// const bookingServiceName = "Car Rental"
const bookingPurpose_1 = "Home search"
const bookingPurpose_2 = "Other"
const specifics = "testSpecifics"
const managedChbState_1 = true
const managedChbState_2 = false
const payingPerson_1 = "K2"
const payingPerson_2 = "Test Subsidiary (Client)"
const bookingFee_1 = "500"
const bookingFee_2 = "330"
const rentalCompany_1 = "testComp_1"
const rentalCompany_2 = "testComp_2"
const pickupLocation_1 = "pickUpLocation_1"
const pickupLocation_2 = "pickUpLocation_2"
const pickupDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(8)
const pickupDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(10)
const dropoffLocation_1 = "dropoffLocation_1"
const dropoffLocation_2 = "dropoffLocation_2"
const dropoffDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(9)
const dropoffDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(11)
const minimumSeats_1 = "4"
const minimumSeats_2 = "7"
const numChildSeats_1 = "2"
const numChildSeats_2 = "1"
const notes_1 = "testNotes_1"
const notes_2 = "testNotes_2"

describe('Travel booking Service Car rental test', () => {

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
    it('Verify CarRental booking service form ', async () => {
        // await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        await travelBookingPage.setCarRentalBookingsService(bookingPurpose_1, managedChbState_1, payingPerson_1, bookingFee_1, rentalCompany_1, pickupLocation_1, pickupDate_1, dropoffLocation_1, dropoffDate_1, minimumSeats_1, numChildSeats_1, notes_1);
        await commonElements.clickSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        // await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_1);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_1);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_1);
        expect(await travelBookingPage.rentalCompanyValue()).toBe(rentalCompany_1);
        expect(await travelBookingPage.pickupLocationCompanyValue()).toBe(pickupLocation_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.pickupDateValue())).toBe(pickupDate_1);
        expect(await travelBookingPage.dropoffLocationValue()).toBe(dropoffLocation_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.dropoffDateValue())).toBe(dropoffDate_1);
        expect(await travelBookingPage.minimumSeatsValue()).toBe(minimumSeats_1);
        expect(await travelBookingPage.numChildSeatsValue()).toBe(numChildSeats_1);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_1);
    })
    it('Verify Edit CarRental booking service form ', async () => {
        await travelBookingPage.setCarRentalBookingsService(bookingPurpose_2, managedChbState_2, payingPerson_2, bookingFee_2, rentalCompany_2, pickupLocation_2, pickupDate_2, dropoffLocation_2, dropoffDate_2, minimumSeats_2, numChildSeats_2, notes_2);
        await commonElements.setInputValue(specifics, travelBookingPage.specificsInput)
        await commonElements.refreshPage();
        // await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_1);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_1);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_1);
        expect(await travelBookingPage.rentalCompanyValue()).toBe(rentalCompany_1);
        expect(await travelBookingPage.pickupLocationCompanyValue()).toBe(pickupLocation_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.pickupDateValue())).toBe(pickupDate_1);
        expect(await travelBookingPage.dropoffLocationValue()).toBe(dropoffLocation_1);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.dropoffDateValue())).toBe(dropoffDate_1);
        expect(await travelBookingPage.minimumSeatsValue()).toBe(minimumSeats_1);
        expect(await travelBookingPage.numChildSeatsValue()).toBe(numChildSeats_1);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_1);
        await travelBookingPage.setCarRentalBookingsService(bookingPurpose_2, managedChbState_2, payingPerson_2, bookingFee_2, rentalCompany_2, pickupLocation_2, pickupDate_2, dropoffLocation_2, dropoffDate_2, minimumSeats_2, numChildSeats_2, notes_2);
        await commonElements.setInputValue(specifics, travelBookingPage.specificsInput)
        await commonElements.clickSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        // await travelBookingPage.clickBookingServiceToggleByName(bookingServiceName);
        expect(await travelBookingPage.getBookingPurposeValue()).toBe(bookingPurpose_2);
        expect(await travelBookingPage.getSpecificsInput()).toBe(specifics);
        expect(await travelBookingPage.getManagedChbState()).toBe(managedChbState_2);
        expect(await commonElements.getRadioBtnState(payingPerson_2)).toBe(true);
        expect(await commonElements.getRadioBtnState(payingPerson_1)).toBe(false);
        expect(await travelBookingPage.getBookingFeeValue()).toBe(bookingFee_2);
        expect(await travelBookingPage.rentalCompanyValue()).toBe(rentalCompany_2);
        expect(await travelBookingPage.pickupLocationCompanyValue()).toBe(pickupLocation_2);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.pickupDateValue())).toBe(pickupDate_2);
        expect(await travelBookingPage.dropoffLocationValue()).toBe(dropoffLocation_2);
        expect(await commonElements.createStandartDateForm(await travelBookingPage.dropoffDateValue())).toBe(dropoffDate_2);
        expect(await travelBookingPage.minimumSeatsValue()).toBe(minimumSeats_2);
        expect(await travelBookingPage.numChildSeatsValue()).toBe(numChildSeats_2);
        expect(await travelBookingPage.getNotesValue()).toBe(notes_2);
    })
    it('Verify Pickup and Drop off require field error msg ', async () => {
        await commonElements.setDateValue(travelBookingPage.pickupCalendar, "");
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await commonElements.isErrorInputMsgDispalyed()).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.createStandartDateForm(await travelBookingPage.pickupDateValue())).toBe(pickupDate_2);
        await commonElements.setDateValue(travelBookingPage.dropoffCalendar, "");
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await commonElements.isErrorInputMsgDispalyed()).toBe(true);
        await commonElements.refreshPage();
        expect(await commonElements.createStandartDateForm(await travelBookingPage.dropoffDateValue())).toBe(dropoffDate_2);
    })
    xit('Verify Minimum seats field (min and max value)', async () => {
        await commonElements.setInputValue("13", travelBookingPage.minimumSeatsInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await commonElements.isInvalidValueErrorMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await travelBookingPage.minimumSeatsValue()).toBe(minimumSeats_2);
        await commonElements.setInputValue("-1", travelBookingPage.minimumSeatsInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await commonElements.isInvalidValueErrorMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await travelBookingPage.minimumSeatsValue()).toBe(minimumSeats_2);
        await commonElements.setInputValue("0", travelBookingPage.minimumSeatsInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await commonElements.isInvalidValueErrorMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await travelBookingPage.minimumSeatsValue()).toBe(minimumSeats_2);
        await Page.clearValue(travelBookingPage.minimumSeatsInput)
        await travelBookingPage.clearMinimumSeatsInput();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await commonElements.isLessThenMinValueErrorMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await travelBookingPage.minimumSeatsValue()).toBe(minimumSeats_2);
    })
    it('Verify numChildSeats field (min and max value)', async () => {
        await commonElements.setInputValue("13", travelBookingPage.numChildSeatsInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await commonElements.isInvalidValueErrorMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await travelBookingPage.numChildSeatsValue()).toBe(numChildSeats_2);
        await commonElements.setInputValue("-1", travelBookingPage.numChildSeatsInput);
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await commonElements.isInvalidValueErrorMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await travelBookingPage.numChildSeatsValue()).toBe(numChildSeats_2);
        await commonElements.setInputValue("0", travelBookingPage.numChildSeatsInput);
        await commonElements.clickSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await travelBookingPage.numChildSeatsValue()).toBe("0");
    })


});
