import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import * as actions from '../actions/eventActions';   // need new action file
import EventList from './EventList';
import FeaturedEvent from './FeaturedEvent';


class EventsContainer extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <div>
              <EventList runEvents={this.props.events} setEvent={this.props.setEvent} />
            </div>
          </Col>
          <Col md={{ span: 4, offset: 3}}>
            <h3>Featured Event: </h3>
            <div>
              <FeaturedEvent feature={this.props.events.featuredEvent} />
            </div>
          </Col>
        </Row>
      </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

EventsContainer.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  setEvent: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {...actions})(EventsContainer);
