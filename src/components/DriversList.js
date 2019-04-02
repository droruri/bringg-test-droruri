import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllDrivers} from "../state-management/selectors/driver.selector";
import {Driver} from "./Driver";
import {getAge, getName} from "../state-management/selectors/filter.selector";
import {AddDriver} from "./AddDriver";
import {isAgeAdaptedForDriver, isFilterValueIncludedInDriverName} from "../services/filter.service";
import {getChosenDriver} from "../state-management/selectors/drivers-map.selector";


class DriversListContainer extends Component {
    render() {
        return (
            <div>
                <div style={styles.driversListUpperMenu}>
                    <AddDriver/>
                    <span>Total Drivers: {this.props.drivers.length}</span>
                </div>
                <div style={styles.driversList}>
                    {(this.props.chosenDriver != null) ?
                        <Driver driver={this.props.chosenDriver}/> :
                        allDriversList(this.props.drivers, this.props.name, this.props.age)}
                </div>
            </div>
        );
    }
}

function allDriversList(drivers, name, age){
    return (drivers
        .filter(driver => isFilterValueIncludedInDriverName(driver, name))
        .filter(driver => isAgeAdaptedForDriver(driver, age))
        .map(driver =>
            <Driver driver={driver} key={driver._id}/>))
}

const styles = {
    driversListUpperMenu: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    driversList: {
        height: 250,
        overflow: 'auto'
    }
};

const mapStateToProps = state => {
    return {
        drivers: getAllDrivers(state),
        name: getName(state),
        age: getAge(state),
        chosenDriver: getChosenDriver(state)
    };
};


export const DriversList = connect(mapStateToProps/*, mapDispatchToProps*/)(DriversListContainer);


