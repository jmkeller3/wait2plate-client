import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav>
      <ul className="page-links">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/restaurants`}>Restaurants</Link>
        </li>
        <li>
          <Link to={`/timer`}>Timer</Link>
        </li>
        <li>
          <Link to={`/account`}>Account</Link>
        </li>
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
