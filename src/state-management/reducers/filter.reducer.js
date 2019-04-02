import {SET_AGE, SET_NAME} from "../actions/filter.actions";

const initialState = {name:'', age:''};

export const filterReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_NAME:
            return Object.assign(newState, {name: action.name});
        case SET_AGE:
            return Object.assign(newState, {age: action.age});
        default:
            return newState;
    }
};
