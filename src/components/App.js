import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Footer from "./Footer";
import Restaurants from "./Restaurants";
import Timer from "./Timer";
import Account from "./Account";
import Landing from "./Landing";
import { Navbar } from "./Navbar";

export default function App(props) {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/restaurants" component={Restaurants} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/account/:userId" component={Account} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
