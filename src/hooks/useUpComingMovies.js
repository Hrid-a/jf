import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../helpers/axios";
import { addUpComingMovies } from "../redux/VideosSlice";
import handleError from "../helpers/handleError";

export default function useUpComingMovies(pageNumber){
    const {upComingMovies} = useSelector(store => store.movies);
    const dispatch = useDispatch();

    const getData = async()=> {
        try {
            const {data: {results}} = await request.get("/movie/upcoming?page=" + pageNumber)
            dispatch(addUpComingMovies(results));    
        }catch(err){
            handleError(err);
        }
    }
    useEffect(()=> {
        !upComingMovies && getData();
    }, [])
}