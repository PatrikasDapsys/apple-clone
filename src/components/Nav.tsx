import AppleLogoGrey from "../images/apple-logo-grey.png";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";
import "./Nav.css";

type Props = {};

function Nav({}: Props) {
  return (
    <nav id="nav" className="navbar">
      <div className="nav__container">
        <Link to="/" className="logo__wrapper">
          <img src={AppleLogoGrey} alt="" />
        </Link>
        <Link to="/store/">
          <li className="nav__listItem">Store</li>
        </Link>
        <Link to="/mac/">
          <li className="nav__listItem">Mac</li>
        </Link>
        <Link to="/ipad/">
          <li className="nav__listItem">iPad</li>
        </Link>
        <Link to="/iphone/">
          <li className="nav__listItem">iPhone</li>
        </Link>
        <Link to="/watch/">
          <li className="nav__listItem">Watch</li>
        </Link>
        <Link to="/airpods">
          <li className="nav__listItem">AirPods</li>
        </Link>
        <Link to="/tv-home/">
          <li className="nav__listItem">TV & Home</li>
        </Link>
        <Link to="/entertainment">
          <li className="nav__listItem">Entertainment</li>
        </Link>
        <Link to="/accessories">
          <li className="nav__listItem">Accessories</li>
        </Link>
        <Link to="/support">
          <li className="nav__listItem">Support</li>
        </Link>
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
