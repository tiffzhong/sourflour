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
    return (
      <nav>
        <div>
          <button onClick={this.toggle}>☰</button>
        </div>
        <ul className={this.state.toggle ? "show" : "hide"}>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/about">breads</Link>
          <Link to="/about">locations</Link>
          <Link to="/about">workshops</Link>
          <Link to="/blog">blog</Link>
          <Link to="/contact">contact</Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
