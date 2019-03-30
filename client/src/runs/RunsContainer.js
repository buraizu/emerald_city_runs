import React, { Component } from 'react';

import RunsList from './RunsList';
import Run from './Run';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';  // need new actions file
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';


class RunsContainer extends Component {

  componentDidMount() {
    this.props.fetchRuns();
  }

  render() {
    return (
      <div>
        <h2>Runs Container</h2>
        <Link to="/runs/new">New Run</Link>
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
