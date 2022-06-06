import commonElements from '../../../helper/commonElements';
import passSignIn from '../../../helper/passSignIn';
import assignmentOptionPage from '../../../pageobjects/assignment/assignmentOption.page';
import assignmentsPage from '../../../pageobjects/clients/assignments.page';
import clientsPage from '../../../pageobjects/clients/clients.page';

const qaClientId = "330"
const assignmentId = "K2-31970"
const taskName = "TestTask"
const triggerDate = "12.11.2022"
const serviceName = "Departure services"
const popUpState = true
const assignTo = "Ivan QA"
const taskName_2 = "TestTask_2"
const triggerDate_2 = "21.12.2022"
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
        await clientsPage.openQAClientPageById(qaClientId);
        await commonElements.clickCloseBtn();
        await assignmentsPage.clickAssignmentsTab();
        await assignmentsPage.setIdAssigneeInputValue(assignmentId);
        await assignmentsPage.clickAssignmentById(assignmentId);
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
        expect(await assignmentOptionPage.getTaskTimeByTextByName(taskName)).toBe(triggerDate);
        expect(await assignmentOptionPage.getTaskServiceTextByName(taskName)).toBe(serviceName);
        await assignmentOptionPage.clickEditTaskBtnByName(taskName);
        await assignmentOptionPage.setTask(taskName_2, triggerDate_2, serviceName_2, popUpState_2, assignTo);
        await commonElements.clickSaveBtn();
        expect(await commonElements.checkPopUpMsgAndForNotDisplayed(taskUpdMsg)).toBe(true);
        expect(await assignmentOptionPage.getTaskTimeByTextByName(taskName_2)).toBe(triggerDate_2);
        expect(await assignmentOptionPage.getTaskServiceTextByName(taskName_2)).toBe(serviceName_2);
        expect(await assignmentOptionPage.isTaskExisting(taskName_2)).toBe(true);
        await assignmentOptionPage.reassignTaskByName(taskName_2, assignTo);
        expect(await commonElements.isPopupMsgDisplayed(taskReassingMsg)).toBe(true);
    });
    it('Verify remove task', async () => {
        await assignmentOptionPage.clickRemoveTaskBtnByName(taskName_2, "no");
        expect(await assignmentOptionPage.isTaskExisting(taskName_2)).toBe(true);
        await assignmentOptionPage.clickRemoveTaskBtnByName(taskName_2, "yes");
        expect(await commonElements.isPopupMsgDisplayed(taskRemovedMsg));
        await commonElements.waitPopupMsgForNotDisplayed(taskRemovedMsg);
        expect(await assignmentOptionPage.isTaskExisting(taskName_2)).toBe(false);
    });

});
