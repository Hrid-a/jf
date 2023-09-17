import { BiChevronRightCircle, BiSolidChevronDownCircle, BiSolidChevronUpCircle } from "react-icons/bi";
import UpdateProfile from "./UpdateProfile"
import { settingsOptions } from "../helpers/utils"
import { useState } from "react";

const Settings = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold">Settings</h1>
            <UpdateProfile />
            <button
                onClick={() => setShow(prev => !prev)}
                className="h-10 px-6 
                         rounded-md text-white  my-5
                          hover:text-blue-500 border border-none transition 
                           hover:border-blue-500 hover:border-solid font-medium text-xl flex gap-2 items-center">
                <span>{!show ? "More settings" : "Show Less"} </span>
                {!show ? <BiSolidChevronDownCircle size={25} /> : <BiSolidChevronUpCircle size={25} />}
            </button>
            {
                show && <div className="max-w-[800px]">
                    {settingsOptions.map(option => {
                        const { header, values } = option;
                        return <div className="p-4 my-3 border border-slate-400 rounded-lg" key={header.name}>
                            <h2 className="text-xl font-bold mb-3">{header.name}</h2>
                            <ul>
                                {values.map(value => (<li key={value.name} className="mb-4 cursor-pointer rounded-xl p-2 px-4 bg-slate-800 flex justify-between items-center">
                                    <p className="flex flex-col gap-3 text-xl">
                                        <span className="text-2xl font-semibold">{value.name}</span>
                                        <span>{value.discription}</span>
                                    </p>
                                    <BiChevronRightCircle size={25} />
                                </li>))}

                            </ul>
                        </div>
                    })}
                </div>
            }
        </div>
    )
}

export default Settings
