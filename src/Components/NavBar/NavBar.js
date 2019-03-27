import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
class NavBar extends Component {
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
      <nav>
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
            <Link to="/">
              <img
                width="180"
                src="http://www.sourflour.org/wp-content/uploads/2013/08/web-sourflour-logosmall.png"
                alt="logo"
              />
            </Link>

            <div className="links">
              <Link to="/about">about</Link>
              <Link to="/breads">breads</Link>
              <Link to="/locations">locations</Link>
              <Link to="/workshops">workshops</Link>
              <Link to="/blog">blog</Link>
              <Link to="/contact">contact</Link>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
