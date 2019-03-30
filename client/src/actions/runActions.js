// need to connect this file
export function postRun() {

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
