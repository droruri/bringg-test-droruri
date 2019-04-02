import {getActiveDrivers} from "../state-management/selectors/driver.selector";
import {connect} from "react-redux";
import React, {Component} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {addTaskToDriverEffect} from "../state-management/effects/driver/driver.effects";
import {removeTaskToDriver} from "../state-management/actions/driver.actions";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class ActiveDriverSelectorContainer extends Component {
    state = {
        name: {
            first: '',
            last: ''
        }
    };

    componentDidMount() {
        this.setState({name: this.props.task.assignedDriver.name});
    }

    componentWillReceiveProps() {
        this.setState({name: this.props.task.assignedDriver.name});
    }

    setNewDriverForTask = (newDriver) => {
        this.props.removeTaskForDriver(this.props.task.assignedDriver._id, this.props.task);
        this.props.setNewDriverForTask(newDriver, this.props.task);
    };

    render() {
        return (
            <Dropdown size="sm">
                <ButtonGroup>
                    <Button>
                        <div>{this.state.name.first} {this.state.name.last}</div>
                    </Button>
                    <Dropdown.Toggle split/>
                </ButtonGroup>

                <Dropdown.Menu style={styles.dropDownMenu}>
                    {this.props.activeDrivers.map(driver =>
                        <Dropdown.Item
                            eventKey={driver}
                            onSelect={() => this.setNewDriverForTask(driver)}
                            key={driver._id}>
                            {driver.name.first} {driver.name.last}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

const styles = {
    dropDownMenu: {
        height: '20vh',
        overflowY: 'auto'
    }
};

const mapStateToProps = state => {
    return {
        activeDrivers: getActiveDrivers(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNewDriverForTask: (driver, task) => dispatch(addTaskToDriverEffect(driver, task)),
        removeTaskForDriver: (driverId, task) => dispatch(removeTaskToDriver(driverId, task))
    };
};

export const ActiveDriverSelector = connect(mapStateToProps, mapDispatchToProps)(ActiveDriverSelectorContainer);
