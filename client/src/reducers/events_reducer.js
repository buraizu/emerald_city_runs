export default function eventsReducer(state = { loading: false, events: []}, action) {

  switch(action.type) {

    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_EVENTS':
      return {loading: false, events: action.payload};

    case 'FEATURE_EVENT':
      debugger;
      // return Object.assign([], state.events)

    default:
      return state;
  }
}
