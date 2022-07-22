import commonElements from '../../../../helper/commonElements';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import visa_ImmigrationPage from '../../../../pageobjects/assignment/services/visa_Immigration.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const serviceName = "Visa & Immigration"
const visaIssuingCountry_1 = "Germany"
const visaIssuingCountry_2 = "France"
const instructionTyp_1 = "New"
const instructionTyp_2 = "Renewal"
const behalfPersonState_1 = false
const behalfPersonState_2 = true
const sponsoringEntity_1 = "TestEntity_1"
const sponsoringEntity_2 = "TestEntity_2"
const arrivalAate_1 = commonElements.getCurrentDateNo0Format()
const arrivalAate_2 = commonElements.getCurrentDatePlusDaysNo0Format(8)
const passportNumber_1 = "CE3231"
const passportNumber_2 = "YT3231"
const validFromDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(-1000)
const validFromDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(-1500)
const validToDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(1000)
const validToDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(1500)
const dateSubmitted_1 = commonElements.getCurrentDatePlusDaysNo0Format(-5)
const dateSubmitted_2 = commonElements.getCurrentDatePlusDaysNo0Format(-10)
const trackingNumber_1 = "2344ERT352"
const trackingNumber_2 = "YHD3578322"
const immigrationApproved_1 = "Yes"
const immigrationApproved_2 = "No"
const permitStartDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const permitStartDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(7)
const permitEndDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(15)
const permitEndDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(17)
const chbState_1 = true
const chbState_2 = false
const governmentId_1 = "TE3241_1"
const governmentId_2 = "Ta41_5FS"
const registrationTypes_1 = "RegistType_1"
const registrationTypes_2 = "RegistType_2"
const registrationDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(4)
const registrationDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(10)
const documentChecklist_1 = "Passport"
const documentChecklist_2 = "Letter of employment"
const documentChecklist_3 = "Birth certificate"
const additionalDocument_1 = "TestDoc_1"
const additionalDocument_2 = "TestDoc_2"
const visaImmigrationSaveMsg = "The The application details details have been updated. Thank you has been updated successfully. Thank you" // mistake in msg
const visaPertyMemberUpdMsg = "The record has been updated successfully. Thank you"

xdescribe('Visa & Immigration Service, Need Analysis Section test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / Visa & Immigration page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        // expect(await initiatedServicesPage.getServiceName()).toBe("Services / " + serviceName);
    });

    it('Verify Visa & Immigration Application details', async () => {
        await visa_ImmigrationPage.setVisaApplicationDetails(visaIssuingCountry_1, instructionTyp_1, behalfPersonState_1, sponsoringEntity_1);
        await visa_ImmigrationPage.clickApplicationDetailsSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaImmigrationSaveMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getIssuingCountryValue()).toBe(visaIssuingCountry_1);
        expect(await visa_ImmigrationPage.getBehalfPersonChbState()).toBe(behalfPersonState_1);
        expect(await commonElements.getRadioBtnState(instructionTyp_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(instructionTyp_2)).toBe(false);
        expect(await visa_ImmigrationPage.getSponsoringEntityValue()).toBe(sponsoringEntity_1);
    });
    it('Verify Edit Visa & Immigration Application details form', async () => {
        await visa_ImmigrationPage.setVisaApplicationDetails(visaIssuingCountry_2, instructionTyp_2, behalfPersonState_2, sponsoringEntity_2);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getIssuingCountryValue()).toBe(visaIssuingCountry_1);
        expect(await visa_ImmigrationPage.getBehalfPersonChbState()).toBe(behalfPersonState_1);
        expect(await commonElements.getRadioBtnState(instructionTyp_1)).toBe(true);
        expect(await commonElements.getRadioBtnState(instructionTyp_2)).toBe(false);
        expect(await visa_ImmigrationPage.getSponsoringEntityValue()).toBe(sponsoringEntity_1);
        await visa_ImmigrationPage.setVisaApplicationDetails(visaIssuingCountry_2, instructionTyp_2, behalfPersonState_2, sponsoringEntity_2);
        await visa_ImmigrationPage.clickApplicationDetailsSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaImmigrationSaveMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getIssuingCountryValue()).toBe(visaIssuingCountry_2);
        expect(await visa_ImmigrationPage.getBehalfPersonChbState()).toBe(behalfPersonState_2);
        expect(await commonElements.getRadioBtnState(instructionTyp_2)).toBe(true);
        expect(await commonElements.getRadioBtnState(instructionTyp_1)).toBe(false);
        expect(await visa_ImmigrationPage.getSponsoringEntityValue()).toBe(sponsoringEntity_2);
    });
    it('Verify Visa & Immigration person details form', async () => {
        await commonElements.setDateValue(visa_ImmigrationPage.plannedArrivalCalendar, arrivalAate_1);
        await commonElements.setInputValue(passportNumber_1, visa_ImmigrationPage.passportNumberInput);
        await commonElements.setDateValue(visa_ImmigrationPage.passportValidFromCalendar, validFromDate_1);
        await commonElements.setDateValue(visa_ImmigrationPage.passportValidToCalendar, validToDate_1);
        await commonElements.setSelectValue(visaIssuingCountry_1, visa_ImmigrationPage.passportIssuingCountryInput);
        await commonElements.setDateValue(visa_ImmigrationPage.applicationSubmissionCalendar, dateSubmitted_1);
        await commonElements.setInputValue(trackingNumber_1, visa_ImmigrationPage.trackingNumberInput);
        await commonElements.setDropDownValue(immigrationApproved_1, visa_ImmigrationPage.immigrationStatusTypeDD);
        await commonElements.setDateValue(visa_ImmigrationPage.permitStartCalendar, permitStartDate_1);
        await commonElements.setDateValue(visa_ImmigrationPage.permitEndCalendar, permitEndDate_1);
        await commonElements.setChb(visa_ImmigrationPage.permitCopyReceivedChb, chbState_1);
        await commonElements.setInputValue(governmentId_1, visa_ImmigrationPage.governmentIdInput);
        await visa_ImmigrationPage.setRegistrationType(1, registrationTypes_1);
        await visa_ImmigrationPage.setRegistrationTypeDate(1, registrationDate_1);
        await commonElements.setChbByLabel(documentChecklist_1, chbState_1);
        await commonElements.setChbByLabel(documentChecklist_2, chbState_1);
        await commonElements.setChbByLabel(documentChecklist_3, chbState_2);
        await visa_ImmigrationPage.clickVisaPartyMemberSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaPertyMemberUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getPlannedArrivalDateValue()).toBe(arrivalAate_1);
        expect(await visa_ImmigrationPage.getPassportNumberValue()).toBe(passportNumber_1);
        expect(await visa_ImmigrationPage.getValidFromValue()).toBe(validFromDate_1);
        expect(await visa_ImmigrationPage.getValidToValue()).toBe(validToDate_1);
        expect(await visa_ImmigrationPage.getPassportIssuingCountry()).toBe(visaIssuingCountry_1);
        expect(await visa_ImmigrationPage.getApplicationSubmissionValue()).toBe(dateSubmitted_1);
        expect(await visa_ImmigrationPage.getTrackingNumberValue()).toBe(trackingNumber_1);
        expect(await visa_ImmigrationPage.getImmigrationStatusTypeDD()).toBe(immigrationApproved_1);
        expect(await visa_ImmigrationPage.getPermitStartValue()).toBe(permitStartDate_1);
        expect(await visa_ImmigrationPage.getPermitEndValue()).toBe(permitEndDate_1);
        expect(await visa_ImmigrationPage.getPermitCopyReceivedChbState()).toBe(chbState_1);
        expect(await visa_ImmigrationPage.getGovernmentIdValue()).toBe(governmentId_1);
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(1)).toBe(registrationTypes_1);
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(1)).toBe(registrationDate_1);
        expect(await commonElements.getChbState(documentChecklist_1)).toBe(chbState_1);
        expect(await commonElements.getChbState(documentChecklist_2)).toBe(chbState_1);
        expect(await commonElements.getChbState(documentChecklist_3)).toBe(chbState_2);

    });
    it('Verify Edit Visa & Immigration person details form', async () => {
        await commonElements.setDateValue(visa_ImmigrationPage.plannedArrivalCalendar, arrivalAate_2);
        await commonElements.setInputValue(passportNumber_2, visa_ImmigrationPage.passportNumberInput);
        await commonElements.setDateValue(visa_ImmigrationPage.passportValidFromCalendar, validFromDate_2);
        await commonElements.setDateValue(visa_ImmigrationPage.passportValidToCalendar, validToDate_2);
        await commonElements.setSelectValue(visaIssuingCountry_2, visa_ImmigrationPage.passportIssuingCountryInput);
        await commonElements.setDateValue(visa_ImmigrationPage.applicationSubmissionCalendar, dateSubmitted_2);
        await commonElements.setInputValue(trackingNumber_2, visa_ImmigrationPage.trackingNumberInput);
        await commonElements.setDropDownValue(immigrationApproved_2, visa_ImmigrationPage.immigrationStatusTypeDD);
        await commonElements.setDateValue(visa_ImmigrationPage.permitStartCalendar, permitStartDate_2);
        await commonElements.setDateValue(visa_ImmigrationPage.permitEndCalendar, permitEndDate_2);
        await commonElements.setChb(visa_ImmigrationPage.permitCopyReceivedChb, chbState_2);
        await commonElements.setInputValue(governmentId_2, visa_ImmigrationPage.governmentIdInput);
        await visa_ImmigrationPage.setRegistrationType(1, registrationTypes_2);
        await visa_ImmigrationPage.setRegistrationTypeDate(1, registrationDate_2);
        await commonElements.setChbByLabel(documentChecklist_1, chbState_2);
        await commonElements.setChbByLabel(documentChecklist_2, chbState_2);
        await commonElements.setChbByLabel(documentChecklist_3, chbState_1);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getPlannedArrivalDateValue()).toBe(arrivalAate_1);
        expect(await visa_ImmigrationPage.getPassportNumberValue()).toBe(passportNumber_1);
        expect(await visa_ImmigrationPage.getValidFromValue()).toBe(validFromDate_1);
        expect(await visa_ImmigrationPage.getValidToValue()).toBe(validToDate_1);
        expect(await visa_ImmigrationPage.getPassportIssuingCountry()).toBe(visaIssuingCountry_1);
        expect(await visa_ImmigrationPage.getApplicationSubmissionValue()).toBe(dateSubmitted_1);
        expect(await visa_ImmigrationPage.getTrackingNumberValue()).toBe(trackingNumber_1);
        expect(await visa_ImmigrationPage.getImmigrationStatusTypeDD()).toBe(immigrationApproved_1);
        expect(await visa_ImmigrationPage.getPermitStartValue()).toBe(permitStartDate_1);
        expect(await visa_ImmigrationPage.getPermitEndValue()).toBe(permitEndDate_1);
        expect(await visa_ImmigrationPage.getPermitCopyReceivedChbState()).toBe(chbState_1);
        expect(await visa_ImmigrationPage.getGovernmentIdValue()).toBe(governmentId_1);
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(1)).toBe(registrationTypes_1);
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(1)).toBe(registrationDate_1);
        expect(await commonElements.getChbState(documentChecklist_1)).toBe(chbState_1);
        expect(await commonElements.getChbState(documentChecklist_2)).toBe(chbState_1);
        expect(await commonElements.getChbState(documentChecklist_3)).toBe(chbState_2);
        await commonElements.setDateValue(visa_ImmigrationPage.plannedArrivalCalendar, arrivalAate_2);
        await commonElements.setInputValue(passportNumber_2, visa_ImmigrationPage.passportNumberInput);
        await commonElements.setDateValue(visa_ImmigrationPage.passportValidFromCalendar, validFromDate_2);
        await commonElements.setDateValue(visa_ImmigrationPage.passportValidToCalendar, validToDate_2);
        await commonElements.setSelectValue(visaIssuingCountry_2, visa_ImmigrationPage.passportIssuingCountryInput);
        await commonElements.setDateValue(visa_ImmigrationPage.applicationSubmissionCalendar, dateSubmitted_2);
        await commonElements.setInputValue(trackingNumber_2, visa_ImmigrationPage.trackingNumberInput);
        await commonElements.setDropDownValue(immigrationApproved_2, visa_ImmigrationPage.immigrationStatusTypeDD);
        await commonElements.setDateValue(visa_ImmigrationPage.permitStartCalendar, permitStartDate_2);
        await commonElements.setDateValue(visa_ImmigrationPage.permitEndCalendar, permitEndDate_2);
        await commonElements.setChb(visa_ImmigrationPage.permitCopyReceivedChb, chbState_2);
        await commonElements.setInputValue(governmentId_2, visa_ImmigrationPage.governmentIdInput);
        await visa_ImmigrationPage.setRegistrationType(1, registrationTypes_2);
        await visa_ImmigrationPage.setRegistrationTypeDate(1, registrationDate_2);
        await commonElements.setChbByLabel(documentChecklist_1, chbState_2);
        await commonElements.setChbByLabel(documentChecklist_2, chbState_2);
        await commonElements.setChbByLabel(documentChecklist_3, chbState_1);
        await visa_ImmigrationPage.clickVisaPartyMemberSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaPertyMemberUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getPlannedArrivalDateValue()).toBe(arrivalAate_2);
        expect(await visa_ImmigrationPage.getPassportNumberValue()).toBe(passportNumber_2);
        expect(await visa_ImmigrationPage.getValidFromValue()).toBe(validFromDate_2);
        expect(await visa_ImmigrationPage.getValidToValue()).toBe(validToDate_2);
        expect(await visa_ImmigrationPage.getPassportIssuingCountry()).toBe(visaIssuingCountry_2);
        expect(await visa_ImmigrationPage.getApplicationSubmissionValue()).toBe(dateSubmitted_2);
        expect(await visa_ImmigrationPage.getTrackingNumberValue()).toBe(trackingNumber_2);
        expect(await visa_ImmigrationPage.getImmigrationStatusTypeDD()).toBe(immigrationApproved_2);
        expect(await visa_ImmigrationPage.getPermitStartValue()).toBe(permitStartDate_2);
        expect(await visa_ImmigrationPage.getPermitEndValue()).toBe(permitEndDate_2);
        expect(await visa_ImmigrationPage.getPermitCopyReceivedChbState()).toBe(chbState_2);
        expect(await visa_ImmigrationPage.getGovernmentIdValue()).toBe(governmentId_2);
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(1)).toBe(registrationTypes_2);
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(1)).toBe(registrationDate_2);
        expect(await commonElements.getChbState(documentChecklist_1)).toBe(chbState_2);
        expect(await commonElements.getChbState(documentChecklist_2)).toBe(chbState_2);
        expect(await commonElements.getChbState(documentChecklist_3)).toBe(chbState_1); 
    });

    it('Verify add and save Registration type(s) additional fields', async () => {
        await visa_ImmigrationPage.clickAddRegistrationTypeFieldBtn();
        await visa_ImmigrationPage.setRegistrationType(1, registrationTypes_1);
        await visa_ImmigrationPage.setRegistrationType(2, registrationTypes_2);
        await visa_ImmigrationPage.setRegistrationTypeDate(1, registrationDate_1);
        await visa_ImmigrationPage.setRegistrationTypeDate(2, registrationDate_2);
        await visa_ImmigrationPage.clickVisaPartyMemberSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaPertyMemberUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getRegistrationTypeCalendartQty()).toBe(2);
        expect(await visa_ImmigrationPage.getRegistrationTypeInputQty()).toBe(2);
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(1)).toBe(registrationTypes_1);
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(1)).toBe(registrationDate_1);
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(2)).toBe(registrationTypes_2);
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(2)).toBe(registrationDate_2);
        await visa_ImmigrationPage.clickAddRegistrationTypeFieldBtn();
        expect(await visa_ImmigrationPage.getRegistrationTypeCalendartQty()).toBe(3);
        expect(await visa_ImmigrationPage.getRegistrationTypeInputQty()).toBe(3);
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(3)).toBe("");
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(3)).toBe("");
        await visa_ImmigrationPage.clickVisaPartyMemberSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaPertyMemberUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(1)).toBe(registrationTypes_1);
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(1)).toBe(registrationDate_1);
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(2)).toBe(registrationTypes_2);
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(2)).toBe(registrationDate_2);
        expect(await visa_ImmigrationPage.getRegistrationTypeCalendartQty()).toBe(2);
        expect(await visa_ImmigrationPage.getRegistrationTypeInputQty()).toBe(2);
        await visa_ImmigrationPage.clickRemoveRegistrationTypeFieldBtn(2);
        await visa_ImmigrationPage.clickVisaPartyMemberSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaPertyMemberUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(1)).toBe(registrationTypes_1);
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(1)).toBe(registrationDate_1);
        expect(await visa_ImmigrationPage.getRegistrationTypeCalendartQty()).toBe(1);
        expect(await visa_ImmigrationPage.getRegistrationTypeInputQty()).toBe(1);
    });
    it('Verify add Registration type(s) additional fields without saving', async () => {
        await visa_ImmigrationPage.clickAddRegistrationTypeFieldBtn();
        await visa_ImmigrationPage.clickAddRegistrationTypeFieldBtn();
        // expect(await visa_ImmigrationPage.getRegistrationTypeCalendartQty()).toBe(3);
        // expect(await visa_ImmigrationPage.getRegistrationTypeInputQty()).toBe(3);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getRegistrationTypeValueByNum(1)).toBe(registrationTypes_1);
        expect(await visa_ImmigrationPage.getRegistrationDateValueByNum(1)).toBe(registrationDate_1);
        expect(await visa_ImmigrationPage.getRegistrationTypeCalendartQty()).toBe(1);
        expect(await visa_ImmigrationPage.getRegistrationTypeInputQty()).toBe(1);
    });
    it('Verify add and save Documents checklist additional fields', async () => {
        await visa_ImmigrationPage.clickAddDocumentInputBtn();
        await visa_ImmigrationPage.setAdditionalDocumentType(1, additionalDocument_1);
        await visa_ImmigrationPage.setAdditionalDocumentType(2, additionalDocument_2);
        await visa_ImmigrationPage.clickVisaPartyMemberSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaPertyMemberUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeInputQty()).toBe(2);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeByNum(1)).toBe(additionalDocument_1);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeByNum(2)).toBe(additionalDocument_2);
        await visa_ImmigrationPage.clickAddDocumentInputBtn();
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeInputQty()).toBe(3);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeByNum(1)).toBe(additionalDocument_1);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeByNum(2)).toBe(additionalDocument_2);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeByNum(3)).toBe("");
        await visa_ImmigrationPage.clickRemoveDocumentInputBtn(3);
        await visa_ImmigrationPage.clickVisaPartyMemberSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaPertyMemberUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeInputQty()).toBe(2);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeByNum(1)).toBe(additionalDocument_1);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeByNum(2)).toBe(additionalDocument_2);
        await visa_ImmigrationPage.clickRemoveDocumentInputBtn(2);
        await visa_ImmigrationPage.clickVisaPartyMemberSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaPertyMemberUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeInputQty()).toBe(1);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeByNum(1)).toBe(additionalDocument_1);
    });
    it('Verify add Documents checklist fields without saving', async () => {
        await visa_ImmigrationPage.clickAddDocumentInputBtn();
        await visa_ImmigrationPage.clickAddDocumentInputBtn();
        await visa_ImmigrationPage.setAdditionalDocumentType(2, additionalDocument_2);
        await visa_ImmigrationPage.setAdditionalDocumentType(3, additionalDocument_2);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeInputQty()).toBe(3);
        await commonElements.refreshPage();
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeInputQty()).toBe(1);
        expect(await visa_ImmigrationPage.getAdditionalDocumentTypeByNum(1)).toBe(additionalDocument_1);
    });
});
