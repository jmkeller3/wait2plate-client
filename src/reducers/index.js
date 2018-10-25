import * as actions from "../actions";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  user_id: "",
  token: "",
  reports: [],
  points: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REPORT_TIME:
      return Object.assign({}, state, {
        ...state
      });

    case actions.ADD_POINT:
      return Object.assign({}, state, {
        ...state
      });

    case actions.FIND_RESTAURANT:
      return Object.assign({}, state, {
        ...state
      });

    case actions.GET_USERS:
      return Object.assign({}, state, {
        ...state
      });
    default:
      return state;
  }
};
