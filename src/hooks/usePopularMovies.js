import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/slices/moviesSlice";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const PopularMovies = useSelector((store) => store.movies?.PopularMovies);

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log("There is something error,Try again");
    }
  };

  useEffect(() => {
    !PopularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
