import commonElements from '../../helper/commonElements';
import passSignIn from '../../helper/passSignIn';
import clientsPage from '../../pageobjects/clients/clients.page';
import policiesPage from '../../pageobjects/clients/policies.page';

const qaClientId = "330"
const policiesLabelText = "Agreed policy matrix"
const policyName = "TestPolicy_2"
const notesText = "TestNote"
const billingmethod = "Individually"
const isActivePolicy = true
const position = "3"
const serviceLabel_1 = "HHG Shipment"
const serviceLabel_2 = "Storage"
const serviceLabel_3 = "Insurance"
const serviceLabel_4 = "Pet move"
const serviceLabel_5 = "Vehicle move"
const serviceLabel_6 = "Short term mobility services"
const serviceLabel_7 = "School search"
const serviceLabel_8 = "Temp. accommodation (Origin)"
const serviceLabel_9 = "Travel booking"
const serviceLabel_10 = "Home search"
const serviceLabel_11 = "Tax briefing"
const serviceLabel_12 = "Visa & Immigration"
const serviceLabel_13 = "Language training"
const serviceLabel_14 = "Partner/Spouse support"
const serviceLabel_15 = "Furniture rental"
const serviceLabel_16 = "Cultural training"
const serviceLabel_17 = "Settling in services"
const serviceLabel_18 = "Orientation"
const serviceLabel_19 = "Temp. accommodation (Destination)"
const serviceLabel_20 = "Home sale"
const serviceLabel_21 = "Assignment management"
const serviceLabel_22 = "Lumpsum"
const serviceLabel_23 = "Expense management"
const serviceLabel_24 = "Tenancy management"
const serviceLabel_25 = "Utility management"
const serviceLabel_26 = "Departure services"
const includedOption_1 = "Disabled"
const includedOption_2 = "Core"
const includedOption_3 = "Flexible"
const timeVariant_1 = "1 Day"
const timeVariant_2 = "2 Days"
const timeVariant_3 = "3 Days"
const timeVariant_4 = "30 Hours"
const countriesQty = "174"
const countryName_1 = "Algeria"
const countryName_2 = "Australia"
const countryName_3 = "France"
const policyAddedMsg = "Package created successfully"
const policyUpdateMsg = "Package updated successfully"
const policyRemoveMsg = "The package was removed successfully"

describe('Policies page test', () => {
    before(async () => {
        await passSignIn.signIn();
    });
    it('Open Client document page and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await policiesPage.clickPoliciesTab();
        expect(await policiesPage.getPoliciesLabelText()).toBe(policiesLabelText)
    });
    it('Verify Add new policy form', async () => {
        await policiesPage.clickAddPolicy();
        await policiesPage.setNewPolicy(policyName, notesText, billingmethod, isActivePolicy, position);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_1, includedOption_3);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_2, includedOption_3);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_3, includedOption_3);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_4, includedOption_3);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_5, includedOption_3);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_6, includedOption_2);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_7, includedOption_2);
        await policiesPage.setTimeVariantByLabel(serviceLabel_7, timeVariant_1);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_8, includedOption_2);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_9, includedOption_2);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_10, includedOption_2);
        await policiesPage.setTimeVariantByLabel(serviceLabel_10, timeVariant_3);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_11, includedOption_1);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_12, includedOption_1);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_13, includedOption_3);
        await policiesPage.setTimeVariantByLabel(serviceLabel_13, timeVariant_4);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_14, includedOption_1);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_15, includedOption_1);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_16, includedOption_3);
        await policiesPage.setTimeVariantByLabel(serviceLabel_16, timeVariant_2);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_17, includedOption_3);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_18, includedOption_1);
        await policiesPage.isTimeSelectClickable(serviceLabel_18);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_19, includedOption_3);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_20, includedOption_3);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_21, includedOption_2);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_22, includedOption_2);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_23, includedOption_2);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_24, includedOption_2);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_25, includedOption_2);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_26, includedOption_1);
        await policiesPage.clickCountryLiByName(countryName_1, 1);
        await policiesPage.clickCountryLiByName(countryName_2, 1);
        await policiesPage.clickOriginSelectedAvailable();
        await policiesPage.clickCountryLiByName(countryName_1, 2);
        await policiesPage.clickCountryLiByName(countryName_2, 2);
        await policiesPage.clickDestinationSelectedAvailable();
        await commonElements.setChbByLabel("PT", true)
        await commonElements.setChbByLabel("LTA", true)
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(policyAddedMsg)).toBe(true);
        expect(await policiesPage.getPolicyStatusText(policyName)).toBe("ACTIVE");
        expect(await policiesPage.getCoreServiceIconQty()).toBe(14);
        expect(await policiesPage.getFlexibleServiceIconQty()).toBe(16);
        expect(await policiesPage.getNotIncludedServiceIconQty()).toBe(28);
        expect(await policiesPage.getOriginCountriesQtyByPolicyNum(2)).toBe("2");
        expect(await policiesPage.getDestinationCountriesQtyByPolicyNum(2)).toBe("2");
    });
    it('Verify Edit policy form', async () => {
        await policiesPage.clickEditPolicyBtnByNum(2);
        await policiesPage.clickCountryLiByName(countryName_3, 1);
        await policiesPage.clickOriginSelectedAvailable();
        await policiesPage.clickCountryLiByName(countryName_3, 2);
        await policiesPage.clickDestinationSelectedAvailable();
        await policiesPage.setIncludedPackageByLabel(serviceLabel_1, includedOption_1);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_2, includedOption_1);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_3, includedOption_1);
        await commonElements.clickCancelBtn();
        expect(await policiesPage.getCoreServiceIconQty()).toBe(14);
        expect(await policiesPage.getFlexibleServiceIconQty()).toBe(16);
        expect(await policiesPage.getNotIncludedServiceIconQty()).toBe(28);
        expect(await policiesPage.getOriginCountriesQtyByPolicyNum(2)).toBe("2");
        expect(await policiesPage.getDestinationCountriesQtyByPolicyNum(2)).toBe("2");
        await policiesPage.clickEditPolicyBtnByNum(2);
        await policiesPage.clickCountryLiByName(countryName_3, 1);
        await policiesPage.clickOriginSelectedAvailable();
        await policiesPage.clickCountryLiByName(countryName_3, 2);
        await policiesPage.clickDestinationSelectedAvailable();
        await policiesPage.setIncludedPackageByLabel(serviceLabel_1, includedOption_1);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_2, includedOption_1);
        await policiesPage.setIncludedPackageByLabel(serviceLabel_3, includedOption_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(policyUpdateMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await policiesPage.getCoreServiceIconQty()).toBe(14);
        // expect(await policiesPage.getFlexibleServiceIconQty()).toBe(13);
        expect(await policiesPage.getNotIncludedServiceIconQty()).toBe(31);
        expect(await policiesPage.getOriginCountriesQtyByPolicyNum(2)).toBe("3");
        expect(await policiesPage.getDestinationCountriesQtyByPolicyNum(2)).toBe("3");
        await policiesPage.clickEditPolicyBtnByNum(2);
        await policiesPage.clickOriginAllAvailable();
        await policiesPage.clickDestinationAllAvailable();
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(policyUpdateMsg)).toBe(true);
        await commonElements.refreshPage();
        expect(await policiesPage.getOriginCountriesQtyByPolicyNum(2)).toBe(countriesQty);
        expect(await policiesPage.getDestinationCountriesQtyByPolicyNum(2)).toBe(countriesQty);
    });
    it('Verify remove policy', async () => {
        await policiesPage.clickEditPolicyBtnByNum(2);
        await policiesPage.clickRemovePolicyBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(policyRemoveMsg)).toBe(true)
        await commonElements.refreshPage();
        expect(await policiesPage.getPoliciesQty()).toBe(1);
    });
});
