import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import EventList from './EventList';
import FeaturedEvent from './FeaturedEvent';

class EventsContainer extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  hasFeaturedEvent = () => {
    if(this.props.events.featuredEvent) {
      return <FeaturedEvent feature={this.props.events.featuredEvent} />
    } else {
      return (
        <h3>Ready to run? Choose an event!</h3>
      )
    }
  }

  render() {
    return (
      <div className="background">
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <div>
              <EventList runEvents={this.props.events} setEvent={this.props.setEvent} />
            </div>
          </Col>
          <Col md={{ span: 4, offset: 3}}>
            <h3 className="displayText">Featured Event: </h3>
            <div className="feature">
              {this.hasFeaturedEvent()}
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
