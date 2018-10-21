import * as actions from '../actions'

const initialState = {
  restaurants = [],
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REPORT_TIME:
      return Object.assign({}, state, {
        ...state
      });

    case ADD_POINT:
      return Object.assign({}, state, {
        ...state
      });

    case FIND_RESTAURANT:
      return Object.assign({}, state, {
        ...state
      }); 

    case GET_USER:
      return Object.assign({}, state, {
        ...state
      });

    default:
      return state;
  }
};
