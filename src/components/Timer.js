import React from "react";

export default function Timer(props) {
  return (
    <main role="main">
      <header>
        <h1>Wait Time</h1>
        <p>
          Your time has already started. Hit the stop and report button once you
          get your food! You can always edit you times later if you forget to
          press stop.
        </p>
      </header>
      <section>
        <div className="timer">
          <span>2:55</span>
        </div>
        <button type="submit">Stop and Report</button>
      </section>
      <section>
        <span>[placeholder for css animation]</span>
      </section>
    </main>
  );
}
