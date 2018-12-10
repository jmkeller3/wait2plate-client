import React from "react";
import { connect } from "react-redux";

import "./Account.css";
import Table from "./Table";

import { accountUserThunk } from "../actions";

export class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.accountUserThunk();
  }


  render() {
    console.log(this.props.reports)
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
              <span>{this.props.points}</span>
            </div>
          </header>
        </section>

        {
          this.props.reports === []
            ? <section>
              <header>
                <h3>My Times</h3>
              </header>
              <div className="times">
                <p>Report Times to Gain Points and Review Them Here!</p>
              </div>

            </section> : <section>
              <header>
                <h3>My Times</h3>
              </header>
              <div className="times">
                <Table user={this.props.user} reports={this.props.reports} />
              </div>

            </section>

        }
      </main>
    );
  }
}

const mapStatetoProps = state => ({
  user: state.user,
  reports: state.reports,
  points: state.points
  //.find(user => user.id === state.user_id)
});

const mapDispatchtoProps = {
  accountUserThunk
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Account);
