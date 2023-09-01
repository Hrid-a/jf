
const VideoTitle = ({title, desc}) => {
  return (
    
    <div className="hidden justify-start items-start flex-col px-5 w-[85%] max-w-[600px] mb-10 text-center relative z-10 pt-50 md:flex  pt-36">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="mt-4 text-lg font-medium my-3 text-start">{desc}</p>
    </div>
    
  )
}

export default VideoTitle