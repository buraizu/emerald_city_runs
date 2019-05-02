import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import LogIn from './users/LogIn';
import SignUp from './users/SignUp';
import EventList from './events/EventList';

class Home extends Component {

  componentDidMount() {
    this.props.fetchEvents(); // necessary ?
  }

  render() {
    return (
      <div>
        <div className="feature text-center">
          <h1>Welcome to Emerald City Runs</h1>
          <h3>Your source for upcoming Seattle running events</h3>
          <p>Get inspired to train for something, or simply keep track of your runs!</p>
        </div>
        <div className="feature App largeText">
          <Link to="/signup">SIGN UP</Link>
        </div>
        <div className="feature App largeText">
          <Link to="/login">LOG IN</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    runs: state.runs,
    events: state.events
  }
}

export default connect(mapStateToProps, {...actions})(Home);
