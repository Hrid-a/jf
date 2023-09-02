import axios from "axios";

export const request = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
            
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        }
    
})
