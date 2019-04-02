import React, { Component } from 'react';

import EventList from './EventList';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';   // need new action file
import { bindActionCreators } from 'redux';

const EventsContainer = (props) => {

  return (
    <div>
      <h2>Events Container</h2>
      <EventList runEvents={props.events} />
    </div>
  )

}

export default EventsContainer;
