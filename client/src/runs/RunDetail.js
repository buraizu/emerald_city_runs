import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import EditRunForm from './EditRunForm';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions';  // need new actions file
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class RunDetail extends Component {
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
    this.deleteRun = this.deleteRun.bind(this);
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

  deleteRun(event) {
    this.props.actions.deleteRun(this.state.run)
    this.props.history.push("/")
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.run.id !== nextProps.run.id) {
      this.setState({run: nextProps.run});
    }
    this.setState({saving: false, isEditing: false});
  }

  render() {

    if (this.state.isEditing) {
      return (
        <Col md={{ span: 4, offset: 5 }}>
          <div>
            <EditRunForm
              run={this.state.run}
              onChange={this.updateRunState}
              saveRun={this.saveRun}
            />
          </div>
        </Col>
      )
    }
    return (
      <Col md={{ span: 4, offset: 5 }}>
        <div>
          <h3>RunPage</h3>
          <h4>Course: {this.props.run.course}</h4>
          <p>Distance: {this.props.run.distance}</p>
          <p>Time: {this.props.run.time}</p>
          <p>Review: {this.props.run.review}</p>
          <p>Rating: {this.props.run.rating}</p>
          <button onClick={this.toggleEdit}>edit</button>
          <button onClick={this.deleteRun}>delete</button>
        </div>
      </Col>
    )
  }
}

function mapStateToProps(state, ownProps) {

  let run = {course: '', distance: '', time: '', review: '', rating: ''}
  const runId = ownProps.match.params.id;

  if(state.runs.runs.length > 0) {
    run = Object.assign({}, state.runs.runs.find(run => run.id === parseInt(runId)))
  }

  return {run: run}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RunDetail));
