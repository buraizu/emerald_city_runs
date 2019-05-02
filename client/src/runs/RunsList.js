import React from 'react';
import PropTypes from 'prop-types';
import Run from './Run';

const RunsList = (props) => {
  let displayRuns = <div>Nothing to display at the moment. Try refreshing.</div>

  if(props.runs.runs !== undefined) {
    displayRuns = props.runs.runs.map((run, index) =>
        <Run key={run.id} run={run} />
      )
  }

  return (
    <div>
      {displayRuns}
    </div>
  )
}

RunsList.propTypes = {
  runs: PropTypes.object
}

export default RunsList;
