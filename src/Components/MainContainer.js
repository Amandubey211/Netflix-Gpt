import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0]
  const { original_title, overview, release_date, id,vote_average } = mainMovie;
  return (
    <div>
      <VideoTitle
        title={original_title}
        overview={overview}
        releasedate={release_date}
        votes={vote_average}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
