import addServiceDocument from '../../../../helper/addServiceDocument';
import commonElements from '../../../../helper/commonElements';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import tenancyManagementPage from '../../../../pageobjects/assignment/services/tenancyManagement.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';
import Page from '../../../../pageobjects/Page';

const startDate_1 = commonElements.getCurrentDateNo0Format();
const startDate_2 = commonElements.getCurrentDateNo0Format();
const serviceName = "Tenancy management"
const property = "Existing property"
const propertyAddress_1 = " TestStreet_11 (TestStreet_11)"
const propertyAddress_2 = " TestStreet_21 (TestStreet_21)"
const servicesRequired_1 = "Lease management"
const servicesRequired_2 = "Deposit payment"
const servicesRequired_3 = "Property inspection"
const agentDetails_1 = "testAgenDetails_1"
const agentDetails_2 = "testAgenDetails_2"
const landlordDetails_1 = "testLandlordDetails_1"
const landlordDetails_2 = "testLandlordDetails_2"
const address_1 = ["TestStreet_11", "TestStreet_12", "TestStreet_13", "TestStreet_14"]
const address_2 = ["TestStreet_21", "TestStreet_22", "TestStreet_23", "TestStreet_24"]
const city_1 = "London"
const city_2 = "London"
const stateCountry_1 = "testState_1"
const stateCountry_2 = "testState_2"
const postalCode_1 = "045453"
const postalCode_2 = "222353"
const country_1 = "United Kingdom"
const country_2 = "United States"
const accommodationAddedMsg = "A new tenancy management instance has been added successfully. Thank you."
const accommodationUpdMsg = "The service collection has been updated successfully"
const accommodationRemoveMsg = "The service collection has been deleted successfully"
const endDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const endDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(15)
const tenancyExpiryDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(6)
const tenancyExpiryDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(16)
const breakClauseRbt_1 = "No"
const breakClauseRbt_2 = "Yes"
const noticeRequired_1 = "2"
const noticeRequired_2 = "3"
const noticeRequiredPeriod_1 = "Days"
const noticeRequiredPeriod_2 = "Weeks"
const renewOptionRbtf_1 = "No"
const renewOptionRbtf_2 = "Yes"
const breakClauseAfter_1 = "2"
const breakClauseAfter_2 = "1"
const breakClauseDetails_1 = "testClauseDetails_1"
const breakClauseDetails_2 = "testClauseDetails_2"
const renewDetails_1 = "testRenewDetails_1"
const renewDetails_2 = "testRenewDetails_2"
const depositCurrency_1 = "EUR"
const depositCurrency_2 = "USD"
const depositAmount_1 = "500"
const depositAmount_2 = "900"
const paidToPerson_1 = "Agent"
const paidToPerson_2 = "Assignee"
const servicePerson_1 = "K2"
const servicePerson_2 = "Client"
const accommodationDetailsUpdMsg = "has been updated successfully. Thank you"
const inspectionDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(3)
const inspectionDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(7)
const reminderDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(2)
const reminderDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(6)
const firstInspectionDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(4)
const firstInspectionDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const inspectionFrequency_1 = "Daily"
const inspectionFrequency_2 = "Fortnightly"
const notes_1 = "testNote1"
const notes_2 = "testNote2"
const removeAccommodationMsg = " The service collection has been deleted successfully"

describe('Tenancy management Service, documents and finance test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / Tenancy managemente page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await Page.click('//paginator//a[text()=" 2 "]');
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / " + serviceName);
    });

    it('Verify ', async () => {
        await tenancyManagementPage.clickAddNewAccommodationBtn();
        await commonElements.setRbtByLabel(property);
        await tenancyManagementPage.setExistingAddressesDD(propertyAddress_1);
        await commonElements.setChbByLabel(servicesRequired_1, true);
        await commonElements.setChbByLabel(servicesRequired_2, false);
        await commonElements.setChbByLabel(servicesRequired_3, false);
        await tenancyManagementPage.setAgentDetails(agentDetails_1);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_1);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationAddedMsg)).toBe(true);
        expect(await initiatedServicesPage.getAddressBlockTextByStreetName(address_1[0])).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${stateCountry_1}\n${postalCode_1}`)
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_2)).toBe(false);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_3)).toBe(false);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_1);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_1);
    });
    it('Verify edit ', async () => {
        await tenancyManagementPage.clickAccommodationEditBtn();
        await tenancyManagementPage.setExistingAddressesDD(propertyAddress_2);
        await commonElements.setChbByLabel(servicesRequired_1, false);
        await commonElements.setChbByLabel(servicesRequired_2, true);
        await commonElements.setChbByLabel(servicesRequired_3, true);
        await tenancyManagementPage.setAgentDetails(agentDetails_2);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_2);
        await commonElements.clickDialogWindowCancelBtn();
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getAddressBlockTextByStreetName(address_1[0])).toContain(`${address_1[0]}\n${address_1[1]}\n${address_1[2]}\n${address_1[3]}\n${city_1}\n${stateCountry_1}\n${postalCode_1}`)
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_1)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_2)).toBe(false);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_3)).toBe(false);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_1);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_1);
        await tenancyManagementPage.clickAccommodationEditBtn();
        await tenancyManagementPage.setExistingAddressesDD(propertyAddress_2);
        await commonElements.setChbByLabel(servicesRequired_1, false);
        await commonElements.setChbByLabel(servicesRequired_2, true);
        await commonElements.setChbByLabel(servicesRequired_3, true);
        await tenancyManagementPage.setDialogWindAgentDetails(agentDetails_2);
        await tenancyManagementPage.setDialogWindLandlordDetails(landlordDetails_2);
        await commonElements.clickDialogWindowSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationUpdMsg)).toBe(true);
        expect(await initiatedServicesPage.getAddressBlockTextByStreetName(address_2[0])).toContain(`${address_2[0]}\n${address_2[1]}\n${address_2[2]}\n${address_2[3]}\n${city_2}\n${stateCountry_2}\n${postalCode_2}`)
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_1)).toBe(false);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_2)).toBe(true);
        expect(await initiatedServicesPage.getNAChbLabelIconState(servicesRequired_3)).toBe(true);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_2);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_2);
    });
    it('Verify edit 2', async () => {
        await tenancyManagementPage.setAgentDetails(agentDetails_1);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_1);
        await tenancyManagementPage.clickAccommodationSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_1);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_1);
        await tenancyManagementPage.setAgentDetails(agentDetails_2);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_2);
        await commonElements.refreshPage();
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_1);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_1);
        await tenancyManagementPage.setAgentDetails(agentDetails_2);
        await tenancyManagementPage.setlandlordDetails(landlordDetails_2);
        await tenancyManagementPage.clickAccommodationSaveBtn();
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        expect(await tenancyManagementPage.getAgentDetailsValue()).toBe(agentDetails_2);
        expect(await tenancyManagementPage.getLandlordDetailsValue()).toBe(landlordDetails_2);
    });
    it('Verify lease ', async () => {
        await initiatedServicesPage.clickAddLeaseDetailsBtn();
        await initiatedServicesPage.setNewLeaseDetail(startDate_1, endDate_1, tenancyExpiryDate_1, breakClauseRbt_1, noticeRequired_1, noticeRequiredPeriod_1, renewOptionRbtf_1)
        await commonElements.clickDialogWindowSaveBtn();
        await initiatedServicesPage.clickLeaseEditBtnByNum("1");
        expect(await initiatedServicesPage.getLeaseStartDate()).toBe(startDate_1);
        expect(await initiatedServicesPage.getLeaseEndDate()).toBe(endDate_1);
        expect(await initiatedServicesPage.getTenancyExpiryTriggerDate()).toBe(tenancyExpiryDate_1);
        expect(await initiatedServicesPage.getBreakClauseRbtStateByLabel(breakClauseRbt_1)).toBe(true);
        expect(await initiatedServicesPage.getNoticeRequiredValue()).toBe(noticeRequired_1);
        expect(await initiatedServicesPage.getNoticePeriodUnitsValue()).toBe(noticeRequiredPeriod_1);
        expect(await initiatedServicesPage.geRenewOptionRbtStateByLabel(renewOptionRbtf_1)).toBe(true);
    });
    it('Verify lease ', async () => {
        await initiatedServicesPage.setNewLeaseDetail(startDate_2, endDate_2, tenancyExpiryDate_2, breakClauseRbt_2, noticeRequired_2, noticeRequiredPeriod_2, renewOptionRbtf_2);
        await initiatedServicesPage.setLeaseBreakClauseDetail(breakClauseAfter_1, breakClauseDetails_1);
        await initiatedServicesPage.setLeaseRenewDetails(renewDetails_1);
        await commonElements.clickDialogWindowCancelBtn();
        await initiatedServicesPage.clickLeaseEditBtnByNum("1");
        expect(await initiatedServicesPage.getLeaseStartDate()).toBe(startDate_1);
        expect(await initiatedServicesPage.getLeaseEndDate()).toBe(endDate_1);
        expect(await initiatedServicesPage.getTenancyExpiryTriggerDate()).toBe(tenancyExpiryDate_1);
        expect(await initiatedServicesPage.getBreakClauseRbtStateByLabel(breakClauseRbt_1)).toBe(true);
        expect(await initiatedServicesPage.getNoticeRequiredValue()).toBe(noticeRequired_1);
        expect(await initiatedServicesPage.getNoticePeriodUnitsValue()).toBe(noticeRequiredPeriod_1);
        expect(await initiatedServicesPage.geRenewOptionRbtStateByLabel(renewOptionRbtf_1)).toBe(true);
        await initiatedServicesPage.setNewLeaseDetail(startDate_2, endDate_2, tenancyExpiryDate_2, breakClauseRbt_2, noticeRequired_2, noticeRequiredPeriod_2, renewOptionRbtf_2);
        await initiatedServicesPage.setLeaseBreakClauseDetail(breakClauseAfter_1, breakClauseDetails_1);
        await initiatedServicesPage.setLeaseRenewDetails(renewDetails_1);
        await commonElements.clickDialogWindowSaveBtn();
        await initiatedServicesPage.clickLeaseEditBtnByNum("1");
        expect(await initiatedServicesPage.getLeaseStartDate()).toBe(startDate_2);
        expect(await initiatedServicesPage.getLeaseEndDate()).toBe(endDate_2);
        expect(await initiatedServicesPage.getTenancyExpiryTriggerDate()).toBe(tenancyExpiryDate_2);
        expect(await initiatedServicesPage.getBreakClauseRbtStateByLabel(breakClauseRbt_2)).toBe(true);
        expect(await initiatedServicesPage.getNoticeRequiredValue()).toBe(noticeRequired_2);
        expect(await initiatedServicesPage.getNoticePeriodUnitsValue()).toBe(noticeRequiredPeriod_2);
        expect(await initiatedServicesPage.geRenewOptionRbtStateByLabel(renewOptionRbtf_2)).toBe(true);
        expect(await initiatedServicesPage.getBreakClauseAfterValue()).toBe(breakClauseAfter_1);
        expect(await initiatedServicesPage.getBreakClauseDetailsValue()).toBe(breakClauseDetails_1);
        expect(await initiatedServicesPage.getRenewDetailsValue()).toBe(renewDetails_1);
    });
    it('Verify lease ', async () => {
        await commonElements.refreshPage();
        await initiatedServicesPage.clickLeaseEditBtnByNum("1");
        await initiatedServicesPage.setLeaseBreakClauseDetail(breakClauseAfter_2, breakClauseDetails_2);
        await initiatedServicesPage.setLeaseRenewDetails(renewDetails_2);
        await commonElements.clickDialogWindowCancelBtn();
        await commonElements.refreshPage();
        await initiatedServicesPage.clickLeaseEditBtnByNum("1");
        expect(await initiatedServicesPage.getBreakClauseAfterValue()).toBe(breakClauseAfter_1);
        expect(await initiatedServicesPage.getBreakClauseDetailsValue()).toBe(breakClauseDetails_1);
        expect(await initiatedServicesPage.getRenewDetailsValue()).toBe(renewDetails_1);
        await initiatedServicesPage.setLeaseBreakClauseDetail(breakClauseAfter_2, breakClauseDetails_2);
        await initiatedServicesPage.setLeaseRenewDetails(renewDetails_2);
        await commonElements.clickDialogWindowSaveBtn();
        await initiatedServicesPage.clickLeaseEditBtnByNum("1");
        expect(await initiatedServicesPage.getBreakClauseAfterValue()).toBe(breakClauseAfter_2);
        expect(await initiatedServicesPage.getBreakClauseDetailsValue()).toBe(breakClauseDetails_2);
        expect(await initiatedServicesPage.getRenewDetailsValue()).toBe(renewDetails_2);
        await commonElements.clickDialogWindowCancelBtn();
    });
    it('Verify set deposit Payment form', async () => {
        await initiatedServicesPage.setDepositPayment(depositCurrency_1, depositAmount_1, servicePerson_1, paidToPerson_1);
        await initiatedServicesPage.clickDepositPaymentSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationDetailsUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getOriginalDepositCurrencyValue()).toContain(depositCurrency_1);
        expect(await initiatedServicesPage.getOriginalDepositAmountValue()).toBe(depositAmount_1);
        expect(await initiatedServicesPage.getDepositPaidByValue()).toBe(servicePerson_1);
        expect(await initiatedServicesPage.getDepositPaidToValue()).toBe(paidToPerson_1);
    });
    it('Verify edit deposit Payment form', async () => {
        await initiatedServicesPage.setDepositPayment(depositCurrency_2, depositAmount_2, servicePerson_2, paidToPerson_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getOriginalDepositCurrencyValue()).toContain(depositCurrency_1);
        expect(await initiatedServicesPage.getOriginalDepositAmountValue()).toBe(depositAmount_1);
        expect(await initiatedServicesPage.getDepositPaidByValue()).toBe(servicePerson_1);
        expect(await initiatedServicesPage.getDepositPaidToValue()).toBe(paidToPerson_1);
        await initiatedServicesPage.setDepositPayment(depositCurrency_2, depositAmount_2, servicePerson_2, paidToPerson_2);
        await initiatedServicesPage.clickDepositPaymentSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationDetailsUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getOriginalDepositCurrencyValue()).toContain(depositCurrency_2);
        expect(await initiatedServicesPage.getOriginalDepositAmountValue()).toBe(depositAmount_2);
        expect(await initiatedServicesPage.getDepositPaidByValue()).toBe(servicePerson_2);
        expect(await initiatedServicesPage.getDepositPaidToValue()).toBe(paidToPerson_2);
    });
    it('Verify set Property inspection and notes form', async () => {
        await tenancyManagementPage.setPropertyInspection(inspectionDate_1, reminderDate_1, firstInspectionDate_1, inspectionFrequency_1);
        await tenancyManagementPage.clickPropertyInspectionSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationDetailsUpdMsg)).toBe(true);
        await tenancyManagementPage.setPropertyNotes(notes_1);
        await tenancyManagementPage.clickPropertyNotesSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationDetailsUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await tenancyManagementPage.getPropertyNotesValue()).toContain(notes_1);
        expect(await tenancyManagementPage.getInspectionDateValue()).toContain(inspectionDate_1);
        expect(await tenancyManagementPage.getReminderDateValue()).toBe(reminderDate_1);
        expect(await tenancyManagementPage.getFirstInspectionDateValue()).toBe(firstInspectionDate_1);
        expect(await tenancyManagementPage.getInspectionFrequencyValue()).toBe(inspectionFrequency_1);
    });
    it('Verify edit Property inspection  form', async () => {
        await tenancyManagementPage.setPropertyInspection(inspectionDate_2, reminderDate_2, firstInspectionDate_2, inspectionFrequency_2);
        await tenancyManagementPage.setPropertyNotes(notes_2);
        await commonElements.refreshPage();
        expect(await tenancyManagementPage.getInspectionDateValue()).toContain(inspectionDate_1);
        expect(await tenancyManagementPage.getReminderDateValue()).toBe(reminderDate_1);
        expect(await tenancyManagementPage.getFirstInspectionDateValue()).toBe(firstInspectionDate_1);
        expect(await tenancyManagementPage.getInspectionFrequencyValue()).toBe(inspectionFrequency_1);
        await tenancyManagementPage.setPropertyInspection(inspectionDate_2, reminderDate_2, firstInspectionDate_2, inspectionFrequency_2);
        await tenancyManagementPage.clickPropertyInspectionSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationDetailsUpdMsg)).toBe(true);
        await tenancyManagementPage.setPropertyNotes(notes_2);
        await tenancyManagementPage.clickPropertyNotesSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(accommodationDetailsUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await tenancyManagementPage.getInspectionDateValue()).toContain(inspectionDate_2);
        expect(await tenancyManagementPage.getReminderDateValue()).toBe(reminderDate_2);
        expect(await tenancyManagementPage.getFirstInspectionDateValue()).toBe(firstInspectionDate_2);
        expect(await tenancyManagementPage.getInspectionFrequencyValue()).toBe(inspectionFrequency_2);
    });
    it('Verify remove service partner', async () => {
        await tenancyManagementPage.removeAccommodationrWithConfirm("no");
        expect(await tenancyManagementPage.isNoAccommodationLabelExists()).toBe(false);
        await tenancyManagementPage.removeAccommodationrWithConfirm("yes");
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(removeAccommodationMsg)).toBe(true);
        expect(await tenancyManagementPage.isNoAccommodationLabelExists()).toBe(true);
    });
});
