import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-[170px] md:w-42 pr-4 cursor-pointer">
      <img
        className="rounded-md transform transition-transform duration-300 ease-out hover:scale-110"
        src={IMG_CDN_URL + posterPath}
        alt="movie image"
      />
    </div> 
  );
};

export default MovieCard;
