import {
    ADD_DRIVER,
    ADD_TASK_TO_DRIVER,
    DELETE_DRIVER_BY_ID,
    LOAD_DRIVERS, REMOVE_TASK_TO_DRIVER,
    TOGGLE_DRIVER_ACTIVITY
} from "../actions/driver.actions";

const initialState = [];

const driverReducer = (state = initialState, action) => {
    let newState = [...state];
    switch (action.type) {
        case LOAD_DRIVERS:
            return [...action.drivers];
        case ADD_DRIVER:
            return [...newState, action.driver];
        case DELETE_DRIVER_BY_ID:
            const filteredDrivers = newState.filter(driver => driver._id !== action.driverId);
            return [...filteredDrivers];
        case TOGGLE_DRIVER_ACTIVITY:
            const foundIndex = newState.findIndex(x => x._id === action.driverId);
            newState[foundIndex] = Object.assign(newState[foundIndex], {isActive: action.isActive});
            return newState;
        case ADD_TASK_TO_DRIVER:
            return addTasksForDriverInState(newState, action);
        case REMOVE_TASK_TO_DRIVER:
            return removeTaskForDriverInState(newState, action);
        default:
            return state;
    }
};

function removeTaskForDriverInState(drivers, action){
    const foundIndex = drivers.findIndex(x => x._id === action.driverId);
    let driver = Object.assign({},drivers[foundIndex]);
    const newTasksArray = [...drivers[foundIndex].tasks.filter(task => task._id !== action.task._id)];
    driver = Object.assign(driver, {tasks: newTasksArray});
    drivers.splice(foundIndex, 1);
    drivers.splice(foundIndex, 0, driver);
    return drivers;
}

function addTasksForDriverInState(drivers, action){
    const foundIndex = drivers.findIndex(x => x._id === action.driverId);
    let driver = Object.assign({},drivers[foundIndex]);
    const newTasksArray = [...drivers[foundIndex].tasks, action.task];
    driver = Object.assign(driver, {tasks: newTasksArray});
    drivers.splice(foundIndex, 1);
    drivers.splice( foundIndex, 0, driver);
    return drivers;
}


export default driverReducer;
