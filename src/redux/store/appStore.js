import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import moviesSlice from "../slices/moviesSlice";
import gptSlice  from "../slices/gptSlice";
import languageSlice from "../slices/languageSlice";

export const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        gpt:gptSlice,
        langconfig:languageSlice,
    }
});
