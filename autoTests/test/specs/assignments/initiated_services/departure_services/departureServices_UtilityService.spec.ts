import commonElements from '../../../../helper/commonElements';
import familyMembers from '../../../../helper/familyMembers';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import departureServicesPage from '../../../../pageobjects/assignment/services/departureServices.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const startDate = commonElements.getCurrentDateNo0Format()
const serviceName = "Departure services"
const partnerName_1 = "Roebuck"
const departureServiceName = "Utility cancellation"
const contactPerson_1 = "Test Assignee (assignee)"
const contactPerson_2 = "Test Partner (partner)"
const notes_1 = "testNote1"
const notes_2 = "testNote2"
const utilityType_1 = "Gas"
const utilityType_2 = "Electricity"
const utilityType_3 = "Water"
const utilityType_4 = "Recycling"
const utilityType_5 = "Other"
const providerName = "testProvider"
const leaseEndDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(15)
const leaseEndDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(-25)
const startMeterReading_1 = "StartMeterReading_1"
const startMeterReading_2 = "StartMeterReading_2"
const endMeterReading_1 = "endMeterReading_1"
const endMeterReading_2 = "endMeterReading_2"
const disconnectionDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(5);
const disconnectionDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(-5);
const disconnectionCost_1 = "567"
const disconnectionCost_2 = "780"
const paymentMadeBy_1 = "K2"
const paymentMadeBy_2 = "Assignee"
const utilityUpdMsg = "The The utility cancellation details have been updated. Thank you has been updated successfully. Thank you"


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
    it('Verify Utility cancellation Service delivery partner(s) form', async () => {
        await familyMembers.addFamilyMember();
        await departureServicesPage.clickAddServicePartnterBtnByName(departureServiceName);
        await commonElements.setInputValue(partnerName_1, commonElements.partnerNameInput);
        await browser.pause(2000); // No partner after clicking search btn
        await initiatedServicesPage.clickSearchBtn();
        await initiatedServicesPage.clickPartnerByName(partnerName_1);
        await initiatedServicesPage.clickAddPartnerBtn();
        await initiatedServicesPage.waitPartnerFormForDisplayed();
        await commonElements.refreshPage();
        await initiatedServicesPage.setInitiationDetails(contactPerson_1, notes_1);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
    });
    it('Verify Edit Utility cancellation Service delivery partner(s) form', async () => {
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_1)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_1)
        await initiatedServicesPage.setInitiationDetails(contactPerson_2, notes_2);
        await departureServicesPage.clickSavePartnerServiceBtn(departureServiceName);
        expect(await initiatedServicesPage.isServiceDetailsSavedMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await initiatedServicesPage.getContactPersonValue()).toBe(contactPerson_2)
        expect(await initiatedServicesPage.getNotesToPartnerValue()).toBe(notes_2)
    });
    it('Verify  De-registration Initiate service partner', async () => {
        await initiatedServicesPage.clickInitiatePartnerBtn();
        await initiatedServicesPage.clickSendEmailBtn();
        expect(await initiatedServicesPage.isInitiateServiceMsgDisplayed()).toBe(true);
        expect(await commonElements.createStandartDateForm(await initiatedServicesPage.getInitiatedPartnerDate())).toBe(startDate)
    });
    it('Verify  De-registration remove service partner', async () => {
        await initiatedServicesPage.clickRemovePartnerWithConfirm("no");
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName)).toBe(false);
        await initiatedServicesPage.clickRemovePartnerWithConfirm("yes");
        expect(await initiatedServicesPage.isPartnerRemovedMsgDisplayed()).toBe(true);
        expect(await departureServicesPage.isDepartureNoServiceLabelExisting(departureServiceName)).toBe(true);
    });
        it('Verify Property utilities cancellation (Gas)', async () => {
            await departureServicesPage.clickAddNewCancellationBtn();
            await departureServicesPage.setUtilityTypes(utilityType_1,providerName);
            await commonElements.clickDialogWindowSaveBtn();
            await departureServicesPage.setPropertyUtilities(departureServiceName,leaseEndDate_1,startMeterReading_1, endMeterReading_1, disconnectionDate_1, disconnectionCost_1, paymentMadeBy_1);
            await departureServicesPage.clickDepartureUtilitySaveBtn();
            expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
            await commonElements.refreshPage();
            expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
            expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
            expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
            expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
            expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
            expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
        });
     it('Verify Property utilities cancellation (Gas)', async () => {
            await departureServicesPage.setPropertyUtilities(departureServiceName,leaseEndDate_2,startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
            await commonElements.refreshPage();
            expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
            expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
            expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
            expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
            expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
            expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
            await departureServicesPage.setPropertyUtilities(departureServiceName,leaseEndDate_2,startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
            await departureServicesPage.clickDepartureUtilitySaveBtn();
            expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
            await commonElements.refreshPage();
            expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_2);
            expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_2);
            expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_2);
            expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_2);
            expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_2);
            expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_2);
        });
          it('Verify remove Property utilities cancellation (Gas)', async () => {
            await departureServicesPage.removeUtilityWithConfirm("no");
            expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(false);
            await commonElements.refreshPage();
            await departureServicesPage.removeUtilityWithConfirm("yes");
            expect(await departureServicesPage.isRemovedUtilityMsgDisplayed()).toBe(true);
            await commonElements.refreshPage();
            expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(true);
        });
    it('Verify Property utilities cancellation (Electricity)', async () => {
        await departureServicesPage.clickAddNewCancellationBtn();
        await departureServicesPage.setUtilityTypes(utilityType_2, providerName);
        await commonElements.clickDialogWindowSaveBtn();
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_1, startMeterReading_1, endMeterReading_1, disconnectionDate_1, disconnectionCost_1, paymentMadeBy_1);
        await departureServicesPage.clickDepartureUtilitySaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
    });
    it('Verify Property utilities cancellation (Electricity)', async () => {
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_2, startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_2, startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
        await departureServicesPage.clickDepartureUtilitySaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_2);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_2);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_2);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_2);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_2);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_2);
    });
    it('Verify remove Property utilities cancellation (Electricity)', async () => {
        await departureServicesPage.removeUtilityWithConfirm("no");
        expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(false);
        await commonElements.refreshPage();
        await departureServicesPage.removeUtilityWithConfirm("yes");
        expect(await departureServicesPage.isRemovedUtilityMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(true);
    });
    it('Verify Property utilities cancellation (Water)', async () => {
        await departureServicesPage.clickAddNewCancellationBtn();
        await departureServicesPage.setUtilityTypes(utilityType_3, providerName);
        await commonElements.clickDialogWindowSaveBtn();
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_1, startMeterReading_1, endMeterReading_1, disconnectionDate_1, disconnectionCost_1, paymentMadeBy_1);
        await departureServicesPage.clickDepartureUtilitySaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
    });
    it('Verify Property utilities cancellation (Water)', async () => {
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_2, startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_2, startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
        await departureServicesPage.clickDepartureUtilitySaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_2);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_2);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_2);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_2);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_2);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_2);
    });
    it('Verify remove Property utilities cancellation (Water)', async () => {
        await departureServicesPage.removeUtilityWithConfirm("no");
        expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(false);
        await commonElements.refreshPage();
        await departureServicesPage.removeUtilityWithConfirm("yes");
        expect(await departureServicesPage.isRemovedUtilityMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(true);
    });
    it('Verify Property utilities cancellation (Recycling)', async () => {
        await departureServicesPage.clickAddNewCancellationBtn();
        await departureServicesPage.setUtilityTypes(utilityType_4, providerName);
        await commonElements.clickDialogWindowSaveBtn();
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_1, startMeterReading_1, endMeterReading_1, disconnectionDate_1, disconnectionCost_1, paymentMadeBy_1);
        await departureServicesPage.clickDepartureUtilitySaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
    });
    it('Verify Property utilities cancellation (Recycling)', async () => {
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_2, startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_2, startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
        await departureServicesPage.clickDepartureUtilitySaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_2);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_2);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_2);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_2);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_2);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_2);
    });
    it('Verify remove Property utilities cancellation (Recycling)', async () => {
        await departureServicesPage.removeUtilityWithConfirm("no");
        expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(false);
        await commonElements.refreshPage();
        await departureServicesPage.removeUtilityWithConfirm("yes");
        expect(await departureServicesPage.isRemovedUtilityMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(true);
    });
    it('Verify Property utilities cancellation (Other)', async () => {
        await departureServicesPage.clickAddNewCancellationBtn();
        await departureServicesPage.setUtilityTypes(utilityType_5, providerName);
        await commonElements.clickDialogWindowSaveBtn();
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_1, startMeterReading_1, endMeterReading_1, disconnectionDate_1, disconnectionCost_1, paymentMadeBy_1);
        await departureServicesPage.clickDepartureUtilitySaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
    });
    it('Verify Property utilities cancellation (Other)', async () => {
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_2, startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_1);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_1);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_1);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_1);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_1);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_1);
        await departureServicesPage.setPropertyUtilities(departureServiceName, leaseEndDate_2, startMeterReading_2, endMeterReading_2, disconnectionDate_2, disconnectionCost_2, paymentMadeBy_2);
        await departureServicesPage.clickDepartureUtilitySaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(utilityUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.getLeaseEndDateValueByName(departureServiceName)).toBe(leaseEndDate_2);
        expect(await departureServicesPage.getStartMeterReadingValue()).toBe(startMeterReading_2);
        expect(await departureServicesPage.getEndMeterReadingValue()).toBe(endMeterReading_2);
        expect(await departureServicesPage.getDisconnectionDateValue()).toBe(disconnectionDate_2);
        expect(await departureServicesPage.getDisconnectionCostValue()).toBe(disconnectionCost_2);
        expect(await departureServicesPage.getPaidByValue()).toBe(paymentMadeBy_2);
    });
    it('Verify remove Property utilities cancellation (Other)', async () => {
        await departureServicesPage.removeUtilityWithConfirm("no");
        expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(false);
        await commonElements.refreshPage();
        await departureServicesPage.removeUtilityWithConfirm("yes");
        expect(await departureServicesPage.isRemovedUtilityMsgDisplayed()).toBe(true);
        await commonElements.refreshPage();
        expect(await departureServicesPage.isNoAddedUtilityServiceLabelExisting()).toBe(true);
        await familyMembers.removeFamilyMember();
    });
});
