import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name: "movies",
    initialState: {
        popularVideos: null,
        nowPlayingMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trendingMovies: null,
        trailerVideo: null,
        genreMovies: null,
        items: {},
        endpoints: "day"
    },
    reducers: {
        addPopularVideos: (state, action) => {
            state.popularVideos = action.payload;
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addGenreMovies: (state, action) => {
            state.genreMovies = action.payload;
        },
        addCashe: (state, action) => {
            Object.assign(state.items, action.payload);
        },
        changeEndPoint: (state, action) => {
            state.endpoints = action.paylod;
        }
    }
});

export const { changeEndPoint, addCashe, addGenreMovies, addTrailerVideo, addPopularVideos, addNowPlayingMovies, addTopRatedMovies, addUpComingMovies, addTrendingMovies } = videosSlice.actions;
export default videosSlice.reducer;