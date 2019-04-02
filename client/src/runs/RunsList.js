import React from 'react';

import Run from './Run';

const RunsList = (props) => {
  let displayRuns = <li>Nothing to display at the moment. Try refreshing.</li>

  if(props.runs.runs !== undefined) {
    displayRuns = props.runs.runs.map((run, index) =>
        <Run key={run.id} run={run} />
      )
  }

  return (
    <ul>
      {displayRuns}
    </ul>
  )
}

export default RunsList;
