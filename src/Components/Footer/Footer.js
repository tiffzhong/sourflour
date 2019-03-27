import React, { Component } from "react";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <footer>
        Copyright ©2019 built by
        <a
          href="https://www.github.com/tiffzhong"
          target="_blank"
          alt="github.com/tiffzhong"
        >
          tiffz
        </a>
      </footer>
    );
  }
}

export default Footer;
