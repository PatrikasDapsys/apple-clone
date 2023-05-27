import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Background from '../../images/apple-iphone14-four.jpg';
import { Link } from "react-router-dom";
import "./Landing.css";

type Props = {}

function Landing({}: Props) {
  return (
    <Link className="landing" to="/iphone/">
    <figure className="landing__background">
      <img src={Background} alt="" />
    </figure>
    <div className="landing__text">
      <h1>iPhone 14 Pro</h1>
      <p>Pro.Beyond.</p>
      <div className="landing__buttons">
        <div className="landing__buttonLearnMore">
          <span>Learn more</span>
          <KeyboardArrowRightIcon />
        </div>
        <div className="landing__buttonBuy">
          <div className="landing__buttonBuy" style={{cursor:"no-drop"}}>
            <span>Buy</span>
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default Landing