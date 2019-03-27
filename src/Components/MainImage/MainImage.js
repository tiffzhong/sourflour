import React from "react";
import "./MainImage.scss";
import { Link } from "react-router-dom";
const MainImage = props => {
  return (
    <div className="main-img">
      <Link to="/">
        <img
          src="http://www.sourflour.org/wp-content/uploads/2013/08/web-sourflour-logosmall.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};
export default MainImage;
