import React from "react";
import { connect } from "react-redux";
import { getRestaurantsThunk } from "../actions";

export class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }

  goToTimer(event) {
    event.preventDefault();
    this.props.history.push(`/timer`);
  }

  componentDidMount() {
    this.props.getRestaurantsThunk("Lehi,UT", 40.4173276, -111.87851189999999);
  }

  render() {
    // function millisToMinutesAndSeconds(millis) {
    //   const minutes = Math.floor(millis / 60000);
    //   const seconds = ((millis % 60000) / 1000).toFixed(0);
    //   return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    // }

    // const restaurantData = this.props.restaurants.map(restaurant => {
    //   function average(times) {
    //     return (
    //       times.reduce(function(a, b) {
    //         return a + b;
    //       }) / times.length
    //     );
    //   }
    //   let average_time = average(restaurant.reported_times);

    //   let times = millisToMinutesAndSeconds(average_time);

    //   return (
    //     <tr key={restaurant.id}>
    //       <td>{restaurant.name}</td>
    //       <td>{restaurant.address}</td>
    //       <td>{restaurant.distance}</td>
    //       <td>{times}</td>
    //       <td>
    //         <button onClick={e => this.goToTimer(e)}>Report</button>
    //       </td>
    //     </tr>
    //   );
    // });

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
            {/* <tbody>{restaurantData}</tbody> */}
          </table>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants });

const mapDispatchtoProps = {
  getRestaurantsThunk
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Restaurants);
