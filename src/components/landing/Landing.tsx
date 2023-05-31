import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Background14Pro from "../../images/apple-iphone14-four.jpg";
import Background14 from "../../images/iphone-14-colors.webp";
import { Link } from "react-router-dom";
import "./Landing.css";

type Props = {};

function Landing({}: Props) {
  return (
    <section id="landing">
      <div className="iphone14pro">
        <Link className="landing" to="/iphone/">
          <figure className="landing__background">
            <img src={Background14Pro} alt="" />
          </figure>
          <div className="landing__text iphone14pro__text">
            <h1>iPhone 14 Pro</h1>
            <p>Pro.Beyond.</p>
            <div className="landing__buttons">
              <div className="landing__buttonLearnMore">
                <span>Learn more</span>
                <KeyboardArrowRightIcon />
              </div>
              <div className="landing__buttonBuy">
                <div
                  className="landing__buttonBuy"
                  style={{ cursor: "no-drop" }}
                >
                  <span>Buy</span>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="iphone14">
        <Link className="landing" to="/iphone/">
          <figure className="landing__background">
            <img src={Background14} alt="" />
          </figure>
          <div className="landing__text">
            <h1>iPhone 14</h1>
            <p>Wonderfull.</p>
            <div className="landing__buttons">
              <div className="landing__buttonLearnMore">
                <span>Learn more</span>
                <KeyboardArrowRightIcon />
              </div>
              <div className="landing__buttonBuy">
                <div
                  className="landing__buttonBuy"
                  style={{ cursor: "no-drop" }}
                >
                  <span>Buy</span>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Landing;
