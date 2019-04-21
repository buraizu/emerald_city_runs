import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { withRouter } from 'react-router-dom';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.props.authenticate(this.state)) {
        this.props.history.push('/user_profile')
        window.alert("You're logged in!")
      } else {
        window.alert("Unable to Log In with provided credentials")
      }
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <form>
          <span>Email: </span>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="email"
            value={this.state.email}
          />
          <br />
          <span>Password: </span>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="password"
            value={this.state.password}
          />
          <br />
          <input
            type="submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    )
  }

}

export default LogInPage = withRouter(connect(null, {...actions})(LogInPage));