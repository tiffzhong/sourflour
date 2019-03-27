import React, { Component } from "react";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <footer>
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
      </footer>
    );
  }
}

export default Footer;
