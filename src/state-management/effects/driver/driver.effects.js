import {addTaskToDriver, loadDriversSuccess} from "../../actions/driver.actions";
import {setNewDriverForTask} from "../../actions/task.actions";

export const loadDriversEffect = (drivers) => {
    return dispatch => {
        dispatch(loadDriversSuccess(drivers));
    };
};

export const addTaskToDriverEffect = (driver, task) => {
    return dispatch => {
        dispatch(setNewDriverForTask(driver, task));
        dispatch(addTaskToDriver(driver._id, task));
    };
};
