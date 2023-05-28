import image1 from "../../images/appleTradein.png";
import image2 from "../../images/appleConference.png";
import image3 from "../../images/appleWatch.png";
import image4 from "../../images/macPro.png";
import image5 from "../../images/appleData.png";
import image6 from "../../images/appleCard.png";
import "./Promos.css";
import PromosCard from "../../UI/PromosCard";

type Card = {
  image: { [key: string]: string };
  title: string;
  description: string;
  linkText: string;
  textColor: string;
  textPosition: string;
  link: string;
};

const cards: Card[] = [
  {
    image: { image1 },
    title: "Trade In",
    description: "Upgrade and save. It's that easy.",
    linkText: "See what your device is worth",
    textColor: "black",
    textPosition: "top",
    link: "/",
  },
  {
    image: { image2 },
    title: "WWDC23",
    description:
      "Apple Worldwide Developers Conference. Join us online June 5-9.",
    linkText: "Learn More",
    textColor: "white",
    textPosition: "bottom",
    link: "/",
  },
  {
    image: { image3 },
    title: "WATCH",
    description: "Pride is in the air.",
    linkText: "Shop the new Pride Edition Sport Band.",
    textColor: "",
    textPosition: "top",
    link: "/watch/",
  },
  {
    image: { image4 },
    title: "MacBook Pro",
    description: "Supercharged by M2 Pro and M2 Max",
    linkText: "Buy",
    textColor: "white",
    textPosition: "top",
    link: "/mac/",
  },
  {
    image: { image5 },
    title: "Your health data. In your control.",
    description: "Privacy, That's iPhone.",
    linkText: "Learn More",
    textColor: "white",
    textPosition: "top",
    link: "/",
  },
  {
    image: { image6 },
    title: "Card",
    description: "Get up tp 3% Daily Cash back with every purchase.",
    linkText: "Apply now",
    textColor: "black",
    textPosition: "top",
    link: "/",
  },
];

type Props = {};

function Promos({}: Props) {
  return (
    <section id="promos">
      {cards.map((card, index) => (
          <PromosCard
            key={index}
            image={Object.values(card.image)[0]}
            title={card.title}
            description={card.description}
            linkText={card.linkText}
            textColor={card.textColor}
            textPosition={card.textPosition}
            link={card.link}
          />
      ))}
    </section>
  );
}

export default Promos;
