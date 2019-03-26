import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <>
        <Link to="/about">about</Link>
        <Link to="/about">breads</Link>
        <Link to="/about">locations</Link>
        <Link to="/about">workshops</Link>
        <Link to="/blog">blog</Link>
        <Link to="/contact">contact</Link>
      </>
    );
  }
}

export default NavBar;
