import {

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

export const GET_USER = "GET_USER";
export const getUser = user => ({
  type: GET_USER,
  user
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

export const SELECT_RESTAURANT = "SELECT_RESTAURANT";
export const selcectRestaurant = (name, id) => ({
  type: SELECT_RESTAURANT,
  name,
  id
})

export const SAMPLE_USER_ACTION = "SAMPLE_USER_ACTION";
export const sampleUserAction = () => ({
  type: SAMPLE_USER_ACTION,
  latitude: 40.4185088,
  longitude: -111.87814399999999,
  token: { authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMxNzJjMWU0NzQ4NDEyMmVjZTAwNTZhIiwidXNlcm5hbWUiOiJKYW1lcyIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInBvaW50cyI6MywicmVwb3J0cyI6WyI1YzE3MmMyZTQ3NDg0MTIyZWNlMDA1NmIiLCI1YzE3MmMzYTQ3NDg0MTIyZWNlMDA1NmQiLCI1YzE3MmM0MTQ3NDg0MTIyZWNlMDA1NmYiXX0sImlhdCI6MTU0NTAyNDg1MywiZXhwIjoxNjA1NTA0ODUzLCJzdWIiOiJKYW1lcyJ9.ChKOJP1Jyf8xcoM_iMyLGlj8WKCDBP4ZCdEwnEcGteM" },

})

export const getRestaurantsThunk = (cityState, latitude, longitude) => async (
  dispatch,
  getState
) => {
  dispatch(fetching());
  const JWT = getState().token.authToken;
  const restaurants = await searchRestaurants({
    cityState,
    latitude,
    longitude
  });
  if (restaurants.id !== 0) {
    dispatch(findRestaurants(restaurants));
  }
  dispatch(fetched());
};

export const reportTimeThunk = (time, restaurant_id, restaurant_name) => async (
  dispatch,
  getState
) => {
  dispatch(fetching());
  const JWT = getState().token.authToken;
  await reportTime(restaurant_id, restaurant_name, time, JWT);
  dispatch(addPoint());
  dispatch(fetched());
};

export const accountUserThunk = () => async (dispatch, getState) => {
  dispatch(fetching());
  const JWT = getState().token.authToken;
  if (JWT != null) {
    const { reports, points, user } = await accountUser(JWT);
    dispatch(getUserReports(reports, points));
    dispatch(getUser(user))
  }
  dispatch(fetched());
};

export const editTimeThunk = (reportId, newTime) => async (
  dispatch,
  getState
) => {
  dispatch(fetching());
  const JWT = getState().token.authToken;
  await editTime(JWT, reportId, newTime);
  dispatch(editTimeAction);
};

export const deleteTimeThunk = reportId => async (dispatch, getState) => {
  dispatch(fetching());
  const JWT = getState().token.authToken;
  await deleteTime(JWT, reportId);
  dispatch(deleteTimeAction(reportId));
  dispatch(fetched());
};

export const loginThunk = (username, pass) => async dispatch => {
  dispatch(clearError());
  dispatch(fetching());
  try {
    const user = await login(username, pass);
    if (user == undefined) {
      dispatch(fetchedHasError(`Wrong Username or Password`))
    } else {
      dispatch(loginAction(user));
      localStorage.setItem("authToken", user.authToken)
      dispatch(fetched());
    }
  } catch (error) {
    dispatch(fetchedHasError(error));
  }
};

export const signupThunk = (username, email, pass) => async dispatch => {
  dispatch(clearError());
  dispatch(fetching());
  try {
    const user = await signup(username, email, pass);
    console.log(user)
    if (user.code === 422) {
      dispatch(fetchedHasError(user.message))

    } else {
      dispatch(signupAction(user));
      localStorage.setItem("authToken", user)
      dispatch(clearError());
      dispatch(fetched());
    }

  } catch (error) {
    dispatch(fetchedHasError(error));
  }
};

export const sampleUserThunk = () =>
  async dispatch => {
    dispatch(clearError());
    dispatch(fetching());
    dispatch(sampleUserAction());
    localStorage.setItem("authToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMxNzJjMWU0NzQ4NDEyMmVjZTAwNTZhIiwidXNlcm5hbWUiOiJKYW1lcyIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInBvaW50cyI6MywicmVwb3J0cyI6WyI1YzE3MmMyZTQ3NDg0MTIyZWNlMDA1NmIiLCI1YzE3MmMzYTQ3NDg0MTIyZWNlMDA1NmQiLCI1YzE3MmM0MTQ3NDg0MTIyZWNlMDA1NmYiXX0sImlhdCI6MTU0NTAyNDg1MywiZXhwIjoxNjA1NTA0ODUzLCJzdWIiOiJKYW1lcyJ9.ChKOJP1Jyf8xcoM_iMyLGlj8WKCDBP4ZCdEwnEcGteM")
    dispatch(fetched());
  }

