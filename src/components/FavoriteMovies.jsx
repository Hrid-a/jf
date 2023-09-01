import { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { POSTER_PATH } from "../helpers/constant";
import {AiFillHeart} from "react-icons/ai";
import FavouriteShimmer from "../shimmerUi/FavouriteShimmer";

const FavoriteMovies = () => {
    const [movies, setMovies] = useState(null)
    const user = useSelector(store => store.user);
    const genresMovies = useSelector(store => store.movies.genreMovies);
    const userRef = doc(db, 'users', user?.email);
    useEffect(()=> {

        const unsub = onSnapshot(userRef, (doc) => {
            setMovies(doc.data().savedMovies);
        });

        return ()=> {unsub()};
    }, [user?.email])
    

    const handleClick = async(videoId)=> {
        const items = movies.filter(movie => movie.id !== videoId)
        if(user){
            // Remove the 'capital' field from the document
            await updateDoc(userRef, {
                savedMovies: items
            });

        }
    }

    return !movies ? <FavouriteShimmer /> : (
        <section>
        <article className="px-4 my-5">
            <h3 className="text-xl font-semibold my-6 px-2">Your Favourite Movies</h3>
            <section className="flex items-center gap-3 overflow-x-auto scrollbar-none  mb-14">
            {
                movies?.map(movie => {
                    const {poster_path, original_title, genre_ids, id} = movie;
                    const genres = genresMovies?.map(genre => {
                        if(genre_ids.includes(genre.id)){return genre.name}
                    }).filter(data => data !== undefined)
                    return(
                        <div key={id} className="group min-w-[250px] rounded-lg relative overflow-hidden cursor-pointer before:absolute bg-black/20 inset-0 z-10">
                        <span className="absolute top-11  p-1 right-1 text-red-600 text-2xl z-40" onClick={()=>handleClick(id)}><AiFillHeart size={40} /></span>
                            <Link to={"/movie?id=" + id}>
                                <img className="brightness-75 group-hover:scale-[1.2] " src={POSTER_PATH +"w400/" + poster_path} alt="main image" />
                                <h4 className="absolute left-2 bottom-1 w-[100%] text-xl  font-semibold">{original_title}</h4>
                                <div className="hidden absolute top-1 left-1 w-[100%] text-xl font-medium gap-2 flex-wrap group-hover:flex  ">
                                    {genres && genres.map(genre => <p className="border border-slate-300 bg-gradient-to-tr from-black/10 p-2 rounded-lg " key={genre}>{genre}</p>)}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            </section>
        </article>
    </section>
  )
}

export default FavoriteMovies