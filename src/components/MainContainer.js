import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainContainer = () => {
  
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    
    if(!movies){
        return;
    }

    const mainMovie = movies[0];
    const {original_title,overview,id}  = mainMovie;
    
  return (
    <div className="pt-[12%] bg-black  md:pt-0">
        <VideoTitle overview = {overview} title = {original_title} movie_id = {id} />
        <VideoBackground movie_id = {id}  />
    </div>
  );
};

export default MainContainer;


