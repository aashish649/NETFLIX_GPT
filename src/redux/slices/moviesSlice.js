import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  
  name: "movies",

  initialState: {
    nowPlayingMovies: null,
    addTrailerVideo: null,
    PopularMovies: null,
    trendingMovies: null,
    upComingMovies: null,
    topRatedMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addUpComingMovies,
  addTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
