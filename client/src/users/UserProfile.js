import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import LatestRun from '../runs/LatestRun';
import NextUserEvent from '../user_events/NextUserEvent';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      userEvents: this.props.userEvents
    }
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  componentDidMount() {
    this.props.fetchUserEvents();
    this.props.fetchRuns();
  }

  render() {
    const userEvents = this.props.userEvents;
    const runs = this.props.runs;

    return(
      <div>
        <Row className="justify-content-center">
          <Col md={4}>
            <h2>Your User Profile</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <LatestRun runs={runs} />
            <div className="feature largeText">
              <Link to={'/runs'}>My Runs</Link>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <NextUserEvent userEvents={userEvents} />
            <div className="feature largeText">
              <Link to={'/user_events'}>My Events</Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    users: state.users,
    runs: state.runs,
    userEvents: state.userEvents
  });
};

export default UserProfile = withRouter(connect(mapStateToProps, {...actions})(UserProfile));
