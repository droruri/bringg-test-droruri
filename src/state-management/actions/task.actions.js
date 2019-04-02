export const LOAD_TASKS = 'LOAD_TASKS';
export const loadTasksSuccess = (tasks) => ({
    type: LOAD_TASKS,
    tasks: tasks
});
