import React, { Component } from 'react';

import EventList from './EventList';

import { connect } from 'react-redux';

class EventsContainer extends Component {

  render() {
    return (
      <div>
        <h2>Events Container</h2>
        <EventList runEvents={this.props.events} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(EventsContainer);
