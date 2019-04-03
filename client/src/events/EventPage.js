import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';  // need new actions file
import { bindActionCreators } from 'redux';

class EventPage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isFeatured: false
    }
  }

  // updateRunState(event) {
  //   const field = event.target.name;
  //   const run = this.state.run;
  //   run[field] = event.target.value;
  //   return this.setState({run: run});
  // }

  toggleEdit() {
    this.setState({isFeatured: true})
  }

  render() {
    return (
      <li
        key={this.props.key}
        event={this.props.event}
      >
        <h3>{this.props.event.title}</h3>
        <p>{this.props.event.date}</p>
        <a
          href={this.props.event.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Event Home Page
        </a>
      </li>

    )
  }
}

function mapStateToProps(state, ownProps) {

  let event = {title: '', description: '', isFeatured: ''}
  const eventId = ownProps.event.id;
  event = Object.assign({}, state.events.events.find(event => event.id == eventId))

  return {event: event}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
