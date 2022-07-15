
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';

class furnitureRentalPage {
    public get rentalStartCalendar(): string {
        return '//label[text()=" Rental dates "]/ancestor::field-template//input'
    }
    public get rentalToCalendar(): string {
        return '//label[text()=" to "]/ancestor::field-template//input'
    }
    public get deliveryDateCalendar(): string {
        return '//label[text()=" Delivery date "]/ancestor::field-template//input'
    }
    public get deliveryTimeCalendar(): string {
        return '//label[text()=" Delivery time "]/ancestor::field-template//input'
    }
    public get rentalAmountInput(): string {
        return '//label[text()=" Rental amount "]/ancestor::field-template//input'
    }
    public async setFurnitureRentalIntiationDetails(rentalStartDate, rentalToDate, deliveryDate, deliveryTimeDate, rentalAmount): Promise<void> {
        await commonElements.setDateValue(this.rentalStartCalendar, rentalStartDate);
        await commonElements.setDateValue(this.rentalToCalendar, rentalToDate);
        await commonElements.setDateValue(this.deliveryDateCalendar, deliveryDate);
        await commonElements.setDateValue(this.deliveryTimeCalendar, deliveryTimeDate);
        await Page.setValue(this.rentalAmountInput, rentalAmount);
    }
    public async getRentalStartDateValue(): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.rentalStartCalendar));
    }
    public async getRentalToDateValue(): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.rentalToCalendar)); 
    }
    public async getDeliveryDateValue(): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.deliveryDateCalendar));
    }
    public async getDliveryTimeValue(): Promise<string> {
        return await commonElements.createStandartDateForm(await Page.getElementValue(this.deliveryTimeCalendar));
    }
    public async getRentalAmountValue(): Promise<string> {
        return await Page.getElementValue(this.rentalAmountInput);
    }
}
export default new furnitureRentalPage();

