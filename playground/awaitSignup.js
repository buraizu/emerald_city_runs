export const signup = (user) => {
  const newUser = user
  return async dispatch => {

  try {
    const appUser = await fetch(`/api/users`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: appUser})
    })
  }
  console.log(`appUser: ${appUser}`)

        dispatch(authenticate({
          email: appUser.email,
          password: appUser.password})
        );
      })
      .catch((errors) => {
        dispatch(authFailure(errors))
      })
  };
}

export default function createUser(params) {
  return async dispatch => {
    function onSuccess(success) {
      dispatch({ type: CREATE_USER, payload: success });
      return success;
    }
    function onError(error) {
      dispatch({ type: ERROR_GENERATED, error });
      return error;
    }
    try {
      const success = await axios.post('http://www..., params);
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }
}
