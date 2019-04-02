import React, {Component} from 'react';
import {getAllDrivers} from "../state-management/selectors/driver.selector";
import {connect} from "react-redux";
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import {getAge, getName} from "../state-management/selectors/filter.selector";
import {getChosenCoordinates, getChosenDriver} from "../state-management/selectors/drivers-map.selector";
import driverIcon from '../assets/icons8-driver-40.png';
import taskIcon from '../assets/icons8-flag-filled-40.png';
import {getAllTasks} from "../state-management/selectors/tasks.selector";
import {
    isAgeAdaptedForDriver,
    isFilterValueIncludedInDriverName,
    isTaskAssignedForDriver
} from "../services/filter.service";

const mapStyles = {
    width: '97%',
    height: '100%'
};

class DriversMapContainer extends Component {
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={16}
                    style={mapStyles}
                    center={{
                        lat: this.props.coordinates.lat,
                        lng: this.props.coordinates.lng
                    }}>
                    {(this.props.chosenDriver !== null)?
                        <Marker icon={{url: driverIcon}}
                                position={{lat: this.props.chosenDriver.latitude, lng: this.props.chosenDriver.longitude}}/>
                        :this.props.drivers
                        .filter(driver=>isFilterValueIncludedInDriverName(driver, this.props.name) )
                        .filter(driver=>isAgeAdaptedForDriver(driver, this.props.age))
                        .map(driver =>
                        <Marker key={driver._id}
                                icon={{url: driverIcon}}
                                position={{lat: driver.latitude, lng: driver.longitude}}/>
                    )}
                    {(this.props.chosenDriver !== null)?
                        this.props.tasks
                            .filter(task=>isTaskAssignedForDriver(task, this.props.chosenDriver) )
                            .map(task =>
                                <Marker key={task._id}
                                        icon={{url: taskIcon}}
                                        position={{lat: task.latitude, lng: task.longitude}}/>)
                        :this.props.tasks
                        .filter(task=>isFilterValueIncludedInDriverName(task.assignedDriver, this.props.name) )
                        .filter(task=>isAgeAdaptedForDriver(task.assignedDriver, this.props.age))
                        .map(task =>
                        <Marker key={task._id}
                                icon={{url: taskIcon}}
                                position={{lat: task.latitude, lng: task.longitude}}/>
                    )}
                </Map>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        drivers: getAllDrivers(state),
        tasks: getAllTasks(state),
        name: getName(state),
        age: getAge(state),
        coordinates: getChosenCoordinates(state),
        chosenDriver: getChosenDriver(state)
    };
};


const DriversMap = connect(mapStateToProps)(DriversMapContainer);


export default GoogleApiWrapper(
    (props) => ({
            apiKey: ''
        }
    ))(DriversMap)
