import  { createSlice } from "@reduxjs/toolkit";

const LangSlice = createSlice({
    name : "lang",
    initialState: {
        lang: "en"
    },
    reducers: {
        changeLang: (state, action) => {
            state.lang = action.payload;
        }
    }
})

export const {changeLang} = LangSlice.actions;
export default LangSlice.reducer;