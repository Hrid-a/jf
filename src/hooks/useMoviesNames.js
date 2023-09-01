import { useEffect, useState } from "react";
import {request} from "../helpers/axios";
import { useDispatch, useSelector } from "react-redux";
import { addCashe } from "../redux/VideosSlice";

const useMoviesNames = (q) => {
    const [movies, setmovies] = useState(null)
    const dispatch = useDispatch();
    const suggestions = useSelector(store => store.movies?.items);

    useEffect(()=> {
        
        const timer = setTimeout(()=> {

            if(!suggestions[q]){
                fetchMoviesNames()
            }else {
                setmovies(suggestions[q]);
            }
            }, 200)
        

        return ()=> {
            clearTimeout(timer);
        }
    }, [q])

    const fetchMoviesNames = async()=> {
        const {data: {results}} = await request.get(`/search/keyword?query=${q}&page=1`);
        dispatch(addCashe({[q]: results}));
    }   
    return movies;
}

export default useMoviesNames