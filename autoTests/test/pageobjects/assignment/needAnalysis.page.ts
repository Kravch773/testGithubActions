
import commonElements from '../../helper/commonElements';
import Page from '../Page';

class needAnalysisPage {

    public get needAnalysisLabel(): string {
        return '//article//h1'
    }
    public get needAnalysisTab(): string {
        return '//a[contains(@href,"/analysis")]'
    }
    public getAnalysisQuestionSection(sectionLabel): string {
        return `//assignment-analysis-answers//li/a[text()="${sectionLabel}"]`
    }
    public get editAnalysisBtn(): string {
        return '//simple-tab/div[not(@hidden)]//button[text()="Edit"]'
    }
    public getAnalysisAnswerByLabel(label): string {
        return `//simple-tab/div[not(@hidden)]//strong[contains(text(),"${label}")]/../field-spec-value/span`
    }
    public getNeedAnalysisInputByLabel(label): string {
        return `//label[contains(text(),"${label}")]/../../..//input`
    }
    public getNeedAnalysisDropDownByLabel(label): string {
        return `//label[contains(text(),"${label}")]/../../..//select`
    }
    public getNeedAnalysisSelectByLabel(label): string {
        return `//label[contains(text(),"${label}")]/../../..//k2-select/mat-select`
    }
    public getNeedAnalysisRbtnByLabel(rbtnText, label): string {
        return `//label[contains(text(),"${label}")]/../../..//span[text()="${rbtnText}"]/../input`
    }
    public getNeedAnalysisTextareaByLabel(label): string {
        return `//label[contains(text(),"${label}")]/../../..//textarea`
    }
    public getNeedAnalysisChbByLabel(label, chbText): string {
        return `//label[contains(text(),"${label}")]/../../..//span[contains(text(),"${chbText}")]/../input`
    }
    public get languagesSpokenDD(): string {
        return '//option[text()=" English "]/..'
    }
    public get languageslvlDD(): string {
        return '//option[text()=" Written "]/..'
    }
    public get homePhoneCountryDD(): string {
        return '(//telephone-input//div[@role="combobox"])[1]'
    }
    public get workPhoneCountryDD(): string {
        return '(//telephone-input//div[@role="combobox"])[2]'
    }
    public get mobilePhoneCountryDD(): string {
        return '(//telephone-input//div[@role="combobox"])[3]'
    }
    public get addPersonBtn(): string {
        return '//a[contains(text(),"Yes, add")]'
    }
    public get removePersonBtn(): string {
        return '//a[@class="btn-remove"]'
    }
    public getAddressInput(label = ""): string {
        return `//label[contains(text(),"${label}")]/../../..//input[@placeholder="Address line 1"]`
    }
    public getCityInput(label = ""): string {
        return `//label[contains(text(),"${label}")]/../../..//input[@placeholder="City"]`
    }
    public getStateInput(label = ""): string {
        return `//label[contains(text(),"${label}")]/../../..//input[@placeholder="County/state"]`
    }
    public getPostalCodeInput(label = ""): string {
        return `//label[contains(text(),"${label}")]/../../..//input[@placeholder="Postal code"]`
    }
    public get homePropertySpecifics_3(): string {
        return `#questionnaireQuestionNA92_138`
    }
    public get homePropertySpecificsLabel_3(): string {
        return '(//strong[text()="Property specifics:"])[2]/..//span'
    }
    public get hightItemsDescribeInput(): string {
        return '#questionnaireQuestionNA155'
    }
    public get transportDescribeInput(): string {
        return '#questionnaireQuestionNA154_176'
    }
    public get unusualItemsDescribeInput(): string {
        return '#questionnaireQuestionNA157'
    }
    questionnaireQuestionNA157
    public async clickNeedAnalysisTab(): Promise<void> {
        await Page.click(this.needAnalysisTab);
    }
    public async getNeedAnalysisLabelText(): Promise<string> {
        return await Page.getElementText(this.needAnalysisLabel);
    }
    public async clickAnalysisQuestionSection(sectionLabel): Promise<void> {
        await Page.click(this.getAnalysisQuestionSection(sectionLabel));
    }
    public async clickEditAnalysisBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.editAnalysisBtn);
        await Page.click(this.editAnalysisBtn);
    }
    public async setNeedAnalysisInputByLabel(inputValue, label): Promise<void> {
        await commonElements.setInputValue(inputValue, this.getNeedAnalysisInputByLabel(label));
    }
    public async setNeedAnalysisDropDownByLabel(dropDownValue, label): Promise<void> {
        await commonElements.setDropDownValue(dropDownValue, this.getNeedAnalysisDropDownByLabel(label));
    }
    public async setNeedAnalysisSelectByLabel(selectValue, label): Promise<void> {
        await commonElements.setSelectValue(selectValue, this.getNeedAnalysisSelectByLabel(label));
    }
    public async setNeedAnalysisDateByLabel(dateValue, label): Promise<void> {
        await browser.pause(500); //more stable
        if (await Page.getElementValue(this.getNeedAnalysisInputByLabel(label)) !== dateValue) {
            await commonElements.setDateValue(this.getNeedAnalysisInputByLabel(label), dateValue);
        }
    }
    public async clearSetNeedAnalysisDateByLabel(dateValue, label): Promise<void> {
        if (await Page.getElementValue(this.getNeedAnalysisInputByLabel(label)) !== dateValue) {
            await commonElements.clearAndSetDateValue(this.getNeedAnalysisInputByLabel(label), dateValue);
        }
    }
    public async clickNeedAnalysisRadioBtnByLabel(rbtnText, label): Promise<void> {
        await commonElements.setRbt(this.getNeedAnalysisRbtnByLabel(rbtnText, label));
    }
    public async setNeedAnalysisTextareaByLabel(textValue, label): Promise<void> {
        await commonElements.setInputValue(textValue, this.getNeedAnalysisTextareaByLabel(label));
    }
    public async setNeedAnalysisChbByLabel(chbState, chbText, label): Promise<void> {
        await commonElements.setChb(this.getNeedAnalysisChbByLabel(label, chbText), chbState);
    }
    public async setPersonalDetails(pQuestLabel, title, firstName, surname, gender, nationality, dualNationality, language, languageLvl, phoneCountry, homephone, workphone, mobilephone, preferedphone, preferedEmail, alternateEmail, martialStatus, dob): Promise<void> {
        await this.setNeedAnalysisInputByLabel(title, pQuestLabel[0]);
        await this.setNeedAnalysisInputByLabel(firstName, pQuestLabel[1]);
        await this.setNeedAnalysisInputByLabel(surname, pQuestLabel[2]);
        await this.setNeedAnalysisDropDownByLabel(gender, pQuestLabel[3]);
        await this.setNeedAnalysisSelectByLabel(nationality, pQuestLabel[4]);
        await this.setNeedAnalysisSelectByLabel(dualNationality, pQuestLabel[5]);
        await commonElements.setDropDownValue(language, this.languagesSpokenDD);
        await commonElements.setDropDownValue(languageLvl, this.languageslvlDD);
        await commonElements.setPhoneCountry(phoneCountry, this.homePhoneCountryDD);
        await commonElements.setPhoneCountry(phoneCountry, this.workPhoneCountryDD);
        await commonElements.setPhoneCountry(phoneCountry, this.mobilePhoneCountryDD);
        await this.setNeedAnalysisInputByLabel(homephone, pQuestLabel[7]);
        await this.setNeedAnalysisInputByLabel(workphone, pQuestLabel[8]);
        await this.setNeedAnalysisInputByLabel(mobilephone, pQuestLabel[9]);
        await this.setNeedAnalysisDropDownByLabel(preferedphone, pQuestLabel[10]);
        await this.setNeedAnalysisDropDownByLabel(preferedEmail, pQuestLabel[11])
        await this.setNeedAnalysisInputByLabel(alternateEmail, pQuestLabel[12]);
        await this.setNeedAnalysisDropDownByLabel(martialStatus, pQuestLabel[13]);
        await this.setNeedAnalysisDateByLabel(dob, pQuestLabel[14]);
    }
    public async getAnalysisAnswerTextByLabel(label): Promise<string> {
        return await Page.getElementText(this.getAnalysisAnswerByLabel(label))
    }

    public async setPartnerDetails(partnerQuestLabel, title, firstName, surname, gender, nationality, dualNationality, language, languageLvl, phoneCountry, homephone, workphone, mobilephone, preferedphone, email, martialStatus, dob): Promise<void> {
        await this.setNeedAnalysisInputByLabel(title, partnerQuestLabel[0]);
        await this.setNeedAnalysisInputByLabel(firstName, partnerQuestLabel[1]);
        await this.setNeedAnalysisInputByLabel(surname, partnerQuestLabel[2]);
        await this.setNeedAnalysisDropDownByLabel(gender, partnerQuestLabel[3]);
        await this.setNeedAnalysisSelectByLabel(nationality, partnerQuestLabel[4]);
        await this.setNeedAnalysisSelectByLabel(dualNationality, partnerQuestLabel[5]);
        await commonElements.setDropDownValue(language, this.languagesSpokenDD);
        await commonElements.setDropDownValue(languageLvl, this.languageslvlDD);
        await commonElements.setPhoneCountry(phoneCountry, this.homePhoneCountryDD);
        await commonElements.setPhoneCountry(phoneCountry, this.workPhoneCountryDD);
        await commonElements.setPhoneCountry(phoneCountry, this.mobilePhoneCountryDD)
        await this.setNeedAnalysisInputByLabel(homephone, partnerQuestLabel[7]);
        await this.setNeedAnalysisInputByLabel(workphone, partnerQuestLabel[8]);
        await this.setNeedAnalysisInputByLabel(mobilephone, partnerQuestLabel[9]);
        await this.setNeedAnalysisDropDownByLabel(preferedphone, partnerQuestLabel[10]);
        await this.setNeedAnalysisInputByLabel(email, partnerQuestLabel[11])
        await this.setNeedAnalysisDropDownByLabel(martialStatus, partnerQuestLabel[12]);
        await this.setNeedAnalysisDateByLabel(dob, partnerQuestLabel[13]);
    }
    public async clickAddPersonBtn(): Promise<void> {
        await Page.scrollElementIntoViewTop(this.addPersonBtn)
        await Page.click(this.addPersonBtn);
    }
    public async clickRemovePersonBtn(): Promise<void> {
        await Page.click(this.removePersonBtn);
    }
    public async setChildDetails(childQuestionLabel, firstName, surname, gender, nationality, dob): Promise<void> {
        await this.setNeedAnalysisInputByLabel(firstName, childQuestionLabel[0]);
        await this.setNeedAnalysisInputByLabel(surname, childQuestionLabel[1]);
        await this.setNeedAnalysisDropDownByLabel(gender, childQuestionLabel[2]);
        await this.setNeedAnalysisSelectByLabel(nationality, childQuestionLabel[3]);
        await this.setNeedAnalysisDateByLabel(dob, childQuestionLabel[4]);
    }
    public async setPersonDetails(otherPQuestionLabel, firstName, surname, gender, nationality): Promise<void> {
        await this.setNeedAnalysisInputByLabel(firstName, otherPQuestionLabel[0]);
        await this.setNeedAnalysisInputByLabel(surname, otherPQuestionLabel[1]);
        await this.setNeedAnalysisDropDownByLabel(gender, otherPQuestionLabel[2]);
        await this.setNeedAnalysisSelectByLabel(nationality, otherPQuestionLabel[3]);
    }
    public async setPetDetails(petQuestionLabel, name, species, breed, age, weight): Promise<void> {
        await this.setNeedAnalysisInputByLabel(name, petQuestionLabel[0]);
        await this.setNeedAnalysisDropDownByLabel(species, petQuestionLabel[1]);
        await this.setNeedAnalysisInputByLabel(breed, petQuestionLabel[2]);
        await this.setNeedAnalysisInputByLabel(age, petQuestionLabel[3]);
        await this.setNeedAnalysisInputByLabel(weight, petQuestionLabel[4]);
    }
    public async setAssignmentDetails(assignmentQuestionLabel, startDate, endDate, previousPlaceRbtn, previousPlace, arrivalDate, isVisaInProgresRbtn, visaType, visaApprovalDate): Promise<void> {
        await this.setNeedAnalysisDateByLabel(startDate, assignmentQuestionLabel[0]);
        await this.setNeedAnalysisDateByLabel(endDate, assignmentQuestionLabel[1]);
        await this.clickNeedAnalysisRadioBtnByLabel(previousPlaceRbtn, assignmentQuestionLabel[2]);
        await this.setNeedAnalysisTextareaByLabel(previousPlace, assignmentQuestionLabel[3]);
        await this.setNeedAnalysisDateByLabel(arrivalDate, assignmentQuestionLabel[4]);
        await this.clickNeedAnalysisRadioBtnByLabel(isVisaInProgresRbtn, assignmentQuestionLabel[5]);
        await this.setNeedAnalysisInputByLabel(visaType, assignmentQuestionLabel[6]);
        await this.setNeedAnalysisDateByLabel(visaApprovalDate, assignmentQuestionLabel[7]);
    }
    public async setSchoolSearchPlaning(schoolQuestionLabel, schoolSearchDate, tourPerson_1, tourPerson_2, address, city, state, postalCode, country, currency, currencyValue, currencyTerm, payingPerson, tourpersonState_1, tourpersonState_2): Promise<void> {
        await commonElements.setDateValue_2(this.getNeedAnalysisInputByLabel(schoolQuestionLabel[0]),commonElements.addressLine1Input,schoolSearchDate)
        await this.setNeedAnalysisChbByLabel(tourpersonState_1, tourPerson_1, schoolQuestionLabel[1]);
        await this.setNeedAnalysisChbByLabel(tourpersonState_2, tourPerson_2, schoolQuestionLabel[1]);
        await commonElements.setAddress(address[0],address[1],address[2],address[3],city,state,postalCode,country);
        await this.setNeedAnalysisSelectByLabel(currency, schoolQuestionLabel[3]);
        await this.setNeedAnalysisInputByLabel(currencyValue, schoolQuestionLabel[3]);
        await this.setNeedAnalysisDropDownByLabel(currencyTerm, schoolQuestionLabel[3])
        await this.clickNeedAnalysisRadioBtnByLabel(payingPerson, schoolQuestionLabel[4]);
        await this.clickNeedAnalysisRadioBtnByLabel(payingPerson, schoolQuestionLabel[5]);
        await this.clickNeedAnalysisRadioBtnByLabel(payingPerson, schoolQuestionLabel[6]);
        await this.clickNeedAnalysisRadioBtnByLabel(payingPerson, schoolQuestionLabel[7]);
        await this.clickNeedAnalysisRadioBtnByLabel(payingPerson, schoolQuestionLabel[8]);
    }
    public async setSchoolSearchDetails(schoolQuestionLabel, schoolYear, curriculum, specialRequire, schoolType_1, schoolType_2, schoolSpecifics, schoolTypeState_1, schoolTypeState_2): Promise<void> {
        await this.setNeedAnalysisInputByLabel(schoolYear, schoolQuestionLabel[0]);
        await this.setNeedAnalysisTextareaByLabel(curriculum, schoolQuestionLabel[1]);
        await this.setNeedAnalysisTextareaByLabel(specialRequire, schoolQuestionLabel[2]);
        await this.setNeedAnalysisChbByLabel(schoolTypeState_1, schoolType_1, schoolQuestionLabel[3]);
        await this.setNeedAnalysisChbByLabel(schoolTypeState_2, schoolType_2, schoolQuestionLabel[3]);
        await this.setNeedAnalysisInputByLabel(schoolSpecifics, schoolQuestionLabel[4]);
    }
    public async setTempAccommodationOrigin(tempAccommodationLabel, arrivalDate, accomodationDate, currency, currencyValue, currencyTerm, accommodationLocations, numOfbedrooms, numOfbathrooms, additionalItems, familySmokers, payingPerson): Promise<void> {
        await this.setNeedAnalysisDateByLabel(arrivalDate, tempAccommodationLabel[0]);
        await this.setNeedAnalysisDateByLabel(accomodationDate, tempAccommodationLabel[1]);
        await this.setNeedAnalysisSelectByLabel(currency, tempAccommodationLabel[2]);
        await this.setNeedAnalysisInputByLabel(currencyValue, tempAccommodationLabel[2]);
        await this.setNeedAnalysisDropDownByLabel(currencyTerm, tempAccommodationLabel[2])
        await this.setNeedAnalysisTextareaByLabel(accommodationLocations, tempAccommodationLabel[3]);;
        await this.setNeedAnalysisInputByLabel(numOfbedrooms, tempAccommodationLabel[4]);
        await this.setNeedAnalysisInputByLabel(numOfbathrooms, tempAccommodationLabel[5]);
        await this.setNeedAnalysisTextareaByLabel(additionalItems, tempAccommodationLabel[6]);
        await this.clickNeedAnalysisRadioBtnByLabel(familySmokers, tempAccommodationLabel[7]);
        await this.clickNeedAnalysisRadioBtnByLabel(payingPerson, tempAccommodationLabel[8]);
    }
    public async setTempAccommodationDestination(tempAccommodationLabel, arrivalDate, accomodationDate, accommodationLocations, numOfbedrooms, numOfbathrooms, additionalItems, familySmokers, currency, currencyValue, currencyTerm, payingPerson): Promise<void> {
        await this.setNeedAnalysisDateByLabel(arrivalDate, tempAccommodationLabel[0]);
        await this.setNeedAnalysisDateByLabel(accomodationDate, tempAccommodationLabel[1]);
        await this.setNeedAnalysisTextareaByLabel(accommodationLocations, tempAccommodationLabel[2]);
        await this.setNeedAnalysisInputByLabel(numOfbedrooms, tempAccommodationLabel[3]);
        await this.setNeedAnalysisInputByLabel(numOfbathrooms, tempAccommodationLabel[4]);
        await this.setNeedAnalysisTextareaByLabel(additionalItems, tempAccommodationLabel[5]);
        await this.clickNeedAnalysisRadioBtnByLabel(familySmokers, tempAccommodationLabel[6]);
        await this.setNeedAnalysisSelectByLabel(currency, tempAccommodationLabel[7]);
        await this.setNeedAnalysisInputByLabel(currencyValue, tempAccommodationLabel[7]);
        await this.setNeedAnalysisDropDownByLabel(currencyTerm, tempAccommodationLabel[7])
        await this.clickNeedAnalysisRadioBtnByLabel(payingPerson, tempAccommodationLabel[8]);
    }
    public async setOrientationDetails(orientationQuestionLabel, orientationDate, tourPerson_1, tourPerson_2, address, city, state, postalCode, country, orientationLocations): Promise<void> {
        await commonElements.setDateValue_2(this.getNeedAnalysisInputByLabel(orientationQuestionLabel[0]),commonElements.addressLine1Input,orientationDate);
        await this.setNeedAnalysisChbByLabel(true, tourPerson_1, orientationQuestionLabel[1]);
        await this.setNeedAnalysisChbByLabel(false, tourPerson_2, orientationQuestionLabel[1]);
        await commonElements.setAddress(address[0],address[1],address[2],address[3],city,state,postalCode,country);
        await this.setNeedAnalysisTextareaByLabel(orientationLocations, orientationQuestionLabel[3])
    }
    public async setHomePlanningDetails(homePlanningQuestionLabel, orientationDate, tourPerson_1, tourPerson_2, homeSearchPlace, currentHome): Promise<void> {
        await commonElements.setDateValue_2(this.getNeedAnalysisInputByLabel(homePlanningQuestionLabel[0]),this.getNeedAnalysisTextareaByLabel(homePlanningQuestionLabel[2]),orientationDate)
        await this.setNeedAnalysisChbByLabel(true, tourPerson_1, homePlanningQuestionLabel[1]);
        await this.setNeedAnalysisChbByLabel(false, tourPerson_2, homePlanningQuestionLabel[1]);
        await this.setNeedAnalysisTextareaByLabel(homeSearchPlace, homePlanningQuestionLabel[2]);
        await this.setNeedAnalysisTextareaByLabel(currentHome, homePlanningQuestionLabel[3]);
    }
    public async gethomePropertySpecificsText_3(): Promise<string> {
        return await Page.getElementText(this.homePropertySpecificsLabel_3);
    }
    public async setHomeLeaseDetails(homeLeaseQuestionLabel, currency, currencyValue, currencyTerm, startDate, leaseName, payingPerson, leaseSpecifics): Promise<void> {
        await this.setNeedAnalysisSelectByLabel(currency, homeLeaseQuestionLabel[0]);
        await this.setNeedAnalysisInputByLabel(currencyValue, homeLeaseQuestionLabel[0]);
        await this.setNeedAnalysisDropDownByLabel(currencyTerm, homeLeaseQuestionLabel[0]);
        await this.setNeedAnalysisDateByLabel(startDate, homeLeaseQuestionLabel[1]);
        await this.clickNeedAnalysisRadioBtnByLabel(leaseName, homeLeaseQuestionLabel[2]);
        await this.clickNeedAnalysisRadioBtnByLabel(payingPerson, homeLeaseQuestionLabel[3]);
        await this.setNeedAnalysisInputByLabel(leaseSpecifics, homeLeaseQuestionLabel[4])
    }
    public async setHomeOtherDetails(homeOtherQuestionLabel, propertyType_1, payingRentalPerson_1, state_1, numOfFloor_1, largeItemDescribe_1): Promise<void> {
        await this.clickNeedAnalysisRadioBtnByLabel(propertyType_1, homeOtherQuestionLabel[0]);
        await this.clickNeedAnalysisRadioBtnByLabel(payingRentalPerson_1, homeOtherQuestionLabel[1]);
        await this.clickNeedAnalysisRadioBtnByLabel(state_1, homeOtherQuestionLabel[2]);
        await this.setNeedAnalysisInputByLabel(numOfFloor_1, homeOtherQuestionLabel[3]);
        await this.clickNeedAnalysisRadioBtnByLabel(state_1, homeOtherQuestionLabel[4]);
        await this.clickNeedAnalysisRadioBtnByLabel(state_1, homeOtherQuestionLabel[5]);
        await this.setNeedAnalysisTextareaByLabel(largeItemDescribe_1, homeOtherQuestionLabel[6]);
    }
    public async setHHGDetails(hhgQuestionLabel, address, city, state, postalCode, homeCountry, propertyType, apartmentFloor, numOfBed, preMoveDates, packDates, deliveryAddressState, deliveryCountry): Promise<void> {
        await commonElements.setInputValue(address, this.getAddressInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(city, this.getCityInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(state, this.getStateInput(hhgQuestionLabel[0]));
        await commonElements.setInputValue(postalCode, this.getPostalCodeInput(hhgQuestionLabel[0]));
        await this.setNeedAnalysisSelectByLabel(homeCountry, hhgQuestionLabel[1]);
        await this.clickNeedAnalysisRadioBtnByLabel(propertyType, hhgQuestionLabel[2]);
        await this.setNeedAnalysisInputByLabel(apartmentFloor, hhgQuestionLabel[3]);
        await this.setNeedAnalysisInputByLabel(numOfBed, hhgQuestionLabel[4]);
        await this.setNeedAnalysisDateByLabel(preMoveDates, hhgQuestionLabel[5])
    }
    public async setSaleAssistanceDetails(saleAssistanceQuestionLabel, state, kindOfHome, purchaseDate, currency, currencyValue, currencyTerm, ageOfhome, numOfbedrooms, numOfbathrooms, cityWater, typeOfheating, homeLand, periodHomeSale, otherDetails): Promise<void> {
        await this.clickNeedAnalysisRadioBtnByLabel(state, saleAssistanceQuestionLabel[0]);
        await this.setNeedAnalysisDropDownByLabel(kindOfHome, saleAssistanceQuestionLabel[1]);
        await this.setNeedAnalysisDateByLabel(purchaseDate,saleAssistanceQuestionLabel[2]);
        await this.setNeedAnalysisSelectByLabel(currency, saleAssistanceQuestionLabel[3]);
        await this.setNeedAnalysisInputByLabel(currencyValue, saleAssistanceQuestionLabel[3]);
        await this.setNeedAnalysisDropDownByLabel(currencyTerm, saleAssistanceQuestionLabel[3]);
        await this.setNeedAnalysisInputByLabel(ageOfhome, saleAssistanceQuestionLabel[4])
        await this.setNeedAnalysisInputByLabel(numOfbedrooms, saleAssistanceQuestionLabel[5]);
        await this.setNeedAnalysisInputByLabel(numOfbathrooms, saleAssistanceQuestionLabel[6]);
        await this.setNeedAnalysisInputByLabel(cityWater, saleAssistanceQuestionLabel[7]);
        await this.setNeedAnalysisInputByLabel(typeOfheating, saleAssistanceQuestionLabel[8]);
        await this.setNeedAnalysisInputByLabel(homeLand, saleAssistanceQuestionLabel[9]);
        await this.setNeedAnalysisInputByLabel(periodHomeSale, saleAssistanceQuestionLabel[10]);
        await this.setNeedAnalysisInputByLabel(otherDetails, saleAssistanceQuestionLabel[11]);
    }
    public async getDisabledAtribute(element): Promise<string> {
        return await Page.getElementAttribute(element, "disabled");
    }
    public async setPurchaseAssistance(purchaseAssistanceQuestionLabel, kindOfHome, numOfbedrooms, numOfbathrooms, locations, importantDetails, otherDetails): Promise<void> {
        await this.setNeedAnalysisDropDownByLabel(kindOfHome, purchaseAssistanceQuestionLabel[0]);
        await this.setNeedAnalysisInputByLabel(numOfbedrooms, purchaseAssistanceQuestionLabel[1]);
        await this.setNeedAnalysisInputByLabel(numOfbathrooms, purchaseAssistanceQuestionLabel[2]);
        await this.setNeedAnalysisInputByLabel(locations, purchaseAssistanceQuestionLabel[3]);
        await this.setNeedAnalysisDropDownByLabel(importantDetails, purchaseAssistanceQuestionLabel[4]);
        await this.setNeedAnalysisInputByLabel(otherDetails, purchaseAssistanceQuestionLabel[5]);
    }
}
export default new needAnalysisPage();
