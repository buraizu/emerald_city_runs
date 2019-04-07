import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/eventActions';
import { bindActionCreators } from 'redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import EventsContainer from './events/EventsContainer';
import FeaturedEvent from './events/FeaturedEvent';
import RunsContainer from './runs/RunsContainer';
import LatestRun from './runs/LatestRun';

class Home extends Component {

  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchRuns();
  }

  render() {

    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <div>
              <h1>Welcome to Emerald City Runs</h1>
              <h3>Your source for upcoming Seattle running events</h3>
              <p>Get inspired to train for something, or simply keep track of your runs</p>
            </div>
          </Row>
          <Row>
            <Col md={4}>
              <FeaturedEvent feature={this.props.events.featuredEvent} />
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <LatestRun runs={this.props.runs} />
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

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, {...actions})(Home);
