import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggesstions from "./GptMovieSuggesstions";
import Background from "../assets/background.jpg";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img
          src={Background}
          alt="background"
          className="h-screen md:h-full object-cover"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggesstions />
      </div>
    </div>
  );
};

export default GptSearchPage;
