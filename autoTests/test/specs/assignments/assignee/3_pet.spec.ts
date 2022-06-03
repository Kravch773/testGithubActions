import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assigneePage from '../../../pageobjects/assignment/assignee.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const petName_1 = "testPet1"
const petName_2 = "testPet2"
const type_1 = "Bird"
const type_2 = "Cat"
const breed_1 = "testBreed1"
const breed_2 = "testBreed2"
const age_1 = "2"
const age_2 = "4"
const weight_1 = "20"
const weight_2 = "30"
const notes_1 = "testNote1"
const notes_2 = "testNote2"
const petAddedMsg = "has been added to the assignment"
const updatedPetMsg = "has been updated in this assignment"
const removedPetMsg = "Pet removed successfully. Thank you."

describe('Client Corporate structure page test', () => {

    before(async () => {
        await passSignIn.signIn();
    });

    it('Go to Assignee Pet tab and check label', async () => {
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
        await assigneePage.clickAssigneeTab();
        await assigneePage.clickPetsTab();
        expect(await assigneePage.getAssigneeLabelText()).toBe("Pets");
    });
    it('Verify pet form ', async () => {
        await assigneePage.clickAddPetsBtn();
        await assigneePage.setPet(petName_1,type_1,breed_1,age_1,weight_1,notes_1);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(petAddedMsg)).toBe(true);
        await assigneePage.clickPetEditBtnByName(petName_1);
        expect(await assigneePage.getPetNameValue()).toBe(petName_1);
        expect(await assigneePage.getPetTypeValue()).toBe(type_1);
        expect(await assigneePage.getBreedValue()).toBe(breed_1);
        expect(await assigneePage.getAgeValue()).toBe(age_1);
        expect(await assigneePage.getWeightValue()).toBe(weight_1);
        expect(await assigneePage.getNoteInputValue()).toBe(notes_1);
        await commonElements.clickCancelBtn();
        
    });
    it('Verify pet Edit form ', async () => {
        await assigneePage.clickPetEditBtnByName(petName_1);
        await assigneePage.setPet(petName_2,type_2,breed_2,age_2,weight_2,notes_2);
        await commonElements.clickCancelBtn();
        await assigneePage.clickPetEditBtnByName(petName_1);
        expect(await assigneePage.getPetNameValue()).toBe(petName_1);
        expect(await assigneePage.getPetTypeValue()).toBe(type_1);
        expect(await assigneePage.getBreedValue()).toBe(breed_1);
        expect(await assigneePage.getAgeValue()).toBe(age_1);
        expect(await assigneePage.getWeightValue()).toBe(weight_1);
        expect(await assigneePage.getNoteInputValue()).toBe(notes_1);
        await assigneePage.setPet(petName_2,type_2,breed_2,age_2,weight_2,notes_2);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(updatedPetMsg)).toBe(true);
        await assigneePage.clickPetEditBtnByName(petName_2);
        expect(await assigneePage.getPetNameValue()).toBe(petName_2);
        expect(await assigneePage.getPetTypeValue()).toBe(type_2);
        expect(await assigneePage.getBreedValue()).toBe(breed_2);
        expect(await assigneePage.getAgeValue()).toBe(age_2);
        expect(await assigneePage.getWeightValue()).toBe(weight_2);
        expect(await assigneePage.getNoteInputValue()).toBe(notes_2);
        await commonElements.clickCancelBtn();
        await assigneePage.clickPetRemoveBtnByName(petName_2);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(removedPetMsg)).toBe(true);
    });
});
