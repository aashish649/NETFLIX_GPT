import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PopularMovies from "../pages/popularMovies";
import { useSelector } from "react-redux";
import WatchPage from "./WatchPage";
import MovieWatchPage from "../pages/MovieWatchPage";
import MainContainer from "./MainContainer";
import TrendingMovies from "../pages/TrendingMovies";
import TopRatedMovies from "../pages/TopRatedMovies";
import UpComingMovies from "../pages/UpComingMovies";
import NowPlayingMovies from "../pages/NowPlayingMovies";

const Body = () => {
  const movies = useSelector((store) => store?.movies);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [{ path: "/browse", element: <MainContainer /> }],
    },
    { path: "/watch", element: <MovieWatchPage /> },
    {
      path: "/nowplayingmovies",
      element: (
        <NowPlayingMovies
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />
      ),
    },
    {
      path: "/popularmovies",
      element: (
        <PopularMovies title={"Popular Movies"} movies={movies.PopularMovies} />
      ),
    },
    {
      path: "/trendingmovies",
      element: (
        <TrendingMovies title={"Trending"} movies={movies.trendingMovies} />
      ),
    },
    {
      path: "/topratedmovies",
      element: (
        <TopRatedMovies title={"Top Rated"} movies={movies.topRatedMovies} />
      ),
    },
    {
      path: "/upcomingmovies",
      element: (
        <UpComingMovies
          title={"Upcoming Movies"}
          movies={movies.upComingMovies}
        />
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
