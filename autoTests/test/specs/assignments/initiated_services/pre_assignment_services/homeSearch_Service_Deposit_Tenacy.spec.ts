import addServiceDocument from '../../../../helper/addServiceDocument';
import commonElements from '../../../../helper/commonElements';
import familyMembers from '../../../../helper/familyMembers';
import financeTransactions from '../../../../helper/financeTransactions';
import passSignIn from '../../../../helper/passSignIn';
import initiatedServicesPage from '../../../../pageobjects/assignment/initiatedServices.page';
import homeSearchPage from '../../../../pageobjects/assignment/services/homeSearch.page';
import assignmentsPage from '../../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../../pageobjects/clients/clients.page';

const serviceName = "Home search"
const rBtnState_1 = "Yes"
const rBtnState_2 = "No"
const finalOfferDate_1 = commonElements.getCurrentDateNo0Format()
const finalOfferDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(5)
const landlordDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(7)
const landlordDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(9)
const tenantLeaseDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(11)
const tenantLeaseDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(13)
const negotiatedClauses_1 = "TestIssue_1"
const negotiatedClauses_2 = "TestIssue_2"
const checkInDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(3)
const checkInDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(6)
const checkInIssues_1 = "CheckInIssue_1"
const checkInIssues_2 = "CheckInIssue_2"
const servicePerson_1 = "K2"
const servicePerson_2 = "Client"
const moveInDate_1 = commonElements.getCurrentDatePlusDaysNo0Format(16);
const moveInDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(19);
const address_1 = ["testStreet11", "testStreet21", "testStreet31", "testStreet41"]
const address_2 = ["testStreet12", "testStreet22", "testStreet32", "testStreet42"]
const city_1 = "TestCity1"
const city_2 = "TestCity2"
const stateCountry_1 = "TestState1"
const stateCountry_2 = "TestState2"
const postalCode_1 = "012345"
const postalCode_2 = "654321"
const country_1 = "United Kingdom"
const country_2 = "United States"
const depositCurrency_1 = "EUR - Euro"
const depositCurrency_2 = "USD - US Dollar"
const depositAmount_1 = "500"
const depositAmount_2 = "900"
const paidToPerson_1 = "Agent"
const paidToPerson_2 = "Assignee"
const k2Invoicedate = commonElements.getCurrentDateNo0Format();

const homeSearchResultUpdMsg = "The Home search result has been updated successfully. Thank you"

describe('Home search Service, documents and finance test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Services / Home search page and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await initiatedServicesPage.clickInitiatedServicesTab();
        await initiatedServicesPage.clickServiceByName(serviceName);
        expect(await initiatedServicesPage.getServiceName()).toBe("Services / " + serviceName);
    });
    it('Verify set Home search result form', async () => {
        await homeSearchPage.setHomeServiceResult(rBtnState_1, finalOfferDate_1, landlordDate_1, tenantLeaseDate_1, negotiatedClauses_1, rBtnState_2, checkInDate_1, checkInIssues_1, servicePerson_1, servicePerson_2, moveInDate_1);
        await commonElements.setAddress(address_1[0], address_1[1], address_1[2], address_1[3], city_1, stateCountry_1, postalCode_1, country_1);
        await homeSearchPage.clickHomeSearchResultSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(homeSearchResultUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await homeSearchPage.getFinalOfferDateValue()).toBe(finalOfferDate_1);
        expect(await homeSearchPage.getLandlordDateValue()).toBe(landlordDate_1);
        expect(await homeSearchPage.getTenantLeaseDateValue()).toBe(tenantLeaseDate_1);
        expect(await homeSearchPage.getNegotiatedClausesValue()).toBe(negotiatedClauses_1);
        expect(await homeSearchPage.getCheckInDateValue()).toBe(checkInDate_1);
        expect(await homeSearchPage.getCheckInIssuesValue()).toBe(checkInIssues_1);
        expect(await homeSearchPage.getPersonOngoingRentPayValue()).toBe(servicePerson_1);
        expect(await homeSearchPage.getPersonOngoingUtilitiesPayValue()).toBe(servicePerson_2);
        expect(await homeSearchPage.getMoveInDate()).toBe(moveInDate_1);
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getCountyStateValue()).toBe(stateCountry_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
        expect(await commonElements.getCountryValue()).toBe(country_1);
    });
    it('Verify edit Home search result form', async () => {
        await homeSearchPage.setHomeServiceResult(rBtnState_2, finalOfferDate_2, landlordDate_2, tenantLeaseDate_2, negotiatedClauses_2, rBtnState_1, checkInDate_2, checkInIssues_2, servicePerson_2, servicePerson_1, moveInDate_2);
        await commonElements.setAddress(address_2[0], address_2[1], address_2[2], address_2[3], city_2, stateCountry_2, postalCode_2, country_2);
        await commonElements.refreshPage();
        expect(await homeSearchPage.getFinalOfferDateValue()).toBe(finalOfferDate_1);
        expect(await homeSearchPage.getLandlordDateValue()).toBe(landlordDate_1);
        expect(await homeSearchPage.getTenantLeaseDateValue()).toBe(tenantLeaseDate_1);
        expect(await homeSearchPage.getNegotiatedClausesValue()).toBe(negotiatedClauses_1);
        expect(await homeSearchPage.getCheckInDateValue()).toBe(checkInDate_1);
        expect(await homeSearchPage.getCheckInIssuesValue()).toBe(checkInIssues_1);
        expect(await homeSearchPage.getPersonOngoingRentPayValue()).toBe(servicePerson_1);
        expect(await homeSearchPage.getPersonOngoingUtilitiesPayValue()).toBe(servicePerson_2);
        expect(await homeSearchPage.getMoveInDate()).toBe(moveInDate_1);
        expect(await commonElements.getAddressLine1Value()).toBe(address_1[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_1[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_1[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_1[3]);
        expect(await commonElements.getCityValue()).toBe(city_1);
        expect(await commonElements.getCountyStateValue()).toBe(stateCountry_1);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_1);
        expect(await commonElements.getCountryValue()).toBe(country_1);
        await homeSearchPage.setHomeServiceResult(rBtnState_2, finalOfferDate_2, landlordDate_2, tenantLeaseDate_2, negotiatedClauses_2, rBtnState_1, checkInDate_2, checkInIssues_2, servicePerson_2, servicePerson_1, moveInDate_2);
        await commonElements.setAddress(address_2[0], address_2[1], address_2[2], address_2[3], city_2, stateCountry_2, postalCode_2, country_2);
        await homeSearchPage.clickHomeSearchResultSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(homeSearchResultUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await homeSearchPage.getFinalOfferDateValue()).toBe(finalOfferDate_2);
        expect(await homeSearchPage.getLandlordDateValue()).toBe(landlordDate_2);
        expect(await homeSearchPage.getTenantLeaseDateValue()).toBe(tenantLeaseDate_2);
        expect(await homeSearchPage.getNegotiatedClausesValue()).toBe(negotiatedClauses_2);
        expect(await homeSearchPage.getCheckInDateValue()).toBe(checkInDate_2);
        expect(await homeSearchPage.getCheckInIssuesValue()).toBe(checkInIssues_2);
        expect(await homeSearchPage.getPersonOngoingRentPayValue()).toBe(servicePerson_2);
        expect(await homeSearchPage.getPersonOngoingUtilitiesPayValue()).toBe(servicePerson_1);
        expect(await homeSearchPage.getMoveInDate()).toBe(moveInDate_2);
        expect(await commonElements.getAddressLine1Value()).toBe(address_2[0]);
        expect(await commonElements.getAddressLine2Value()).toBe(address_2[1]);
        expect(await commonElements.getAddressLine3Value()).toBe(address_2[2]);
        expect(await commonElements.getAddressLine4Value()).toBe(address_2[3]);
        expect(await commonElements.getCityValue()).toBe(city_2);
        expect(await commonElements.getCountyStateValue()).toBe(stateCountry_2);
        expect(await commonElements.getPostalCodeValue()).toBe(postalCode_2);
        expect(await commonElements.getCountryValue()).toBe(country_2);
    });
    it('Verify set deposit Payment form', async () => {
        await homeSearchPage.setDepositPayment(depositCurrency_1, depositAmount_1, servicePerson_1, paidToPerson_1);
        await homeSearchPage.setK2InvoiceCalendar(k2Invoicedate);
        await homeSearchPage.clickDepositPaymentSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(homeSearchResultUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await homeSearchPage.getOriginalDepositCurrencyValue()).toContain(depositCurrency_1);
        expect(await homeSearchPage.getOriginalDepositAmountValue()).toBe(depositAmount_1);
        expect(await homeSearchPage.getDepositPaidByValue()).toBe(servicePerson_1);
        expect(await homeSearchPage.getDepositPaidToValue()).toBe(paidToPerson_1);
        expect(await homeSearchPage.getK2InvoiceDateValue()).toBe(k2Invoicedate);
    });
    it('Verify edit deposit Payment form', async () => {
        await homeSearchPage.setDepositPayment(depositCurrency_2, depositAmount_2, servicePerson_2, paidToPerson_2);
        await commonElements.refreshPage();
        expect(await homeSearchPage.getOriginalDepositCurrencyValue()).toContain(depositCurrency_1);
        expect(await homeSearchPage.getOriginalDepositAmountValue()).toBe(depositAmount_1);
        expect(await homeSearchPage.getDepositPaidByValue()).toBe(servicePerson_1);
        expect(await homeSearchPage.getDepositPaidToValue()).toBe(paidToPerson_1);
        await homeSearchPage.setDepositPayment(depositCurrency_2, depositAmount_2, servicePerson_2, paidToPerson_2);
        await homeSearchPage.clickDepositPaymentSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(homeSearchResultUpdMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await homeSearchPage.getOriginalDepositCurrencyValue()).toContain(depositCurrency_2);
        expect(await homeSearchPage.getOriginalDepositAmountValue()).toBe(depositAmount_2);
        expect(await homeSearchPage.getDepositPaidByValue()).toBe(servicePerson_2);
        expect(await homeSearchPage.getDepositPaidToValue()).toBe(paidToPerson_2);
    });
});
