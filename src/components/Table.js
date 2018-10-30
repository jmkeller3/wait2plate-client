import React from "react";

export default class Table extends React.Component {
  render() {
    function millisToMinutesAndSeconds(millis) {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    const data = this.props.reports.filter(
      report => report.user_id === this.props.user.id
    );

    let tableData = data.map(datum => {
      let time = millisToMinutesAndSeconds(datum.time);
      return (
        <tr>
          <td>{datum.restaurantName}</td>
          <td>{time}</td>
          <td>{datum.date}</td>
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
