import { MAIN_IMG } from "../helpers/constant"
const Imgbg = () => {
  return (
      
    <img src={MAIN_IMG} alt="Main img" className="hidden md:block absolute inset-0 min-h-[100%]  W-[100%]  object-cover -z-10 bg-gradient-to-t from-black" />
      
  )
}

export default Imgbg