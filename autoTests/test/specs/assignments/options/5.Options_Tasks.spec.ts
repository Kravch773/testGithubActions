import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assignmentOptionPage from '../../../pageobjects/assignment/assignmentOption.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const taskName = "TestTask"
const triggerDate = commonElements.getCurrentDateNo0Format()
const serviceName = "Departure services"
const popUpState = true
const assignTo = "Ivan QA"
const taskName_2 = "TestTask_2"
const triggerDate_2 = commonElements.getCurrentDatePlusDaysNo0Format(3)
const serviceName_2 = "Cultural training"
const popUpState_2 = false
const assignTo_2 = "test t"
const taskAddedMsg = "The task has been added to this assignment. Thank you."
const taskUpdMsg = "The task was updated successfully. Thank you."
const taskRemovedMsg = "The task was deleted successfully. Thank you."
const taskReassingMsg = "The task was successfully reassigned"

describe('Options_Tasks tab test', () => {
    before(async () => {
        await passSignIn.signIn();
    });

    it('Open Options_Tasks tab and check label', async () => {
        await clientsPage.openQAClientPageById(passSignIn.clientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(passSignIn.assignmentId);
        await assignmentsPage.clickAssignmentById(passSignIn.assignmentId);
        await assignmentOptionPage.clickAssignmentOptionTab();
        await assignmentOptionPage.clickTasksTab();
        expect(await assignmentOptionPage.getTasksLabelText()).toContain("Outstanding tasks for this assignment");
    });
    it('Verify Add New task and reassigned form', async () => {
        await assignmentOptionPage.clickAddNewTaskBtn();
        await commonElements.clickSaveBtn();
        expect(await commonElements.isErrorInputMsgDispalyed()).toBe(true);
        expect(await commonElements.isErrorPopUpMsgDisplayed()).toBe(true);
        await assignmentOptionPage.setTask(taskName, triggerDate, serviceName, popUpState, assignTo);
        await commonElements.clickCancelBtn();
        expect(await assignmentOptionPage.isTaskExisting(taskName)).toBe(false);
        await assignmentOptionPage.clickAddNewTaskBtn();
        await assignmentOptionPage.setTask(taskName, triggerDate, serviceName, popUpState, assignTo);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(taskAddedMsg)).toBe(true);
        expect(await assignmentOptionPage.isTaskExisting(taskName)).toBe(true);
        expect(await commonElements.createStandartDateForm(await assignmentOptionPage.getTaskTimeByTextByName(taskName))).toBe(triggerDate);
        expect(await assignmentOptionPage.getTaskServiceTextByName(taskName)).toBe(serviceName);
        await assignmentOptionPage.clickEditTaskBtnByName(taskName);
        await assignmentOptionPage.setTask(taskName_2, triggerDate_2, serviceName_2, popUpState_2, assignTo);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(taskUpdMsg)).toBe(true);
        expect(await commonElements.createStandartDateForm(await assignmentOptionPage.getTaskTimeByTextByName(taskName_2))).toBe(triggerDate_2);
        expect(await assignmentOptionPage.getTaskServiceTextByName(taskName_2)).toBe(serviceName_2);
        expect(await assignmentOptionPage.isTaskExisting(taskName_2)).toBe(true);
        await assignmentOptionPage.reassignTaskByName(taskName_2, assignTo_2);
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(taskReassingMsg)).toBe(true);
    });
    it('Verify remove task', async () => {
        await assignmentOptionPage.clickRemoveTaskBtnByName(taskName_2, "no");
        expect(await assignmentOptionPage.isTaskExisting(taskName_2)).toBe(true);
        await assignmentOptionPage.clickRemoveTaskBtnByName(taskName_2, "yes");
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(taskRemovedMsg));
        expect(await assignmentOptionPage.isTaskExisting(taskName_2)).toBe(false);
    });

});
