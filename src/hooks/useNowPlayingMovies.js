import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../helpers/axios";
import { addNowPlayingMovies } from "../redux/VideosSlice";
import handleError from "../helpers/handleError";

export default function useNowPlayingMovies(pageNumber) {
    const {nowPlayingMovies} = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const getVideos = async()=> {
        try{
            const {data: {results}} = await request.get("/movie/now_playing?page=" + pageNumber);
            dispatch(addNowPlayingMovies(results));

        }catch(err) {
            handleError(err);
        }
    }

    useEffect(()=> {
        !nowPlayingMovies && getVideos();
    }, [])

}