import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../helpers/axios";
import { addPopularVideos } from "../redux/VideosSlice";
import handleError from "../helpers/handleError";

const usePopularVideos = (pageNumber)=> {
    const {popularVideos} = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const getVideos = async()=> {
        try{
            const {data: {results}} = await request.get("/movie/popular?language=en-US&page=" + pageNumber);
            dispatch(addPopularVideos(results));

        }catch(err) {
            handleError(err);
        }
    }

    useEffect(()=> {
        
        !popularVideos && getVideos();
    }, [])

}

export default  usePopularVideos;