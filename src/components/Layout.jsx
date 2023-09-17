import Header from './Header';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../redux/userSlice";
import { showLayout } from '../redux/layoutSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

const Layout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                dispatch(showLayout());
                navigate("/");
            }
        });

        return () => { unsubscribe() };

    }, [])

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout