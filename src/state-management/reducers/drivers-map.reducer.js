import {SET_COORDINATES, SET_DRIVER} from "../actions/drivers-map.actions";

const initialState = {
    coordinates:{
        lat: 32.060396,
        lng: 34.808933
    },
    driver: null
};

export const driversMapReducer = (state = initialState, action) => {
    let oldState = Object.assign({}, state);
    switch (action.type) {
        case SET_COORDINATES:
            return Object.assign(oldState,{coordinates: action.coordinates});
        case SET_DRIVER:
            return Object.assign(oldState,{driver: action.driver,
                coordinates: {lat: action.driver.latitude, lng: action.driver.longitude}});
        default:
            return oldState;
    }
};
