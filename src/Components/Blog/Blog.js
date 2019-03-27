import React, { Component } from "react";
import "./Blog.scss";
import NavBar from "../NavBar/NavBar";
import MainImage from "../MainImage/MainImage";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
class Blog extends Component {
  render() {
    return (
      <div id="blog">
        <NavBar />
        <MainImage />
        <div className="blog-container">
          <h1>Blog</h1>
          <p>Nothing here yet!</p>
          <Link to="/">home</Link>
        </div>
      </div>
    );
  }
}

export default Blog;
