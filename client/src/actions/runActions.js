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
