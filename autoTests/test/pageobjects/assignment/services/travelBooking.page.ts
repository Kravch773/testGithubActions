
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';
import initiatedServicesPage from '../initiatedServices.page';

class travelBookingPage {

    public get bookingPurposeDD(): string {
        return '//label[text()=" Purpose "]/ancestor::field-template//select'
    }
    public get specificsInput(): string {
        return '//label[text()=" Specifics "]/ancestor::field-template//input'
    }
    public get managedChb(): string {
        return '//label[text()=" Managed by K2 "]/ancestor::field-template//input'
    }
    public get bookingFeeInput(): string {
        return '//label[text()=" K2 booking fee "]/ancestor::field-template//input'
    }
    public get collectionPointInput(): string {
        return '//label[text()=" Collection point "]/ancestor::field-template//input'
    }
    public get collectionDateCalendar(): string {
        return '//label[text()=" Date "]/ancestor::field-template//input'
    }
    public get passengersInput(): string {
        return '//label[text()=" Passengers "]/ancestor::field-template//input'
    }
    public get carSeatsInput(): string {
        return '//label[text()=" Car seats "]/ancestor::field-template//input'
    }
    public get bagsInput(): string {
        return '//label[text()=" Bags "]/ancestor::field-template//input'
    }
    public get notesInput(): string {
        return '//label[text()=" Notes "]/ancestor::field-template//textarea'
    }
    public get departureDetailsAirport(): string {
        return '//h3[text()="Departure details"]/following::div[1]//input[@placeholder="Search airport"]'
    }
    public get departureAirportLabel(): string {
        return '//h3[text()="Departure details"]/following::div[1]//airport-ingot//div[@class="name"]'
    }
    public get arrivalDetailsAirport(): string {
        return '//h3[text()="Arrival details"]/following::div[1]//input[@placeholder="Search airport"]'
    }
    public get arrivalAirportLabel(): string {
        return '//h3[text()="Arrival details"]/following::div[1]//airport-ingot//div[@class="name"]'
    }
    public get departureDateCalendar(): string {
        return '#departureDatetime'
    }
    public get arrivalDateCalendar(): string {
        return '#arrivalDatetime'
    }
    public get airlineInput(): string {
        return '//label[text()=" Airline "]/ancestor::field-template//input'
    }
    public get flightInput(): string {
        return '//label[text()=" Flight # "]/ancestor::field-template//input'
    }
    public get rentalCompanyInput(): string {
        return '//label[text()=" Rental company "]/ancestor::field-template//input'
    }
    public get pickupLocationInput(): string {
        return '#pickupLocation'
    }
    public get pickupCalendar(): string {
        return '#pickupDate'
    }
    public get dropoffLocationInput(): string {
        return '#dropoffLocation'
    }
    public get dropoffCalendar(): string {
        return '#dropoffDate'
    }
    public get minimumSeatsInput(): string {
        return '//label[text()=" Minimum seats "]/ancestor::field-template//input'
    }
    public get numChildSeatsInput(): string {
        return '//label[text()=" Child safety seats "]/ancestor::field-template//input'
    }
    public get budgetInput(): string {
        return '//label[text()=" Budget "]/ancestor::field-template//input'
    }
    public get hotelNameInput(): string {
        return '//label[text()=" Hotel name "]/ancestor::field-template//input'
    }
    public get checkInCalendar(): string {
        return '//label[text()=" Check-in "]/ancestor::field-template//input'
    }
    public get guestsInput(): string {
        return '//label[text()=" Guests "]/ancestor::field-template//input'
    }
    public get preferencesInput(): string {
        return '//label[text()=" Preferences "]/ancestor::field-template//textarea'
    }
    public get dateCheckout():string{
        return '#dateCheckout'
    }
    public getbookingServiceToggleByName(bookingServiceName): string {
        return `//h2[contains(text(),"(${bookingServiceName})")]/ancestor::service-collection-view//a[@class="toggle pull-right"]`
    }
    public async clickBookingServiceToggleByName(bookingServiceName): Promise<void> {
        await Page.click(this.getbookingServiceToggleByName(bookingServiceName));
    }
    public async setTaxiBookingsService(bookingPurpose, managedChbState, payingPerson, bookingFee, collectionPoint, collectionDate, passengers, carSeats, bags, notes): Promise<void> {
        await commonElements.setDropDownValue(bookingPurpose, this.bookingPurposeDD);
        await commonElements.setChb(this.managedChb, managedChbState);
        await commonElements.setRbtByLabel(payingPerson);
        await commonElements.setInputValue(bookingFee, this.bookingFeeInput);
        await commonElements.setInputValue(collectionPoint, this.collectionPointInput);
        await commonElements.setDateValue(this.collectionDateCalendar, collectionDate);
        await commonElements.setInputValue(passengers, this.passengersInput);
        await commonElements.setInputValue(carSeats, this.carSeatsInput);
        await commonElements.setInputValue(bags, this.bagsInput);
        await commonElements.setInputValue(notes, this.notesInput);
    }
    public async getBookingPurposeValue(): Promise<string> {
        return await commonElements.getDropDownValueText(this.bookingPurposeDD);
    }
    public async getSpecificsInput():Promise<string>{
        return await Page.getElementValue(this.specificsInput);
    }
    public async getManagedChbState(): Promise<boolean> {
        return await Page.isElementSelected(this.managedChb);
    }
    public async getBookingFeeValue(): Promise<string> {
        return await Page.getElementValue(this.bookingFeeInput);
    }
    public async getCollectionPointValue(): Promise<string> {
        return await Page.getElementValue(this.collectionPointInput);
    }
    public async getCollectionDateCalendarValue(): Promise<string> {
        return await Page.getElementValue(this.collectionDateCalendar);
    }
    public async getPassengersInputValue(): Promise<string> {
        return await Page.getElementValue(this.passengersInput);
    }
    public async getCarSeatsValue(): Promise<string> {
        return await Page.getElementValue(this.carSeatsInput);
    }
    public async getBagsValue(): Promise<string> {
        return await Page.getElementValue(this.bagsInput);
    }
    public async getNotesValue(): Promise<string> {
        return await Page.getElementValue(this.notesInput);
    }
    public async setFlightBookingsService(bookingPurpose, managedChbState, payingPerson, bookingFee, departureAirport, departureDate, airline, flight, arrivalAirportName, arrivalDate, notes): Promise<void> {
        await commonElements.setDropDownValue(bookingPurpose, this.bookingPurposeDD);
        await commonElements.setChb(this.managedChb, managedChbState);
        await commonElements.setRbtByLabel(payingPerson);
        await commonElements.setInputValue(bookingFee, this.bookingFeeInput);
        await commonElements.setAirportInput(departureAirport, this.departureDetailsAirport)
        await commonElements.setDateValue(this.departureDateCalendar, departureDate);
        await commonElements.setInputValue(airline, this.airlineInput);
        await commonElements.setInputValue(flight, this.flightInput);
        await commonElements.setAirportInput(arrivalAirportName, this.arrivalDetailsAirport)
        await commonElements.setDateValue(this.arrivalDateCalendar, arrivalDate);
        await commonElements.setInputValue(notes, this.notesInput);
    }
    public async getArrivalAirportLabelText(): Promise<string> {
        return await Page.getElementText(this.arrivalAirportLabel);
    }
    public async getDepartureAirportLabelText(): Promise<string> {
        return await Page.getElementText(this.departureAirportLabel);
    }
    public async getArrivalDateCalendarValue(): Promise<string> {
        return await Page.getElementValue(this.arrivalDateCalendar);
    }
    public async getDepartureDateCalendarValue(): Promise<string> {
        return await Page.getElementValue(this.departureDateCalendar);
    }
    public async getAirlineValue(): Promise<string> {
        return await Page.getElementValue(this.airlineInput);
    }
    public async getFlightValue(): Promise<string> {
        return await Page.getElementValue(this.flightInput);
    }
    public async setCarRentalBookingsService(bookingPurpose, managedChbState, payingPerson, bookingFee, rentalCompany, pickupLocation, pickupDate, dropoffLocation, dropoffDate, minimumSeats, numChildSeats, notes): Promise<void> {
        await commonElements.setDropDownValue(bookingPurpose, this.bookingPurposeDD);
        await commonElements.setChb(this.managedChb, managedChbState);
        await commonElements.setRbtByLabel(payingPerson);
        await commonElements.setInputValue(bookingFee, this.bookingFeeInput);
        await commonElements.setInputValue(rentalCompany, this.rentalCompanyInput);
        await commonElements.setInputValue(pickupLocation, this.pickupLocationInput);
        await commonElements.setDateValue(this.pickupCalendar, pickupDate);
        await commonElements.setInputValue(dropoffLocation, this.dropoffLocationInput);
        await commonElements.setDateValue(this.dropoffCalendar, dropoffDate);
        await commonElements.setInputValue(minimumSeats, this.minimumSeatsInput);
        await commonElements.setInputValue(numChildSeats, this.numChildSeatsInput);
        await commonElements.setInputValue(notes, this.notesInput);
    }
    public async rentalCompanyValue():Promise<string>{
        return await Page.getElementValue(this.rentalCompanyInput);
    }
    public async pickupLocationCompanyValue():Promise<string>{
        return await Page.getElementValue(this.pickupLocationInput);
    }
    public async pickupDateValue():Promise<string>{
        return await Page.getElementValue(this.pickupCalendar);
    }
    public async dropoffLocationValue():Promise<string>{
        return await Page.getElementValue(this.dropoffLocationInput);
    }
    public async dropoffDateValue():Promise<string>{
        return await Page.getElementValue(this.dropoffCalendar);
    }
    public async minimumSeatsValue():Promise<string>{
        return await Page.getElementValue(this.minimumSeatsInput);
    }
    public async numChildSeatsValue():Promise<string>{
        return await Page.getElementValue(this.numChildSeatsInput);
    }
    public async setHotelBookingsService(bookingPurpose, managedChbState, payingPerson, bookingFee,hotelName,checkInDate,dateCheckout,guests,preferences,notes): Promise<void> {
        await commonElements.setDropDownValue(bookingPurpose, this.bookingPurposeDD);
        await commonElements.setChb(this.managedChb, managedChbState);
        await commonElements.setRbtByLabel(payingPerson);
        await commonElements.setInputValue(bookingFee, this.bookingFeeInput);
        await commonElements.setInputValue(hotelName,this.hotelNameInput);
        await commonElements.setDateValue(this.checkInCalendar,checkInDate);
        await commonElements.setDateValue(this.dateCheckout,dateCheckout);
        await commonElements.setInputValue(guests,this.guestsInput);
        await commonElements.setInputValue(preferences,this.preferencesInput);
        await commonElements.setInputValue(notes, this.notesInput);
    }
    public async setServiceAddress(address,city,state,postalCode): Promise<void> {
        await commonElements.setInputValue(address[0],commonElements.addressLine1Input);
        await commonElements.setInputValue(address[1],commonElements.addressLine2Input);
        await commonElements.setInputValue(address[2],commonElements.addressLine3Input);
        await commonElements.setInputValue(address[3],commonElements.addressLine4Input);
        await commonElements.setInputValue(city,commonElements.cityAddressInput);
        await commonElements.setInputValue(state,commonElements.countyStateInput);
        await commonElements.setInputValue(postalCode,commonElements.postalCodeInput);
    }
    public async hotelNameValue():Promise<string>{
        return await Page.getElementValue(this.hotelNameInput);
    }
    public async checkInDateValue():Promise<string>{
        return await Page.getElementValue(this.checkInCalendar);
    }
    public async checkoutDateValue():Promise<string>{
        return await Page.getElementValue(this.dateCheckout);
    }
    public async guestsValue():Promise<string>{
        return await Page.getElementValue(this.guestsInput);
    }
    public async preferencesValue():Promise<string>{
        return await Page.getElementValue(this.preferencesInput);
    }
    public async clearMinimumSeatsInput():Promise<void>{
        await commonElements.setInputValue("1", this.minimumSeatsInput);
        await Page.click(this.minimumSeatsInput)
        await browser.keys(["\uE003"])
    }
}
export default new travelBookingPage();
