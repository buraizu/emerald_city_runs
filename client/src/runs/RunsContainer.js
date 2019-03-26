import React, { Component } from 'react';

import RunInput from './RunInput';
import Run from './Run';

import { connect } from 'react-redux';

 class RunsContainer extends Component {

   render() {
     return (
       <div>
        <p>Runs Container</p>
        <RunInput addRun={this.props.addRun} />
       </div>
     )
   }
 }

 const mapDispatchToProps = (dispatch) => ({
   addRun: run => dispatch({ type: 'ADD_RUN', run })
 })

export default connect (null, mapDispatchToProps)(RunsContainer);
