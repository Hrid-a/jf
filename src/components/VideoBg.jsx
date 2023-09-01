import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBg = ({id}) => {
    useTrailerVideo(id);

    const trailerVideo = useSelector(store => store.movies.trailerVideo);
  return (
  <>

    <iframe 
    className="absolute top-0 w-[100%] aspect-video -z-10 " 
    src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&si=IEsvNKbzUuZBtrx2"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
    
    </iframe>
    <div className="absolute top-0 w-[100%] h-[100%] bg-black/5"></div>
  </>

    )
}

export default VideoBg;