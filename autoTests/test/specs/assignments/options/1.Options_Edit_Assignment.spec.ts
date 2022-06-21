import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assignmentOptionPage from '../../../pageobjects/assignment/assignmentOption.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const originCountry_1 = "France"
const originCity_1 = "Paris"
const destinationCountry_1 = "Italy"
const destinationCity_1 = "Rome"
const originCountry_2 = "United Kingdom"
const originCity_2 = "City of London"
const destinationCountry_2 = "Germany"
const destinationCity_2 = "Frankfurt am"
const assignmentType_1 = "Commuter"
const assignmentType_2 = "Long term assignment (LTA)"
const assignmentType_3 = "New hire"
const assignmentType_4 = "Permanent transfer (PT) "
const assignmentType_5 = "Repatriation"
const assignmentType_6 = "Rotational"
const assignmentType_7 = "Short term assignment (STA)"
const assignmentType_8 = "US Domestic"
const startDate_1 = commonElements.getCurrentDateNo0Format()
const startDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(3)
const endDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(7)
const endDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(10)
// const subsidiary_1 = "QA Subsidiary" bug no subsidiary 
const subsidiary_1 = "Test Subsidiary"
const subsidiary_2 = "Test Subsidiary"
const invoicingOffice_1 = "London"
const invoicingOffice_2 = "Capetown"
const clientContact_1 = "test 2 hr"
const clientContact_2 = "Hr for test"
const serviceLevel_1 = "Relocate"
const serviceLevel_2 = "K2 bespoke"
const notesText = "TestNote"
const assignmentUpdMsg = "Assignment details updated"

describe('Options_Edit_Assignment tab test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('open ClientsPage and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await assignmentOptionPage.clickAssignmentOptionTab();
        expect(await assignmentOptionPage.getAssignmentLabelText()).toBe("Edit assignment");
    });
    it('Verify AssignmentType and removeCityBtn', async () => {
        await commonElements.setAssignmentTypeDD(assignmentType_1);
        expect(await commonElements.isEndDateCalendarExisting()).toBe(true);
        await commonElements.setAssignmentTypeDD(assignmentType_2);
        expect(await commonElements.isEndDateCalendarExisting()).toBe(true);
        await commonElements.setAssignmentTypeDD(assignmentType_3);
        expect(await commonElements.isEndDateCalendarNotExisting()).toBe(true);
        await commonElements.setAssignmentTypeDD(assignmentType_4);
        expect(await commonElements.isEndDateCalendarNotExisting()).toBe(true);
        await commonElements.setAssignmentTypeDD(assignmentType_5);
        expect(await commonElements.isEndDateCalendarNotExisting()).toBe(true);
        await commonElements.setAssignmentTypeDD(assignmentType_6);
        expect(await commonElements.isEndDateCalendarExisting()).toBe(true);
        await commonElements.setAssignmentTypeDD(assignmentType_7);
        expect(await commonElements.isEndDateCalendarExisting()).toBe(true);
        await commonElements.setAssignmentTypeDD(assignmentType_8);
        await assignmentOptionPage.clickRemoveCityIcon();
        await assignmentOptionPage.clickRemoveCityIcon();
        expect(await assignmentOptionPage.isOriginCityNotExisting()).toBe(true);
        expect(await assignmentOptionPage.isDestinationCityNotExistin()).toBe(true);
    });
    it('Verify set assignment details', async () => {
        await commonElements.setOriginRegion(originCountry_1, originCity_1);
        await commonElements.setDestinationRegion(destinationCountry_1, destinationCity_1);
        await commonElements.setStartDate(startDate_1);
        await commonElements.setEndDate(endDate_1);
        await commonElements.setAssignmentSubsidiary(subsidiary_1);
        await assignmentOptionPage.setInvoicingOffice(invoicingOffice_1);
        await commonElements.setSelectValue(clientContact_1, commonElements.clientContactInput);
        await commonElements.setNoteInput(notesText);
        await commonElements.setDropDownValue(serviceLevel_1, commonElements.serviceLvlDD);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(assignmentUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.getOriginCountryValue()).toBe(originCountry_1);
        expect(await assignmentOptionPage.getDestinationCountryValue()).toBe(destinationCountry_1);
        expect(await assignmentOptionPage.getOriginCityValue()).toBe(originCity_1);
        expect(await assignmentOptionPage.getDestinationCityValue()).toBe(destinationCity_1);
        expect(await assignmentOptionPage.getAssignmentType()).toBe(assignmentType_8);
        expect(await commonElements.createStandartDateForm(await commonElements.getStartDateValue())).toBe(startDate_1);
        expect(await commonElements.createStandartDateForm(await commonElements.getEndDateValue())).toBe(endDate_1);
        expect(await assignmentOptionPage.getSubsidiaryValue()).toContain(subsidiary_1);
        expect(await assignmentOptionPage.getInvoicingOfficeValue()).toBe(invoicingOffice_1);
        expect(await assignmentOptionPage.getClientContact()).toBe(clientContact_1);
        expect(await assignmentOptionPage.getserviceLvlValue()).toBe(serviceLevel_1);
    });
    it('Verify Edit assignment details', async () => {
        await commonElements.setOriginRegion(originCountry_2, originCity_2);
        await commonElements.setDestinationRegion(destinationCountry_2, destinationCity_2);
        await commonElements.setStartDate(startDate_2);
        await commonElements.setEndDate(endDate_2);
        await commonElements.setAssignmentSubsidiary(subsidiary_2);
        await assignmentOptionPage.setInvoicingOffice(invoicingOffice_2);
        await commonElements.setSelectValue(clientContact_2, commonElements.clientContactInput);
        await commonElements.setNoteInput(notesText);
        await commonElements.setDropDownValue(serviceLevel_2, commonElements.serviceLvlDD);
        await commonElements.refreshPage();
        expect(await assignmentOptionPage.getOriginCountryValue()).toBe(originCountry_1);
        expect(await assignmentOptionPage.getDestinationCountryValue()).toBe(destinationCountry_1);
        expect(await assignmentOptionPage.getOriginCityValue()).toBe(originCity_1);
        expect(await assignmentOptionPage.getDestinationCityValue()).toBe(destinationCity_1);
        expect(await assignmentOptionPage.getAssignmentType()).toBe(assignmentType_8);
        expect(await commonElements.createStandartDateForm(await commonElements.getStartDateValue())).toBe(startDate_1);
        expect(await commonElements.createStandartDateForm(await commonElements.getEndDateValue())).toBe(endDate_1);
        expect(await assignmentOptionPage.getSubsidiaryValue()).toContain(subsidiary_1);
        expect(await assignmentOptionPage.getInvoicingOfficeValue()).toBe(invoicingOffice_1);
        expect(await assignmentOptionPage.getClientContact()).toBe(clientContact_1);
        expect(await assignmentOptionPage.getserviceLvlValue()).toBe(serviceLevel_1);
        await commonElements.setOriginRegion(originCountry_2, originCity_2);
        await commonElements.setDestinationRegion(destinationCountry_2, destinationCity_2);
        await commonElements.setStartDate(startDate_2);
        await commonElements.setEndDate(endDate_2);
        await commonElements.setAssignmentSubsidiary(subsidiary_2);
        await assignmentOptionPage.setInvoicingOffice(invoicingOffice_2);
        await commonElements.setSelectValue(clientContact_2, commonElements.clientContactInput);
        await commonElements.setNoteInput(notesText);
        await commonElements.setDropDownValue(serviceLevel_2, commonElements.serviceLvlDD);
        await commonElements.clickSaveBtn();
        await commonElements.refreshPage();

        expect(await assignmentOptionPage.getOriginCountryValue()).toBe(originCountry_2);
        expect(await assignmentOptionPage.getDestinationCountryValue()).toBe(destinationCountry_2);
        expect(await assignmentOptionPage.getOriginCityValue()).toBe(originCity_2);
        expect(await assignmentOptionPage.getDestinationCityValue()).toContain(destinationCity_2);
        expect(await assignmentOptionPage.getAssignmentType()).toBe(assignmentType_8);
        expect(await commonElements.createStandartDateForm(await commonElements.getStartDateValue())).toBe(startDate_2);
        expect(await commonElements.createStandartDateForm(await commonElements.getEndDateValue())).toBe(endDate_2);
        expect(await assignmentOptionPage.getSubsidiaryValue()).toContain(subsidiary_2);
        expect(await assignmentOptionPage.getInvoicingOfficeValue()).toBe(invoicingOffice_2);
        expect(await assignmentOptionPage.getClientContact()).toBe(clientContact_2);
        expect(await assignmentOptionPage.getserviceLvlValue()).toBe(serviceLevel_2);
    });

});