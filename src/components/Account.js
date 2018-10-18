import React from "react";

import "./Account.css";

export default function Account(props) {
  return (
    <main role="main">
      <header role="banner">
        <h1>User Account</h1>
        <h2>A place to review your points and edit your times.</h2>
      </header>

      <section>
        <header>
          <h3>My Points</h3>
          <div className="points">
            <span>55</span>!
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
                <td>Bob's Deli</td>
                <td>5:57</td>
                <td>October 2, 2018</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Ruth's Steakhouse</td>
                <td>25:41</td>
                <td>October 7, 2018</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Starbucks</td>
                <td>4:07</td>
                <td>October 13, 2018</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </table>
          </div>
        </header>
      </section>
    </main>
  );
}
