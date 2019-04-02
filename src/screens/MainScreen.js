import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Filters} from "../components/Filters";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {DriversList} from "../components/DriversList";
import {TasksList} from "../components/TasksList";
import DriversMap from "../components/DriversMap";

export class MainScreen extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Navbar bg="light">
                    <Navbar.Brand>Bringg Map Test</Navbar.Brand>
                </Navbar>
                <br/>
                <Row style={styles.mapSection}>
                    <Col md={4}>
                        <Filters/>
                        <br/>
                        <DriversList/>
                    </Col>
                    <Col md={8}>
                        <DriversMap/>
                    </Col>
                </Row>
                <br/>
                <Row style={styles.tasksSection}>
                    <Col md={true}>
                        <TasksList/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const styles = {
    mapSection: {
        height: '55vh',
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    tasksSection: {
        height: '30vh',
        overflowY: 'auto'
    }
};
