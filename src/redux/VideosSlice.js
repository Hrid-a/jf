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
        addTrendingMovies: (state, action)=> {
            state.trendingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addGenreMovies: (state, action) => {
            state.genreMovies = action.payload;
        },
        addCashe: (state, action)=>{
            Object.assign(state.items, action.payload);
        }
    }
});

export const {addCashe, addGenreMovies, addTrailerVideo, addPopularVideos, addNowPlayingMovies, addTopRatedMovies, addUpComingMovies, addTrendingMovies} = videosSlice.actions;
export default videosSlice.reducer;