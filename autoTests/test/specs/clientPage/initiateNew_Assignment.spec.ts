import commonElements from '../../helper/commonElements';
import passSignIn from '../../helper/passSignIn';
import assignmentsPage from '../../pageobjects/clients/assignments.page';
import clientsPage from '../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentLabelText = "All client's assignment"
const assignmentUserType_1 = "New assignee"
const assignmentUserType_2 = "Existing assignee"
const existingFirstName = "QATestHR"
const existingLastName = "QALastName"
const existingEmail = "QAtest@testqamail.com"
const titleInput = "MrTest"
const firstName = "FirstNameQA"
const lastName = "LastNameQA"
const gender = "Male"
const nationality = "American"
const email = "QATestMailQA@testmail.com"
const homePhone = "7400 123456"
const workPhone = "7400 123457"
const mobilePhone = "7400 123458"
const maritalStatus = " Long Term Relationship "
const doFDate = "11.11.1991"
const subsidiary = "Test Subsidiary"
const serviceLevel = "VIP"
const countryQty = 175
const originCountry = "United Kingdom"
const originCity = "City of London"
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
const startDate = "11.11.2021"
const endDate = "11.12.2021"
const clientContact = "Hr for test"
const partnerGender = "Female"
const partnerMaritalStatus = "Married"
const otherPersonMaritalStatus = "Not disclosed"
const assignmentPackageMsg = "Assignment has been saved without any packages selected"
const payingPersonLabel = "Test Subsidiary will pay"
const budgetTimeOption = " Weekly "
const budgetСurrency = "USD"
const budgetAmount = "500"
const assignmentWithPackageMsg = "Assignment package selection ok"
const extraServiceLabel_1 = "Home sale"
const extraServiceLabel_2 = "Assignment management"
const extraServiceLabel_3 = "Lumpsum"
const allowanceType = "Select from existing allowances"
const budgetsAppluedMsg = " Budgets applied successfully"
const householdAllowanceName = "Test"


xdescribe('Initiate New Assignment form test', () => {
    before(async () => {
        await passSignIn.signIn();
    });
    it('Verify Initiate new assignment Step 1: Who is going on assignment? ', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        expect(await assignmentsPage.getAssignmentsLabelText()).toBe(assignmentLabelText)
        await assignmentsPage.clickNewAssignmentBtn();
        await assignmentsPage.clickBackBtn();
        expect(await assignmentsPage.getAssignmentsLabelText()).toBe(assignmentLabelText);
        await assignmentsPage.clickNewAssignmentBtn();
        await commonElements.setRbtByLabel(assignmentUserType_2);
        // await assignmentsPage.setExistingAssignee(` ${existingFirstName} ${existingLastName} - ${existingEmail} `);
        // await assignmentsPage.clickNextBtn();
        // expect(await assignmentsPage.getFirstNameValue()).toBe(existingFirstName);
        // expect(await assignmentsPage.getLastNameValue()).toBe(existingLastName);
        // expect(await assignmentsPage.getEmailNameValue()).toBe(existingEmail);
        // await assignmentsPage.clickBackBtn();
        await commonElements.setRbtByLabel(assignmentUserType_1);
        await assignmentsPage.clickNextBtn();
    });
    it('Step 2: Available packages', async () => {
        await assignmentsPage.waitUntilStepLoadedByNum(2);
        await assignmentsPage.clickNextBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        await commonElements.setInputValue(titleInput, assignmentsPage.titleInput);
        await commonElements.setInputValue(firstName, assignmentsPage.firstNameInput);
        await commonElements.setInputValue(lastName, assignmentsPage.lastNameInput);
        await commonElements.setSelectValue(gender, assignmentsPage.genderSelect);
        await commonElements.setSelectValue(nationality, assignmentsPage.nationalitySelect);
        await commonElements.setInputValue(email, assignmentsPage.emailInput);
        await commonElements.setInputValue(homePhone, assignmentsPage.homePhone);
        await commonElements.setInputValue(workPhone, assignmentsPage.workPhone);
        await commonElements.setInputValue(mobilePhone, assignmentsPage.mobilePhone);
        await commonElements.setSelectValue(maritalStatus, assignmentsPage.maritalStatusSelect);
        await commonElements.setDateValue(assignmentsPage.dateOfBirthCalendar, doFDate);
        await commonElements.setAssignmentSubsidiary(subsidiary);
        await commonElements.setDropDownValue(serviceLevel, commonElements.serviceLvlDD);
        await assignmentsPage.clickNextBtn();
    });
    it('Step 3: Assignment details, Step 3b: Additional People / Pets', async () => {
        await assignmentsPage.waitUntilStepLoadedByNum(3);
        await assignmentsPage.clickNextBtn();
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        expect(await assignmentsPage.getCountryQty(commonElements.originRegionsSelect)).toBe(countryQty);
        expect(await assignmentsPage.getCountryQty(commonElements.destinationRegionsSelect)).toBe(countryQty);
        await commonElements.setOriginRegion(originCountry, originCity);
        await commonElements.setDestinationRegion(destinationCountry, destinationCity);
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
        await commonElements.setStartDate(startDate);
        await commonElements.setEndDate(endDate);
        await commonElements.setChb(assignmentsPage.partnerChb, true);
        await assignmentsPage.setAdditionalPeople("Children", 1);
        await assignmentsPage.setAdditionalPeople("Other", 1);
        await assignmentsPage.setAdditionalPeople("Pets", 1);
        await commonElements.setSelectValue(clientContact, commonElements.clientContactInput);
        await assignmentsPage.setAssignmentDetails();
        await assignmentsPage.clickNextBtn();
        await assignmentsPage.waitUntilStepLoadedByNum("3b");
        await assignmentsPage.setParnterDetails(partnerGender, nationality, partnerMaritalStatus, "PfirstN", "PSecN");
        await assignmentsPage.setChildrenDetails(gender, nationality, "CFirstN", "CSecN");
        await assignmentsPage.setOtherDetails(gender, nationality, "OFirstN", "OSecN");
        await assignmentsPage.setPetType(" Cat ");
        await assignmentsPage.clickStep3BNextBtn();
    });
    it('Step 4: Available packages, Step 5:', async () => {
        await assignmentsPage.waitUntilStepLoadedByNum(4);
        await assignmentsPage.clickChoosePackageBtn();
        expect(await assignmentsPage.serviceQty()).toBe(16);
        await assignmentsPage.clickBackBtn();
        expect(await assignmentsPage.isCurrentPackageBtnDisplayed()).toBe(true);
        await assignmentsPage.clickNextBtn();
        await commonElements.isPopupMsgDisplayed(assignmentPackageMsg);
        expect(await assignmentsPage.serviceQty()).toBe(26);
        await assignmentsPage.clickBackBtn();
        await assignmentsPage.clickChoosePackageBtn();
        expect(await commonElements.isPopupMsgDisplayed(assignmentWithPackageMsg)).toBe(true)
        await commonElements.waitPopupMsgForNotDisplayed(assignmentWithPackageMsg);
        await assignmentsPage.setChbByLabel(extraServiceLabel_1, true);
        await assignmentsPage.setChbByLabel(extraServiceLabel_2, true);
        await assignmentsPage.setChbByLabel(extraServiceLabel_3, true);
        await assignmentsPage.clickNextBtn();
    });
    it('Step 6: Budgets,Step 7: Estimated cost,Step 8: Confirm details', async () => {
        await assignmentsPage.waitUntilStepLoadedByNum(6);
        await commonElements.setRbtByLabel(payingPersonLabel);
        await assignmentsPage.setBudget(budgetСurrency, budgetAmount, budgetTimeOption);
        await commonElements.setRbtByLabel(allowanceType)
        await assignmentsPage.clickNextBtn();
        expect(await commonElements.isPopupMsgDisplayed(budgetsAppluedMsg)).toBe(true)
        await assignmentsPage.waitUntilStepLoadedByNum(7);
        await assignmentsPage.clickNextBtn();
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(`${titleInput} ${firstName} ${lastName}`)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(gender)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(nationality)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(email)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(homePhone)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(workPhone)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(mobilePhone)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(maritalStatus)).toBe(true);
        expect(await assignmentsPage.isTimeLabelDisplayed(doFDate)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(subsidiary)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(originCity)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(destinationCity)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(assignmentType_8)).toBe(true);
        expect(await assignmentsPage.isTimeLabelDisplayed(startDate)).toBe(true);
        expect(await assignmentsPage.isTimeLabelDisplayed(endDate)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(clientContact)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(`PfirstN PSecN (${partnerGender}) (${partnerMaritalStatus}) (${nationality})`)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(`OFirstN OSecN (${gender}) (${otherPersonMaritalStatus}) (${nationality})`)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(`CFirstN CSecN (${gender}) (${nationality})`)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(`Cat`)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed("Test Policy")).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(extraServiceLabel_1)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(extraServiceLabel_2)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(extraServiceLabel_3)).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(payingPersonLabel)).toBe(true);
        expect(await assignmentsPage.isOverallBudgetDisplayed(budgetAmount + " unspecified frequency")).toBe(true);
        expect(await assignmentsPage.isConfrimDetailsLabelDisplayed(householdAllowanceName)).toBe(true);
    });
});





