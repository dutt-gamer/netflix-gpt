import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title,movies }) => {
  if(!movies) return;
  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold py-6 text-gray-300">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex gap-4 cursor-pointer">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
