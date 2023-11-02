import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";
import TrailerShimer from "../shimmerUi/TrailerShimer";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const movies = useSelector(store => store.movies.trendingMovies);
  const [mainMovie, setMainMovie] = useState(null)

  useEffect(() => {
    getMainMovie(movies)
  }, [movies])

  const getMainMovie = () => {
    const movie = movies?.[0];
    setMainMovie(movie);
  }
  if (!movies) return <TrailerShimer />;

  if (!mainMovie) return;
  const { original_title, overview, id } = mainMovie;


  return (
    <>
      <VideoBg id={id} />
      <VideoTitle title={original_title} desc={overview} />
    </>
  )
}

export default HeroSection