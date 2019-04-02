import {loadTasksSuccess} from "../../actions/task.actions";

export const loadTasksEffect = (tasks) => {
    return dispatch => {
        dispatch(loadTasksSuccess(tasks));
    };
};
