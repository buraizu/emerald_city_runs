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
