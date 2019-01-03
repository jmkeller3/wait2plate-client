import React from "react";

import Login from "./Login";

import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Animated } from 'react-animated-css'

export default function Landing(props) {
  return (
    <main role="main">
      <header role="banner">
        <h1>Wait2Plate</h1>
        <h2>Getting the best and fastest food, together</h2>
      </header>
      <div className="grid">
        <Animated animationIn="fadeInLeft" animationInDelay={1500} isVisible={true}>
          <section className="information">

            <h3>Purpose and Function of Web App</h3>
            <FontAwesomeIcon size="2x" icon="clock"></FontAwesomeIcon>
            <p>
              We live in a busy world filled with great food. When pressed for time,
              our main criteron for choosing where to eat is often determined by
              quickness.
        </p>
            <p>
              Wait2Plate allows users to search restaurants near them and see the
              average wait times from real users. So whether you have been there or
              not, you can plan your meal around your life.
        </p>
          </section>
        </Animated>
        <Animated animationIn="fadeInRight" animationInDelay={2500} isVisible={true}>
          <section className="information">

            <h3>Details and features about Web App</h3>
            <FontAwesomeIcon size="2x" icon="rocket"></FontAwesomeIcon>
            <p>
              The App displays nearby restaurants and their average reported times
              by other users. By default, it uses your set zip code but you can
              search other zip codes as well.
        </p>
          </section>
        </Animated>
        <Animated animationIn="fadeInLeft" animationInDelay={3800} isVisible={true}>
          <section className="information">

            <h3>Details about 3rd party APIs and security</h3>
            <FontAwesomeIcon size="2x" icon="shield-alt"></FontAwesomeIcon>
            <p>
              In addition to its own API, Wait2Plate utilizes Yelp's API to search
              nearby restaurants for users. Your information will be kept private
              and not be sold for any reason.
        </p>
          </section>
        </Animated>
        <Animated animationIn="fadeInRight" animationInDelay={5000} isVisible={true}>
          <section className="information">

            <h3>About Designer</h3>
            <FontAwesomeIcon size="2x" icon="user"></FontAwesomeIcon>
            <p>
              John Keller started his coding journey in April of 2018 and has loved
              it ever since. He enjoys solving problems and making people's lives
              better through technology. This is his first React web application and
              hope's it leads to many more.
        </p>
          </section>
        </Animated>
      </div>
      <section className="information">
        <Login />
      </section>

    </main>
  );
}
