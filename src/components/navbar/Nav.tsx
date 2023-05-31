import AppleLogoGrey from "../../images/apple-logo-grey.png";
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

        <div className="dropdown">
          <Link to="/store/">
            <li className="nav__listItem">Store</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">Shop</div>
                <li>Shop the latest</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Apple Watch</li>
                <li>Accessories</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">Quick Links</div>
                <li>Find a Store</li>
                <li>Order Status</li>
                <li>Apple Trade in</li>
                <li>Financing</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">
                  Shop Special Stores
                </div>
                <li>Certified Refurbished</li>
                <li>Education</li>
                <li>Business</li>
                <li>Veterans and Military</li>
                <li>Government</li>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/mac/">
            <li className="nav__listItem">Mac</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">Explore Mac</div>
                <li>Explore All Mac</li>
                <li>MacBook Air</li>
                <li>MacBook Pro</li>
                <li>iMac</li>
                <li>Mac mini</li>
                <li>Mac Studio</li>
                <li>Mac Pro</li>
                <li>Displays</li>
                <div className="dropdown-menu__extra">Compare Mac</div>
                <div className="dropdown-menu__extra">Mac Does That</div>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">Shop Mac</div>
                <li>Shop Mac</li>
                <li>Mac Accessories</li>
                <li>Apple Trade in</li>
                <li>Financing</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">More from Mac</div>
                <li>Mac Support</li>
                <li>macOS Ventura</li>
                <li>Final Cut Pro</li>
                <li>Logic Pro</li>
                <li>Continuity</li>
                <li>iCloud</li>
                <li>Mac for Business</li>
                <li>Education</li>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/ipad/">
            <li className="nav__listItem">iPad</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">Explore iPad</div>
                <li>Explore All iPad</li>
                <li>iPad Pro</li>
                <li>iPad Air</li>
                <li>iPad</li>
                <li>iPad mini</li>
                <li>Apple Pencil</li>
                <li>Keyboards</li>
                <div className="dropdown-menu__extra">Compare iPad</div>
                <div className="dropdown-menu__extra">Why iPad</div>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">Shop iPad</div>
                <li>Shop iPad</li>
                <li>iPad Accessories</li>
                <li>Apple Trade in</li>
                <li>Financing</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">
                  More from iPad
                </div>
                <li>iPad Support</li>
                <li>iPadOS 16</li>
                <li>Final Cut Pro for iPad</li>
                <li>Logic Pro for iPad</li>
                <li>iCloud</li>
                <li>Education</li>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/iphone/">
            <li className="nav__listItem">iPhone</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">
                  Explore iPhone
                </div>
                <li>Explore All iPhone</li>
                <li>iPhone 14 Pro</li>
                <li>iPhone 14</li>
                <li>iPhone 13</li>
                <li>iPhone 12</li>
                <li>iPhone SE</li>
                <div className="dropdown-menu__extra">Compare iPhone</div>
                <div className="dropdown-menu__extra">Switch to iPhone</div>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">Shop iPhone</div>
                <li>Shop iPhone</li>
                <li>iPhone Accessories</li>
                <li>Apple Trade in</li>
                <li>Carrier Deals at Apple</li>
                <li>Financing</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">
                  More from iPhone
                </div>
                <li>iPhone Support</li>
                <li>iOS 16</li>
                <li>iPhone Privacy</li>
                <li>iCloud</li>
                <li>Wallet, Pay, Card</li>
                <li>Siri</li>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/watch/">
            <li className="nav__listItem">Watch</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">Explore Watch</div>
                <li>Explore All Apple Watch</li>
                <li>Apple Watch Ultra</li>
                <li>Apple Watch Series 8</li>
                <li>Apple Watch SE</li>
                <li>Apple Watch Nike</li>
                <li>Apple Watch Hermes</li>
                <div className="dropdown-menu__extra">Compare Watch</div>
                <div className="dropdown-menu__extra">Why Apple Watch</div>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">Shop Watch</div>
                <li>Shop Apple Watch</li>
                <li>Apple Watch Studio</li>
                <li>Apple Watch Bands</li>
                <li>Apple Watch Accessories</li>
                <li>Apple Trade in</li>
                <li>Financing</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">
                  More from Watch
                </div>
                <li>Apple Watch Support</li>
                <li>watchOS 9</li>
                <li>Apple Fitness+</li>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/airpods">
            <li className="nav__listItem">AirPods</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">
                  Explore AirPods
                </div>
                <li>Explore All AirPods</li>
                <li>AirPods 2nd generation</li>
                <li>AirPods 3rd generation</li>
                <li>AirPods Pro 2nd generation</li>
                <li>AirPods Max</li>
                <div className="dropdown-menu__extra">Compare AirPods</div>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">Shop AirPods</div>
                <li>Shop AirPods</li>
                <li>AirPods Accessories</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">
                  More from AirPods
                </div>
                <li>AirPods Support</li>
                <li>AirPods Music</li>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/tv-home/">
            <li className="nav__listItem">TV & Home</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">
                  Explore TV & Home
                </div>
                <li>Explore TV & Home</li>
                <li>HomePod</li>
                <li>HomePod mini</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">
                  Shop TV & Home
                </div>
                <li>Shop Apple TV 4K</li>
                <li>Shop HomePod</li>
                <li>Shop HomePod mini</li>
                <li>Shop Siri Remote</li>
                <li>TV & Home Accessories</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">
                  More from TV & Home
                </div>
                <li>Apple TV Support</li>
                <li>HomePod Support</li>
                <li>Apple TV app</li>
                <li>Apple TV+</li>
                <li>Home app</li>
                <li>Apple Music</li>
                <li>Siri</li>
                <li>AirPlay</li>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/entertainment">
            <li className="nav__listItem">Entertainment</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">
                  Explore Entertainment
                </div>
                <li>Explore Entertainment</li>
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>Apple Fitness+</li>
                <li>Apple News</li>
                <li>Apple Podcasts</li>
                <li>Apple Books</li>
                <li>App Store</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">Support</div>
                <li>Apple TV+ Support</li>
                <li>Apple Music Support</li>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/accessories">
            <li className="nav__listItem">Accessories</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">
                  Explore Accessories
                </div>
                <li>Explore All Accessories</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Apple Watch</li>
                <li>AirPods</li>
                <li>TV & Home</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">
                  Explore Accessories
                </div>
                <li>Made by Apple</li>
                <li>Beats by Dr. Dre</li>
                <li>AirTag</li>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/support">
            <li className="nav__listItem">Support</li>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-menu__container">
              <div className="dropdown__main">
                <div className="dropdown-menu__sectionTitle">
                  Explore Support
                </div>
                <li>iPhone</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>Music</li>
                <li>TV</li>
                <div className="dropdown-menu__extra">Explore Support</div>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">Get Help</div>
                <li>Community</li>
                <li>Check Coverage</li>
                <li>Repair</li>
                <li>Contact Us</li>
              </div>
              <div className="dropdown__secondary">
                <div className="dropdown-menu__sectionTitle">
                  Helpful Topics
                </div>
                <li>Get AppleCare+</li>
                <li>Apple ID & Password</li>
                <li>Billing & Subscriptions</li>
                <li>Find My</li>
                <li>Accessibility</li>
              </div>
            </div>
          </div>
        </div>

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
