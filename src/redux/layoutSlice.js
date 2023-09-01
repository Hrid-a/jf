import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
    name: "layout",
    initialState: false,
    reducers: {
        handleLayout: () => {
            return true;
        },
        showLayout: ()=> {
            return false;
        }
    }
})

export const {handleLayout, showLayout} = layoutSlice.actions;
export default layoutSlice.reducer;