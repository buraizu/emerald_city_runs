import React, { Component } from 'react';
import './App.css';

import * as actions from './actions/eventActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


import EventList from './events/EventList';
import RunsContainer from './runs/RunsContainer';
import Header from './Header';
import Home from './Home';

// <EventList runEvents={this.props.runEvents} />

class App extends Component {
  componentDidMount() {
    this.props.fetchEvents();
    // this.props.fetchRuns();
  }



  render() {

    return (
      <Router>
        <Header />
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path='/events' render={() => <EventList runEvents={this.props.runEvents} />} />
          <Route path='/runs' render={() => <RunsContainer />} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { runEvents: state.events } // Add runs?
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, {...actions})(App);
