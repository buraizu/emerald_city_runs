import React, { Component } from 'react';

import RunInput from './RunInput';
import Run from './Run';

import { connect } from 'react-redux';

 class RunsContainer extends Component {

   render() {
     return (
       <div>
        <h2>Runs Container</h2>
        <RunInput addRun={this.props.addRun} />
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

 const mapDispatchToProps = (dispatch) => ({
   addRun: run => dispatch({ type: 'ADD_RUN', run })
 })

export default connect (mapStateToProps, mapDispatchToProps)(RunsContainer);
