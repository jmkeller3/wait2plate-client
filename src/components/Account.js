import React from "react";

import "./Account.css";

export default function Account(props) {
  return (
    <main role="main">
      <header role="banner">
        <h1>Welcome {props.username}!</h1>
        <h2>A place to review your points and edit your times.</h2>
      </header>

      <section>
        <header>
          <h3>My Points</h3>
          <div className="points">
            <span>{props.points}</span>!
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
                <td>{props.reports.restaurantName}</td>
                <td>{props.reports.time}</td>
                <td>{props.reports.time}</td>
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
