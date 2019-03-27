import React, { Component } from "react";
import "./Breads.scss";
import NavBar from "../NavBar/NavBar";
import MainImage from "../MainImage/MainImage";
import Footer from "../Footer/Footer";
import flat from "../../Images/flat.jpg";
import bagel from "../../Images/bagel.jpg";
import sourd from "../../Images/sourd.jpg";
import brioche from "../../Images/brioche.jpg";
import pastry from "../../Images/pastry.jpg";
import pretzel from "../../Images/pretzel.jpg";
class Breads extends Component {
  render() {
    return (
      <div id="bread">
        <NavBar />
        <MainImage />
        <div className="bread-header">
          <h1>Our Doughs</h1>
          <p>
            At Sour Flour, we concentrate our efforts on three distinct San
            Francisco sourdoughs: a classic levain bread dough, a bagel dough,
            and a pretzel dough. At the heart of each lives and breathes Dulce,
            our starter culture who turns a few simple ingredients into magic.
          </p>
        </div>
        <div className="bread-container">
          <div className="bread-1">
            <img src={sourd} alt="bread" />

            <span>Sourdough</span>
          </div>
          <div className="bread-2">
            <img src={pretzel} alt="pretzels" />
            <span>Pretzels</span>
          </div>
          <div className="bread-3">
            <img src={bagel} alt="bagels" />
            <span>Bagels</span>
          </div>
          <div className="bread-4">
            <img src={pastry} alt="pastries" />
            <span>Pastries</span>
          </div>
          <div className="bread-5">
            <img src={brioche} alt="brioche" />
            <span>Brioche</span>
          </div>
          <div className="bread-6">
            <img src={flat} alt="flatbread" />
            <span>Pizza/Flatbreads</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Breads;
