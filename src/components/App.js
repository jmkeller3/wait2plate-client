import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Restaurants from "./Restaurants";
import Timer from "./Timer";
import Account from "./Account";
import Landing from "./Landing";
import Navbar from "./Navbar";

export default function App(props) {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/timer" component={Timer} />
          <Route path="/account/" component={Account} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
