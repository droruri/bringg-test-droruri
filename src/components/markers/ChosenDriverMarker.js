import React from 'react';
import { Marker} from "google-maps-react";
import driverIcon from "../../assets/icons8-driver-40.png";

export function chosenDriverMarker(driver) {
    return (
        <Marker icon={{url: driverIcon}}
                    position={{lat: driver.latitude, lng: driver.longitude}}/>

    )
}
