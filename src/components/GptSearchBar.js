import React, { useRef } from "react";
import lang from "../utils/LanguageConstant";
import { useDispatch, useSelector } from "react-redux";
import OpenAi from "../components/OpenAi";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../redux/slices/gptSlice";

const GptSearchBar = () => {
  const changeLanguage = useSelector((store) => store.langconfig.lang);
  const searchValue = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGPTsearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchValue.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    console.log(searchValue.current.value);

    const gptSearchResults = await OpenAi.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptSearchResults.choices) {
      // TODO: Handle error here
    }

    console.log(gptSearchResults.choices?.[0]?.message?.content);

    const gptMovies =
      gptSearchResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="flex flex-col justify-start bg-gradient-to-b from-black items-center h-screen pt-24 space-y-8">
      <div className="text-center mt-6 max-w-3xl">
        <h1 className="text-white text-4xl mb-2 md:text-6xl font-bold inline-block">
          Let AI be your Movie Guru!
        </h1>
        <p className="text-white text-xl md:text-2xl inline-block">
          Discover Family-Friendly Flicks for a Perfect Movie Night
        </p>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center mt-6 w-full md:w-3/4 md:flex-row md:justify-center"
      >
        <div className="w-full md:w-9/12 md:flex md:justify-center">
          <input
            ref={searchValue}
            type="text"
            className="w-full p-2 md:p-2 md:pl-4 md:pr-10 border-none rounded-l-md outline-none shadow-lg text-black placeholder-gray-500"
            placeholder={lang[changeLanguage].gptSearchPlaceholder}
          />
        </div>
        <button
          onClick={handleGPTsearch}
          className="mt-4 md:mt-0 md:ml-4 px-4 py-2 bg-red-600 text-white rounded-md shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          {lang[changeLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
