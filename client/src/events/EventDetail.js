import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { bindActionCreators } from 'redux';

class EventDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      runEvent: this.props.event
    }
    this.updateEventState = this.updateEventState.bind(this);
    this.toggleFeatured = this.toggleFeatured.bind(this);
  }

  toggleFeatured() {
    const runEvent = this.state.runEvent;
    runEvent["featured"] = true;
    return this.setState({runEvent: runEvent})
  }

  updateEventState() {
    this.toggleFeatured();
    this.props.actions.setEvent(this.state.runEvent);
  }

  render() {
    return (
      <div
        key={this.props.key}
        event={this.props.runEvent}
        className="feature event-feature"
      >
        <h3>{this.props.runEvent.title}</h3>
        <p>Date: {this.props.runEvent.date}</p>
        <p>
          Event Home Page:
          <a href={this.props.runEvent.url} target="_blank" rel="noopener noreferrer">
              <span> {this.props.runEvent.title}</span>
          </a>
        </p>
        <button onClick={this.updateEventState}>Set your event</button>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.runEvent.id;
  let event = Object.assign({}, state.events.events.find(event => event.id === eventId))

  return {event: event}
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

EventDetail.propTypes = {
  event: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
