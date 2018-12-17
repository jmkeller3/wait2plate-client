import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Restaurants from "./Restaurants";
import Timer from "./Timer";
import Account from "./Account";
import Landing from "./Landing";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { loginAction } from "../actions";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);
library.add(faTimes)

export class App extends React.Component {
  componentWillMount() {
    const authToken = localStorage.getItem("authToken")
    if (authToken !== null) {
      this.props.dispatch(loginAction({ authToken }))
    }
  }

  render() {
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
}

export default connect()(App)
