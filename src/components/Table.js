import React from "react";

export default function Table(props) {
  const data = [];

  props.user.reports.map(report => {
    if (report.id === props.user.id) {
      return data.push(report);
    }
  });

  let tableData = data.forEach(datum => {
    return (
      <tr>
        <td>{datum.restaurantName}</td>
        <td>{datum.time}</td>
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
      <tr>
        <th>Restaurant</th>
        <th>Time</th>
        <th>Date</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {tableData}
    </table>
  );
}
