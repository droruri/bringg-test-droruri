import {isAgeAdaptedForDriver, isFilterValueIncludedInDriverName} from "../../services/filter.service";
import {Marker} from "google-maps-react";
import taskIcon from "../../assets/icons8-flag-filled-40.png";
import React from "react";

export function allTasks(tasks, name, age){
    return(
        tasks
            .filter(task=>isFilterValueIncludedInDriverName(task.assignedDriver, name) )
            .filter(task=>isAgeAdaptedForDriver(task.assignedDriver, age))
            .map(task =>
                <Marker key={task._id}
                        icon={{url: taskIcon}}
                        position={{lat: task.latitude, lng: task.longitude}}/>
            )
    )
}
