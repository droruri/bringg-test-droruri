export const LOAD_DRIVERS = 'LOAD_DRIVERS';
export const loadDriversSuccess = (drivers) => ({
    type: LOAD_DRIVERS,
    drivers: drivers
});

export const ADD_DRIVER = 'ADD_DRIVER';
export const addDriver = (driver) => ({
    type: ADD_DRIVER,
    driver: driver
});

export const DELETE_DRIVER_BY_ID = 'DELETE_DRIVER_BY_ID';
export const deleteDriverById = (driverId) => ({
    type: DELETE_DRIVER_BY_ID,
    driverId: driverId
});

export const TOGGLE_DRIVER_ACTIVITY = 'TOGGLE_DRIVER_ACTIVITY';
export const toggleDriverActivity = (driverId, isActive) => ({
    type: TOGGLE_DRIVER_ACTIVITY,
    driverId: driverId,
    isActive: isActive
});

export const ADD_TASK_TO_DRIVER = 'ADD_TASK_TO_DRIVER';
export const addTaskToDriver = (driverId, task) => ({
    type: ADD_TASK_TO_DRIVER,
    driverId: driverId,
    task: task
});
export const REMOVE_TASK_TO_DRIVER = 'REMOVE_TASK_TO_DRIVER';
export const removeTaskToDriver = (driverId, task) => ({
    type: REMOVE_TASK_TO_DRIVER,
    driverId: driverId,
    task: task
});
