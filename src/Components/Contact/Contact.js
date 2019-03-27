import React, { Component } from "react";
import "./Contact.scss";
import NavBar from "../NavBar/NavBar";
import MainImage from "../MainImage/MainImage";
import Footer from "../Footer/Footer";
class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <NavBar />
        <MainImage />
        <div className="contact-container">
          <h1>Contact Us</h1>
          <div className="contacting">
            <form>
              <p>Name:</p>
              <input />
              <p> Email:</p>
              <input />
              <p>Request:</p>
              <select className="request">
                <option value="booking">Booking a Workshop</option>
                <option value="breaded">Bread Education</option>
                <option value="business">Business Inquiry</option>
                <option value="wholesale">Flour Wholesale</option>
                <option value="somethingelse">Something Else</option>
              </select>
              <p> Event Date:</p>
              <input type="date" name="date" />
              <p>Details:</p>
              <textarea />
              <a href="" alt="submit">
                Submit
              </a>
            </form>
            <div className="text-right">
              <span>
                For private group or corporate events, or bread
                education-related questions, contact:
                <ul>
                  <h6> Cat Shimizu</h6>
                  <li>cat@sourflour.org </li>
                  <li>(650) 868-0243</li>
                </ul>
              </span>
              <span>
                For wholesale inquiries, starter & flour sale, and all other
                questions, contact:
                <ul>
                  <h6>Danny</h6>
                  <li>danny@sourflour.org </li>
                  <li>call (415) 509 – 1210. </li>
                </ul>
              </span>
              <p>
                Sour Flour Workshops are held at <h6>La Victoria Bakery</h6>
                2937 24th St, San Francisco, CA 94110
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
