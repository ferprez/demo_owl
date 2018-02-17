import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

import Style from "../styles";
import "../styles/Header.css";

const img =
  "https://www.islandconservation.org/wp-content/uploads/2016/11/Parallax-back-chile-chanaral-irene-espinosa.jpg";
const Header = ({ min, max, children }) => (
  <div className="header-parallax-container">
    <Parallax offsetYMin={-20} offsetYMax={20} slowerScrollRate>
      <div
        className="header-parallax-image"
        style={{ backgroundImage: `url(${img})` }}
      />
    </Parallax>
    <div className="header-parallax-content">{children}</div>
  </div>
);

export default Header;
