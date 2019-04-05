
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';  // need new actions file
import { bindActionCreators } from 'redux';

class EventPage extends Component {

  componentDidMount() {

  }

  constructor(props, context) {
    super(props, context)
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

  getFeaturedEvent() {

  }

  render() {
    return (
      <li
        key={this.props.key}
        event={this.props.runEvent}
      >
        <h3>{this.props.runEvent.title}</h3>
        <p>{this.props.runEvent.date}</p>
        <a
          href={this.props.runEvent.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.runEvent.title}
        </a>
        <br />
        <button onClick={this.updateEventState}>Set your event</button>
      </li>

    )
  }
}

function mapStateToProps(state, ownProps) {
  const eventId = ownProps.runEvent.id;
  let event = Object.assign({}, state.events.events.find(event => event.id == eventId))

  return {event: event}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
