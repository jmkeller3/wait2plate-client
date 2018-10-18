// Login
const login = async (username, pass) => {
  let users = JSON.parse(localStorage.getItem("users"));

  let authenication = function(user) {
    return username === user.username && pass === user.password;
  };

  let user = users.find(authenication);
  if (user == null) {
    throw Error(`Bad login request`);
  }
  return user.id;
};

// Sign-Up
// Send to server: Username, Email, Password
// Get from server: JWT
const signup = async (username, email, pass) => {
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
const searchRestaurants = ({ geolocation, search, JWT }) => {};

// Report Time
// Send to server: Restaurant id, time, JWT
// Get from server: Send user's updated points
const reportTime = (restaurantId, time, JWT) => {};

// Get User Reported Times
// Send to server: JWT
// Get from server: User's report times (Restaurant name, time reported (id and the date), user's points)
const accountUser = JWT => {};

// Edit Reported Times
// Send to server: JWT, report id, new time
// Get from server: new time
const editTime = (JWT, reportId, newTime) => {};

// Delete Reported Times
// Send to server: JWT, report id
// Get from server: deletion
const deleteTime = (JWT, reportId) => {};

// Log Out
