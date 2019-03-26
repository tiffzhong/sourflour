import React, { Component } from "react";
import "./Landing.scss";
import NavBar from "../NavBar/NavBar";
class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <span>
          <h1>Real San Francisco Sourdough</h1>
          <img
            src="http://www.sourflour.org/wp-content/uploads/2013/08/web-sourflour-logosmall.png"
            alt="logo"
          />
        </span>
        <button
          className="down-landing"
          onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
        >
          <i class="fas fa-chevron-down" />
        </button>

        <div className="slide1" />
        <div className="slide2" />
        <div className="slide3" />

        <section>
          <NavBar />
        </section>
      </div>
    );
  }
}

export default Landing;
