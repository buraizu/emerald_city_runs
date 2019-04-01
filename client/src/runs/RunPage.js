import React, { Component } from 'react';

import RunForm from './RunForm';
import RunForm2 from './RunForm2';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';  // need new actions file
import { bindActionCreators } from 'redux';

class RunPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      saving: false,
      run: this.props.run
    };
    this.updateRunState = this.updateRunState.bind(this);
    this.saveRun = this.saveRun.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  updateRunState(event) {
    const field = event.target.name;
    const run = this.state.run;
    run[field] = event.target.value;
    return this.setState({run: run});
  }

  saveRun(event) {
    event.preventDefault();
    this.setState({saving: true});

    this.props.actions.updateRun(this.state.run);
  }

  toggleEdit() {
    this.setState({isEditing: true})
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.run.id != nextProps.run.id) {
      this.setState({run: nextProps.run});
    }
    this.setState({saving: false, isEditing: false});
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <h2>Edit Run</h2>
          <RunForm2
            run={this.state.run}
            onChange={this.updateRunState}
            saveRun={this.saveRun}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(RunPage);
