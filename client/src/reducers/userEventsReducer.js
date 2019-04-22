export default (state = { loading: false, userEvents: [] }, action) => {

  switch(action.type) {

    case 'ADD_USER_EVENT':
      
      return {
        userEvents: [action.userEvent, ...state.userEvents]
      };

    default:
      return state;
  }
}
