import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllDrivers} from "../state-management/selectors/driver.selector";
import {Driver} from "./Driver";
import {getAge, getName} from "../state-management/selectors/filter.selector";
import {AddDriver} from "./AddDriver";
import {isAgeAdaptedForDriver, isFilterValueIncludedInDriverName} from "../services/filter.service";


class DriversListContainer extends Component {
    render(){
        return(
            <div>
                <div style={styles.driversListUpperMenu}>
                    <AddDriver/>
                    <span>Total Drivers: {this.props.drivers.length}</span>
                </div>
                <div style={{height:250, overflow: 'auto'}}>
                    {this.props.drivers
                        .filter(driver=>isFilterValueIncludedInDriverName(driver, this.props.name))
                        .filter(driver=>isAgeAdaptedForDriver(driver, this.props.age))
                        .map(driver=>
                            <Driver driver={driver} key={driver._id}/>)}
                </div>
            </div>
        );
    }
}

const styles ={
    driversListUpperMenu:{
        display:'flex',
        justifyContent:'space-between'
    }
}

const mapStateToProps = state => {
    return {
        drivers: getAllDrivers(state),
        name: getName(state),
        age: getAge(state)
    };
};


export const DriversList = connect(mapStateToProps/*, mapDispatchToProps*/)(DriversListContainer);


