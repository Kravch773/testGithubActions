import commonElements from '../../helper/commonElements';
import passSignIn from '../../helper/passSignIn';
import assignmentsPage from '../../pageobjects/clients/assignments.page';
import clientsPage from '../../pageobjects/clients/clients.page';

const assignmentLabelText = "All client's assignment"
const originCountry = "United States"
const originCity = "Los Angeles"
const destinationCountry = "Germany"
const destinationCity = "Frankfurt am"
const assignmentType_1 = "Commuter"
const assignmentType_2 = "Long term assignment (LTA)"
const assignmentType_3 = "New hire"
const assignmentType_4 = "Permanent transfer (PT) "
const assignmentType_5 = "Repatriation"
const assignmentType_6 = "Rotational"
const assignmentType_7 = "Short term assignment (STA)"
const assignmentType_8 = "US Domestic"
const startDate = commonElements.getCurrentDateNo0Format()
const endDate = commonElements.getCurrentDatePlusDaysNo0Format(15)
const currency = "US Dollar"
const estimationPackageMsg = "Estimate has been saved without any packages selected"
const payingPersonLabel = "QA Test Client will pay"
const budgetTimeOption = " Weekly "
const budgetСurrency = "USD"
const budgetValue = "400"
const estimationWithPackageMsg = "Estimate package selection ok"
const extraServiceLabel_1 = "Home sale"
const extraServiceLabel_2 = "Assignment management"
const extraServiceLabel_3 = "Lumpsum"

describe('Create estimation form test', () => {
    before(async () => {
        await passSignIn.signIn();
    });
    it('open clients assignment', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        expect(await assignmentsPage.getAssignmentsLabelText()).toBe(assignmentLabelText)
    });
    it('Verify Create estimation Step 1: Assignment details', async () => {
        await assignmentsPage.clickCreateEstimateBtn();
        await assignmentsPage.clickBackBtn();
        expect(await assignmentsPage.getAssignmentsLabelText()).toBe(assignmentLabelText);
        await assignmentsPage.clickCreateEstimateBtn();
        await commonElements.setOriginRegion(originCountry,originCity);
        await commonElements.setDestinationRegion(destinationCountry,destinationCity);
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
        expect(await commonElements.isEndDateCalendarExisting()).toBe(true);
        await commonElements.setStartDate(startDate);
        await commonElements.setEndDate(endDate);
        await commonElements.setSelectValue(currency, assignmentsPage.currencySelect);
        await assignmentsPage.clickNextBtn();
        expect(await assignmentsPage.isSanctionMsgDisplayed()).toBe(true);
        await assignmentsPage.clickDialogOkBtn();
        await assignmentsPage.waitSanctionMsgForNotDisplayed();
        await assignmentsPage.clickNextBtn();
        expect(await assignmentsPage.isSanctionMsgDisplayed()).toBe(true);
        await assignmentsPage.clickDialogAmAprovedBtn();
        await assignmentsPage.waitSanctionMsgForNotDisplayed();
        await assignmentsPage.clickNextBtn();
    });
    it('Step 2: Available packages,Step 3: Select individual services?', async () => {
        await assignmentsPage.clickChoosePackageBtn();
        expect(await assignmentsPage.serviceQty()).toBe(18);
        await assignmentsPage.clickBackBtn();
        expect(await assignmentsPage.isCurrentPackageBtnDisplayed()).toBe(true);
        await assignmentsPage.clickNextBtn();
        await commonElements.isPopupMsgDisplayed(estimationPackageMsg);
        expect(await assignmentsPage.serviceQty()).toBe(28);
        await assignmentsPage.clickBackBtn();
        await assignmentsPage.clickChoosePackageBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(estimationWithPackageMsg)).toBe(true)
        await assignmentsPage.setChbByLabel(extraServiceLabel_1,true);
        await assignmentsPage.setChbByLabel(extraServiceLabel_2,true);
        await assignmentsPage.setChbByLabel(extraServiceLabel_3,true);
    });
    it('Step 4: Budgets,Step 5: Summary', async () => {
        await assignmentsPage.clickNextBtn();
        await commonElements.setRbtByLabel(payingPersonLabel);
        await commonElements.setSelectValue(budgetСurrency);
        await commonElements.setInputValue(budgetValue,assignmentsPage.budgetInput);
        await commonElements.setDropDownValue(budgetTimeOption)
        await assignmentsPage.clickNextBtn();
        expect(await assignmentsPage.getOriginLabelText()).toContain(originCity);
        expect(await assignmentsPage.getDestinationLabelText()).toContain(destinationCity);
        expect(await assignmentsPage.getTypeLabelText()).toContain(assignmentType_8);
        expect(await commonElements.createStandartDateForm(await assignmentsPage.getStartDateLabelText())).toBe(startDate);
        expect(await commonElements.createStandartDateForm(await assignmentsPage.getEndDateLabelText())).toContain(commonElements.getCurrentDatePlusDaysNo0Format(15,passSignIn.isGithubTest,false));
        expect(await assignmentsPage.getPersonPayingLabelText()).toContain(payingPersonLabel);
        expect(await assignmentsPage.getExtraServicesLabelText(1)).toBe(extraServiceLabel_1);
        expect(await assignmentsPage.getExtraServicesLabelText(2)).toBe(extraServiceLabel_2);
        expect(await assignmentsPage.getExtraServicesLabelText(3)).toBe(extraServiceLabel_3);
        expect(await assignmentsPage.isPrintBtnDisplayed()).toBe(true);
    });
});


