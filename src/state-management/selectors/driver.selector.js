
export const getAllDrivers = (state) => {
    return state.drivers;
};

export const getActiveDrivers = (state) => {
    return state.drivers.filter(driver=>driver.isActive);
};
