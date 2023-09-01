
const MovieShimmer = () => {
    return (

        <div>
          <section className="w-[90%] rounded-lg max-w-[1100px] mx-auto grid grid-cols-[minmax(300px,_1fr)] gap-8 bg-gray-400 lg:grid-cols-[400px_minmax(400px,_1fr)] pt-14 ">
              <article className="rounded-lg overflow-hidden">
                <div className="rounded-lg mx-auto w-[400px] h-[600px] bg-tray-500"></div>
              </article>
              <article className="mt-4 rounded-lg">
                <h2 className="w-36 h-16 bg-tray-500 rounded-lg"></h2>
                <p className="p-2 rounded-lg w-28 h-16 bg-tray-500"></p>
                <div className="flex gap-3 flex-wrap rounded-lg text-2xl mb-8 items-center">
                  <p className="p-2 rounded-lg  w-36 h-16 bg-tray-500"></p>
                  {[...Array(3)].map((_, index) => <p className="p-2 rounded-lg w-36 h-16 bg-tray-500" key={index}></p>)}
                </div>
                <div className=" lg:flex  gap-3 rounded-lg">
                <p className="text-[1.2rem] w-[85%] rounded-lg h-[250px]"></p>
                <div className="flex flex-col gap-4  bg-tray-500">
                  <span>
                    <p className="w-36 h-16 bg-tray-500 rounded-lg" ></p>
                    </span>
                  <span>
                    <p className="w-36 h-16 bg-tray-500 rounded-lg" > </p>
                   
                    </span>
                  <span>
                    <p className="w-36 h-16 bg-tray-500 rounded-lg" ></p>
                   
                    </span>
                </div>
                </div>
    
                <p   
                className="block w-[180px] h-[100px]t mt-20 py-2 px-4 bg-gray-300 rounded-lg shadow-md ">
                </p>
              </article>
          </section>
        </div>
        
      )
}

export default MovieShimmer