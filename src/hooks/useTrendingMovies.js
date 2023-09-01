import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../helpers/axios";
import { addTrendingMovies } from "../redux/VideosSlice";
import handleError from "../helpers/handleError";

export default function useTrendingMovies(){
    const {trendingMovies} = useSelector(store => store.movies);
    const dispatch = useDispatch();

    const getData = async()=> {
        try {
            const {data: {results}} = await request.get("/trending/movie/day?")
            dispatch(addTrendingMovies(results));    
        }catch(err){
            handleError(err);
        }
    }
    useEffect(()=> {
        !trendingMovies && getData();
    }, [])
}