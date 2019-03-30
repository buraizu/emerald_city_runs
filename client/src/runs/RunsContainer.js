import React, { Component } from 'react';

import RunInput from './RunInput';
import RunsList from './RunsList';
import Run from './Run';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';
import { bindActionCreators } from 'redux';


class RunsContainer extends Component {

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

 // const mapDispatchToProps = (dispatch) => ({
 //   postRun: run => dispatch({ type: "POST_RUN", run })
 // })

 function mapDispatchToProps(dispatch) {
   return { actions: bindActionCreators(actions, dispatch) }
 }
// let data = {
 //   method: 'POST',
 //   headers: {
 //     'Accept': 'application/json',
 //     'Content-Type': 'application/json',
 //   },
 //   body: JSON.stringify({ run })
 // }
 // return dispatch => {
 //   fetch('/api/runs', data)
 //     .then(response => response.json())
 //     .then(run => dispatch({ type: 'ADD_RUN', run }))
 //     .catch(error => console.log(error))
 // }
export default connect (mapStateToProps, mapDispatchToProps)(RunsContainer);
