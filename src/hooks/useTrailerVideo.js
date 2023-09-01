import { useEffect } from "react";
import { request } from "../helpers/axios";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/VideosSlice";

export default function (_id){
    
    const dispatch = useDispatch();

    useEffect(()=> {
        fetchTrailer()
      }, [])
    
      const fetchTrailer = async()=> {
        const {data:{results}} = await request.get(`/movie/${_id}/videos?language=en-US`);
        const filteredData = results.filter(item => item.type === "Trailer");
        const video = filteredData.length ? filteredData[0]: results[0];
        dispatch(addTrailerVideo(video))
      }
}