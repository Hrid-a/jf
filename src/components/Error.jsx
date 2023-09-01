import { Link } from "react-router-dom";
import Imgbg from "./Imgbg";

const Error = () => {
  return (
    <div>
      <Imgbg />
      <section>
        <h2> Lost your way? </h2>
        <p>Sorry, we can not find that page. You will ll find lots to explore on the home page. </p>
        <Link to={"/signup"} className="block w-fit mt-20 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" >
              Go Home
        </Link>
      </section>
    </div>
  )
}

export default Error