import {ADD_DRIVER, DELETE_DRIVER_BY_ID, LOAD_DRIVERS, TOGGLE_DRIVER_ACTIVITY} from "../actions/driver.actions";

const initialState = [];

const driverReducer = (state = initialState, action) => {
    let oldState = [...state];
    switch (action.type) {
        case LOAD_DRIVERS:
            return [...action.drivers];
        case ADD_DRIVER:
            return [...oldState, action.driver];
        case DELETE_DRIVER_BY_ID:
            const filteredDrivers = oldState.filter(driver => driver._id !== action.driverId);
            return [...filteredDrivers];
        case TOGGLE_DRIVER_ACTIVITY:
            const foundIndex = oldState.findIndex(x => x._id === action.driverId);
            oldState[foundIndex] = Object.assign(oldState[foundIndex], {isActive: action.isActive});
            return oldState;
        default:
            return state;
    }
};


export default driverReducer;
