import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
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
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  updateUserEventState(event) {
    const field = event.target.name;
    const userEvent = this.state.userEvent;
    userEvent[field] = event.target.value;
    return this.setState({userEvent: userEvent});
  }

  // saveRun(event) {
  //   event.preventDefault();
  //   this.setState({saving: true});
  //
  //   this.props.actions.updateRun(this.state.run);
  // }

  toggleEdit() {
    this.setState({isEditing: true})
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
          <p>Home Page: {this.props.userEvent.url}</p>

          <form onSubmit={this.props.setGoal}>
            <span>Goal: </span>
            <input
              type="text"
              onChange={this.props.onChange}
              name="goal"
              value={this.props.userEvent.goal}
              placeholder="goal"
            />
            <input
              type="submit"
              disabled={this.props.saving}
              value={this.props.saving ? 'Saving...' : 'Save'}
            />
          </form>


          <p><Link to={'/'}>Home</Link></p>
        </div>
      </Col>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

UserEventDetail.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserEventDetail);
