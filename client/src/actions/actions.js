export const fetchEvents = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    return fetch('/api/events')
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: 'FETCH_EVENTS', payload: responseJson })
      })
  }
}

export const setEvent = (feature) => {
  feature.updated_at = new Date();
  let featureId = feature.id;
  let data = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feature)
  }

  return function(dispatch) {
    return fetch(`/api/events/${featureId}`, data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({type: 'FEATURE_EVENT', event: responseJson})
      })
  }
}

export const fetchRuns = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RUNS'});
    return fetch('/api/runs')
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: 'FETCH_RUNS', payload: responseJson })
      })
  }
}

export const postRun = (run) => {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(run)
  }

  return function(dispatch) {
    return fetch('/api/runs', data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: 'ADD_RUN', run: responseJson})
      })
  }
}

export const updateRun = (run) => {
  let runId = run.id;
  let data = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(run)
  }

  return function(dispatch) {
    return fetch(`/api/runs/${runId}`, data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({type: 'UPDATE_RUN', run: responseJson})
      })
  }
}

export const deleteRun = (run) => {
  let data = {
    method: 'DELETE',
  }

  return function(dispatch) {
    return fetch(`/api/runs/${run.id}`, data)
      .then(dispatch({type: 'DELETE_RUN', run: run}))
      .then(() => console.log('whoa dude'))
    }
}
