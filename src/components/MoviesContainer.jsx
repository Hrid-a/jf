import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const MoviesContainer = () => {
    const movies = useSelector(store => store.movies);


    return (
        <section className="mt-16">
            <article className="px-4 mb-5 mt-28">
                <MoviesList title={"Now Playing movies"} data={movies.nowPlayingMovies} />
            </article>
            <article className="px-4 my-5">
                <MoviesList title={"Popular Movies"} data={movies.popularVideos} />
            </article>
            <article className="px-4 my-5">
                <MoviesList title={"Trending Movies"} data={movies.trendingMovies} />
            </article>
            <article className="px-4 my-5">
                <MoviesList title={"Up coming movies"} data={movies.upComingMovies} />
            </article>
            <article className="px-4 my-5">
                <MoviesList title={"top rated movies"} data={movies.topRatedMovies} />
            </article>
        </section>
    )
}

export default MoviesContainer