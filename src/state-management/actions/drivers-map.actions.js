export const SET_COORDINATES = 'SET_COORDINATES';
export const setCoordinates = (lat, lng) => ({
    type: SET_COORDINATES,
    coordinates: {lat: lat, lng: lng}
});

export const SET_DRIVER = 'SET_DRIVER';
export const setDriver = (driver) => ({
    type: SET_DRIVER,
    driver: driver
});

export const SET_TASK = 'SET_TASK';
export const setTask = (task) => ({
    type: SET_TASK,
    task: task
});
