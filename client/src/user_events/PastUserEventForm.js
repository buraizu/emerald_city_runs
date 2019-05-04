import React, { Component }  from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import * as actions from '../actions/index';
// import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class PastUserEventForm extends Component {

  completeUserEvent() {
    debugger;
    this.props.setGoal(this.props.userEvent)

  }

  render() {

    return (
      <div className="feature">
        <h3>Event Details</h3>
        <h4>Title: {this.props.userEvent.title}</h4>
        <p>Date: {this.props.userEvent.date}</p>
        <p>
          <a href={this.props.userEvent.url} target="_blank" rel="noopener noreferrer">
              <span> {this.props.userEvent.title}</span>
          </a>
        </p>
        <h3>Record your result</h3>
        <form onSubmit={this.props.saveUserEvent}>
          <span>Result: </span>
          <input
            type="text"
            onChange={this.props.onChange}
            name="result"
            value={this.props.userEvent.result || ''}
          />
          <br />
          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userEvents: state.userEvents
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return { actions: bindActionCreators(actions, dispatch) }
// }

PastUserEventForm.propTypes = {

}

export default PastUserEventForm = withRouter((PastUserEventForm));
