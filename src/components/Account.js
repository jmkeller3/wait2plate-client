import React from "react";
import { connect } from "react-redux";

import "./Account.css";

export class Account extends React.Component {
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
            <div class="times">
              <table>
                <tr>
                  <th>Restaurant</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                <tr>
                  <td>{this.props.user.reports[0].restaurantName}</td>
                  <td>{this.props.user.reports[0].time}</td>
                  <td>{this.props.user.reports[0].date}</td>
                  {/* ^This should be the date^ */}
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
                {/* ^Need to put this over a .map when rendered^ */}
              </table>
            </div>
          </header>
        </section>
      </main>
    );
  }
}

const mapStatetoProps = state => ({
  user: state.users[0]
  //.find(user => user.id === state.user_id)
});

export default connect(mapStatetoProps)(Account);
