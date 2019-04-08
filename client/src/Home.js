import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import FeaturedEvent from './events/FeaturedEvent';
import LatestRun from './runs/LatestRun';

class Home extends Component {

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchRuns();
  }

  render() {

    return (
      <div className="background">
        <Container>
          <Row className="justify-content-md-center">
            <div className="feature">
              <h1>Welcome to Emerald City Runs</h1>
              <h3>Your source for upcoming Seattle running events</h3>
              <p>Get inspired to train for something, or simply keep track of your runs!</p>
            </div>
          </Row>
          <Row>
            <Col md={4}>
              <FeaturedEvent feature={this.props.events.featuredEvent} />
              <div className="feature">
                <h3 className="displayText"><Link to={'/events'}>EVENTS</Link></h3>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <LatestRun runs={this.props.runs} />
              <div className="feature">
                <h3 className="displayText"><Link to={'/runs'}>RUNS</Link></h3>
              </div>
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
