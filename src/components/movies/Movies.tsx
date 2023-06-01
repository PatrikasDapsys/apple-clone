import "./Movies.css";
import movieGhostedImage from "../../images/movie_ghosted.jpg";
import movieDesertImage from "../../images/movie_high-Desert.jpg";
import movieMorningImage from "../../images/movie_morning-show.jpg";
import moviePlatonicImage from "../../images/movie_platonic.jpg";
import moviePrehistoricImage from "../../images/movie_prehistoric-planet2.jpg";
import movieShrinkingImage from "../../images/movie_shrinking.jpg";
import movieSiloImage from "../../images/movie_silo.jpg";
import movieTedImage from "../../images/movie_ted-lasso.jpg";
import movieDoorImage from "../../images/movie_the-big-door-prize.jpg";
import movieLastImage from "../../images/movie_the-last-thing-he-told-me.jpg";
import MovieCard from "../../UI/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1500,
};

const movies: {
  image: string;
  genre: string;
  description: string;
}[] = [
  {
    image: movieGhostedImage,
    genre: "Action",
    description: "Meeting that special someone can be a real adventure.",
  },
  {
    image: movieDesertImage,
    genre: "Comedy",
    description: "It's not you. It's her.",
  },
  {
    image: movieMorningImage,
    genre: "Drama",
    description: "Control is an illiusion.",
  },
  {
    image: moviePlatonicImage,
    genre: "Comedy",
    description:
      "Seth Rogen and Rose Byrne are old friends who reunite for a hilarious new chapter.",
  },
  {
    image: moviePrehistoricImage,
    genre: "Documentary",
    description: "New dinosaurs. New habitats. New season.",
  },
  {
    image: movieShrinkingImage,
    genre: "Comedy",
    description: "Breakdown. Breakthrough.",
  },
  {
    image: movieSiloImage,
    genre: "Sci-FI",
    description: "The truth will surface.",
  },
  {
    image: movieTedImage,
    genre: "Comedy",
    description: "Kindness makes a comeback.",
  },
  {
    image: movieDoorImage,
    genre: "Comedy",
    description: "Your life’s potential is one card away.",
  },
  {
    image: movieLastImage,
    genre: "Mystery",
    description: "Protect what you love.",
  },
];

type Props = {};

function Movies({}: Props) {
  return (
    <section className="movies">
      <div className="container">
        <Slider {...settings}>
          {movies.map((movie) => (
            <MovieCard
              image={movie.image}
              genre={movie.genre}
              description={movie.description}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Movies;
