import Shimmerui from "../shimmerUi/Shimmerui";
import MovieCard from "./MovieCard";
// In your CSS or JavaScript file

const MoviesList = ({ title, data }) => {

  return !data ? <Shimmerui /> : (

    <>
      <h3 className="text-xl font-semibold mb-6 px-2">{title}</h3>
      <div className="flex items-center gap-3 overflow-x-auto custom  mb-14">
        {
          data.map(movie => (movie.poster_path && <MovieCard key={movie.id} movie={movie} />))
        }

      </div>
    </>
  )
}

export default MoviesList;