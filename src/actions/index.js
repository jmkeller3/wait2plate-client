import {
  getAllUsers,
  searchRestaurants,
  accountUser,
  reportTime,
  editTime
} from "./userflow";

export const IS_FETCHING = "IS_FETCHING";
export const fetching = () => ({
  type: IS_FETCHING,
  loading: true
});

export const FETCHED = "FETCHED";
export const fetched = () => ({
  type: FETCHED,
  loading: false
});

export const FETCHED_HAS_ERROR = "FETCHED_HAS_ERROR";
export const fetchedHasError = error => ({
  type: FETCHED_HAS_ERROR,
  loading: false,
  error
});

export const REPORT_TIME_ACTION = "REPORT_TIME";
export const reportTimeAction = reports => ({
  type: REPORT_TIME,
  reports
});

export const EDIT_TIME_ACTION = "EDIT_TIME_ACTION";
export const editTimeAction = (report_id, newTime) => ({
  type: EDIT_TIME_ACTION,
  report_id,
  newTime
});

export const ADD_POINT = "ADD_POINT";
export const addPoint = points => ({
  type: ADD_POINT,
  points
});

export const FIND_RESTAURANTS = "FIND_RESTAURANTS";
export const findRestaurants = restaurants => ({
  type: FIND_RESTAURANTS,
  restaurants
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

export const getUsersThunk = () => async (dispatch, getState) => {
  dispatch(fetching());
  const JWT = getState().token;
  const users = await getAllUsers(JWT);
  dispatch(getUsers(users));
  dispatch(fetched());
};

export const getRestaurantsThunk = (geolocation, cityState) => async (
  dispatch,
  getState
) => {
  dispatch(fetching());
  const JWT = getState().token;
  const restaurants = await searchRestaurants({ geolocation, cityState, JWT });
  dispatch(findRestaurants(restaurants));
  dispatch(fetched());
};

export const reportTimeThunk = (time, restaurant) => async (
  dispatch,
  getState
) => {
  dispatch(fetching());
  const JWT = getState().token;
  const points = await reportTime(restaurant, time, JWT);
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
  dispatch(editTime);
};
