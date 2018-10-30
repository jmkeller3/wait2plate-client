import React from "react";
import { connect } from "react-redux";

import "./Account.css";
import Table from "./Table";

import { accountUserThunk } from "../actions";

export class Account extends React.Component {
  componentDidMount() {
    this.props.dispatch(accountUserThunk());
  }

  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>Welcome {this.props.user.username}!</h1>
          <h2>A place to review your points and edit your times.</h2>
        </header>

        <section>
          <header>
            <h3>My Points</h3>
            <div className="points">
              <span>{this.props.user.points}!</span>
            </div>
          </header>
        </section>

        <section>
          <header>
            <h3>My Times</h3>
            <div className="times">
              <Table user={this.props.user} reports={this.props.reports} />
            </div>
          </header>
        </section>
      </main>
    );
  }
}

const mapStatetoProps = state => ({
  user: state.users[0],
  reports: state.reports
  //.find(user => user.id === state.user_id)
});

export default connect(mapStatetoProps)(Account);
