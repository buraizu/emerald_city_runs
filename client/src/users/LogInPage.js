import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

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

  handleOnSave = (event) => {
    event.preventDefault();
    this.props.logInUser(this.state);
  }

  render() {
    return (
      <div>
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
            onClick={this.handleOnSave}
          />
        </form>
      </div>
    )
  }

}

export default connect(null, {...actions})(LogInPage);
