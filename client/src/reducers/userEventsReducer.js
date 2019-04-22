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

    default:
      return state;
  }
}
