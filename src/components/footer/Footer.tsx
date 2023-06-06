import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Footer.css";

type Props = {};

function Footer({}: Props) {
  const [currentWindowWidth, setCurrentWindowWidth] = useState(
    window.innerWidth
  );
  const [showList, setShowList] = useState<boolean[]>(
    new Array(11).fill(false)
  );

  const handleListVisibility = (index: number) => {
    const updatedList = [...showList];
    updatedList[index] = !updatedList[index];
    setShowList(updatedList);
  };

  function handleWindowResize() {
    setCurrentWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section id="footer">
      <div className="footer__container">
        <div className="footer__rules">
          <p>
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when the
            estimate was made. Sales tax may be assessed on the full value of a
            new device purchase. In-store trade-in requires the presentation of
            a valid photo ID (local law may require saving this information).
            The offer may not be available in all stores and may vary between
            in-store and online trade-in. Some stores may have additional
            requirements. Apple or its trade-in partners reserve the right to
            refuse or limit the quantity of any trade-in transaction for any
            reason. More details are available from Apple’s trade-in partner for
            the trade-in and recycling of eligible devices. Restrictions and
            limitations may apply.
            <br />
            <br />
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings &gt;
            General &gt; Software Update. Tap Download and Install.
            <br />
            <br />
            Available for qualifying applicants in the United States.
            <br />
            <br />
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
            <br />
            <br />
            Learn more about how Apple Card applications are evaluated at{" "}
            <span
              style={{ textDecoration: "underline", filter: "brightness(70%)" }}
            >
              <a href="https://support.apple.com/en-us/HT209218">
                support.apple.com/kb/HT209218.
              </a>
            </span>
            <br />
            <br />
            A subscription is required for Apple TV+.
            <br />
            <br />
            Major League Baseball trademarks and copyrights are used with
            permission of MLB Advanced Media, L.P. All rights reserved.
          </p>
        </div>
        <div className="footer__divider--horizontal"></div>

        {currentWindowWidth > 800 ? (
          <div className="footer__links">
            <div className="footer__linksColumn">
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">Shop and learn</div>
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>TV & Home</li>
                <li>AirTag</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
              </ul>
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">Apple Wallet</div>
                <li>Wallet</li>
                <li>Apple Card</li>
                <li>Apple Pay</li>
                <li>Apple Pay</li>
              </ul>
            </div>

            <div className="footer__linksColumn">
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">Account</div>
                <li>Manage Your Apple ID</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
              </ul>
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">Entertainment</div>
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>Apple Fitness+</li>
                <li>Apple News+</li>
                <li>Apple Podcasts</li>
                <li>Apple Books</li>
                <li>Apple Store</li>
              </ul>
            </div>

            <div className="footer__linksColumn">
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">Apple Store</div>
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple Camp</li>
                <li>Apple Store App</li>
                <li>Certified Refurbished</li>
                <li>Apple Trade In</li>
                <li>Financing</li>
                <li>Carrier Deals at Apple</li>
                <li>Order Status</li>
                <li>Shopping Help</li>
              </ul>
            </div>

            <div className="footer__linksColumn">
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">For Business</div>
                <li>Apple for Business</li>
                <li>Shop for Business</li>
              </ul>
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">For Education</div>
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li>Shop for College</li>
              </ul>
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">For Healthcare</div>
                <li>Apple in Healthcare</li>
                <li>Health on Apple Watch</li>
                <li>Health Records on iPhone</li>
              </ul>
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">For Government</div>
                <li>Shop for Government</li>
                <li>Shop for Veterans and Military</li>
              </ul>
            </div>

            <div className="footer__linksColumn">
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">Apple Values</div>
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>Racial Equity and Justice</li>
                <li>Supplier Responsibility</li>
              </ul>
              <ul className="footer__linksColumn--section">
                <div className="footer__linksTitle">About Apple</div>
                <li>Apple Leadership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="footer__links--small">
            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(0)}
              >
                <span>Shop and learn</span>
                <span>
                  {showList[0] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[0] ? "show" : "hide"
                }`}
              >
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>TV & Home</li>
                <li>AirTag</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
              </ul>
            </div>

            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(1)}
              >
                <span>Apple Wallet</span>
                <span>
                  {showList[1] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[1] ? "show" : "hide"
                }`}
              >
                <li>Wallet</li>
                <li>Apple Card</li>
                <li>Apple Pay</li>
                <li>Apple Pay</li>
              </ul>
            </div>

            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(2)}
              >
                <span>Account</span>
                <span>
                  {showList[2] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[2] ? "show" : "hide"
                }`}
              >
                <li>Manage Your Apple ID</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
              </ul>
            </div>

            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(3)}
              >
                <span>Entertainment</span>
                <span>
                  {showList[3] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[3] ? "show" : "hide"
                }`}
              >
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>Apple Fitness+</li>
                <li>Apple News+</li>
                <li>Apple Podcasts</li>
                <li>Apple Books</li>
                <li>Apple Store</li>
              </ul>
            </div>

            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(4)}
              >
                <span>Apple Store</span>
                <span>
                  {showList[4] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[4] ? "show" : "hide"
                }`}
              >
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple Camp</li>
                <li>Apple Store App</li>
                <li>Certified Refurbished</li>
                <li>Apple Trade In</li>
                <li>Financing</li>
                <li>Carrier Deals at Apple</li>
                <li>Order Status</li>
                <li>Shopping Help</li>
              </ul>
            </div>

            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(5)}
              >
                <span>For Business</span>
                <span>
                  {showList[5] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[5] ? "show" : "hide"
                }`}
              >
                <li>Apple for Business</li>
                <li>Shop for Business</li>
              </ul>
            </div>

            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(6)}
              >
                <span>For Education</span>
                <span>
                  {showList[6] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[6] ? "show" : "hide"
                }`}
              >
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li>Shop for College</li>
              </ul>
            </div>
            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(7)}
              >
                <span>For Healthcare</span>
                <span>
                  {showList[7] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[7] ? "show" : "hide"
                }`}
              >
                <li>Apple in Healthcare</li>
                <li>Health on Apple Watch</li>
                <li>Health Records on iPhone</li>
              </ul>
            </div>

            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(8)}
              >
                <span>For Government</span>
                <span>
                  {showList[8] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[8] ? "show" : "hide"
                }`}
              >
                <li>Shop for Government</li>
                <li>Shop for Veterans and Military</li>
              </ul>
            </div>
            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(9)}
              >
                <span>Apple Values</span>
                <span>
                  {showList[9] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[9] ? "show" : "hide"
                }`}
              >
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>Racial Equity and Justice</li>
                <li>Supplier Responsibility</li>
              </ul>
            </div>
            <div className="footer__linksList--small">
              <button
                className="footer__linksTitle--small"
                onClick={() => handleListVisibility(10)}
              >
                <span>About Apple</span>
                <span>
                  {showList[10] ? (
                    <CloseIcon style={{ fontSize: "12px" }} />
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              <ul
                className={`footer__linksListItems--small ${
                  showList[10] ? "show" : "hide"
                }`}
              >
                <li>Apple Leadership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </ul>
            </div>
          </div>
        )}

        <div className="footer__linkExtra">
          More ways to shop: &nbsp;{" "}
          <span className="footer__linkExtra--link">Find an Apple Store</span>{" "}
          &nbsp; or &nbsp;{" "}
          <span className="footer__linkExtra--link">other retailer</span>&nbsp;
          near you. &nbsp;
          <span style={{ whiteSpace: "nowrap" }}>Or call 1-800-MY-APPLE.</span>
        </div>
        <div className="footer__divider--horizontal"></div>
        <div className="footer__legal">
          <div className="footer__legalLeft" style={{ whiteSpace: "nowrap" }}>
            Copyright © 2023 Apple Inc. All rights reserved.
          </div>

          <div className="footer__legalMiddle">
            Privacy Policy
            <div className="footer__divider--vertical"></div>
            Terms of Use
            <div className="footer__divider--vertical"></div>
            Sales and Refunds
            <div className="footer__divider--vertical"></div>
            Legal
            <div className="footer__divider--vertical"></div>
            Site Map
          </div>

          <div className="footer__legalRight">United States</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
