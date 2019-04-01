import React, { Component }  from 'react';

class RunForm2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <form onSubmit={this.props.saveRun}>
        <input
          type="text"
          onChange={this.props.onChange}
          name="course"
          value={this.props.run.course}
          placeholder="course"
        />
        <br />
        <input
          type="text"
          onChange={this.props.onChange}
          name="distance"
          value={this.props.run.distance}
          placeholder="distance"
        />
        <br />
        <input
          type="text"
          onChange={this.props.onChange}
          name="time"
          value={this.props.run.time}
          placeholder="time"
        />
        <br />
        <textarea
          onChange={this.props.onChange}
          name="review"
          value={this.props.run.review}
          placeholder="Please write a review"
        />
        <br />
        <input
          type="text"
          onChange={this.props.onChange}
          name="rating"
          value={this.props.run.rating}
          placeholder="rating"
        />
        <br />
        <input
          type="submit"
          disabled={this.props.saving}
          value={this.props.saving ? 'Saving...' : 'Save'}
        />
      </form>
    )
  }
}

export default RunForm2;
