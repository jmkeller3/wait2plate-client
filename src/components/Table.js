import React from "react";
import moment from "moment";

export default class Table extends React.Component {
  render() {
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
            <button>Edit</button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      );
    });

    return (
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
    );
  }
}
