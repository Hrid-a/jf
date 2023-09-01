import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";
import TrailerShimer from "../shimmerUi/TrailerShimer";

const HeroSection = () => {
    const movies = useSelector(store => store.movies.trendingMovies);

    if (!movies) return <TrailerShimer />;
    const mainMovie = movies[Math.floor(Math.random() * movies.length)];
    const { original_title, overview, id } = mainMovie;

  return (
    <>
        <VideoBg id= {id}/>
        <VideoTitle title = {original_title} desc = {overview}/>
    </>
  )
}

export default HeroSection