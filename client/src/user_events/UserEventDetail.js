import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import EditUserEventForm from './EditUserEventForm';

class UserEventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      hasGoal: this.props.userEvent.goal,
      userEvent: this.props.userEvent
    };
    this.updateUserEventState = this.updateUserEventState.bind(this);
    this.saveUserEvent = this.saveUserEvent.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);

  }

  saveUserEvent(event) {
    event.preventDefault();
    this.setState({saving: true});

    this.props.actions.setGoal(this.state.userEvent);
  }

  updateUserEventState(event) {
    const field = event.target.name;
    const userEvent = this.state.userEvent;
    userEvent[field] = event.target.value;
    return this.setState({userEvent: userEvent});
  }

  toggleEdit() {
    this.setState({isEditing: true})
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const userEvent = {...this.state.userEvent};
    this.props.setGoal(userEvent);
    // this.setState({
    //   course: '',
    //   distance: '',
    //   time: '',
    //   review: '',
    //   rating: ''
    // })
  }

  // deleteRun(event) {
  //   this.props.actions.deleteRun(this.state.run)
  //   this.props.history.push("/user_profile")
  // }

  componentWillReceiveProps(nextProps) {
    if(this.props.userEvent.id !== nextProps.userEvent.id) {
      this.setState({userEvent: nextProps.userEvent});
    }
    this.setState({saving: false, isEditing: false});
  }



  render() {

    if (this.state.isEditing) {
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
      return (
        <Col>
          <div className="feature">
            <h3>Event Details</h3>
            <h4>Title: {this.props.userEvent.title}</h4>
            <p>Date: {this.props.userEvent.date}</p>
            <p>
              <a href={this.props.userEvent.url} target="_blank" rel="noopener noreferrer">
                  <span> {this.props.userEvent.title}</span>
              </a>
            </p>
            <p>Goal: {this.props.userEvent.goal}</p>
            <button onClick={this.toggleEdit}>edit</button>
            <p><Link to={'/'}>Home</Link></p>
          </div>
        </Col>
      )
    }


}

const mapStateToProps = (state, ownProps) => {
  const userEventId = ownProps.userEvent.id;
  let userEvent = Object.assign({}, state.userEvents.userEvents.find(userEvent => userEvent.id === userEventId))

  return {userEvent: userEvent}
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

UserEventDetail.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserEventDetail);
// value={this.props.saving ? 'Saving...' : 'Save'}
