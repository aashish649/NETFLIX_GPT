import React from "react";
import MoviesList from "../components/MoviesList";
import { useSelector } from "react-redux";
import WatchPage from "../components/WatchPage";
import { Link } from "react-router-dom";
import Logo from "../assets/Netflix_Logo_PMS.png";

const MovieWatchPage = () => {
  const movies = useSelector((store) => store.movies);

  console.log("mmoie watch page", movies);

  return (
    <div>
      <div className="flex justify-between  px-6 py-2  items-center">
        <Link to="/browse">
          <div className="cursor-pointer">
            <img src={Logo} alt="netflixlogo" className="w-36 md:w-48" />
          </div>
        </Link>

        <div className="">
          <Link to="/browse">
            <button
              className="bg-red-600 text-white px-4 py-2 text-lg rounded-md"
              type="button"
            >
              Home
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="-mt-20 md:-mt-24">
          <WatchPage />
        </div>
      </div>
    </div>
  );
};

export default MovieWatchPage;
