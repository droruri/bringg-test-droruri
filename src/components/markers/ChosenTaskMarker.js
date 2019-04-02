import {Marker} from "google-maps-react";
import React from "react";
import taskIcon from "../../assets/icons8-flag-filled-40.png";

export function chosenTaskMarker(task){
    return(
        <Marker icon={{url: taskIcon}}
                position={{lat: task.latitude, lng: task.longitude}}/>

    )
}
