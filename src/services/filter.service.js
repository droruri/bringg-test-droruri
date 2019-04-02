export const isFilterValueIncludedInDriverName = (driver, filterValue) =>(`${driver.name.first} ${driver.name.last}`).includes(filterValue);
export const isAgeAdaptedForDriver = (driver, age) =>(driver.age.toString()).includes(age.toString());
export const isTaskAssignedForDriver = (task, driver) => task.assignedDriver._id === driver._id;
