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
import RunPage from './runs/RunPage';


class App extends Component {


  render() {

    return (
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path='/events' render={ () => <EventsContainer events={this.props.events} setEvents={this.props.setEvents} />} />
          <Route path='/runs' component={RunsContainer} />
          <Route exact path='/runs/:id' component={RunPage} />
        </div>
      </Router>
    );
  }

}



export default App;
