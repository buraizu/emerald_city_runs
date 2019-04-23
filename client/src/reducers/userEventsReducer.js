export default (state = { loading: false, userEvents: [] }, action) => {

  switch(action.type) {

    case 'ADD_USER_EVENT':
      return {
        userEvents: [action.userEvent, ...state.userEvents]
      };

    case 'LOADING_USER_EVENTS':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_USER_EVENTS':
      let orderedUserEvents = action.payload.reverse()
      return {loading: false, userEvents: orderedUserEvents};

    case 'UPDATE_USER_EVENT':

      return {
        userEvents: [
          ...state.userEvents.filter(userEvent => userEvent.id !== action.userEvent.id),
          Object.assign({}, action.userEvent)
        ]
      }

    case 'DELETE_USER_EVENT':
      const idOfUserEventToDelete = action.userEvent.id
      const newState = Object.assign([], state.userEvents.filter(userEvent => {
        return userEvent.id !== idOfUserEventToDelete
      }));
      return {
        userEvents: [
          ...newState
        ]
      }

    default:
      return state;
  }
}
