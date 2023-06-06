import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  description: string;
  linkText: string;
  textColor: string;
  textPosition: string;
  link:string;
};

function PromosCard({
  image,
  title,
  description,
  linkText,
  textColor,
  textPosition,
  link,
}: Props) {
  return (
      <div className="promos__card">
        <div className="promosImg__wrapper">
          <img src={image} alt="" />
        </div>
        <div
          className="promos__text"
          style={{
            color: `${textColor}`,
            top: textPosition === "bottom" ? "calc(100% - 25%)" : "20%",
          }}
        >
          <h3>
            <AppleIcon fontSize="large" />
            {title}
          </h3>
          <p>{description}</p>
          <Link to="/" className="promos__link">{linkText} &#62;</Link>
        </div>
      </div>
  );
}

export default PromosCard;
