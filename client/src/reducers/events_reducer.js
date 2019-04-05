export default function eventsReducer(state = { loading: false, events: [], featuredEvent: []}, action) {

  switch(action.type) {

    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_EVENTS':
      let feature = action.payload.find(event => event.featured === true)
      return {loading: false, events: action.payload, featuredEvent: feature};

      case 'FEATURE_EVENT':

        return {
          events: [
            ...state.events
          ],
          featuredEvent: action.event
        }

    default:
      return state;
  }
}
