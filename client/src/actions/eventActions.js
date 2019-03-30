export function fetchEvents() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    return fetch('/api/events')
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: 'FETCH_EVENTS', payload: responseJson })
      })
  }
}

export function fetchRuns() {
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

  return fetch('api/runs', data)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => console.log(error))

}

export function postRun3(run) {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(run)
  }

return function(dispatch) {
  return fetch('api/runs', data)

    .then(response => response.json())
    .then(responseJson => {
      dispatch({ type: 'ADD_RUN', run: responseJson})
    })
  }
}
