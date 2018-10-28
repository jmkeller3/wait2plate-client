import * as actions from "../actions";

const initialState = {
  fetching: false,
  fetched: false,
  users: [
    {
      id: 1,
      username: "test",
      email: "test@test.com",
      password: "password123",
      points: 55,
      reports: [
        {
          id: 100,
          restaurantId: 1000,
          restaurantName: "Dave's Cafe",
          time: 525000,
          date: "October 2, 2018"
        }
      ]
    }
  ],
  user_id: "",
  token: "",
  reports: [],
  points: [],
  error: null
};

// Reports Data
// [{
//   id: 1001,
//   user_id: 1,
//   restaurant_id: 101,
//   time: 392000,
//   date: Date.now()
// },
// {
//   id: 1002,
//   user_id: 2,
//   restaurant_id: 101,
//   time: 420000,
//   date: Date.now()
// },
// {
//   id: 1003,
//   user_id: 1,
//   restaurant_id: 101,
//   time: 498000,
//   date: Date.now()
// },
// {
//   id: 1004,
//   user_id: 3
//   restaurant_id: 102,
//   time: 465000,
//   date: Date.now()
// },
// {
//   id: 1005,
//   user_id: 2,
//   restaurant_id: 102,
//   time: 594000,
//   date: Date.now()
// },
// {
//   id: 1006,
//   user_id: 3,
//   restaurant_id: 103,
//   time: 780000,
//   date: Date.now()
// }
// ]
// Restaurant Data
// [{
//   id: 101,
//   name: "Bill Bob's Burgers",
//   address: "123 Main St. Lehi, UT 84043",
//   distance: "1.4 mi",
//   reported_times: [392000, 420000, 498000]

// },
// {
//   id: 102,
//   name: "Grace's Bakery",
//   address: "3 Main St. Lehi, UT 84043",
//   distance: "2.4 mi",
//   reported_times: [465000, 594000]
// },
// {
//   id: 103,
//   name: "Stevo's Bar and Grill",
//   address: "100 Center St. Lehi, UT 84043",
//   distance: "0.5 mi",
//   reported_times: [780000]
// }];
// // User Data
// users: [{
//  id: 1,
//  username: "test",
//  email: "test@test.com",
//  password: "password123",
//  points: 55,
//  reports: [{
//    id: 100,
//    restaurantId: 1000,
//    restaurantName: "Dave's Cafe",
//    time: 525000,
//    date: "October 2, 2018"
// }]
// }, {
//  id: 2,
//  username: "john",
//  email: "john@john.com",
//  password: "password123",
//  points: 12,
//  reports: [{
//    id: 101,
//    restaurantId: 1001,
//    restaurantName: "Bill's Shop",
//    time: 726000,
//    date: "October 3, 2018"
// }]
// }, {
//  id: 3,
//  username: "amanda",
//  email: 'amanda@amanda.com',
//  password: 'password123',
//  points: 7,
//  reports: [{
//    id: 102,
//    restaurantId: 1002,
//    time: 1128000,
//    date: 'October 4, 2018'
// }]
// }]

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_POINT:
      return Object.assign({}, state, {
        ...state
      });

    case actions.DELETE_TIME_ACTION:
      return Object.assign({}, state, {
        ...state
      });

    case actions.EDIT_TIME_ACTION:
      return Object.assign({}, state, {
        ...state
      });

    case actions.FETCHED:
      return Object.assign({}, state, {
        ...state
      });

    case actions.FETCHED_HAS_ERROR:
      return Object.assign({}, state, {
        ...state
      });

    case actions.FIND_RESTAURANTS:
      return Object.assign({}, state, {
        ...state
      });

    case actions.GET_USERS:
      return Object.assign({}, state, {
        ...state
      });

    case actions.GET_USER_REPORTS:
      return Object.assign({}, state, {
        ...state
      });

    case actions.IS_FETCHING:
      return Object.assign({}, state, {
        ...state
      });

    case actions.REPORT_TIME_ACTION:
      return Object.assign({}, state, {
        ...state
      });

    default:
      return state;
  }
};
