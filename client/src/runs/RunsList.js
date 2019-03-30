import React from 'react';

import Run from './Run';

const RunsList = (props) => {

  const displayRuns = props.runs.runs.map((run, index) =>
    <li key={index}>
      Course: {run.course}
      <br />
      Distance: {run.distance}
      <br />
      Time: {run.time}
      <br />
      Review: {run.review}
      <br />
      Rating: {run.rating}
      <br />
      <button onClick={props.handleDelete}>Delete</button>
    </li>
  )

  return (
    <ul>
      {displayRuns}
    </ul>
  )
}

export default RunsList;
