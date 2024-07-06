import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const movie_id = searchParams.get("v");
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  console.log(trailerVideo.name);
  console.log("Inside the watch page",trailerVideo);

  useMovieTrailer(movie_id);

  return (
    <div className="bg-black pb-5 pt-20 md:pt-24">
      <div className="w-fit m-auto">
        <iframe
          className="w-screen md:w-[1200px] h-fit md:h-[500px] border shodow-lg border-gray-500 aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
