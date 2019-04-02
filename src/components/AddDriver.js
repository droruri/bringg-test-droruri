import {connect} from "react-redux";
import React, {Component} from "react";
import {addDriver} from "../state-management/actions/driver.actions";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddDriverContainer extends Component {

    state = {
        showModal: false,
        picture: "",
        age: '',
        firstName: '',
        lastName: '',
        email: "",
        latitude: "",
        longitude: ""
    };

    handleClose = () =>  {
        this.setState({showModal: false});
    };

    handleSaveAndClose = () => {
        const driver = {
            _id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            isActive: true,
            picture: this.state.picture,
            age: this.state.age,
            name: {
                first: this.state.firstName,
                last: this.state.lastName
            },
            email: this.state.email,
            address: "254 Village Court, Brogan, Guam, 9377",
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            tasks: []
        };
        this.props.addDriver(driver);
        this.handleClose();
    };

    handleShow = () => {
        this.setState({showModal: true});
    };

    handleChange = e => {
        const {name, value} = e.target;

        this.setState(() => ({
            [name]: value
        }))
    };

    render() {
        return (
            <>
                <Button variant="primary" size="sm" onClick={()=>this.handleShow()}> ADD DRIVER </Button>
                <Modal show={this.state.showModal} onHide={()=>this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adding New Driver</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number"
                                              name="age"
                                              value={this.state.age}
                                              onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"
                                              name="email"
                                              value={this.state.email}
                                              onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Latitude</Form.Label>
                                <Form.Control type="number"
                                              name="latitude"
                                              value={this.state.latitude}
                                              onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Longitude</Form.Label>
                                <Form.Control type="number"
                                              name="longitude"
                                              value={this.state.longitude}
                                              onChange={this.handleChange}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => this.handleSaveAndClose()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDriver: (driver) => dispatch(addDriver(driver))
    };
};


export const AddDriver = connect(null, mapDispatchToProps)(AddDriverContainer);

