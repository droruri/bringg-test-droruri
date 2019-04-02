export const LOAD_TASKS = 'LOAD_TASKS';
export const loadTasksSuccess = (tasks) => ({
    type: LOAD_TASKS,
    tasks: tasks
});

export const SET_NEW_DRIVER_FOR_TASK = 'SET_NEW_DRIVER_FOR_TASK';
export const setNewDriverForTask = (driver, task) => ({
    type: SET_NEW_DRIVER_FOR_TASK,
    driver: driver,
    task: task
});
