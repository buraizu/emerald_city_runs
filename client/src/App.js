import React, { Component } from 'react';
import './App.css';

import * as actions from './actions/eventActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    // console.log(this.props)
    // this.props.fetchEvents();
    fetch('/api/events')
      .then(response => response.json())
      .then(responseJson => responseJson.results.map(event => console.log(event)))
      // .then(events.results.map( event => console.log(event)) )
    }
  render() {
    return (
      <div>This is the app</div>
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
