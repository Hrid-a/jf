import { TbWorld, TbCaretDown } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLayout } from "../redux/layoutSlice";
import UserHeader from "./UserHeader";
import { LANGUAGES } from "../helpers/constant";
import { changeLang } from "../redux/langSlice";
import {SignUp_LANG_ARRAY} from "../helpers/constant";

const Header = () => {
  
  const dispatch = useDispatch()
  const clicked = useSelector(store => store.layout);
  const user = useSelector(store => store.user);
  const {lang} = useSelector(store => store.lang);

  const handleChange = (e)=> {
    const lang = e.target.value;
    console.log(lang);
    dispatch(changeLang(lang))
  }

  return (

    <div className="bg-gradient-to-bl from-black relative z-10">
      <header className="flex justify-between items-center gap-2 p-6 bg-gradient-to-br from-black">
        <div className="font-mono text-red-600">
          <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight">Netflix</h1>
        </div>
        {!clicked && <div className="flex gap-1 items-center ">
          <span className="flex items-center gap-1 border border-slate-400 rounded-lg px-4 py-2 cursor-pointer">
            <span><TbWorld /></span>
            <select className="bg-transparent hidden cursor-pointer capitalize md:block" onChange={(e) => handleChange(e)}>
              {LANGUAGES.map(lang => <option key={lang.code} value={lang.code}>{lang.name}</option>)}
            </select>
            <span className="md:hidden"><TbCaretDown /></span>
          </span>
          <Link to={"/login"} onClick={() => dispatch(handleLayout())} className="rounded-lg px-4 py-1 bg-red-600 text-[16px] font-normal md:py-2">
            {SignUp_LANG_ARRAY[lang]?.["hButton"]}
          </Link>
        </div>}
        {user &&  <UserHeader data = {{name:user.displayName, img: user.photoURL }} />}
      </header>
    </div>
  )
}

export default Header