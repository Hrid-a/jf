import { useEffect, useState } from "react";
import { request } from "../helpers/axios";

export default function useMovie(id) {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovie()
    }, [])

    const getMovie = async () => {
        const { data } = await request.get(`/movie/${id}?language=en-US`)
        setMovie(data)
    }

    return movie;
}