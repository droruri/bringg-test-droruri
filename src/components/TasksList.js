import React, {Component} from "react";
import {getAllTasks} from "../state-management/selectors/tasks.selector";
import {connect} from "react-redux";
import * as ReactBsTable from "react-bootstrap-table";
import {getChosenDriver} from "../state-management/selectors/drivers-map.selector";
import {isTaskAssignedForDriver} from "../services/filter.service";

let BootstrapTable = ReactBsTable.BootstrapTable;
let TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class TasksListContainer extends Component {
    render() {
        if(this.props.chosenDriver !== null){
            const filteredTasks = this.props.tasks
                .filter(task=>isTaskAssignedForDriver(task, this.props.chosenDriver));

            return (
                <BootstrapTable data={filteredTasks} version='4'>
                    <TableHeaderColumn isKey dataField='_id' dataSort={ true }>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='title' dataSort={ true }>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='scheduledFor' dataSort={ true }>Scheduled For</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataFormat={ fullNameFormatter } dataSort={ true }>Assigned To</TableHeaderColumn>
                    <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
                    <TableHeaderColumn dataField='latitude'>Latitude</TableHeaderColumn>
                    <TableHeaderColumn dataField='longitude'>Longitude</TableHeaderColumn>
                </BootstrapTable>);
        }
        return (
            <BootstrapTable data={this.props.tasks} version='4'>
                <TableHeaderColumn isKey dataField='_id' dataSort={ true }>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='title' dataSort={ true }>Title</TableHeaderColumn>
                <TableHeaderColumn dataField='scheduledFor' dataSort={ true }>Scheduled For</TableHeaderColumn>
                <TableHeaderColumn dataField='name' dataFormat={ fullNameFormatter } dataSort={ true }>Assigned To</TableHeaderColumn>
                <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
                <TableHeaderColumn dataField='latitude'>Latitude</TableHeaderColumn>
                <TableHeaderColumn dataField='longitude'>Longitude</TableHeaderColumn>
            </BootstrapTable>);


    }
}

function fullNameFormatter(cell, row) {
    return `<div>${row.assignedDriver.name.first} ${row.assignedDriver.name.last}</div>`;
}

const mapStateToProps = state => {
    return {
        tasks: getAllTasks(state),
        chosenDriver: getChosenDriver(state)
    };
};

export const TasksList = connect(mapStateToProps)(TasksListContainer);


