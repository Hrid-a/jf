import {  useRef, useState } from "react"
import { AVATAR_URL } from "../helpers/constant"
import { validate } from "../helpers/validate"
import Imgbg from "./Imgbg";
import handleError from "../helpers/handleError";
import { SignUp_LANG_ARRAY } from "../helpers/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import {auth, db} from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 



const SignUp = () => {
  const [error, setError] = useState(null)
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const {lang} = useSelector(store => store.lang)
  const dispatch = useDispatch();


  const handleData = ()=> {
    const valide = validate(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
    setError(valide);
    if(valide) return;
      

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        
        const user = userCredential.user;
        setdbData(user);
        

        updateProfile(user, {
          displayName: nameRef.current.value
          , photoURL: AVATAR_URL

        }).then(() => {
          
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
  
        }).catch((error) => {
          const err = handleError(error.code)
          setError(err)
        
        });
        
    })
    .catch((error) => {
      const errorMessage = handleError(error.code);
      setError(errorMessage);
    });

  }

  async function setdbData (user) {
    await setDoc(doc(db, "users", user.email), {
      savedMovies: []
    });
  }

  return (
    <div className="flex justify-center items-center pt-6 lg:pt-32 ">
      <Imgbg />
      <div className="flex justify-center items-center flex-col mx-auto w-[85%] text-center relative z-10">
        <div className="hidden sm:block">
          <h2 className="font-bold md:text-3xl">{SignUp_LANG_ARRAY[lang]?.["title"]}</h2>
          <p className="mt-4 text-lg">{SignUp_LANG_ARRAY[lang]?.["subTitle"]}</p>
          <h3 className="text-lg font-medium leading-6 my-3">
          {SignUp_LANG_ARRAY[lang]?.["desc"]}</h3>
        
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="flex flex-col justify-center rounded-lg w-[100%] max-w-[500px] p-8  bg-black/50">
      
          {error && <p className="p-1 pt-2 bg-gradient-to-r from-black my-2 text-l text-red-600 font-bold text-start">{error}</p>}
          <input 
          required
          type="text" 
          name="name" 
          ref= {nameRef} 
          placeholder={SignUp_LANG_ARRAY[lang]?.["name"]}
          className="pt-4 px-3 pb-2 rounded-lg border border-slate-400 bg-gray-500 font-medium focus:outline-none mb-3" />
          <input 
          required
          type="email" 
          name="email" 
          ref={emailRef}
          placeholder={SignUp_LANG_ARRAY[lang]?.["email"]}
          className="pt-4 px-3 pb-2 rounded-lg border border-slate-400 bg-gray-500 font-medium focus:outline-none" />
          <input 
          autoComplete=""
          required
          type="password" 
          name="password" 
          ref={passwordRef} 
          placeholder={SignUp_LANG_ARRAY[lang]?.["password"]}
          className="pt-4 px-3 pb-2 rounded-lg my-4 bg-gray-500 font-medium border border-slate-400 focus:outline-none" />
          <button onClick={handleData} className="bg-red-600 rounded-lg py-3 px-3 text-lg font-bold">
          {SignUp_LANG_ARRAY[lang]?.["button"]}
          </button>
        </form>

      </div>
    </div>
  )
}

export default SignUp