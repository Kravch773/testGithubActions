
import commonElements from '../../../helper/commonElements';
import Page from '../../Page';
import initiatedServicesPage from '../initiatedServices.page';
import needAnalysisPage from '../needAnalysis.page';

class schoolSearchServicePage {
    public get schoolSrchNABtn(): string {
        return '//school-search-needs-analysis//button[text()="Edit"]'
    }
    public get schoolSrchNAToggle(): string {
        return '//school-search-needs-analysis//a[contains(@class,"toggle pull-right")]'
    }
    public getSchoolSearchServiceAnalysisAnswerByLabel(label): string {
        return `//edit-needs-analysis-subsection-button/..//strong[contains(text(),"${label}")]/ancestor::div[1]//p[2]`
    }
    public get schoolSearchAddressLineLabel(): string {
        return '//formatted-address/span[@class="address-line"]'
    }
    public getAttendingPersonIcon(personName): string {
        return `//p[contains(text(),"${personName}")]//span`
    }
    public getSchoolPreferenceIcon(personName): string {
        return `//div[contains(text(),"${personName}")]//span`
    }
    public getSchoolSearchChildDetailsAnswerLabel(questionText): string {
        return `//strong[contains(text(),"${questionText}")]/following-sibling::p[1]`
    }
    public get schoolSearchEditBtn(): string {
        return '//school-search-child-section//button[text()="Edit"]'
    }
    public async clickSchoolSrchNABtn(): Promise<void> {
        await Page.click(this.schoolSrchNABtn);
    }
    public async clickSchoolSrchNAToggle(): Promise<void> {
        await Page.click(this.schoolSrchNAToggle);
    }
    public async getSchoolSearchServiceAnalysisAnswerText(label): Promise<string> {
        return await Page.getElementText(this.getSchoolSearchServiceAnalysisAnswerByLabel(label));
    }
    public async getSchoolSearchFullAddressText(): Promise<string> {
        var fullAddress;
        for (var i = 2; i <= await Page.getElementsQty(this.schoolSearchAddressLineLabel); i++) {
            fullAddress += await Page.getElementText(this.schoolSearchAddressLineLabel + `[${i}]`);
        }
        return fullAddress;
    }
    public async isAttendingPersonSelected(personName): Promise<boolean> {
        var iconClassName = await Page.getElementAttribute(this.getAttendingPersonIcon(personName), "class")
        if (iconClassName.includes("glyphicon-ok") == true) { return true }
        if (iconClassName.includes("glyphicon-remove") == true) { return false }
    }
    public async getSchoolSearchChildDetailsAnswerText(questionText): Promise<string> {
        return await Page.getElementText(this.getSchoolSearchChildDetailsAnswerLabel(questionText));
    }
    public async isSchoolPreferencesSelected(preferenceName): Promise<boolean> {
        var iconClassName = await Page.getElementAttribute(this.getSchoolPreferenceIcon(preferenceName), "class")
        if (iconClassName.includes("glyphicon-ok") == true) { return true }
        if (iconClassName.includes("glyphicon-remove") == true) { return false }
    }
    public async clickSchoolSrchEditBtn(): Promise<void> {
        await Page.click(this.schoolSearchEditBtn);
    }
    public async getCurrentSchoolYearValue(): Promise<string> {
        return await Page.getElementValue(needAnalysisPage.getNeedAnalysisInputByLabel("Current school year"))
    }
    public async getPreferredCurriculumValue(): Promise<string> {
        return await Page.getElementValue(needAnalysisPage.getNeedAnalysisInputByLabel("Preferred curriculum"))
    }
    public async getSpecificsValue(): Promise<string> {
        return await Page.getElementValue(needAnalysisPage.getNeedAnalysisInputByLabel("Specifics"))
    }
    public async getSpecialRequirementsValue(): Promise<string> {
        return await Page.getElementValue(needAnalysisPage.getNeedAnalysisTextareaByLabel("Any special requirements"))
    }
    public async setSchoolSearchPartnerDetails(schoolQuestionLabel, schoolYear, curriculum, specialRequire, schoolType_1, schoolType_2, schoolSpecifics): Promise<void> {
        await needAnalysisPage.setNeedAnalysisInputByLabel(schoolYear, schoolQuestionLabel[0]);
        await needAnalysisPage.setNeedAnalysisInputByLabel(curriculum, schoolQuestionLabel[1]);
        await needAnalysisPage.setNeedAnalysisTextareaByLabel(specialRequire, schoolQuestionLabel[2]);
        await commonElements.setChbByLabel(schoolType_1, true);
        await commonElements.setChbByLabel(schoolType_2, false);
        await needAnalysisPage.setNeedAnalysisInputByLabel(schoolSpecifics, schoolQuestionLabel[4]);
    }
}
export default new schoolSearchServicePage();

