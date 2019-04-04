export default function eventsReducer(state = { loading: false, events: []}, action) {

  switch(action.type) {

    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_EVENTS':
      return {loading: false, events: action.payload};

      case 'FEATURE_EVENT':

        return {
          events: [
            ...state.events.filter(event => event.id !== action.event.id),
            Object.assign({}, action.event)
          ]
        }

    default:
      return state;
  }
}
