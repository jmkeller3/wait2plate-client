// Login
export const login = async (username, pass) => {
  let users = JSON.parse(localStorage.getItem("users"));
  // users: [{
  //  id: 1,
  //  username: test,
  //  email: test@test.com,
  //  password: password123,
  //  points: 55,
  //  reports: [{
  //    id: 100,
  //    restaurantId: 1000,
  //    restaurantName: Dave's Cafe
  //    time: 525000,
  //    date: October 2, 2018
  // }]
  // }, {
  //  id: 2,
  //  username: john,
  //  email: john@john.,
  //  password: password123,
  //  points: 12,
  //  reports: [{
  //    id: 101,
  //    restaurantId: 1001,
  //    restaurantName: Bill's Shop,
  //    time: 726000,
  //    date: October 3, 2018
  // }]
  // }, {
  //  id: 3,
  //  username: amanda,
  //  email: amanda@amanda.com,
  //  password: password123,
  //  points: 7,
  //  reports: [{
  //    id: 102,
  //    restaurantId: 1002,
  //    time: 1128000,
  //    date: October 4, 2018
  // }]
  // }]

  function authenication(user) {
    return username === user.username && pass === user.password;
  }

  let user = users.find(authenication);
  if (user == null) {
    throw Error(`Bad login request`);
  }
  return user.id;
};

// Sign-Up
// Send to server: Username, Email, Password
// Get from server: JWT
export const signup = async (username, email, pass) => {
  let users = JSON.parse(localStorage.getItem("users"));
  //   Add users in local storage as an empty JSON array

  let newUser = {
    username,
    email,
    password: pass,
    id: Math.random() + 1
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  return newUser.id;

  //   localStorage.setItem("token", newUser.id);
};

// Search Restaurants
// Send to server: geolocation || search value
// Get from server: Restaurant Data from Yelp (name, address, distance) & Time data from server (average wait time)
// Report time button
export const searchRestaurants = async ({ geolocation, cityState, JWT }) => {
  let restaurants = JSON.parse(localStorage.getItem("restaurants"));
  // [{
  //   id: 1
  //   name: "Bill Bob's Burgers",
  //   address: "123 Main St. Lehi, UT 84043",
  //   distance: "1.4 mi",
  //   reported times: [392000, 420000, 498000]
  //
  // },
  // {
  //   id: 2,
  //   name: "Grace's Bakery",
  //   address: "3 Main St. Lehi, UT 84043",
  //   distance: "2.4 mi",
  //   reported times: [465000, 594000]
  // },
  // {
  //   id: 3,
  //   name: "Stevo's Bar and Grill",
  //   address: "100 Center St. Lehi, UT 84043",
  //   distance: "0.5 mi",
  //   reported times: [780000]
  // }];

  let location = geolocation || cityState;

  return restaurants.sort();
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

  function authenication(user) {
    return JWT === user.id;
  }

  let user = users.find(authenication());
  if (user == null) {
    throw Error(`Bad login request`);
  }

  let userData = {
    reports: user.reports,
    points: user.points
  };
  return userData;
};

// Edit Reported Times
// Send to server: JWT, report id, new time
// Get from server: new time
export const editTime = async (JWT, reportId, newTime) => {
  let users = JSON.parse(localStorage.getItem("users"));

  let user = JWT;
};

// Delete Reported Times
// Send to server: JWT, report id
// Get from server: deletion
export const deleteTime = async (JWT, reportId) => {
  let users = JSON.parse(localStorage.getItem("users"));
  let restaurants = JSON.parse(localStorage.getItem("restaurants"));

  let authenication = function(user) {
    return JWT === user.id;
  };

  let user = users.find(authenication);
  if (user == null) {
    throw Error(`Bad login request`);
  }

  let time = user.times.find();

  let restaurant = restaurants.find();
};

// Log Out
export const logOut = async () => {};
