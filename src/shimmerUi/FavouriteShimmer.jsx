
const FavouriteShimmer = () => {

    return (
        <div className="mt-20">
            <section className="">
                <div className="skeleton h-7  rounded-lg w-36  mb-10 mt-20"></div>
                <article className="flex items-center  rounded-lg gap-3 overflow-x-auto  scrollbar-none  mb-14">
                    {[...Array(3)].map((item, index) => <div key={index} className="group min-w-[250px] h-[300px] rounded-lg relative overflow-hidden cursor-pointer   before:absolute skeleton inset-0 z-10">
                        <div className="h-full w-full skeleton rounded-lg " ></div>
                        <h4 className="absolute left-2 bottom-1  h-7 rounded-lg  w-36 skeleton"></h4>
                        <div className="absolute top-1 left-1 w-[100%] rounded-lg  h-20 gap-2 flex flex-wrap ">
                            {[...Array(3)].map((genre, index) => <p className=" bg-black/5 w-8 p-2 rounded-lg " key={index}></p>)}
                        </div>
                    </div>)}

                </article>
            </section>

        </div>
    )

}

export default FavouriteShimmer