import React from 'react';

import Run from './Run';

const RunsList = (props) => {

  const displayRuns = props.runs.runs.map((run, index) =>
    <li key={index}>
      Course: {run.course}
      <br />
      {run.distance} --
      {run.time} --
      {run.review} --
      {run.rating} --
    </li>
  )

  return (
    <ul>
      {displayRuns}
    </ul>
  )
}

export default RunsList;
