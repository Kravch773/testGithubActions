import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import setupPage from '../../../pageobjects/clients/setup.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const billingLabel = "Billing and quoting settings"
const invoicingFieldsValue_1 = "Not applicable"
const invoicingFieldsValue_2 = "Optional"
const invoicingFieldsValue_3 = "Required"
const reqPurchaseOrderLabel = " Request purchase order at initiation "
const reqAccountCodeLabel = " Request account code at initiation "
const reqCompanyCodeLabel = " Request company code at initiation "
const reqCostCenterLabel = " Request cost center at initiation "
const reqClientEmployeeLabel = " Request client employee ID at initiation "
const pricingMatrixLabel = " Pricing matrix "
const pricingMatrixValue = "SEK - Swedish Krona"
const defPricingMatrixValue = "USD - US Dollar"
const k2FeesLabel = " K2 fees "
const k2FeesValue = "Per package"
const defK2FeesValue = "Per service"
const billingTypeLabel = " Billing type "
const billingTypeValue = "Passthrough"
const DefBillingTypeValue = "Tariff"
const quotingTypeLabel = " Quoting type "
const quotingTypeValue_1 = "Competitive"
const quotingTypeValue_2 = "Live Rates"
const quotingTypeValue_3 = "Tariff"
const billingTriggerLabel = " Billing trigger "
const billingTrigger_1 = "Bill all services on delivery date"
const billingTrigger_2 = "Bill all services on pack date"
const billingTrigger_3 = "Bill at service occurrence"
const sellingRateLabel = " Insurance selling rate "
const sellingRateValue = "25"
const defSellingRateValue = "35"
const quotingCommitmentLabel = " Quoting commitment "
const quotingCommitmentValue_1 = "1"
const quotingCommitmentValue_2 = "2"
const quotingCommitmentValue_3 = "3"
const clientMarkupLabel = " Client markup "
const clientMarkupValue = "20"
const defClientMarkupValue = "10"
const clientDefaultCurrencyLabel = " Client default currency "
const clientCurrencValue = "PGK - Kina"
const defClientCurrencValue = "USD - US Dollar"
const invoicingAddressesValue = "Second Address"
const billingUpdadeMsg = "The client billing configuration has been updated."
const hggServiceUpdateMsg = "The HHG service settings were updated successfully. Thank you"
const addInvoiceAddressesMsg = "The selected invoice addresses have been successfully linked to this client/subsidiary."
const removeAddresMsg = " The invoicing address was unlinked from this client/subsidiary successfully."

describe('Client Billing and quoting settings page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Billing page ', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await setupPage.clickSetupTab();
        await setupPage.clickBillingTab();
        expect(await setupPage.getBillingLabelText()).toContain(billingLabel)
    });
    it('Verify Request purchase order at initiation (Not applicable)', async () => {
        await setupPage.clickEditBtnByLabel(reqPurchaseOrderLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true)
        expect(await setupPage.getBillingFieldLabelText(reqPurchaseOrderLabel)).toBe(invoicingFieldsValue_1);
    });
    it('Verify Request purchase order at initiation (Optional)', async () => {
        await setupPage.clickEditBtnByLabel(reqPurchaseOrderLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getBillingFieldLabelText(reqPurchaseOrderLabel)).toBe(invoicingFieldsValue_1);
        await setupPage.clickEditBtnByLabel(reqPurchaseOrderLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true)
        expect(await setupPage.getBillingFieldLabelText(reqPurchaseOrderLabel)).toBe(invoicingFieldsValue_2);
    });
    it('Verify Request purchase order at initiation (Required)', async () => {
        await setupPage.clickEditBtnByLabel(reqPurchaseOrderLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true)
        expect(await setupPage.getBillingFieldLabelText(reqPurchaseOrderLabel)).toBe(invoicingFieldsValue_3);
    });
    it('Verify Request account code at initiation (Not applicable)', async () => {
        await setupPage.clickEditBtnByLabel(reqAccountCodeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqAccountCodeLabel)).toContain(invoicingFieldsValue_1);
    });
    it('Verify Request account code at initiation (Optional)', async () => {
        await setupPage.clickEditBtnByLabel(reqAccountCodeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(reqAccountCodeLabel)).toContain(invoicingFieldsValue_1);
        await setupPage.clickEditBtnByLabel(reqAccountCodeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqAccountCodeLabel)).toContain(invoicingFieldsValue_2);
    });
    it('Verify Request account code at initiation (Required)', async () => {
        await setupPage.clickEditBtnByLabel(reqAccountCodeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqAccountCodeLabel)).toContain(invoicingFieldsValue_3);
    });

    it('Verify Request company code at initiation (Not applicable)', async () => {
        await setupPage.clickEditBtnByLabel(reqCompanyCodeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqCompanyCodeLabel)).toContain(invoicingFieldsValue_1);
    });
    it('Verify Request company code at initiation (Optional)', async () => {
        await setupPage.clickEditBtnByLabel(reqCompanyCodeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(reqCompanyCodeLabel)).toContain(invoicingFieldsValue_1);
        await setupPage.clickEditBtnByLabel(reqCompanyCodeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqCompanyCodeLabel)).toContain(invoicingFieldsValue_2);
    });
    it('Verify Request company code at initiation (Required)', async () => {
        await setupPage.clickEditBtnByLabel(reqCompanyCodeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqCompanyCodeLabel)).toContain(invoicingFieldsValue_3);
    });

    it('Verify Request cost center at initiation (Not applicable)', async () => {
        await setupPage.clickEditBtnByLabel(reqCostCenterLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqCostCenterLabel)).toContain(invoicingFieldsValue_1);
    });
    it('Verify Request cost center at initiation (Optional)', async () => {
        await setupPage.clickEditBtnByLabel(reqCostCenterLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(reqCostCenterLabel)).toContain(invoicingFieldsValue_1);
        await setupPage.clickEditBtnByLabel(reqCostCenterLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqCostCenterLabel)).toContain(invoicingFieldsValue_2);
    });
    it('Verify Request cost center at initiation(Required)', async () => {
        await setupPage.clickEditBtnByLabel(reqCostCenterLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqCostCenterLabel)).toContain(invoicingFieldsValue_3);
    });

    it('Verify Request client employee ID at initiation (Not applicable)', async () => {
        await setupPage.clickEditBtnByLabel(reqClientEmployeeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqClientEmployeeLabel)).toContain(invoicingFieldsValue_1);
    });
    it('Verify Request client employee ID at initiation (Optional)', async () => {
        await setupPage.clickEditBtnByLabel(reqClientEmployeeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(reqClientEmployeeLabel)).toContain(invoicingFieldsValue_1);
        await setupPage.clickEditBtnByLabel(reqClientEmployeeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqClientEmployeeLabel)).toContain(invoicingFieldsValue_2);
    });
    it('Verify Request client employee ID at initiation(Required)', async () => {
        await setupPage.clickEditBtnByLabel(reqClientEmployeeLabel);
        await commonElements.setRbtByLabel(invoicingFieldsValue_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(reqClientEmployeeLabel)).toContain(invoicingFieldsValue_3);
    });

    it('Verify Pricing matrix *(default)', async () => {
        await setupPage.clickEditBtnByLabel(pricingMatrixLabel);
        await commonElements.setSelectValue(pricingMatrixValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(pricingMatrixLabel)).toContain(pricingMatrixValue);
    });
    it('Verify Pricing matrix ', async () => {
        await setupPage.clickEditBtnByLabel(pricingMatrixLabel);
        await commonElements.setSelectValue(defPricingMatrixValue);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(pricingMatrixLabel)).toContain(pricingMatrixValue);
        await setupPage.clickEditBtnByLabel(pricingMatrixLabel);
        await commonElements.setSelectValue(defPricingMatrixValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(pricingMatrixLabel)).toContain(defPricingMatrixValue);
    });

    it('Verify K2 fees input', async () => {
        await setupPage.clickEditBtnByLabel(k2FeesLabel);
        await commonElements.setRbtByLabel(k2FeesValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(k2FeesLabel)).toContain(k2FeesValue);
    });
    it('Verify default value  K2 fees input', async () => {
        await setupPage.clickEditBtnByLabel(k2FeesLabel);
        await commonElements.setRbtByLabel(k2FeesValue);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(k2FeesLabel)).toContain(k2FeesValue);
        await setupPage.clickEditBtnByLabel(k2FeesLabel);
        await commonElements.setRbtByLabel(defK2FeesValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(k2FeesLabel)).toContain(defK2FeesValue);
    });

    it('Verify Billing type input', async () => {
        await setupPage.clickEditBtnByLabel(billingTypeLabel);
        await commonElements.setRbtByLabel(billingTypeValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(billingTypeLabel)).toContain(billingTypeValue);
    });
    it('Verify default value Billing type input', async () => {
        await setupPage.clickEditBtnByLabel(billingTypeLabel);
        await commonElements.setRbtByLabel(DefBillingTypeValue);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(billingTypeLabel)).toContain(billingTypeValue);
        await setupPage.clickEditBtnByLabel(billingTypeLabel);
        await commonElements.setRbtByLabel(DefBillingTypeValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(billingTypeLabel)).toContain(DefBillingTypeValue);
    });

    it('Verify Quoting type (Competitive)', async () => {
        await setupPage.clickEditBtnByLabel(quotingTypeLabel);
        await commonElements.setRbtByLabel(quotingTypeValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(quotingTypeLabel)).toContain(quotingTypeValue_1);
    });
    it('Verify Quoting type (Live Rates)', async () => {
        await setupPage.clickEditBtnByLabel(quotingTypeLabel);
        await commonElements.setRbtByLabel(quotingTypeValue_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(quotingTypeLabel)).toContain(quotingTypeValue_1);
        await setupPage.clickEditBtnByLabel(quotingTypeLabel);
        await commonElements.setRbtByLabel(quotingTypeValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(quotingTypeLabel)).toContain(quotingTypeValue_2);
    });
    it('Verify Quoting type (Tariff)', async () => {
        await setupPage.clickEditBtnByLabel(quotingTypeLabel);
        await commonElements.setRbtByLabel(quotingTypeValue_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(quotingTypeLabel)).toContain(quotingTypeValue_3);
    })

    it('Verify Billing trigger(Bill all services on delivery date)', async () => {
        await setupPage.clickEditBtnByLabel(billingTriggerLabel);
        await commonElements.setRbtByLabel(billingTrigger_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(billingTriggerLabel)).toContain(billingTrigger_1);
    });
    it('Verify Billing trigger (Bill all services on pack date)', async () => {
        await setupPage.clickEditBtnByLabel(billingTriggerLabel);
        await commonElements.setRbtByLabel(billingTrigger_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(billingTriggerLabel)).toContain(billingTrigger_1);
        await setupPage.clickEditBtnByLabel(billingTriggerLabel);
        await commonElements.setRbtByLabel(billingTrigger_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(billingTriggerLabel)).toContain(billingTrigger_2);
    });
    it('Verify Billing trigger (Bill at service occurrence)', async () => {
        await setupPage.clickEditBtnByLabel(billingTriggerLabel);
        await commonElements.setRbtByLabel(billingTrigger_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(billingTriggerLabel)).toContain(billingTrigger_3);
    });

    it('Verify Insurance selling rate input', async () => {
        await setupPage.clickEditBtnByLabel(sellingRateLabel);
        await commonElements.setInputValue(sellingRateValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(sellingRateLabel)).toContain(sellingRateValue + " %");
        await setupPage.clickEditBtnByLabel(sellingRateLabel);
        await commonElements.setInputValue(defSellingRateValue);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(sellingRateLabel)).toContain(sellingRateValue + " %");
        await setupPage.clickEditBtnByLabel(sellingRateLabel);
        await commonElements.setInputValue(defSellingRateValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(sellingRateLabel)).toContain(defSellingRateValue + " %");
    });

    it('Verify Quoting commitment(1)', async () => {
        await setupPage.clickEditBtnByLabel(quotingCommitmentLabel);
        await commonElements.setRbtByLabel(quotingCommitmentValue_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(quotingCommitmentLabel)).toContain(quotingCommitmentValue_1);
    });
    it('Verify Quoting commitment (2)', async () => {
        await setupPage.clickEditBtnByLabel(quotingCommitmentLabel);
        await commonElements.setRbtByLabel(quotingCommitmentValue_2);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(quotingCommitmentLabel)).toContain(quotingCommitmentValue_1);
        await setupPage.clickEditBtnByLabel(quotingCommitmentLabel);
        await commonElements.setRbtByLabel(quotingCommitmentValue_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(quotingCommitmentLabel)).toContain(quotingCommitmentValue_2);
    });
    it('Verify Quoting commitment (3)', async () => {
        await setupPage.clickEditBtnByLabel(quotingCommitmentLabel);
        await commonElements.setRbtByLabel(quotingCommitmentValue_3);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(quotingCommitmentLabel)).toContain(quotingCommitmentValue_3);
    });

    it('Verify Client markup input', async () => {
        await setupPage.clickEditBtnByLabel(clientMarkupLabel);
        await commonElements.setInputValue(clientMarkupValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(clientMarkupLabel)).toContain(clientMarkupValue + " %");
        await setupPage.clickEditBtnByLabel(clientMarkupLabel);
        await commonElements.setInputValue(defClientMarkupValue);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(clientMarkupLabel)).toContain(clientMarkupValue + " %");
        await setupPage.clickEditBtnByLabel(clientMarkupLabel);
        await commonElements.setInputValue(defClientMarkupValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(hggServiceUpdateMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(clientMarkupLabel)).toContain(defClientMarkupValue + " %");
    });

    it('Verify Client default currency *(default)', async () => {
        await setupPage.clickEditBtnByLabel(clientDefaultCurrencyLabel);
        await commonElements.setSelectValue(clientCurrencValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(clientDefaultCurrencyLabel)).toContain(clientCurrencValue);
    });
    it('Verify Client default currency * ', async () => {
        await setupPage.clickEditBtnByLabel(clientDefaultCurrencyLabel);
        await commonElements.setSelectValue(defClientCurrencValue);
        await commonElements.clickCancelBtn();
        expect(await setupPage.getFieldByLabelValue(clientDefaultCurrencyLabel)).toContain(clientCurrencValue);
        await setupPage.clickEditBtnByLabel(clientDefaultCurrencyLabel);
        await commonElements.setSelectValue(defClientCurrencValue);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(billingUpdadeMsg)).toBe(true);
        expect(await setupPage.getFieldByLabelValue(clientDefaultCurrencyLabel)).toContain(defClientCurrencValue);
    });

    it('Verify Invoicing addresses * ', async () => {
        await setupPage.clickAddinvoicingAaddresses();
        await setupPage.addInvoiceAddresses(invoicingAddressesValue, true)
        await commonElements.clickCancelBtn();
        expect(await setupPage.isInvoiceAddressByNameExisting(invoicingAddressesValue)).toBe(false);
        await setupPage.clickAddinvoicingAaddresses();
        await setupPage.addInvoiceAddresses(invoicingAddressesValue, true);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(addInvoiceAddressesMsg)).toBe(true)
        expect(await setupPage.isInvoiceAddressByNameExisting(invoicingAddressesValue)).toBe(true);
        await setupPage.removeInvoiceAddres(invoicingAddressesValue, "no");
        expect(await setupPage.isInvoiceAddressByNameExisting(invoicingAddressesValue)).toBe(true);
        await setupPage.removeInvoiceAddres(invoicingAddressesValue, "yes");
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(removeAddresMsg)).toBe(true);
        expect(await setupPage.isInvoiceAddressByNameExisting(invoicingAddressesValue)).toBe(false);
    });
});


