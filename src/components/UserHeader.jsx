import { useState } from "react"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import {AiOutlineUser} from "react-icons/ai";
import {MdFavorite, MdSettings, MdHomeFilled} from "react-icons/md";
import {FaTimes, FaSearch} from "react-icons/fa";
import useMoviesNames from "../hooks/useMoviesNames";
import { SearchBox } from "./SearchBox";

const UserHeader = ({data}) => {
  const [navItem, setNavItem] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
  }

  const handleNav = ()=> {
    setNavItem(prev => !prev);
  }
  return (
    <div className="flex gap-4 items-center relative">
          <SearchBox />
          <img src={data?.img} onClick={handleNav} alt="personal img"  className="cursor-pointer w-12 aspect-square rounded-full" />

          {navItem && <ul className="absolute top-0 -right-6 h-[100svh] px-4 z-30 bg-black w-[300px] flex flex-col gap-4">
            <span onClick={handleNav} className="absolute z-30 cursor-pointer top-2 right-3 text-2xl text-slate-200"><FaTimes/></span>
            <div className="flex gap-2 my-8 items-center">
              <img src={data?.img} alt="personal img"  className="w-10 aspect-square rounded-full" />
              <h3 className="text-xl">{data?.name}</h3>
            </div>
           
            <li>
              <Link to={"/browse"} className="flex gap-3 mb-7 items-center text-xl text-white border-b border-slate-400">
                <span className="text-2xl "><MdHomeFilled/></span>
                <span>Home</span>
              </Link>
            </li>

            <li className="flex gap-3 mb-5 items-center text-xl text-white">
              <span className="text-2xl "><AiOutlineUser/></span>
              <span>Profile</span>
            </li>
            <li>
                <Link to={"/favourite"} className="flex gap-3 mb-5 items-center">
                  <span className="text-2xl text-red-600"><MdFavorite/></span>
                  <span>Your Favourite</span>
                </Link>
            </li>
            <li>
                <Link to={"/settings"} className="flex gap-3 mb-5 items-center">
                  <span className="text-2xl"><MdSettings/></span>
                  <span>Settings</span>
                </Link>
            </li>
            <li>
              <Link to={"/login"} onClick={handleSignOut} className="mx-4 rounded-lg py-1  text-[16px] font-normal md:py-2">
                Log out
              </Link>
            </li>
            
          </ul>}
        </div>
  )
}

export default UserHeader

