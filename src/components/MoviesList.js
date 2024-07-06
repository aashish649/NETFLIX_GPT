import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";


const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-hidden no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Link key={movie.id} to={"/watch?v=" + movie?.id}>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
