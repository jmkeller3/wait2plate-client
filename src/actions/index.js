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

export const REPORT_TIME = "REPORT_TIME";
export const reportTime = time => ({
  type: REPORT_TIME,
  time
});

export const ADD_POINT = "ADD_POINT";
export const addPoint = point => ({
  type: ADD_POINT,
  point
});

export const FIND_RESTAURANT = "FIND_RESTAURANT";
export const findRestaurant = restaurants => ({
  type: FIND_RESTAURANT,
  restaurants
});

export const GET_USER = "GET_USER";
export const getUser = user => ({
  type: GET_USER,
  user
});

export const async = () => dispatch => {
  new Promise()
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(callback(data));
    });
};
