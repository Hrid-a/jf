import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import handleReducer from "./layoutSlice";
import videosReducer from "./VideosSlice";
import langReducer from "./langSlice";
import gptReducer from "./gptSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        layout: handleReducer,
        movies: videosReducer,
        lang: langReducer,
        gptMovies: gptReducer,
    }
});

export default store;