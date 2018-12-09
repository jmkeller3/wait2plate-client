import React from "react";

import "./Timer.css";
import { connect } from "react-redux";

import { addPoint, reportTimeThunk } from "../actions";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      lastClearedIncrementer: null,
      restaurant_name: this.props.restaurant.name,
      restaurant_id: this.props.restaurant.id
    };
    this.incrementer = null;

    this.handleStopClick = this.handleStopClick.bind(this);
  }

  componentDidMount() {
    this.incrementer = setInterval(
      () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        }),
      1000
    );
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
    addPoint()
  }

  getSeconds() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  }

  getMinutes() {
    return Math.floor(this.state.secondsElapsed / 60);
  }

  render() {
    return (
      <main role="main">
        <header>
          <h1>Wait Time</h1>
          <p>
            Your time has already started. Hit the stop and report button once
            you get your food! You can always edit you times later if you forget
            to press stop.
          </p>
        </header>
        <section>
          <div className="timer">
            <h1 className="timer-display">
              {this.getMinutes()}:{this.getSeconds()}
            </h1>
          </div>
          <button
            type="submit"
            onClick={this.handleStopClick}
            className="btn btn-report"
          >
            Stop and Report
          </button>
        </section>
        <section>
          <div className="flip-vertical-right logo">
          </div>
        </section>
      </main>
    );
  }
}


const mapStateToProps = state => ({
  restaurants: state.restaurants,
  latitude: state.latitude,
  longitude: state.longitude
});

const mapDispatchtoProps = {
  addPoint,
  reportTimeThunk
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Timer);
