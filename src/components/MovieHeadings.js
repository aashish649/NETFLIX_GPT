import React from "react";
import { Link } from "react-router-dom";

const MovieHeadings = () => {
  return (
    <div>
      <ul className="flex items-center gap-4 text-white">
        <Link to="/browse">
          <li className="hover:text-white text-base hover:border-b-2 hover:border-red-500 transition duration-300">
            Home
          </li>
        </Link>
        <Link  to="/popularmovies" >
          <li className="hover:text-white text-base hover:border-b-2 hover:border-red-500 transition duration-300">
            Popular
          </li>
        </Link>
        <Link to="/topratedmovies">
          <li className="hover:text-white text-base hover:border-b-2 hover:border-red-500 transition duration-300">
            Top Rated
          </li>
        </Link>
        <Link to= "/upcomingmovies">
          <li className="hover:text-white text-base hover:border-b-2 hover:border-red-500 transition duration-300">
            Upcoming
          </li>
        </Link>
        <Link to="/trendingmovies">
          <li className="hover:text-white text-base hover:border-b-2 hover:border-red-500 transition duration-300">
            Trending
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MovieHeadings;
