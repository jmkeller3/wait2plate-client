const { REACT_APP_API_BASE_URL } = process.env;

// Login
export const login = async (username, pass) => {
  const user = {
    username,
    pass
  };

  const JWT = await fetch(`${REACT_APP_API_BASE_URL}/api/auth/login`, {
    method: "POST",
    mode: "cors",
    body: user
  });

  return JWT;
};

// Sign-Up
// Send to server: Username, Email, Password
// Get from server: JWT
export const signup = async (username, email, pass) => {
  const user = {
    username,
    email,
    pass
  };
  const JWT = await fetch(`${REACT_APP_API_BASE_URL}/api/auth/signup`, {
    method: "POST",
    mode: "cors",
    body: user
  });

  return JWT;
};

// Search Restaurants
// Send to server: geolocation || search value (city)
// Get from server: Restaurant Data from Yelp (name, address, distance) & Time data from server (average wait time)
// Report time button
export const searchRestaurants = async ({ latitude, longituge, cityState }) => {
  // POST FETCH REQUEST
  const url = new URL(`${REACT_APP_API_BASE_URL}/api/restaurants`);
  let params;
  cityState
    ? (params = { location: cityState })
    : (params = { latitude, longituge });

  Object.keys(params).forEach((key, value) => {
    url.searchParams.append(key, value);
  });
  const restaurants = await fetch(url);

  return restaurants;
};

// Report Time
// Send to server: Restaurant id, time, JWT
// Get from server: Send user's updated points
export const reportTime = async (restaurantId, time, JWT) => {
  let restaurants = JSON.parse(localStorage.getItem("restaurants"));

  let updatedRestaurants = restaurants.map(restaurant => {
    if (restaurantId === restaurant.id) {
      restaurant.times.push(time);
    }
    return restaurant;
  });

  let users = JSON.parse(localStorage.getItem("users"));

  function findUser(user) {
    return user.id === JWT;
  }

  let userIndex = users.findIndex(findUser);

  let user = users[userIndex];

  user.reports.push({
    id: Math.random() + 100,
    restaurantId,
    time,
    date: Date.now()
  });
  user.points += 1;

  users[userIndex] = user;

  localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
  localStorage.setItem("users", JSON.stringify(users));

  return user.points;
};

// Get User Reported Times
// Send to server: JWT
// Get from server: User's report times (Restaurant name, time reported (id and the date), user's points)
export const accountUser = async JWT => {
  let users = JSON.parse(localStorage.getItem("users"));
  let reports = JSON.parse(localStorage.getItem("reports"));

  function authenication(user) {
    return JWT === user.id;
  }

  let user = users.find(authenication());
  if (user == null) {
    throw Error(`Bad login request`);
  }

  const user_reports = reports.filter(report =>
    users.reports.includes(report.id)
  );

  return {
    reports: user_reports,
    points: user.points
  };
};

// Edit Reported Times
// Send to server: JWT, report id, new time
// Get from server: new time
export const editTime = async (JWT, reportId, newTime) => {
  let users = JSON.parse(localStorage.getItem("users"));
  let reports = JSON.parse(localStorage.getItem("reports"));

  let selectReport = reports.map(report => {
    if (reportId === report.id) {
      return {
        ...report,
        time: newTime
      };
    }
    return report;
  });

  localStorage.setItem("reports", JSON.stringify(selectReport));
};

// Delete Reported Times
// Send to server: JWT, report id
// Get from server: deletion
export const deleteTime = async (JWT, reportId) => {
  let users = JSON.parse(localStorage.getItem("users"));
  let reports = JSON.parse(localStorage.getItem("reports"));

  let authenication = function(user) {
    return JWT === user.id;
  };

  let user = users.find(authenication);
  if (user == null) {
    throw Error(`Bad login request`);
  }

  function findReport(report) {
    return reportId === report.id;
  }
  let deletedReport = users.findIndex(findReport);
  reports.splice(deletedReport, 1);
};

// Get Users
export const getAllUsers = async JWT => {
  let users = JSON.parse(localStorage.getItem("users"));
  return users;
};

// Log Out
export const logOut = async () => {
  localStorage.clear("user");
  localStorage.clear("newUser");
};

// Reports Data
// [{
// id:
// user_id:
// restaurant_id:
// time:
// date:
// // }]
// Restaurant Data
// [{
//   id: 1,
//   name: "Bill Bob's Burgers",
//   address: "123 Main St. Lehi, UT 84043",
//   distance: "1.4 mi",
//   reported_times: [392000, 420000, 498000]

// },
// {
//   id: 2,
//   name: "Grace's Bakery",
//   address: "3 Main St. Lehi, UT 84043",
//   distance: "2.4 mi",
//   reported_times: [465000, 594000]
// },
// {
//   id: 3,
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
