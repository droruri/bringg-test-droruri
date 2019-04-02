export function assignTasksForDrivers(_drivers, _tasks){
    let drivers = [..._drivers];
    let tasks = [..._tasks];
    let activeDriverIDS = drivers
        .filter(driver=>driver.isActive)
        .map(driver=>driver._id);

    tasks.forEach(task=>{
        let activeDriverIndexToAddTask = activeDriverIDS[Math.floor((Math.random() * activeDriverIDS.length))];
        drivers[activeDriverIndexToAddTask].tasks.push(task);
        task.assignedDriver = drivers[activeDriverIndexToAddTask];
    });

    return [drivers, tasks];
}
