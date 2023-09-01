import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { handleLayout } from "../redux/layoutSlice"
import usePopularVideos from "../hooks/usePopularVideos"
import useNowPlayingMovies from "../hooks/useNowPlayingmovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import HeroSection from "./HeroSection"
import MoviesContainer from "./MoviesContainer"
import useGenres from "../hooks/useGenres";

const Browse = () => {
  usePopularVideos(1);
  useNowPlayingMovies(1);
  useTopRatedMovies(1);
  useUpComingMovies(1)
  useTrendingMovies();
  useGenres()
  
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(handleLayout())
  }, []);


  return (
    <>
      <HeroSection />
      <MoviesContainer />
    </>
  )
}

export default Browse