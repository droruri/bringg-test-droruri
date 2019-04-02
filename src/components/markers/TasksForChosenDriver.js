import {isTaskAssignedForDriver} from "../../services/filter.service";
import {Marker} from "google-maps-react";
import taskIcon from "../../assets/icons8-flag-filled-40.png";
import React from "react";

export function tasksForChosenDriver(tasks, chosenDriver){
    return(
        tasks
            .filter(task=>isTaskAssignedForDriver(task, chosenDriver) )
            .map(task =>
                <Marker key={task._id}
                        icon={{url: taskIcon}}
                        position={{lat: task.latitude, lng: task.longitude}}/>)
    )
}
