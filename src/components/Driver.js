import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {deleteDriverById, toggleDriverActivity} from "../state-management/actions/driver.actions";
import {setCoordinates, setDriver} from "../state-management/actions/drivers-map.actions";

class DriverContainer extends Component {

    state = {
        driver:null
    };

    componentDidMount() {
        this.setState({
            driver: this.props.driver
        })
    }

    toggleActivity(isActive){
        this.props.toggleActivity(this.state.driver._id, isActive);
        const updatedDriver = Object.assign(this.state.driver, {isActive: isActive});
        this.setState({
            driver: updatedDriver
        })
    }

    deleteDriver(){
        this.props.deleteDriver(this.state.driver._id);
    }

    setCoordinates = () =>{
        this.props.setCoordinates(this.state.driver.latitude, this.state.driver.longitude)
    };

    render() {
        if(this.state.driver == null){
            return null;
        }
        return (
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={2}>
                            <img
                                src={this.state.driver.picture}
                                alt="new"/>
                        </Col>
                        <Col xs={10}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <h4>{this.state.driver.name.first} {this.state.driver.name.last}</h4>
                                <Button variant="danger" size="sm"
                                        onClick={() => this.deleteDriver()}> Delete Driver </Button>
                            </div>

                            <br/>
                            <label>Age: {this.state.driver.age}</label>
                            <br/>
                            <br/>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <div style={styles.tasksLabel}>Tasks: {this.state.driver.tasks.length}</div>
                                <div>
                                    {this.state.driver.isActive ?
                                        <Button variant="secondary" size="sm" style={styles.driverButton}
                                                onClick={() => this.toggleActivity(false)}>
                                            Mark as Inactive
                                        </Button> :
                                        <Button variant="info" size="sm" style={styles.driverButton}
                                                onClick={() => this.toggleActivity(true)}>
                                            Mark as Active </Button>
                                    }
                                    <Button variant="success" size="sm" style={styles.driverButton}
                                            onClick={() => this.props.setDriver(this.state.driver)}>Show On Map</Button>
                                    <Button variant="primary" size="sm" style={styles.driverButton}
                                            onClick={this.setCoordinates}>Location</Button>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

const styles = {
    driverButton:{
        margin: '.375rem .375rem'
    },
    tasksLabel:{
        marginTop: 'auto',
        marginBottom: 'auto'
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleActivity: (driverId, isActive) => dispatch(toggleDriverActivity(driverId, isActive)),
        deleteDriver: (driverId) => dispatch(deleteDriverById(driverId)),
        setCoordinates: (lat, lng) => dispatch(setCoordinates(lat, lng)),
        setDriver: (driver) => dispatch(setDriver(driver))
    };
};

export const Driver = connect(null, mapDispatchToProps)(DriverContainer);

