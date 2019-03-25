import React, { Component } from 'react';

import uuid from 'uuid';

class RunInput extends Component {

  state = {
    course: '',
    distance: '',
    time: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const run = {...this.state, id: uuid() };
    this.props.addRun(run);
    this.setState({
      course: '',
      distance: '',
      time: ''
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="course"
          value={this.state.course}
          placeholder="course"
        />
        <br />
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="distance"
          placeholder="distance"
        />
        <br />
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="time"
          placeholder="time"
        />
        <br />
        <input type="submit" />
      </form>
    )
  }

}

export default RunInput;
