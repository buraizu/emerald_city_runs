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
    let currentDate = new Date();
    let upcomingUserEvents;
    let sortedUserEvents;
    let nextUserEvent = null;
    const userEvents = this.props.userEvents;
    const runs = this.props.runs;

    if(userEvents) {
      // upcomingUserEvents = userEvents.filter((userEvent) => new Date(userEvent.date) > currentDate)
      // sortedUserEvents = upcomingUserEvents.sort((event1, event2) => new Date(event1.date) - new Date(event2.date))
      // nextUserEvent = sortedUserEvents[0]
    }


    return(
      <div>
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
