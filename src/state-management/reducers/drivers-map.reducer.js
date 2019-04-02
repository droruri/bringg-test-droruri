import {SET_COORDINATES, SET_DRIVER, SET_TASK} from "../actions/drivers-map.actions";
import {INITIAL_COORDINATES} from "../../mocks/initial-mock-data";

const initialState = {
    coordinates: INITIAL_COORDINATES,
    driver: null,
    task: null
};

export const driversMapReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case SET_COORDINATES:
            return Object.assign(newState,{coordinates: action.coordinates});
        case SET_DRIVER:
            if(action.driver == null){
                return Object.assign(newState,{driver: null,
                    coordinates: INITIAL_COORDINATES});
            }
            return Object.assign(newState,{driver: action.driver,
                coordinates: {lat: action.driver.latitude, lng: action.driver.longitude}});
        case SET_TASK:
            if(newState.task != null){
                return Object.assign(newState,{task: null,
                    coordinates: INITIAL_COORDINATES});
            }
            return Object.assign(newState,{task: action.task,
                coordinates: {lat: action.task.latitude, lng: action.task.longitude}});
        default:
            return newState;
    }
};
