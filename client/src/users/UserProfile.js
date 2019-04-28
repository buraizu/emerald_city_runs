import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import LatestRun from '../runs/LatestRun';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
    }
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  componentDidMount() {
    this.props.fetchRuns();
  }

  render() {
    console.log(this.props);
    const runs = this.props.runs;
    return(
      <div>
        <h3>{this.props.user.email}</h3>
        <Col md={4}>
          <LatestRun runs={runs} />
        </Col>
        <Link to={'/runs'}>My Runs</Link>
        <br />
        <Link to={'/user_events'}>My Events</Link>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return ({
    users: state.users,
    runs: state.runs
  });
};

export default UserProfile = withRouter(connect(mapStatesToProps, {...actions})(UserProfile));
