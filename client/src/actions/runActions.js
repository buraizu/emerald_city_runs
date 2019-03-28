export const postRun = (run) => {

  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      // 'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }

  return fetch('/api/runs.json', data)
    .then(response => console.log(response))
    .then(responseJson => console.log(responseJson))
    .catch(error => console.log(error))

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error); // eslint-disable-line no-console
      throw error;
    }

    function parseJSON(response) {
      return response.json();
    }


}
