import commonElements from '../../../../helper/commonElements';
import familyMembers from '../../../../helper/familyMembers';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import departureServicesPage from '../../../../pageobjects/assignment/services/departureServices.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const startDate_1 = commonElements.getCurrentDateNo0Format()
const startDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(1)
const serviceName = "Departure services"
const partnerName_1 = "Roebuck"
const departureServiceName_1 = "De-registration"
const departureServiceName_2 = "Visa cancellation"
const departureServiceName_3 = "Check out"
const departureServiceName_4 = "Departure cleaning"
const departureServiceName_5 = "Dilapidations"
const departureServiceName_6 = "Deposit management"
const contactPerson_1 = "Test Assignee (assignee)"
const contactPerson_2 = "Test Partner (partner)"
const notes_1 = "testNote1"
const notes_2 = "testNote2"
const completionDate_1 = startDate_1
const completionDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(-5)
const leaseEndDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(15)
const leaseEndDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(-25)
const checkOut_1 = commonElements.getCurrentDatePlusDaysNo0Format(3)
const checkOut_2 = commonElements.getCurrentDatePlusDaysNo0Format(-6)
const chbState_1 = true
const chbState_2 = false
const dateOfCleaning_1 = commonElements.getCurrentDatePlusDaysNo0Format(-10)
const dateOfCleaning_2 = commonElements.getCurrentDatePlusDaysNo0Format(10)
const accessArrangements_1 = "Test_Arrangements_1"
const accessArrangements_2 = "Test_Arrangements_2"
const workToBeCarried_1 = "Test_Work_1"
const workToBeCarried_2 = "Test_Work_1"
const endDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(12)
const endDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(14)
const originalDepositCurrency_1 = "USD - US Dollar"
const originalDepositCurrency_2 = "AED - UAE Dirham"
const originaDepositAmount_1 = "500"
const originaDepositAmount_2 = "330"
const landlord_1 = "K2 account"
const landlord_2 = "Assignee"
const finalAmount_1 = "240"
const finalAmount_2 = "720"
const deductions_1 = "500"
const deductions_2 = "570"
const reason_1 = "testReason_1"
const reason_2 = "testReason_2"
const deregistrationUpdMsg = "The The deregistration details have been updated. Thank you has been updated successfully. Thank you"
const visaCancelUpdMsg = "The The visa cancellation details have been updated. Thank you has been updated successfully. Thank you" //bug
const checkOutUpdMsg = "The The checkout details have been updated. Thank you has been updated successfully. Thank you" //bug
const cleaningUpdMsg = "The The cleaning details have been updated. Thank you has been updated successfully. Thank you"
const dilapidationsUpdMsg = "The The dilapidations details have been updated. Thank you has been updated successfully. Thank you"
const depositManagementUpdMsg = "The The deposit management details have been updated. Thank you has been updated successfully. Thank you"

describe('Departure services, documents and finance test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / Departure services page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / " + serviceName);
    });
    it('Verify De-registration Service details form', async () => {
        await familyMembers.addFamilyMember();
        await departureServicesPage.clickAddServicePartnterBtnByName(departureServiceName_1);
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_1, notes_1);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_1);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await departureServicesPage.setCompletionDateByName(departureServiceName_1, completionDate_1);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_1);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(deregistrationUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        expect(await departureServicesPage.getCompletionDateByName(departureServiceName_1)).toBe(completionDate_1);
    });
    it('Verify Edit De-registration Service details form', async () => {
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await departureServicesPage.setCompletionDateByName(departureServiceName_1, completionDate_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        expect(await departureServicesPage.getCompletionDateByName(departureServiceName_1)).toBe(completionDate_1);
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_1);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await departureServicesPage.setCompletionDateByName(departureServiceName_1, completionDate_2);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_1);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(deregistrationUpdMsg)).toBe(true)
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_2)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2)
        expect(await departureServicesPage.getCompletionDateByName(departureServiceName_1)).toBe(completionDate_2);
    });
    it('Verify  De-registration Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate_1)
    });
    it('Verify  De-registration remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_1)).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_1)).toBe(true);
    });

    it('Verify Visa cancellation Service details form', async () => {
        await departureServicesPage.clickAddServicePartnterBtnByName(departureServiceName_2);
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_1, notes_1);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_2);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await departureServicesPage.setCompletionDateByName(departureServiceName_2, completionDate_1);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_2);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaCancelUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        expect(await departureServicesPage.getCompletionDateByName(departureServiceName_2)).toBe(completionDate_1);
    });
    it('Verify Edit Visa cancellation Service details form', async () => {
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await departureServicesPage.setCompletionDateByName(departureServiceName_2, completionDate_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        expect(await departureServicesPage.getCompletionDateByName(departureServiceName_2)).toBe(completionDate_1);
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_2);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await departureServicesPage.setCompletionDateByName(departureServiceName_2, completionDate_2);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_2);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(visaCancelUpdMsg)).toBe(true)
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_2)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2)
        expect(await departureServicesPage.getCompletionDateByName(departureServiceName_2)).toBe(completionDate_2);
    });
    it('Verify Visa cancellation Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate_1)
    });
    it('Verify Visa cancellation remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_2)).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_2)).toBe(true);
    });
    it('Verify Check out Service delivery partner(s) form', async () => {
        await departureServicesPage.clickAddServicePartnterBtnByName(departureServiceName_3);
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_1, notes_1);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_3);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
    });
    it('Verify Edit Check out Service delivery partner(s) form', async () => {
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_3);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_2)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2)
    });
    it('Verify Property Check out form', async () => {
        await departureServicesPage.setPropertyCheckOut(departureServiceName_3, leaseEndDate_1, checkOut_1, chbState_1, dateOfCleaning_1, accessArrangements_1);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_3);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(checkOutUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_3)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getCheckOutDateValueByName()).toBe(checkOut_1);
        expect(await commonElements.isChbSelected(departureServicesPage.assigneePresentChb)).toBe(chbState_1);
        expect(await commonElements.isChbSelected(departureServicesPage.cleaningArrangeChb)).toBe(chbState_1);
        expect(await departureServicesPage.getDateofCleaningValueByName(departureServiceName_3)).toBe(dateOfCleaning_1);
        expect(await departureServicesPage.getAccessArrangementValue()).toBe(accessArrangements_1);
        expect(await commonElements.isChbSelected(departureServicesPage.checkOutReportReceivedChb)).toBe(chbState_1);
    });
    it('Verify Edit Property Check out form', async () => {
        await departureServicesPage.setPropertyCheckOut(departureServiceName_3, leaseEndDate_2, checkOut_2, chbState_2, dateOfCleaning_2, accessArrangements_2);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_3)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getCheckOutDateValueByName()).toBe(checkOut_1);
        expect(await commonElements.isChbSelected(departureServicesPage.assigneePresentChb)).toBe(chbState_1);
        expect(await commonElements.isChbSelected(departureServicesPage.cleaningArrangeChb)).toBe(chbState_1);
        expect(await departureServicesPage.getDateofCleaningValueByName(departureServiceName_3)).toBe(dateOfCleaning_1);
        expect(await departureServicesPage.getAccessArrangementValue()).toBe(accessArrangements_1);
        expect(await commonElements.isChbSelected(departureServicesPage.checkOutReportReceivedChb)).toBe(chbState_1);
        await departureServicesPage.setPropertyCheckOut(departureServiceName_3, leaseEndDate_2, checkOut_2, chbState_2, dateOfCleaning_2, accessArrangements_2);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_3);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(checkOutUpdMsg)).toBe(true)
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_3)).toBe(leaseEndDate_2);
        expect(await departureServicesPage.getCheckOutDateValueByName()).toBe(checkOut_2);
        expect(await commonElements.isChbSelected(departureServicesPage.assigneePresentChb)).toBe(chbState_2);
        expect(await commonElements.isChbSelected(departureServicesPage.cleaningArrangeChb)).toBe(chbState_2);
        expect(await departureServicesPage.getDateofCleaningValueByName(departureServiceName_3)).toBe(dateOfCleaning_2);
        expect(await departureServicesPage.getAccessArrangementValue()).toBe(accessArrangements_2);
        expect(await commonElements.isChbSelected(departureServicesPage.checkOutReportReceivedChb)).toBe(chbState_2);
    });

    it('Verify Check out Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate_1)
    });
    it('Verify Check out remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_3)).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_3)).toBe(true);
    });
    it('Verify Departure cleaning Service delivery partner(s) form', async () => {
        await departureServicesPage.clickAddServicePartnterBtnByName(departureServiceName_4);
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_1, notes_1);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_4);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
    });
    it('Verify Edit Departure cleaning Service delivery partner(s) form', async () => {
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_4);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_2)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2)
    });
    it('Verify Property Departure cleaning form', async () => {
        await commonElements.setDateValue(departureServicesPage.getLeaseEndDateCalendarByName(departureServiceName_4), leaseEndDate_1);
        await commonElements.setDateValue(departureServicesPage.getDateofCleaningCalendarByName(departureServiceName_4), dateOfCleaning_1);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_4);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(cleaningUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_4)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getDateofCleaningValueByName(departureServiceName_4)).toBe(dateOfCleaning_1);
    });
    it('Verify Edit Property Departure cleaning form', async () => {
        await commonElements.setDateValue(departureServicesPage.getLeaseEndDateCalendarByName(departureServiceName_4), leaseEndDate_2);
        await commonElements.setDateValue(departureServicesPage.getDateofCleaningCalendarByName(departureServiceName_4), dateOfCleaning_2);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_4)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getDateofCleaningValueByName(departureServiceName_4)).toBe(dateOfCleaning_1);
        await commonElements.setDateValue(departureServicesPage.getLeaseEndDateCalendarByName(departureServiceName_4), leaseEndDate_2);
        await commonElements.setDateValue(departureServicesPage.getDateofCleaningCalendarByName(departureServiceName_4), dateOfCleaning_2);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_4);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(cleaningUpdMsg)).toBe(true)
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_4)).toBe(leaseEndDate_2);
        expect(await departureServicesPage.getDateofCleaningValueByName(departureServiceName_4)).toBe(dateOfCleaning_2);
    });
    it('Verify Departure cleaning Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate_1)
    });
    it('Verify Departure cleaning remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_4)).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_4)).toBe(true);
    });
    it('Verify Dilapidations Service delivery partner(s) form', async () => {
        await departureServicesPage.clickAddServicePartnterBtnByName(departureServiceName_5);
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_1, notes_1);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_5);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
    });
    it('Verify Edit Dilapidations Service delivery partner(s) form', async () => {
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_5);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_2)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2)
    });
    it('Verify Dilapidations cleaning form', async () => {
        await departureServicesPage.setPropertyDilapidations(departureServiceName_5, leaseEndDate_1, workToBeCarried_1, startDate_1, endDate_1);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_5);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(dilapidationsUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_5)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getWorkToBeCarriedValue()).toBe(workToBeCarried_1);
        expect(await departureServicesPage.getStartDatedValue()).toBe(startDate_1);
        expect(await departureServicesPage.getEndDateValue()).toBe(endDate_1);
    });
    it('Verify Edit Dilapidations cleaning form', async () => {
        await departureServicesPage.setPropertyDilapidations(departureServiceName_5, leaseEndDate_2, workToBeCarried_2, startDate_2, endDate_2);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_5)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getWorkToBeCarriedValue()).toBe(workToBeCarried_1);
        expect(await departureServicesPage.getStartDatedValue()).toBe(startDate_1);
        expect(await departureServicesPage.getEndDateValue()).toBe(endDate_1);
        await departureServicesPage.setPropertyDilapidations(departureServiceName_5, leaseEndDate_2, workToBeCarried_2, startDate_2, endDate_2);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_5);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(dilapidationsUpdMsg)).toBe(true)
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_5)).toBe(leaseEndDate_2);
        expect(await departureServicesPage.getWorkToBeCarriedValue()).toBe(workToBeCarried_2);
        expect(await departureServicesPage.getStartDatedValue()).toBe(startDate_2);
        expect(await departureServicesPage.getEndDateValue()).toBe(endDate_2);
    });
    it('Verify Dilapidations Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate_1)
    });
    it('Verify Dilapidations remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_5)).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_5)).toBe(true);
    });

    it('Verify Deposit management delivery partner(s) form', async () => {
        await departureServicesPage.clickAddServicePartnterBtnByName(departureServiceName_6);
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_1, notes_1);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_6);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
    });
    it('Verify Edit Deposit management delivery partner(s) form', async () => {
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName_6);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_2)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2)
    });
    it('Verify Deposit management form', async () => {
        await departureServicesPage.setDepositManagement(departureServiceName_6, leaseEndDate_1, originalDepositCurrency_1, originaDepositAmount_1, landlord_1, finalAmount_1, deductions_1, reason_1, chbState_1);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_6);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(depositManagementUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_6)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getOriginalDepositCurrencyValue()).toBe(originalDepositCurrency_1);
        expect(await departureServicesPage.geOriginaDepositAmountValue()).toBe(originaDepositAmount_1);
        expect(await departureServicesPage.getLandlordReturnedDepositValue()).toBe(landlord_1);
        expect(await departureServicesPage.getDepositAmountValue()).toBe(finalAmount_1);
        expect(await departureServicesPage.getDeductionsValue()).toBe(deductions_1);
        expect(await departureServicesPage.getReasonForDeductionsValue()).toBe(reason_1);
        expect(await commonElements.isChbSelected(departureServicesPage.creditBackToTheaccountChb)).toBe(chbState_1);
    });
    it('Verify Edit Deposit management form', async () => {
        await departureServicesPage.setDepositManagement(departureServiceName_6, leaseEndDate_2, originalDepositCurrency_2, originaDepositAmount_2, landlord_2, finalAmount_2, deductions_2, reason_2, chbState_2);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_6)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getOriginalDepositCurrencyValue()).toBe(originalDepositCurrency_1);
        expect(await departureServicesPage.geOriginaDepositAmountValue()).toBe(originaDepositAmount_1);
        expect(await departureServicesPage.getLandlordReturnedDepositValue()).toBe(landlord_1);
        expect(await departureServicesPage.getDepositAmountValue()).toBe(finalAmount_1);
        expect(await departureServicesPage.getDeductionsValue()).toBe(deductions_1);
        expect(await departureServicesPage.getReasonForDeductionsValue()).toBe(reason_1);
        expect(await commonElements.isChbSelected(departureServicesPage.creditBackToTheaccountChb)).toBe(chbState_1);
        await departureServicesPage.setDepositManagement(departureServiceName_6, leaseEndDate_2, originalDepositCurrency_2, originaDepositAmount_2, landlord_2, finalAmount_2, deductions_2, reason_2, chbState_2);
        await departureServicesPage.clickSubsectionSaveBtn(departureServiceName_6);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(depositManagementUpdMsg)).toBe(true)
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName_6)).toBe(leaseEndDate_2);
        expect(await departureServicesPage.getOriginalDepositCurrencyValue()).toBe(originalDepositCurrency_2);
        expect(await departureServicesPage.geOriginaDepositAmountValue()).toBe(originaDepositAmount_2);
        expect(await departureServicesPage.getLandlordReturnedDepositValue()).toBe(landlord_2);
        expect(await departureServicesPage.getDepositAmountValue()).toBe(finalAmount_2);
        expect(await departureServicesPage.getDeductionsValue()).toBe(deductions_2);
        expect(await departureServicesPage.getReasonForDeductionsValue()).toBe(reason_2);
        expect(await commonElements.isChbSelected(departureServicesPage.creditBackToTheaccountChb)).toBe(chbState_2);

    });
    it('Verify Deposit management Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate_1)
    });
    it('Verify Deposit management remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_6)).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName_6)).toBe(true);
        await familyMembers.removeFamilyMember();
    });

});
