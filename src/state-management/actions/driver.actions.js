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
