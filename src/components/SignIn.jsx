import { useEffect, useRef, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {auth} from "../config/firebase";
import { loginValidate } from "../helpers/loginValidate";
import { SignIn_LANG_ARRAY } from "../helpers/constant";
import { handleLayout } from "../redux/layoutSlice";
import handleError from "../helpers/handleError";
import Imgbg from "./Imgbg";


const SignUp = () => {
  const [error, setError] = useState(null)
  const emailRef = useRef();
  const passwordRef = useRef();
  const {lang} = useSelector(store => store.lang)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(handleLayout())
  }, [])

  const handleData = ()=> {
    const valide = loginValidate(emailRef.current.value, passwordRef.current.value);
    setError(valide);
    if(valide) return;

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = handleError(error.code);
      setError(errorMessage);
    });

  }

  return (
    <div className="flex justify-center items-center pt-6 lg:pt-32 ">
      <Imgbg />
      <div className="flex justify-center items-center flex-col mx-auto w-[85%] text-center relative z-10">
        <form onSubmit={(e)=> e.preventDefault()} 
        className="flex flex-col justify-center w-[100%] max-w-[500px] p-6 sm:p-10 rounded-lg bg-black/50 lg:p-16">
          {error && <p className="p-1 pt-2 bg-gradient-to-r from-black my-2 text-l text-red-600 font-bold text-start">{error}</p>}
          <input 
          required
          type="email" 
          name="email" 
          ref={emailRef}
          placeholder={SignIn_LANG_ARRAY[lang]?.["email"]}
          className="pt-4 px-3 pb-2 rounded-lg border border-slate-400 bg-gray-800 focus:outline-none" 
          />
          <input 
          required
          autoComplete=""
          type="password" 
          name="password" 
          ref={passwordRef} 
          placeholder={SignIn_LANG_ARRAY[lang]?.["password"]}
          className="pt-4 px-3 pb-2 rounded-lg my-4 bg-gray-800 border border-slate-400 focus:outline-none" />
          <button onClick={handleData} className="bg-red-600 rounded-lg py-3 px-3 text-lg font-bold">Sign In</button>
          <div className="mt-12 mb-2  text-start text-gray-500 text-xl w-[100%] sm:mb-5 lg:mt-24">
            <p>
            {SignIn_LANG_ARRAY[lang]?.["text"]}
            <Link to={"/"} className="text-white cursor-pointer hover:underline decoration-1 px-3">
            {SignIn_LANG_ARRAY[lang]?.["link"]}
            </Link>
            </p>
              <p className="mt-4 lg:mt-10">
              {SignIn_LANG_ARRAY[lang]?.["email"]}{SignIn_LANG_ARRAY[lang]?.["desc"]}
                <Link className="text-blue-600">
                {SignIn_LANG_ARRAY[lang]?.["descLink"]}
                </Link>
              </p>
          </div>
        </form>

      </div>
    </div>
  )
}

export default SignUp