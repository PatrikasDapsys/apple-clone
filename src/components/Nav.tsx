import React from "react";
import AppleLogoGrey from "../images/apple-logo-grey.png";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import "./Nav.css";

type Props = {};

function Nav({}: Props) {
  return (
    <nav id="nav" className="navbar">
      <div className="nav__container">
        <div className="logo__wrapper">
          <img src={AppleLogoGrey} alt="" />
        </div>
        <li className="nav__listItem">Store</li>
        <li className="nav__listItem">Mac</li>
        <li className="nav__listItem">iPad</li>
        <li className="nav__listItem">iPhone</li>
        <li className="nav__listItem">Watch</li>
        <li className="nav__listItem">AirPods</li>
        <li className="nav__listItem">TV & Home</li>
        <li className="nav__listItem">Entertainment</li>
        <li className="nav__listItem">Accessories</li>
        <li className="nav__listItem">Support</li>
        <li className="nav__listItem">
          <SearchIcon />
        </li>
        <li className="nav__listItem">
          <LocalMallOutlinedIcon />
        </li>
      </div>
    </nav>
  );
}

export default Nav;
