import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const trailerRef = useRef(null);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const clickedMovie = useSelector((store) => store.clickedMovie?.currentMovie);
  useEffect(() => {
    trailerRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [clickedMovie]);

  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, release_date, id, vote_average } =
    mainMovie;
  return (
    <div ref={trailerRef}>
      {clickedMovie ? (
        <>
          <VideoTitle
            title={clickedMovie?.original_title}
            overview={clickedMovie?.overview}
            releasedate={clickedMovie?.release_date}
            votes={clickedMovie?.vote_average}
          />
          <VideoBackground movieId={clickedMovie.id} />{" "}
        </>
      ) : (
        <>
          <VideoTitle
            title={original_title}
            overview={overview}
            releasedate={release_date}
            votes={vote_average}
          />
          <VideoBackground movieId={id} />
        </>
      )}
    </div>
  );
};

export default MainContainer;
