
import React, {Component} from "react";

export class Task extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.task._id}</td>
                <td>{this.props.task.title}</td>
                <td>{new Intl.DateTimeFormat('en-GB').format(new Date(this.props.task.scheduledFor))}</td>
                <td>Tomy</td>
                <td>{this.props.task.address}</td>
                <td>{this.props.task.latitude}</td>
                <td>{this.props.task.longitude}</td>
                <td><button>Show On Map</button></td>
            </tr>
        );
    }
}
