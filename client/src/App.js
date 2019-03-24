import React, { Component } from 'react';
import './App.css';

import * as actions from './actions/eventActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EventList from './events/EventList';

class App extends Component {
  componentDidMount() {
    this.props.fetchEvents();
    // console.log(this.props)
    // this.props.fetchEvents();
    // fetch('/api/events')
    //   .then(response => response.json())
    //   .then(responseJson => console.log(responseJson))
      // .then(events.results.map( event => console.log(event)) )
    }
  render() {
    return (
      <div>
        <div>This is the app</div>
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
