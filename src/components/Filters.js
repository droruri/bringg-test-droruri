import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import {connect} from "react-redux";
import {setAge, setName} from "../state-management/actions/filter.actions";
import {getAge, getName} from "../state-management/selectors/filter.selector";

class FiltersContainer extends Component {

    state = {
        name: '',
        age: ''
    };

    componentDidMount() {
        this.setState({
            name: this.props.name,
            age: this.props.age
        })
    }

    setName(name) {
        this.setState({
            name: name,
            age: this.state.age
        });
        this.props.setName(name)
    }

    setAge(age) {
        this.setState({
            name: this.state.name,
            age: age
        });
        this.props.setAge(age)
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="filterByName">
                    <Form.Label>Filter By Name:</Form.Label>
                    <Form.Control value={this.state.name}
                                  onChange={(event) => this.setName(event.target.value)}
                                  placeholder="name..." />
                </Form.Group>
                <Form.Group controlId="filterByAge">
                    <Form.Label>Filter By Age:</Form.Label>
                    <Form.Control value={this.state.age}
                                  onChange={(event) => this.setAge(event.target.value)}
                                  placeholder="age..." />
                </Form.Group>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: getName(state),
        age: getAge(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch(setName(name)),
        setAge: (age) => dispatch(setAge(age))
    };
};

export const Filters = connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);

