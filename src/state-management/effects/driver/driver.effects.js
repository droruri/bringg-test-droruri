import {loadDriversSuccess} from "../../actions/driver.actions";

export const loadDriversEffect = (drivers) => {
    return dispatch => {
        dispatch(loadDriversSuccess(drivers));
    };
};
