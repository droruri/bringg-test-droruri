import {LOAD_TASKS} from "../actions/task.actions";

const initialState = [];

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TASKS:
            return [...action.tasks];
        default:
            return state
    }
};

export default tasksReducer;
