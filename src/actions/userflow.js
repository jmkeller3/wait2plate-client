const { REACT_APP_API_BASE_URL } = process.env;

// Login
export const login = async (username, pass) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

// Sign-Up
// Send to server: Username, Email, Password
// Get from server: JWT
export const signup = async (username, email, pass) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

// Search Restaurants
// Send to server: geolocation || search value (city)
// Get from server: Restaurant Data from Yelp (name, address, distance) & Time data from server (average wait time)
// Report time button
export const searchRestaurants = async ({ latitude, longituge, cityState }) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

// Report Time
// Send to server: Restaurant id, time, JWT
// Get from server: Send user's updated points
export const reportTime = async (restaurant_id, restaurant_name, time, JWT) => {
  try {
    const report = await fetch(`${REACT_APP_API_BASE_URL}/api/reports`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${JWT}`,
        "Content-Type": "application/json"
      }),
      body: {
        restaurant_id,
        restaurant_name,
        time
      }
    });

    return report;
  } catch (err) {
    console.log(err);
  }
};

// Get User Reported Times
// Send to server: JWT
// Get from server: User's report times (Restaurant name, time reported (id and the date), user's points)
export const accountUser = async (JWT, user_id) => {
  try {
    let user = await fetch(`${REACT_APP_API_BASE_URL}/api/users/${user_id}`, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${JWT}`,
        "Content-Type": "application/json"
      })
    });

    let reports = user.reports.map(report => {
      fetch(`{REACT_APP_API_BASE_URL}/api/reports/${report}`);
    });

    return {
      reports,
      points: user.points
    };
  } catch (err) {
    console.log(err);
  }
};

// Edit Reported Times
// Send to server: JWT, report id, new time
// Get from server: new time
export const editTime = async (JWT, reportId, newTime) => {
  try {
    fetch(`${REACT_APP_API_BASE_URL}/api/reports/${reportId}`, {
      method: "PUT",
      headers: new Headers({
        Authorization: `Bearer ${JWT}`,
        "Content-Type": "application/json"
      }),
      body: newTime
    });

    return newTime;
  } catch (err) {
    console.log(err);
  }
};

// Delete Reported Times
// Send to server: JWT, report id
// Get from server: deletion
export const deleteTime = async (JWT, reportId) => {
  try {
    fetch(`${REACT_APP_API_BASE_URL}/api/reports/${reportId}`, {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${JWT}`,
        "Content-Type": "application/json"
      })
    });
    return console.log(`Report Deleted`);
  } catch (err) {
    console.log(err);
  }
};

// Get Users
export const getAllUsers = async JWT => {
  try {
    let users = await fetch(`${REACT_APP_API_BASE_URL}/api/users`);

    return users;
  } catch (err) {
    console.log(err);
  }
};

// Log Out
export const logOut = async () => {
  localStorage.clear("user");
  localStorage.clear("token");
};
