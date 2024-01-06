import React from "react";
import { ImageCdnUrl } from "../Utils/Constant";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="w-32 rounded-md transition ease-in-out delay-75 hover:scale-125 hover:cursor-pointer">
        <img className="rounded-md" src={ImageCdnUrl + movie.poster_path} alt={movie.original_title} />
      </div>
    </div>
  );
};

export default MovieCard;
