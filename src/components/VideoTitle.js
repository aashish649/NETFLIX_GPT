import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const VideoTitle = ({ overview, title }) => {

  return (
    <div className="w-screen no-scrollbar aspect-video absolute text-white pt-[24%] md:pt-[14%] lg:pt-[18%] px-6 md:px-[72px] bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl md:text-[50px]">{title}</h1>
      <p className="w-full md:w-1/4 py-4 text-sm md:text-md font-medium hidden md:block">
        {overview.split(" ").slice(0, 20).join(" ") + "..."}
      </p>
      <div className="flex space-x-4">
        <Link to="/watch">
          <button className="bg-white box-border text-sm md:text-lg hover:bg-opacity-80 flex items-center text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded-md transition duration-300">
            <FaPlay className="mr-2" style={{ fill: "black" }} /> Play
          </button>
        </Link>
        <button className="bg-gray-600 flex text-xs md:text-sm items-center bg-opacity-70 text-white font-bold py-1 md:py-2 px-4 md:px-6 rounded-md hover:bg-opacity-90 transition duration-300">
          <BsInfoCircle className="mr-2 text-white" /> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
