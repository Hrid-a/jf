import { useState } from "react";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import useMoviesNames from "../hooks/useMoviesNames";

export const SearchBox = () => {
    const [movieName, setMovieName] = useState("");
  const [search, setSearch] = useState(false);
  const suggestionValues = useMoviesNames(movieName);

  const handleChange = (e)=> {
    setMovieName(e.target.value)
  }
  return (
    <div >
            <input className="mt-1 block w-[180px] px-3 py-2 bg-white border text-black border-slate-300 rounded-md text-xl shadow-sm 
          placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1
            focus:ring-sky-50 sm:[300px] lg:w-[400px]" 
            type="text"
            placeholder="Search"
            value={movieName} onChange={(e) => handleChange(e)}
            onFocus={()=>setSearch(true)}
          />

          {search && <ul role="list" className="absolute right-0 z-50 w-[100%] h-90vh overflow-y-auto
           bg-white p-6 text-black sm:[300px] md:w-[460px]">
              {suggestionValues && suggestionValues.map(item => <li className="group/item hover:bg-slate-100 flex justify-between items-center p-3 rounded-md cursor-pointer text-xl capitalize" key={item.id}>
                <p>{item.name}</p> 
                <p className="px-4 rounded-full py-0 group/edit invisible
                 hover:bg-slate-200 group-hover/item:visible ">
                    <Link to={"/movie?id=" + item.id} 
                    className="rounded-full px-2 py-1 group-hover/edit:translate-x-0.5
                     group-hover/edit:text-slate-500 ">
                      <FaSearch size={20} onClick={()=> setSearch(false)}/>
                    </Link>
                
                </p>
                </li>)}
              </ul>}
          </div>
  )
}
