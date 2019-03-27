import React, { Component } from "react";
import "./Locations.scss";
import NavBar from "../NavBar/NavBar";
import MainImage from "../MainImage/MainImage";
import Footer from "../Footer/Footer";
import farm from "../../Images/Farmigo.png";
import gue from "../../Images/Guerilla.jpg";
class Locations extends Component {
  render() {
    return (
      <div id="location">
        <NavBar />
        <MainImage />
        <div className="location-container">
          <h1>Locations</h1>
          <p>
            We bake daily, before the crack of dawn, and deliver to restaurants,
            markets, and offices across the Bay Area.
          </p>

          <div className="locations-list">
            <div>
              <h6>Restaurants</h6>
              <ul>
                <li>
                  Marcella's Lasagneria - 1099 Tennessee St, San Francisco, CA
                </li>
                <li>Walzwerk - 381 S Van Ness Ave, San Francisco, CA</li>
                <li>Aquitaine - 175 Sutter St, San Francisco, CA</li>
                <li>Brickhouse Cafe - 426 Brannan Street, San Francisco, CA</li>
                <li>Aliment - 786 Bush St, San Francisco, CA</li>
                <li>Union Larder - 1945 Hyde St, San Francisco, CA</li>
                <li>Shmidts - 2400 Folsom St, San Francisco, CA</li>
                <li>Range - 842 Valencia St, San Francisco, CA</li>
                <li>The Tradesman - 753 Alabama St, San Francisco, CA</li>
              </ul>
            </div>
            <div>
              <h6>Market Places</h6>
              <ul>
                <li>Canyon Market - 2815 Diamond St, San Francisco, CA</li>
                <li>La Victoria - 2937 24th St, San Francisco, CA</li>
                <li>Mission Market - 2111 Harrison St, San Francisco, CA</li>
                <li>
                  Buffalo Whole Food & Grain Co - 598 Castro Street, San
                  Francisco, CA
                </li>
                <li>
                  Le Beau Market - 1263 Leavenworth Street, San Francisco, CA
                </li>
                <li>Rainbow Grocery - 1745 Folsom St, San Francisco, CA</li>
                <li>Five Markets - 2824 24th St, San Francisco, CA</li>
                <li>
                  Delicateses La Plaza - 2598 Folsom St, San Francisco, CA
                </li>
                <li>Good Life Potrero - 1524 20th Street, San Francisco, CA</li>
              </ul>
            </div>
            <div>
              <h6>Farmers Markets</h6>
              <ul>
                <li>
                  Noe Valley Farmers Market - 3861 24th St, San Francisco, CA
                </li>
                <li>
                  Mission Bay Farmers Market - 550 Gene Friend Way, San
                  Francisco, CA
                </li>
              </ul>
            </div>
          </div>
          <div className="partners">
            <h5>Home Delivery / Neighborhood Pickup / CSA</h5>

            <div>
              <img src={farm} alt="farmigo" />
              <img src={gue} alt="guerilla" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Locations;
