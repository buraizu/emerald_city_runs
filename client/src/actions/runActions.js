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
    }
}

// export const logInUser(credentials) {
//   let data = {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({auth: credentials})
//   }
//
//   return function(dispatch) {
//     return fetch(`/login`, data)
//       .then(response => response.json())
//       .then(responseJson => {
//         dispatch({type: 'UPDATE_RUN', run: responseJson})
//       })
//   }
//
// }
export const logInUser = (loginParams) => {
  let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({loginParams})
    }
  return function(dispatch) {
      return fetch(`/api/users`, data)
        .then(response => console.log(response))

    }
}
