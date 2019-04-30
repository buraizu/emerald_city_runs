import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
import UserEvent from './UserEvent';
import Trophy from './Trophy';

class TrophyCase extends Component {

  componentDidMount() {
    this.props.fetchUserEvents();
  }

  render() {
    let currentDate = new Date();

    const trophyEvents = this.props.userEvents.userEvents.filter((userEvent) => new Date(userEvent.date) < currentDate && userEvent.result !== null);

    const displayTrophies = trophyEvents.map((userEvent) => {
      return <Trophy key={userEvent.id} userEvent={userEvent} />
    })

    return (
      <div className="background">
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h1 className="feature text-center">Trophy Case</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <div className="feature">{displayTrophies}</div>
          </Col>
        </Row>
      </div>
      )
    }

 }

 const mapStateToProps = (state) => {
   return {
     userEvents: state.userEvents
   }
 }

 TrophyCase.propTypes = {

 }

export default connect (mapStateToProps, {...actions})(TrophyCase);
