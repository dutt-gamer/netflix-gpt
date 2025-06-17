import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 cursor-pointer">
      <div className="overflow-hidden rounded-md">
        <img
          className="transition-transform duration-300 hover:scale-110"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;