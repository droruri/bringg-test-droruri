import {LOAD_TASKS, SET_NEW_DRIVER_FOR_TASK} from "../actions/task.actions";

const initialState = [];

export const tasksReducer = (state = initialState, action) => {
    let newState = [...state];
    switch (action.type) {
        case LOAD_TASKS:
            return [...action.tasks];
        case SET_NEW_DRIVER_FOR_TASK:
            const foundIndex = newState.findIndex(x => x._id === action.task._id);
            newState[foundIndex] = Object.assign(newState[foundIndex], {assignedDriver: action.driver});
            return [...newState];
        default:
            return newState;
    }
};

export default tasksReducer;
