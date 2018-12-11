import React from "react";
import { connect } from "react-redux";

import "./Account.css";


import { accountUserThunk, editTimeThunk, deleteTimeThunk } from "../actions";

export class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  handleEdit() {

  }

  handleDelete() {

  }

  componentDidMount() {
    this.props.accountUserThunk();
  }


  render() {
    console.log(this.props.reports)

    function secondsToMinutesAndSeconds(seconds) {
      const minutes = Math.floor(seconds / 60);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    const data = this.props.reports.filter(
      report => report.user_id === this.props.user.id
    );

    let tableData = data.map(datum => {
      let time = secondsToMinutesAndSeconds(datum.time);
      let date = moment(datum.date).format("MMMM D, YYYY")
      return (
        <tr key={Math.random()}>
          <td>{datum.restaurant_name}</td>
          <td>{time}</td>
          <td>{date}</td>
          <td>
            <button type="button" onClick={this.handleEdit}>Edit</button>
          </td>
          <td>
            <button type="button" onClick={this.handleDelete}>Delete</button>
          </td>
        </tr>
      );
    });

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

        <section>
          <header>
            <h3>My Times</h3>
          </header>
          <div className="times">
            {/* <Table user={this.props.user} reports={this.props.reports} /> */}
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
          </div>

        </section>
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
  accountUserThunk,
  editTimeThunk,
  deleteTimeThunk
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Account);
