import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {deleteDriverById, toggleDriverActivity} from "../state-management/actions/driver.actions";
import {setCoordinates, setDriver} from "../state-management/actions/drivers-map.actions";
import {getChosenDriver} from "../state-management/selectors/drivers-map.selector";

class DriverContainer extends Component {

    state = {
        driver: null
    };

    componentDidMount() {
        this.setState({
            driver: this.props.driver
        })
    }

    componentWillReceiveProps() {
        this.setState({
            driver: this.props.driver
        })
    }

    toggleActivity(isActive) {
        this.props.toggleActivity(this.state.driver._id, isActive);
        const updatedDriver = Object.assign(this.state.driver, {isActive: isActive});
        this.setState({
            driver: updatedDriver
        })
    }

    deleteDriver() {
        this.props.deleteDriver(this.state.driver._id);
    }

    setCoordinates = () => {
        this.props.setCoordinates(this.state.driver.latitude, this.state.driver.longitude)
    };

    render() {
        if (this.state.driver == null) {
            return null;
        }
        return (
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={2}>
                            <div style={styles.driverVisualData}>
                                <img
                                    style={styles.driverPhoto}
                                    src={this.state.driver.picture}
                                    alt="new"/>
                                {this.state.driver.isActive ? <span style={styles.activeDot}/> : null}
                            </div>
                        </Col>
                        <Col xs={10}>
                            <div style={styles.bottomMenuWrapper}>
                                <h4>{this.state.driver.name.first} {this.state.driver.name.last}</h4>
                                <Button variant="danger" size="sm"
                                        onClick={this.deleteDriver}>Delete Driver</Button>
                            </div>

                            <br/>
                            <label>Age: {this.state.driver.age}</label>
                            <br/>
                            <br/>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
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
                                    {(this.props.chosenDriver == null) ?
                                        <Button variant="success" size="sm" style={styles.driverButton}
                                                onClick={() => this.props.setDriver(this.state.driver)}>Show On
                                            Map</Button> :
                                        <Button variant="danger" size="sm" style={styles.driverButton}
                                                onClick={() => this.props.setDriver(null)}>Clear</Button>
                                    }

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
    driverButton: {
        margin: '.375rem .375rem'
    },
    tasksLabel: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    bottomMenuWrapper: {display: 'flex', justifyContent: 'space-between'},
    driverVisualData: {display: 'flex', flexDirection: 'column'},
    activeDot: {
        height: '10px',
        width: '10px',
        backgroundColor: 'green',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '5px'
    },
    driverPhoto:{
        width: '32px',
        height: '32px',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: '50%'
    }
};

const mapStateToProps = state => {
    return {
        chosenDriver: getChosenDriver(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleActivity: (driverId, isActive) => dispatch(toggleDriverActivity(driverId, isActive)),
        deleteDriver: (driverId) => dispatch(deleteDriverById(driverId)),
        setCoordinates: (lat, lng) => dispatch(setCoordinates(lat, lng)),
        setDriver: (driver) => dispatch(setDriver(driver))
    };
};

export const Driver = connect(mapStateToProps, mapDispatchToProps)(DriverContainer);

