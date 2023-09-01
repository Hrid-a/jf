import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../helpers/axios";
import { addGenreMovies } from "../redux/VideosSlice";
import handleError from "../helpers/handleError";

export default function useNowPlayingMovies() {
    const {genreMovies} = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const getVideos = async()=> {
        try{
            const {data: {genres}} = await request.get("/genre/movie/list?language=en");
            dispatch(addGenreMovies(genres));

        }catch(err) {
            handleError(err);
        }
    }

    useEffect(()=> {
        !genreMovies && getVideos();
    }, [])

}