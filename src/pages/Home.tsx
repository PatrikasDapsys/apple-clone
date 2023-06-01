import Landing from "../components/landing/Landing";
import Movies from "../components/movies/Movies";
import Promos from "../components/promos/Promos";


type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Landing />
      <Promos />
      <Movies />
    </>
  );
};

export default Home;