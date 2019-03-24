import React, { Component } from 'react';
import './App.css';

import * as actions from './actions/eventActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EventList from './events/EventList';

class App extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  
  render() {
    return (
      <div>
        <p>This is the app</p>
        <EventList runEvents={this.props.runEvents} />
      </div>
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
