import React, {Component} from "react";
import {getAllTasks} from "../state-management/selectors/tasks.selector";
import {connect} from "react-redux";
import {getChosenDriver} from "../state-management/selectors/drivers-map.selector";
import {isTaskAssignedForDriver} from "../services/filter.service";
import Table from "react-bootstrap/Table";
import {Task} from "./Task";

class TasksListContainer extends Component {
    render() {
        const filteredTasks = this.props.tasks
            .filter(task=>(this.props.chosenDriver !== null)?isTaskAssignedForDriver(task, this.props.chosenDriver):true);

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Scheduled For</th>
                    <th>Assigned To</th>
                    <th>Address</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Show On Map</th>
                </tr>
                </thead>
                <tbody>
                {filteredTasks.map(_task=>
                    <Task key={_task._id} task={_task}/>
                )}
                </tbody>
            </Table>
            );


    }
}

const mapStateToProps = state => {
    return {
        tasks: getAllTasks(state),
        chosenDriver: getChosenDriver(state)
    };
};

export const TasksList = connect(mapStateToProps)(TasksListContainer);


