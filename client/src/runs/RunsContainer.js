import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RunsList from './RunsList';
import RunForm from './RunForm';
import Run from './Run';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions';  // need new actions file
import { bindActionCreators } from 'redux';

class RunsContainer extends Component {

  componentDidMount() {
    this.props.fetchRuns();
  }

  render() {
    const runs = this.props.runs;

      return (
        <div>
          <Container>
            <Row>
              <Col md={4}>
                <RunForm postRun={this.props.postRun} />
              </Col>
              <Col md={{ span: 4, offset: 4 }}>
                <RunsList runs={runs} />
              </Col>
            </Row>
          </Container>
        </div>
      )
    }

 }

 const mapStateToProps = (state) => {
   return {
     runs: state.runs
   }
 }

 function mapDispatchToProps(dispatch) {
   return { actions: bindActionCreators(actions, dispatch) }
 }

 RunsContainer.propTypes = {
   // runs: PropTypes.object.isRequired,
   postRun: PropTypes.func.isRequired
 }

export default connect (mapStateToProps, {...actions})(RunsContainer);
