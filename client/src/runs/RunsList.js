import React from 'react';

import Run from './Run';

const RunsList = (props) => {

  const displayRuns = props.runs.runs.map((run, index) =>
    <Run id={run.id} key={run.id} run={run} />
  )

  return (
    <ul>
      {displayRuns}
    </ul>
  )
}

export default RunsList;
