import React, {Component} from "react";
import {connect} from "react-redux";
import {getActiveDrivers} from "../state-management/selectors/driver.selector";
import {setNewDriverForTask} from "../state-management/actions/task.actions";
import {ActiveDriverSelector} from "./ActiveDriverSelector";
import Button from "react-bootstrap/Button";
import {setTask} from "../state-management/actions/drivers-map.actions";
import {getChosenTask} from "../state-management/selectors/drivers-map.selector";

class TaskContainer extends Component {
    state={
        name:{
            first:'',
            last:''
        }
    };

    componentDidMount() {
        this.setState({name: this.props.task.assignedDriver.name});
    }

    setNewDriverForTask = (newDriver) => {
        this.props.setNewDriverForTask(newDriver, this.props.task)
    };

    setChosenTask = () => {
        this.props.setTask(this.props.task);
    };

    render() {
        return (
            <tr>
                <td>{this.props.task._id}</td>
                <td>{this.props.task.title}</td>
                <td>{new Intl.DateTimeFormat('en-GB').format(new Date(this.props.task.scheduledFor))}</td>
                <td>
                    <ActiveDriverSelector task={this.props.task}/>
                </td>
                <td>{this.props.task.address}</td>
                <td>{this.props.task.latitude}</td>
                <td>{this.props.task.longitude}</td>
                <td>
                    {(this.props.chosenTask == null)?
                        <Button onClick={this.setChosenTask}>Show On Map</Button>:
                        <Button variant="warning" onClick={this.setChosenTask}>Initial State</Button>
                    }
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {
        activeDrivers: getActiveDrivers(state),
        chosenTask: getChosenTask(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNewDriverForTask: (driver, task) => dispatch(setNewDriverForTask(driver, task)),
        setTask: (task) => dispatch(setTask(task)),
    };
};

export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
