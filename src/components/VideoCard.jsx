import { useSelector } from "react-redux";
import { POSTER_PATH } from "../helpers/constant";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const VideoCard = ({movie}) => {
  const [liked, setLiked] = useState(false)
  const genresMovies = useSelector(store => store.movies.genreMovies);
  const {poster_path, original_title, genre_ids, id} = movie;
  const user = useSelector(store => store.user)
  const genres = genresMovies?.map(genre => {
    if(genre_ids.includes(genre.id)){return genre.name}
  }).filter(data => data !== undefined)

  const handleClick = async( )=> {
    if(user){
      const movieId = doc(db, "users", user?.email);
      setLiked(prevState => !prevState);
      updateDoc(movieId, {
        savedMovies: arrayUnion({
          poster_path,
          original_title,
          genre_ids,
          id
        })
      })
    }
  }

  return (
    <div className="group min-w-[250px] rounded-lg relative 
    overflow-hidden cursor-pointer before:absolute bg-black/20 inset-0 z-0">
      <span className="absolute top-11  p-1 right-1 text-2xl z-10" onClick={handleClick}>{liked ? <AiFillHeart size={40} style={{color:"red"}} />
        : <AiOutlineHeart size={40} />}</span>
    <Link to={"/movie?id=" + id}>
        <img className="brightness-75 group-hover:scale-[1.2] " src={POSTER_PATH +"w400/" + poster_path} alt="main image" />
        <h4 className="absolute left-2 bottom-1 w-[100%] text-xl  font-semibold">{original_title}</h4>
        <div className="hidden absolute top-1 left-1 w-[100%] text-xl font-medium gap-2 flex-wrap group-hover:flex  ">
          {genres && genres.map(genre => <p className="border border-slate-300 bg-gradient-to-tr from-black/10 p-2 rounded-lg " key={genre}>{genre}</p>)}
        </div>
    </Link>
    </div>
  )
}

export default VideoCard
