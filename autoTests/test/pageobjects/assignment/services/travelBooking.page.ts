
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';
import initiatedServicesPage from '../initiatedServices.page';

class travelBookingPage {

    public get purposeDD(): string {
        return '//label[text()=" Purpose "]/ancestor::field-template//select'
    }
    public get managedChb(): string {
        return '//label[text()=" Managed by K2 "]/ancestor::field-template//input'
    }
    public get bookingFeeInput(): string {
        return '//label[text()=" K2 booking fee "]/ancestor::field-template//input'
    }
    

}
export default new travelBookingPage();
