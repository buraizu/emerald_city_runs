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
