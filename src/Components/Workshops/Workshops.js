import React, { Component } from "react";
import "./Workshops.scss";
import NavBar from "../NavBar/NavBar";
import MainImage from "../MainImage/MainImage";
import Footer from "../Footer/Footer";
import starter from "../../Images/workshop-1.jpg";
import advance from "../../Images/workshop-2.jpg";
import bagel from "../../Images/workshop-3.jpg";
import pizza from "../../Images/workshop-4.jpg";
import Fade from "react-reveal/Fade";
class Workshops extends Component {
  render() {
    return (
      <div id="workshops">
        <NavBar />
        <MainImage />
        <div className="workshop-container">
          <h1>Workshops</h1>
          <p>
            Sour Flour teaches people how to make bread. Our workshops, which
            are held at our home at La Victoria Bakery, are a great introduction
            to using and maintaining a sourdough culture/starter, and broadening
            your baking skills and knowledge. Who knew baking could be so much
            fun?!
          </p>
          <div className="order-container">
            <p>
              To book, please use the Tickets box below the class description to
              register.
            </p>
            <ul>
              <li>1. Select a date from the pull down menu.</li>
              <li>
                2. If you are redeeming a voucher for the class: Select the
                “Reedeem Coupon(s)" option.
              </li>
              <li>3. Select the Quantity of people in your party.</li>
              <li>4. Select ORDER NOW.</li>
            </ul>
            You’ll be prompted for more information on the next screen. New
            classes are added frequently as they fill, and space often becomes
            available as we process reschedule requests, so please check again
            soon if a suitable date isn’t available at this time.
          </div>
          <p>
            The minimum age for workshop participants is 14. Due to our small
            class size we require 72 hours advance notice for reschedule
            requests. We appreciate your support and look forward to meeting you
            soon!
          </p>
          <div className="line" />

          <div className="workshops-list">
            <div className="workshop-1">
              <img src={starter} alt="starter" />
              <span>
                <Fade>
                  <h6>Starter Workshop</h6>
                </Fade>
                <p>
                  In this workshop, you can look forward to a fun, hands-on
                  session going over everything you ever wanted to know about
                  using and maintaining a wild-yeast, naturally fermented
                  sourdough starter. By learning the techniques used by artisan
                  bakers, you’ll get peak performance from your starter and will
                  learn how to prepare it for baking all your favorites like
                  pizza and traditional rustic loaves. In this 2-hour workshop,
                  we’ll look at all the angles to feeding and maintaining a
                  sourdough starter, and use it to make a yummy sourdough
                  flatbread in class. You’ll go home with your own starter, as
                  well as the knowledge and confidence to use it to bake your
                  own sourdough bread at home.
                </p>
              </span>
            </div>

            <div className="workshop-2">
              <span>
                <Fade>
                  <h6>Advanced Bread Workshop</h6>
                </Fade>
                <p>
                  This is the second in our bread series, after the Starter
                  Workshop. Once you learn everything about taking care of your
                  starter, you can fully concentrate on the intricacies of
                  making a well-structured loaf of sourdough bread, with
                  beautiful crust and crumb. We’ll gain practice scaling
                  ingredients, mixing by hand and developing dough strength over
                  a series of stretch and folds. We’ll practice shaping, scoring
                  and baking bread, which we wil sample with tasty
                  accompaniments at the end of class. Finally, everyone will go
                  home with a self-scored, fresh-from-the-oven loaf of sourdough
                  bread, plus the bread dough that we developed in class, ready
                  to bake at home the next day. If you’ve ever dreamt of pulling
                  fragrant and crusty naturally-leavened bread from your home
                  oven, this class is for you! This is a small class with
                  limited enrollment, so sign up early!
                </p>
              </span>
              <img src={advance} alt="advance" />
            </div>
            <div className="workshop-3">
              <img src={bagel} alt="bagel" />
              <span>
                <Fade>
                  <h6>Bagel Workshop</h6>
                </Fade>
                <p>
                  The best bagels ever! Why? Because you make them yourself and
                  nothing beats the flavor and aroma of hot-from-the-oven
                  bagels, made with a fermented, wild yeast starter. Everyone
                  will go home with rising bagels they’ve made in class, ready
                  to finish boiling and baking the next day. We’ll also boil and
                  bake bagels in class – plain, sesame, poppy seed, or
                  everything– to enjoy with cream cheese and jam. Yum! Bring a
                  baking sheet or covered container to transport your bagels
                  home.
                </p>
              </span>
            </div>
            <div className="workshop-4">
              <span>
                <Fade>
                  <h6>Pizza Workshop</h6>
                </Fade>
                <p>
                  We expand our dough skills in this workshop by working on one
                  of our favorite foods: pizza. Whether thick crust or thin,
                  vegetarian or meat, oven baked or wood-fired, eating the
                  perfect pie can be … life changing! And re-creating your
                  favorite restaurant pie at home has eluded many of the best
                  home chefs -until now. We will take you on a step-by-step
                  journey to demystify the art of making the perfect dough with
                  that little extra bit of flavor, using a naturally fermented,
                  wild-yeast sourdough starter. You’ll learn every step of the
                  process, from mixing, balling, stretching, shaping, to baking
                  the final product: a deliciously light, crisp bite with
                  serious flavor and chew: the real pizzaiolo deal. This is the
                  perfect date-night, friends-night, fun-night out… we start
                  with a light selection of appetizers, work the dough, and
                  finish with handcrafted individual pizza and seasonal salad.
                  BYOB! Join us!!
                </p>
              </span>
              <img src={pizza} alt="pizza" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Workshops;
