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

export function postRun2(run) {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(run)
  }

  let savedRun = fetch('api/runs', data)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => console.log(error))

  return (dispatch) => {
    dispatch({
      type:
    })
  }
}

export function postRun3() {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(run)
  }

  return (dispatch) => {
    dispatch({ type: 'LOADING_RUNS'});
    return fetch('api/runs', data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: 'ADD_RUN', payload: responseJson })
      })
      .catch(error => console.log(error))
  }
}
