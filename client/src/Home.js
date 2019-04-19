import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import LogInPage from './users/LogInPage';
import SignUp from './users/SignUp';
import EventList from './events/EventList';

class Home extends Component {

  componentDidMount() {
    this.props.fetchEvents();
    // this.props.fetchRuns();
  }

  render() {

    return (
      <div className="background">
        <Container>
          <Row className="justify-content-md-center text-center">
            <div className="feature">
              <h1>Welcome to Emerald City Runs</h1>
              <h3>Your source for upcoming Seattle running events</h3>
              <p>Get inspired to train for something, or simply keep track of your runs!</p>
            </div>
          </Row>
          <Row>
            <Col md={4}>
              <div className="feature">
                <LogInPage />
              </div>
              <div className="feature">
                <SignUp />
              </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <EventList runEvents={this.props.events} setEvent={this.props.setEvent} />
            </Col>
          </Row>
        </Container>
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
