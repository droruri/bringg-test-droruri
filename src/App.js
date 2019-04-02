import React, { Component } from 'react';
import {Provider} from 'react-redux'
import './App.css';
import {fetchDrivers, fetchTasks} from "./services/fetch-mocks.service";
import {applyMiddleware, createStore} from "redux";
import mainReducer from "./state-management/reducers/mainReducer";
import thunk from "redux-thunk";
import {loadDriversEffect} from "./state-management/effects/driver/driver.effects";
import {loadTasksEffect} from "./state-management/effects/tasks/tasks.effects";
import {MainScreen} from "./screens/MainScreen";
import {assignTasksForDrivers} from "./services/assign-tasks";

class App extends Component {
  state = {
    reduxStore: createStore(mainReducer, applyMiddleware(thunk))
  };

  componentDidMount() {
    Promise.all([fetchDrivers(), fetchTasks()])
        .then((result)=>{
            const assignedTasksAndDrivers = assignTasksForDrivers(result[0], result[1]);
            this.state.reduxStore.dispatch(loadDriversEffect(assignedTasksAndDrivers[0]));
            this.state.reduxStore.dispatch(loadTasksEffect(assignedTasksAndDrivers[1]))
        });
  }

  render() {
    return (
        <Provider store={this.state.reduxStore}>
          <MainScreen/>
        </Provider>
    );
  }
}

export default App;
