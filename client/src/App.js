import React, { Component } from 'react';
import './App.css';

import * as actions from './actions/eventActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


import EventList from './events/EventList';
import EventsPage from './events/EventsPage';

// <EventList runEvents={this.props.runEvents} />

class App extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <Router>
        <div>
          <p>This is the app</p>
          <Route path='/events' render={() => <EventList runEvents={this.props.runEvents} />} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { runEvents: state.events }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, {...actions})(App);
