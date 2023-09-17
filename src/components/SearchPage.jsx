import { useEffect } from "react";
import SearchBox from "./SearchBox";
import SuggestionMovies from "./SuggestionMovies";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../redux/gptSlice";
// import Imgbg from "./Imgbg";


const SearchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addGptMovies({ movieNames: null, movieResults: null })
    );
  }, [])
  return (
    <>
      <div className="pt-16 px-5">
        <SearchBox />
        <SuggestionMovies />
      </div>
    </>
  )
}

export default SearchPage;