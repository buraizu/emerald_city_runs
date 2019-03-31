import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';  // need new actions file
import { bindActionCreators } from 'redux';

class RunPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      run: this.props.run
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.run.id != nextProps.run.id) {
      this.setState({run: nextProps.run});
    }
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          Edit Run
        </div>
      )
    }
    return (
      <div>
        <h3>RunPage</h3>
        <h4>Course: {this.props.run.course}</h4>
        <p>Distance: {this.props.run.distance}</p>
        <p>Time: {this.props.run.time}</p>
        <p>Review: {this.props.run.review}</p>
        <p>Rating: {this.props.run.rating}</p>
        <button onClick={this.toggleEdit}>edit</button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {

  let run = {course: '', distance: '', time: '', review: '', rating: ''}
  const runId = ownProps.match.params.id;

  if(state.runs.runs.length > 0) {
    run = Object.assign({}, state.runs.runs.find(run => run.id == runId))
  }

  return {run: run}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps)(RunPage);
