import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
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
        <Col md={{ span: 4, offset: 2 }}>
          <h2>Events Container</h2>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <div>
            <EventList runEvents={this.props.events} setEvent={this.props.setEvent} />
          </div>
        </Col>
      </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

EventsContainer.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  setEvent: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {...actions})(EventsContainer);
