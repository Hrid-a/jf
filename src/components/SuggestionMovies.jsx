import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SuggestionMovies = () => {
    const { movieNames, gptMovies } = useSelector(store => store.gptMovies);

    if (!movieNames) return null;

    return (
        <div>
            {movieNames?.map((movie, index) => {

                return (<div key={movie}>
                    <MoviesList title={movie} data={gptMovies[index]} />
                </div>)
            })}
        </div>
    )
}

export default SuggestionMovies