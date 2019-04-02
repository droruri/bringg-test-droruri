import React from 'react';
import {Marker} from "google-maps-react";
import driverIcon from "../../assets/icons8-driver-40.png";
import {isAgeAdaptedForDriver, isFilterValueIncludedInDriverName} from "../../services/filter.service";

export function allDriverMarkers(drivers, name, age){
    return(
        drivers
            .filter(driver=>isFilterValueIncludedInDriverName(driver, name) )
            .filter(driver=>isAgeAdaptedForDriver(driver, age))
            .map(driver =>
                <Marker key={driver._id}
                        icon={{url: driverIcon}}
                        position={{lat: driver.latitude, lng: driver.longitude}}/>
            )
    )
}
