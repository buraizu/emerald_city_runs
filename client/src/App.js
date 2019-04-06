import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './actions/eventActions.js';   // need new action file
import { bindActionCreators } from 'redux';

import EventList from './events/EventList';
import RunsContainer from './runs/RunsContainer';
import Header from './Header';
import Home from './Home';
import EventsContainer from './events/EventsContainer';
import RunForm from './runs/RunForm';
import RunDetail from './runs/RunDetail';


class App extends Component {


  render() {

    return (
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path='/events' component={EventsContainer} />
          <Route exact path='/runs' component={RunsContainer} />
          <Route exact path='/runs/:id' component={RunDetail} />
        </div>
      </Router>
    );
  }

}



export default App;
