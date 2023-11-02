import { useRef, useState } from "react";
import Shimmerui from "../shimmerUi/Shimmerui";
import MovieCard from "./MovieCard";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const MoviesList = ({ title, data }) => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };




  return !data ? <Shimmerui /> : (


    <div className="relative">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mb-6 px-2">{title}</h3>
      </div>

      <BsFillArrowLeftCircleFill
        className="carouselLeftNav arrow"
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
        className="carouselRighttNav arrow"
        onClick={() => navigation("right")}
      />
      <div className="flex items-center gap-3 overflow-x-auto custom  mb-14" ref={carouselContainer}>
        {
          data.map(movie => (movie.poster_path && <MovieCard key={movie.id} movie={movie} />))
        }

      </div>
    </div>
  )
}

export default MoviesList;