import React from "react";
import { connect } from "react-redux";

export class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    function millisToMinutesAndSeconds(millis) {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    const restaurantData = this.props.restaurants.map(restaurant => {
      function average(times) {
        return (
          times.reduce(function(a, b) {
            return a + b;
          }) / times.length
        );
      }
      let average_time = average(restaurant.reported_times);

      let times = millisToMinutesAndSeconds(average_time);

      return (
        <tr>
          <td>{restaurant.name}</td>
          <td>{restaurant.address}</td>
          <td>{restaurant.distance}</td>
          <td>{times}</td>
          <td>
            <button>Report</button>
          </td>
        </tr>
      );
    });
    return (
      <main role="main">
        <header role="banner">
          <h1>Search for Restaurants</h1>
        </header>

        <section>
          <h3>List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Distance</th>
                <th>Average Wait</th>
                <th>Report Time</th>
              </tr>
            </thead>
            <tbody>{restaurantData}</tbody>
          </table>
        </section>
      </main>
    );
  }
}

const mapStatetoProps = state => ({
  restaurants: state.restaurants
});

export default connect(mapStatetoProps)(Restaurants);
