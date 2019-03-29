import React, { Component } from 'react';

import RunInput from './RunInput';
import RunsList from './RunsList';
import Run from './Run';

import { connect } from 'react-redux';


const RunsContainer = (props) => {

  return (
    <div>
      <h2>Runs Container</h2>
      <RunInput />
      <RunsList runs={props.runs} />
    </div>
    )

 }

 const mapStateToProps = (state) => {
   return {
     runs: state.runs
   }
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
export default RunsContainer;
