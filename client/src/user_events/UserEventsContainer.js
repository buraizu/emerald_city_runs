import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
import UserEventsList from './UserEventsList';

class UserEventsContainer extends Component {

  componentDidMount() {
    this.props.fetchUserEvents();
  }

  render() {
    const userEvents = this.props.userEvents;

      return (
        <div className="background">
          <UserEventsList userEvents={userEvents}/>
          <div className="feature">
            <Link to={'/user_profile'}>Back to User Profile</Link>
          </div>
        </div>
      )
    }

 }

 const mapStateToProps = (state) => {
   return {
     userEvents: state.userEvents
   }
 }

 UserEventsContainer.propTypes = {

 }

export default connect (mapStateToProps, {...actions})(UserEventsContainer);
