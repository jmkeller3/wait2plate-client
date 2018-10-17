import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function Navbar(props) {
  return (
    <nav>
      <ul className="page-links">
        <li>Home</li>
        <li>Restaurants</li>
        <li>Timer</li>
        <li>Account</li>
      </ul>
    </nav>
  );
}

/* <Router>
<nav className="navbar">
    <h1><Link to="/">Home</Link></h1>

    <Route path="/restaurants" component={Restaurants} />
    <Route path="/timer" component={Timer} />
    <Route path="/account/:userId" component={Account} />
</nav>
</Router> */
