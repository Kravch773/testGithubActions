
const defaultTimeout = 15000; // 10sec
class Page {

    public async openURL(enviromentName, path: string): Promise<string> {
        return await browser.url(`https://${enviromentName}.k2relo.com/${path}`) 
    }
    async getElement(element): Promise<WebdriverIO.Element> {
        return await $(element);
    }
    async getElements(element) {
        return await $$(element);
    }
    async waitUntilClickable(element, timeout = defaultTimeout): Promise<void> {
        await browser.waitUntil(async () => {
            return await (await this.getElement(element)).isClickable();
        }, { timeout: timeout });
    }
    async click(element): Promise<void> {
        await this.waitUntilClickable(element, defaultTimeout);
        await (await this.getElement(element)).click();
    }
    async waitUntilDisplayed(element, timeout = defaultTimeout): Promise<void> {
        await browser.waitUntil(async () => {
            return await (await this.getElement(element)).isDisplayed();
        }, { timeout: timeout });
    }
    async setValue(element, value): Promise<void> {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).setValue(value);
    }
    async getElementText(element): Promise<string> {
        await this.waitElementForDisplayed(element);
        return await (await this.getElement(element)).getText();
    }
    async isElementDisplayed(element, timeout = defaultTimeout): Promise<boolean> {
        await this.waitUntilDisplayed(element, timeout);
        return await (await this.getElement(element)).isDisplayed();
    }
    async getElementValue(element) {
        await this.waitUntilDisplayed(element, defaultTimeout);
        return await (await this.getElement(element)).getValue();
    }
    async clearValue(element): Promise<void> {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).clearValue();
    }
    async clickDropdownItemByText(element, text) {
        await this.waitUntilClickable(element, defaultTimeout);
        await (await this.getElement(element)).selectByVisibleText(text);
    }
    async clickDropdownItemByIndex(element, index) {
        await this.waitUntilClickable(element, defaultTimeout);
        await (await this.getElement(element)).selectByIndex(index);
    }
    //down
    async scrollElementIntoViewTop(element) {
        await this.waitUntilDisplayed(element, defaultTimeout);
        await (await this.getElement(element)).scrollIntoView(false);
    }
    async scrollElementIntoView(element) {
        await this.waitUntilDisplayed(element, defaultTimeout);
        await (await this.getElement(element)).scrollIntoView();
    }
    async setCheckBoxElementState(element, state) {
        await this.waitUntilDisplayed(element, defaultTimeout);
        if (await (await this.getElement(element)).isSelected() !== state) {
            await this.click(element);
        }
    }
    async waitElementForDisplayed(element) {
        await (await this.getElement(element)).waitForDisplayed();
    }
    async waitElementForNotDisplayed(element) {
        await (await this.getElement(element)).waitForDisplayed({ reverse: true });
    }
    async isElementSelected(element) {
        return await (await this.getElement(element)).isSelected();
    }
    async getElementsQty(element): Promise<number> {
        await this.waitElementForDisplayed(element)
        return await (await this.getElements(element)).length;
    }
    async waitUntilExists(element, timeout = defaultTimeout) {
        browser.waitUntil(async () => {
            return await (await this.getElement(element)).isExisting();
        }, { timeout: timeout });
    }
    async isElementExisting(element, timeout = defaultTimeout) {
        await this.waitUntilExists(element, timeout);
        return await (await this.getElement(element)).isExisting();
    }
    async isElementNotExisting(element) {
        return !await (await this.getElement(element)).isExisting();
    }
    async getElementAttribute(element, attribute) {
        await this.waitUntilExists(element);
        return await (await this.getElement(element)).getAttribute(attribute);
    }
    async isElementClickable(element) {
        await this.waitElementForDisplayed(element)
        return await (await this.getElement(element)).isClickable();
    }
    async randomNumber(maxNum) {
        return Math.floor(Math.random() * maxNum);
    }

}

export default new Page();
