import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../helpers/axios";
import { addTopRatedMovies } from "../redux/VideosSlice";
import handleError from "../helpers/handleError";

export default function useTopRatedMovies(pageNumber) {
    const {topRatedMovies} = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const getVideos = async()=> {
        try{
            const {data: {results}} = await request.get("/movie/top_rated?language=en-US&page=" + pageNumber);
            dispatch(addTopRatedMovies(results));

        }catch(err) {
            handleError(err);
        }
    }

    useEffect(()=> {
        
        !topRatedMovies && getVideos();
    }, [])

}