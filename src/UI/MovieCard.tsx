import "./MovieCard.css";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

type Props = {
  image: string;
  genre: string;
  description: string;
};

function MovieCard({ image, genre, description }: Props) {
  return (
    <div className="moviesCard">
      <figure className="moviesCard__img--wrapper">
        <img src={image} alt="" />
      </figure>
      <div className="moviesCard__bottom">
        <button className="moviesCard__button">
          Stream Now &nbsp; <PlayCircleFilledWhiteIcon />
        </button>
        <h4>{genre} &#183; &nbsp;</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
