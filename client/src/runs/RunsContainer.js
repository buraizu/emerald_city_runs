import React, { Component } from 'react';

import RunInput from './RunInput';
import RunsList from './RunsList';
import Run from './Run';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';  // need new actions file
import { bindActionCreators } from 'redux';


class RunsContainer extends Component {

  componentDidMount() {
    this.props.fetchRuns();
  }

  render() {
  return (
    <div>
      <h2>Runs Container</h2>
      <RunInput postRun={this.props.postRun} />
      <RunsList runs={this.props.runs} />
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

export default connect (mapStateToProps, {...actions})(RunsContainer);
