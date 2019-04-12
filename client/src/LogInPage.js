import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class LogInPage extends Component {
  constructor(props) {
    super(props);

    this.state = { credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials})
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.props.onChange}
            name="email"
            label="email"
            value={this.state.credentials.email}
          />
          <input
            type="submit"
            onClick={this.onSave}
          />
        </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, {...actions})(LogInPage);
