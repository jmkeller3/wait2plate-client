import {
  getAllUsers,
  searchRestaurants,
  accountUser,
  reportTime,
  editTime,
  deleteTime,
  login,
  signup
} from "./userflow";

export const ADD_POINT = "ADD_POINT";
export const addPoint = points => ({
  type: ADD_POINT,
  points
});

export const DELETE_TIME_ACTION = "DELETE_TIME_ACTION";
export const deleteTimeAction = report_id => ({
  type: DELETE_TIME_ACTION,
  report_id
});

export const EDIT_TIME_ACTION = "EDIT_TIME_ACTION";
export const editTimeAction = (report_id, newTime) => ({
  type: EDIT_TIME_ACTION,
  report_id,
  newTime
});

export const FETCHED = "FETCHED";
export const fetched = () => ({
  type: FETCHED
});

export const FETCHED_HAS_ERROR = "FETCHED_HAS_ERROR";
export const fetchedHasError = error => ({
  type: FETCHED_HAS_ERROR,
  error
});

export const FIND_RESTAURANTS = "FIND_RESTAURANTS";
export const findRestaurants = restaurants => ({
  type: FIND_RESTAURANTS,
  restaurants
});

export const IS_FETCHING = "IS_FETCHING";
export const fetching = () => ({
  type: IS_FETCHING
});

export const REPORT_TIME_ACTION = "REPORT_TIME_ACTION";
export const reportTimeAction = reports => ({
  type: REPORT_TIME_ACTION,
  reports
});

export const GET_USERS = "GET_USERS";
export const getUsers = users => ({
  type: GET_USERS,
  users
});

export const GET_USER_REPORTS = "GET_USER_REPORTS";
export const getUserReports = (reports, points) => ({
  type: GET_USER_REPORTS,
  reports,
  points
});

export const LOGIN_ACTION = "LOGIN_ACTION";
export const loginAction = JWT => ({
  type: LOGIN_ACTION,
  JWT
});

export const SIGN_UP_ACTION = "SIGN_UP_ACTION";
export const signupAction = JWT => ({
  type: SIGN_UP_ACTION,
  JWT
});

export const CLEAR_ERROR = "CLEAR_ERROR";
export const clearError = () => ({
  type: CLEAR_ERROR
});

export const SET_GEOLOCATION = "SET_GEOLOCATION";
export const setGeolocation = (latitude, longitude) => ({
  type: SET_GEOLOCATION,
  latitude,
  longitude
})

export const getUsersThunk = () => async (dispatch, getState) => {
  dispatch(fetching());
  const JWT = getState().token;
  const users = await getAllUsers(JWT);
  dispatch(getUsers(users));
  dispatch(fetched());
};

export const getRestaurantsThunk = (cityState, latitude, longitude) => async (
  dispatch,
  getState
) => {
  dispatch(fetching());
  const JWT = getState().token;
  const restaurants = await searchRestaurants({
    cityState,
    latitude,
    longitude
  });
  if (restaurants.id !== 0) {
    dispatch(findRestaurants(restaurants));
  } else {
    alert(`Please enter city to search`)
  }
  dispatch(fetched());
};

export const reportTimeThunk = (time, restaurant_id, restaurant_name) => async (
  dispatch,
  getState
) => {
  dispatch(fetching());
  const JWT = getState().token;
  const points = await reportTime(restaurant_id, restaurant_name, time, JWT);
  dispatch(addPoint(points));
  dispatch(fetched());
};

export const accountUserThunk = () => async (dispatch, getState) => {
  dispatch(fetching());
  const JWT = getState().token;
  const { reports, points } = await accountUser(JWT);
  dispatch(getUserReports(reports, points));
  dispatch(fetched);
};

export const editTimeThunk = (reportId, newTime) => async (
  dispatch,
  getState
) => {
  dispatch(fetching());
  const JWT = getState().token;
  await editTime(JWT, reportId, newTime);
  dispatch(editTimeAction);
};

export const deleteTimeThunk = reportId => async (dispatch, getState) => {
  dispatch(fetching());
  const JWT = getState().token;
  await deleteTime(JWT, reportId);
  dispatch(deleteTimeAction(reportId));
  dispatch(fetched());
};

export const loginThunk = (username, pass) => async dispatch => {
  dispatch(clearError());
  dispatch(fetching());
  try {
    const user = await login(username, pass);
    dispatch(loginAction(user));
    dispatch(fetched());
  } catch (error) {
    dispatch(fetchedHasError(error));
  }
};

export const signupThunk = (username, email, pass) => async dispatch => {
  dispatch(clearError());
  dispatch(fetching());
  try {
    const user = await signup(username, email, pass);
    dispatch(signupAction(user));
    dispatch(fetched());
  } catch (error) {
    dispatch(fetchedHasError(error));
  }
};
