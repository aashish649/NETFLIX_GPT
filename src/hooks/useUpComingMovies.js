import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addUpComingMovies } from "../redux/slices/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
    const dispatch = useDispatch();

    const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  
    const getUpComingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
      } catch (error) {
        console.log("There is something error,Try again");
      }
    };
  
    useEffect(() => {
      if(!upComingMovies){
        getUpComingMovies();
      }
    }, []);
  
  };
  
  export default useUpComingMovies;