import React from "react";

export default function Table(props) {
  const data = props.reports.filter(report => report.user_id === props.user.id);

  let tableData = data.map(datum => {
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
