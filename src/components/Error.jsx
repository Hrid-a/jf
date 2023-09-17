import { Link } from "react-router-dom";
import Imgbg from "./Imgbg";

const Error = () => {
  return (
    <div className="h-[100svh] w-full">
      <Imgbg />
      <section className="flex justify-center items-center text-xl h-full ">
        <article>
          <h2 className="text-6xl text-gray-200 font-bold text-center mb-5"> Lost your way? </h2>
          <p className="text-2xl font-semibold">Sorry, we can not find that page. You will ll find lots to explore on the home page. </p>
          <Link to={"/"} className="block w-fit mt-20 py-2 px-4 mx-auto bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" >
            Go Home
          </Link>
        </article>
      </section>
    </div>
  )
}

export default Error