import React from "react";
import { connect } from "react-redux";
import moment from "moment"

import "./Account.css";

import { accountUserThunk, editTimeThunk, deleteTimeThunk } from "../actions";

export class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTime: ''
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(event, reportId) {
    event.preventDefault();
    let time = prompt("Enter New Time (Example 15:55)", "5:00")
    function toSeconds(str) {
      const pieces = str.split(":");
      const result = Number(pieces[0]) * 60 + Number(pieces[1]);
      return (result.toFixed(0))
    }
    const newTime = toSeconds(time)
    this.props.editTimeThunk(reportId, newTime)
  }

  handleDelete(event, reportId) {
    event.preventDefault();
    this.props.deleteTimeThunk(reportId)
  }

  goToLanding(event) {
    event.preventDefault()
    this.props.history.push(`/`);
  }

  componentDidMount() {
    this.props.accountUserThunk()
  }



  render() {
    function secondsToMinutesAndSeconds(reportSeconds) {
      const minutes = Math.floor(reportSeconds / 60);
      const seconds = Math.floor(reportSeconds - (minutes * 60))
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    const tableData = this.props.reports.map(datum => {
      return (
        <tr key={datum.id}>
          <td>{datum.restaurant_name}</td>
          <td>{secondsToMinutesAndSeconds(datum.time)}</td>
          <td>{moment(datum.date).format("MMMM D, YYYY")}</td>
          <td>
            <button type="button" onClick={(e) => { this.handleEdit(e, datum.id) }}>Edit</button>
          </td>
          <td>
            <button type="button" onClick={(e) => { this.handleDelete(e, datum.id) }}>Delete</button>
          </td>
        </tr>
      );
    });
    return (
      (
        this.props.user.username
          ? <main role="main">
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

            <section>
              <header>
                <h3>My Times</h3>
              </header>
              <table>
                <thead>
                  <tr>
                    <th>Restaurant</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{tableData}</tbody>
              </table>
            </section>
          </main>
          : <main role="main">
            <header role="banner">
              <h1>Welcome!</h1>
              <h2>Please sign-in to see your reports and points.</h2>
            </header>

            <button
              type="submit"
              onClick={(e) => this.goToLanding(e)}
              className="btn"
            >
              Login
          </button>
          </main>
      )
    );
  }
}

const mapStatetoProps = state => ({
  user: state.user,
  reports: state.reports,
  points: state.points
});

const mapDispatchtoProps = {
  accountUserThunk,
  editTimeThunk,
  deleteTimeThunk
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Account);
