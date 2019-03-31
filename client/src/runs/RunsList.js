import React from 'react';

import Run from './Run';

const RunsList = (props) => {

  const displayRuns = props.runs.runs.map((run, index) =>
    <Run key={run.id} run={run} handleDelete={props.handleDelete} />
  )

  return (
    <ul>
      {displayRuns}
    </ul>
  )
}

export default RunsList;
