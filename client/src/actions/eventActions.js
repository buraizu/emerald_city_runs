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
