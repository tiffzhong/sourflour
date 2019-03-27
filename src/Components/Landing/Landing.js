import React, { Component } from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }
  toggle = () => {
    this.setState(p => {
      return {
        toggle: !p.toggle
      };
    });
  };
  render() {
    const { toggle } = this.state;
    return (
      <div className="landing">
        <div className="navbar-landing">
          {toggle ? (
            <div className="drawerOpen">
              <button onClick={this.toggle}>&times;</button>
              <div className="links">
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/breads">breads</Link>
                <Link to="/locations">locations</Link>
                <Link to="/workshops">workshops</Link>
                <Link to="/blog">blog</Link>
                <Link to="/contact">contact</Link>
              </div>
            </div>
          ) : (
            <div className="drawerHidden">
              <button onClick={this.toggle}>&#9776;</button>
              <div className="links">
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/breads">breads</Link>
                <Link to="/locations">locations</Link>
                <Link to="/workshops">workshops</Link>
                <Link to="/blog">blog</Link>
                <Link to="/contact">contact</Link>
              </div>
            </div>
          )}
        </div>

        <div className="slide1" />
        <div className="slide2" />
        <div className="slide3" />

        <div className="intro">
          <h1>Real San Francisco Sourdough</h1>
          <img
            src="http://www.sourflour.org/wp-content/uploads/2013/08/web-sourflour-logosmall.png"
            alt="logo"
          />
        </div>

        <div className="welcome">
          <div>
            <h1>Welcome!</h1>
            <p>
              Sour Flour bakes classic San Francisco sourdough bread, bagels,
              and pretzels out of La Victoria Bakery in the Mission. We deliver
              fresh bread every morning around the Bay Area and hold classes and
              workshops. We strive to nourish our community, teach the art and
              science of bread baking, and empower bakers with knowledge and
              skill.
            </p>
          </div>
        </div>
        <div className="foot">
          <div>
            <span>
              follow us on{" "}
              <a href="https://www.instagram.com/sourflourbread/" alt="ig">
                <i class="fab fa-instagram" />
              </a>
            </span>
            <span>copyright ©2019 </span>
            <span>
              site built by{" "}
              <a
                href="https://tiffzhong.github.io"
                target="_blank"
                alt="github.com/tiffzhong"
              >
                tiffz
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
