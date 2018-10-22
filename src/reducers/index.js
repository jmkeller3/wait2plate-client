import * as actions from "../actions";
import { combineReducers } from "redux";

combineReducers;

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  reports: [],
  error: null
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
