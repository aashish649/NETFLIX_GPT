import { createSlice } from "@reduxjs/toolkit";


const langSlice = createSlice({
    name:"langconfig",
    initialState:{
        lang : "en",
    },
    reducers:{
        changeLanguage : (state,action) => {
            state.lang = action.payload;
        },
    }
});

export const {changeLanguage} = langSlice.actions;
export default langSlice.reducer;