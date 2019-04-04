import React, { Component } from 'react';

import RunsList from './RunsList';
import RunForm from './RunForm';
import Run from './Run';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';  // need new actions file
import { bindActionCreators } from 'redux';

class RunsContainer extends Component {

  componentDidMount() {
    this.props.fetchRuns();
  }

  render() {
    const runs = this.props.runs;

      return (
        <div>
          <h2>Runs Container</h2>
          <RunForm postRun={this.props.postRun} />
          <RunsList runs={runs} handleDelete={this.props.handleDelete} />
          <div>
            {this.props.children}
          </div>
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
