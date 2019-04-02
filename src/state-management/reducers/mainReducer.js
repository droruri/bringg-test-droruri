import { combineReducers } from 'redux'
import driverReducer from "./driver.reducer";
import tasksReducer from "./tasks.reducer";
import {filterReducer} from "./filter.reducer";
import {driversMapReducer} from "./drivers-map.reducer";

const mainReducer = combineReducers({
    drivers: driverReducer,
    tasks: tasksReducer,
    filter: filterReducer,
    driversMap: driversMapReducer,
});

export default mainReducer;
