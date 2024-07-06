import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrendingMovies } from "../redux/slices/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  
  const getTrendingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      dispatch(addTrendingMovies(json.results));
    } catch (error) {
      console.log("There is something error,Please try again");
    }
  };

  useEffect(() => {
  
      getTrendingMovies();
   
  }, []);
};

export default useTrendingMovies;
