import { useSearchParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import { POSTER_PATH } from "../helpers/constant";
import numeral from "numeral";
import MovieShimmer from "../shimmerUi/MovieShimmer";

const MoviePage = () => {
  const [searchParam] = useSearchParams();
  const param = searchParam.get("id");
  const movie = useMovie(param);
  if (!movie) return <MovieShimmer />;
  const { genres, homepage, budget, original_title, overview, poster_path, release_date, revenue, runtime, status } = movie;
  const date = new Date(release_date).getFullYear()

  return (

    <div>
      <section className="w-[90%] max-w-[1100px] mx-auto grid grid-cols-[minmax(300px,_1fr)] gap-8  lg:grid-cols-[400px_minmax(400px,_1fr)] pt-14 ">
        <article className="rounded-lg overflow-hidden">
          <img src={POSTER_PATH + "w500/" + poster_path} alt="Main img" className="rounded-lg mx-auto" />
        </article>
        <article className="mt-4">
          <h2 className="text-2xl font-semibold md:text-4xl">{original_title} <span className="text-2xl">{date}</span></h2>
          <p className="p-2 rounded-lg text-2xl">0{Math.floor(runtime / 60)}h:{Math.floor(runtime % 60)}min</p>
          <div className="flex gap-3 flex-wrap text-2xl mb-8 items-center">
            <p className="p-2 rounded-lg border border-slate-500">{release_date}</p>
            {genres.map(genre => <p className="p-2 rounded-lg border border-slate-500" key={genre.id}>{genre.name}</p>)}
          </div>
          <div className=" lg:flex  gap-3">
            <p className="text-[1.2rem] leading-8 font-medium">{overview}</p>
            <div className="flex flex-col gap-4 font-medium text-xl text-gray-200">
              <span>
                <p className="font-semibode uppercase text-red-700" >status</p>
                {status}
              </span>
              <span>
                <p className="font-semibode uppercase text-red-700" >budget </p>
                {numeral(budget).format("0.0a")}
              </span>
              <span>
                <p className="font-semibode uppercase text-red-700" >revenue</p>
                {numeral(revenue).format("0.0a")}
              </span>
            </div>
          </div>

          <a target="blank" href={homepage}
            className="block w-fit mt-20 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Watch Trailer</a>
        </article>
      </section>
    </div>

  )
}

export default MoviePage