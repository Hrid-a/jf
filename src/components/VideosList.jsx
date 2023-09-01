import Shimmerui from "../shimmerUi/Shimmerui";
import VideoCard from "./VideoCard";
const VideosList = ({ title, data }) => {

  return !data ? <Shimmerui /> : (

    <>
      <h3 className="text-xl font-semibold mb-6 px-2">{title}</h3>
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-none  mb-14">
        {
          data.map(movie => <VideoCard key={movie.id} movie={movie} />)
        }

      </div>
    </>
  )
}

export default VideosList