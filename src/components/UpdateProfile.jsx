import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCloudUploadAlt } from "react-icons/fa"
import { auth, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import handleError from "../helpers/handleError";
import { addUser } from "../redux/userSlice";
import { PiSpinnerGapBold } from "react-icons/pi";

export default function UpdateProfile() {
    const user = useSelector(store => store.user);
    const [values, setValues] = useState(null);
    const [file, setFile] = useState("")
    const [error, setError] = useState(null);
    const [runing, setRuning] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            setRuning(true);
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    const err = handleError(error.code)
                    setError(err)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setRuning(false);
                        setValues(prev => ({ ...prev, photoURL: downloadURL }));
                    });
                }
            )
        };
        file && uploadFile();
    }, [file])

    const handleInputs = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();

        updateProfile(auth.currentUser, {
            user, ...values,


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

    };

    return (
        <div className="update">

            <h3 className="text-xl font-bold my-4">Update Your Account</h3>
            <div className="p-4">
                {error && <p>{error}</p>}
                <form>
                    <section className="flex gap-8 justify-center">
                        <article className="flex-1">
                            <div className="my-6">
                                <label>Username</label>
                                <input
                                    name="DisplayName"
                                    className="peer input-style my-2"
                                    type="text"
                                    placeholder={user?.displayName}

                                    onChange={(e) => handleInputs(e)}
                                />
                            </div>
                            <div className="formItem">
                                <label>Email</label>
                                <input
                                    name="email"
                                    className="peer input-style my-2"
                                    type="text"
                                    placeholder={user?.email}

                                    onChange={(e) => handleInputs(e)}
                                />
                            </div>
                        </article>
                        <article className="flex-1">
                            <label>Profile Picture</label>
                            <div className="p-3">
                                <img
                                    className="w-[90px] aspect-square rounded-full"
                                    src={user?.photoURL}
                                    alt="profile picture"
                                />
                                <div className="p-5 my-3">
                                    <label htmlFor="file" className="flex gap-3 items-center cursor-pointer text-xl">
                                        <span>Image:</span> <FaCloudUploadAlt className="" size={35} />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        style={{ display: "none" }}
                                    />
                                </div>

                            </div>
                        </article>
                    </section>
                    <button
                        className="h-10 px-6 
                         rounded-md text-black bg-white my-5
                          hover:text-blue-500 border border-none transition-colors 
                           hover:border-blue-500 hover:border-solid font-medium text-xl
                            flex gap-2 items-center"
                        onClick={handleClick}
                    >
                        {!!runing && <PiSpinnerGapBold className="animate-spin h-5 w-5 mr-3 " />}
                        <span>Update</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
