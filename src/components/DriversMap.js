import React, {Component} from 'react';
import {getAllDrivers} from "../state-management/selectors/driver.selector";
import {connect} from "react-redux";
import {GoogleApiWrapper, Map} from 'google-maps-react';
import {getAge, getName} from "../state-management/selectors/filter.selector";
import {getChosenCoordinates, getChosenDriver, getChosenTask} from "../state-management/selectors/drivers-map.selector";
import {getAllTasks} from "../state-management/selectors/tasks.selector";
import {chosenDriverMarker} from "./markers/ChosenDriverMarker";
import {allDriverMarkers} from "./markers/AllDriverMarkers";
import {chosenTaskMarker} from "./markers/ChosenTaskMarker";
import {tasksForChosenDriver} from "./markers/TasksForChosenDriver";
import {allTasks} from "./markers/AllTasks";

const mapStyles = {
    width: '97%',
    height: '100%'
};

class DriversMapContainer extends Component {
    state={
        zoomMap: 16
    };

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={this.state.zoomMap}
                    style={mapStyles}
                    center={{
                        lat: this.props.coordinates.lat,
                        lng: this.props.coordinates.lng
                    }}>
                    {(this.props.chosenDriver !== null)?
                        chosenDriverMarker(this.props.chosenDriver):
                        allDriverMarkers(this.props.drivers, this.props.name, this.props.age)
                    }
                    {(this.props.chosenTask !== null)?
                        chosenTaskMarker(this.props.chosenTask):
                        (this.props.chosenDriver !== null)?
                            tasksForChosenDriver(this.props.tasks, this.props.chosenDriver):
                            allTasks(this.props.tasks, this.props.name, this.props.age)
                        }
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
        chosenDriver: getChosenDriver(state),
        chosenTask: getChosenTask(state)
    };
};


const DriversMap = connect(mapStateToProps)(DriversMapContainer);


export default GoogleApiWrapper(
    (props) => ({
            apiKey: ''
        }
    ))(DriversMap)
