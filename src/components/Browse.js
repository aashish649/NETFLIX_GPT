import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpComingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <>
          <GptSearchPage />
        </>
      ) : (
        <>
          <Outlet />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
