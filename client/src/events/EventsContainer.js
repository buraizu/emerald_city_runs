import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';   // need new action file
import { bindActionCreators } from 'redux';

import EventList from './EventList';
import FeaturedEvent from './FeaturedEvent';


class EventsContainer extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
        <div>
          <h2>Events Container</h2>
          <EventList runEvents={this.props.events} setEvent={this.props.setEvent} />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    featuredEvent: state.featuredEvent
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, {...actions})(EventsContainer);
