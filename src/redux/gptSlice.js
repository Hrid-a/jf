import { createSlice } from "@reduxjs/toolkit";

const gptMovies = createSlice(
    {
        name: 'gptMovies',
        initialState: {
            gptMovies: null,
            movieNames: null,
        },
        reducers: {
            addGptMovies: (state, action) => {
                const { movieNames, movieResults } = action.payload;
                state.gptMovies = movieResults;
                state.movieNames = movieNames;
            }
        }
    }
)

export const { addGptMovies } = gptMovies.actions;
export default gptMovies.reducer;