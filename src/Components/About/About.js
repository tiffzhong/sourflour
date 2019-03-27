import React, { Component } from "react";
import "./About.scss";
import NavBar from "../NavBar/NavBar";
import MainImage from "../MainImage/MainImage";
class About extends Component {
  render() {
    return (
      <div id="about">
        <NavBar />
        <MainImage />
        <div className="about-container">
          <h1>About Us</h1>
          <div className="history-container">
            <h2>History</h2>
            <p>
              Sour Flour was founded in 2008 by Danny Gabriner when, through
              home experimentation with sour dough baking, he decided to start a
              bakery with a twist. The first 1000 loaves would be free and would
              be given away to neighbors, collaborators and anyone who expressed
              an interest in Sour Flour. A bread community began to be born and
              Danny began to enjoy the idea of reciprocity that the free bread
              engendered. People began to sift through the woodwork offering
              help and wishing to learn the art and science of baked bread.
              While bread sales remain a focus of Sour Flour, neighborly bread
              gifting, and bread education are high values held by Sour Flour.
            </p>
          </div>
          <div className="bread-ed-container">
            <h2>Bread Education</h2>
            <p>
              Bread Education is a service provided by Sour Flour to help people
              master sour dough baking, to train future Sour Flour employees and
              to create an educated community of bread consumers that appreciate
              Sour Flour bread. You can sign up for one of our workshops.
            </p>
          </div>
          <div className="bagel-mon-container">
            <h2>Bagel Monday</h2>
            <p>
              Bagel Monday provides bagels free of charge, and we encourage home
              bakers to participate in Bagel Monday by baking bagels and getting
              to know their neighbors by giving the fresh bagels away. “Start
              you week off right with Bagel Monday”.
            </p>
          </div>
          <div className="investing-container">
            <h2>Investing in Sour Flour</h2>
            <p>
              Sour Flour is a Customer Owned Company. If you are interested in
              having ownership in the company, please read our current
              SourFlourBusinessPlan. If you have questions or comments, feel
              free to email danny@sourflour.org, or call (415) 509 – 1210.
            </p>
          </div>
          <iframe
            src="https://player.vimeo.com/video/56030891"
            width="640"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default About;
