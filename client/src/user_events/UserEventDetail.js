import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import EditUserEventForm from './EditUserEventForm';
import PastUserEventForm from './PastUserEventForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

class UserEventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      saving: false,
      userEvent: this.props.userEvent
    };
    this.updateUserEventState = this.updateUserEventState.bind(this);
    this.saveUserEvent = this.saveUserEvent.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteUserEvent = this.deleteUserEvent.bind(this);
  }

  updateUserEventState(event) {
    const field = event.target.name;
    const userEvent = this.state.userEvent;
    userEvent[field] = event.target.value;
    return this.setState({userEvent: userEvent});
  }

  saveUserEvent(event) {
    event.preventDefault();
    this.setState({saving: true});

    this.props.actions.setGoal(this.state.userEvent);
  }

  toggleEdit() {
    this.setState({isEditing: true})
  }

  deleteUserEvent(event) {
    this.props.actions.deleteUserEvent(this.state.userEvent)
    this.props.history.push("/user_profile")
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.userEvent.id !== nextProps.userEvent.id) {
      this.setState({userEvent: nextProps.userEvent});
    }
    this.setState({saving: false, isEditing: false});
  }

  render() {
    let currentDate = new Date();
    let userEventDate = new Date(this.props.userEvent.date)
    let buttonText = (currentDate < userEventDate ? "set goal" : "result")

    if (this.state.isEditing && userEventDate > currentDate) {
      return (
        <Col md={{ span: 4, offset: 5 }}>
          <div>
            <EditUserEventForm
              userEvent={this.state.userEvent}
              onChange={this.updateUserEventState}
              saveUserEvent={this.saveUserEvent}
            />
          </div>
        </Col>
      )
    }
    if (this.state.isEditing && userEventDate < currentDate) {
      return (
        <Col md={{ span: 4, offset: 5 }}>
          <div>
            <PastUserEventForm
              userEvent={this.state.userEvent}
              onChange={this.updateUserEventState}
              saveUserEvent={this.saveUserEvent}
            />
          </div>
        </Col>
      )
    }
    return (
      <Col md={{ span: 4, offset: 5 }}>
        <div>
          <h3>Your Event Details</h3>
          <h4>{this.props.userEvent.title}</h4>
          <p>Date: {this.props.userEvent.date}</p>
          <p><a href={this.props.userEvent.url} target="_blank" rel="noopener noreferrer">Event Home Page</a></p>
          <button onClick={this.toggleEdit}>{buttonText}</button>
          <button onClick={this.deleteUserEvent}>delete</button>
          <p><Link to={'/user_events'}>Back to My Events</Link></p>
          <p><Link to={'/'}>Home</Link></p>
        </div>
      </Col>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  let userEvent = {title: '', date: '', url: ''}
  const userEventId = ownProps.match.params.id;

  if(state.userEvents.userEvents.length > 0) {
    userEvent = Object.assign({}, state.userEvents.userEvents.find(userEvent => userEvent.id === parseInt(userEventId)))
  }

  return {userEvent: userEvent}
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

UserEventDetail.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserEventDetail);
