import { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import openai from "../helpers/openai";
import { request } from "../helpers/axios";
import { addGptMovies } from "../redux/gptSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
    const [error, setError] = useState(null);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const { data: { results } } = await request("search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",);
        return results;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const query = "Act as a Movie Recommendation system and suggest some movies for the query : " +
            inputRef.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });

        if (!completion.choices.length) {
            setError("something went wrong !")
        }

        const gptMovies = completion.choices?.[0]?.message?.content.split(",");

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // [Promise, Promise, Promise, Promise, Promise]

        const tmdbResults = await Promise.all(promiseArray);
        dispatch(
            addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
        );


    }

    return (
        <div className="max-w-[500px] mx-auto">
            <h1 className="text-gray-100 text-2xl font-semibold mb-4">Search with Chat-Gpt</h1>
            <form onSubmit={() => handleSubmit(event)} className="flex gap-4 items-center">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="search using chat Gpt"
                    className="peer input-style text-2xl" />
                <button type="submit" className="bg-transparent border-none"><IoSend size={25} className="text-red-800 cursor-pointer" /></button>
            </form>
            {error && <p className="p-4 text-xl textt-red-500 font-semibold">{error}</p>}
        </div>
    )
}

export default SearchBox