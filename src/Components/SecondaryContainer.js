import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const NowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const PopularMovies = useSelector((store) => store.movies.popularMovies);
  const TopRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const UpComingMovies = useSelector((store) => store.movies.upcomingMovies);
  return (
    <div className=" bg-black  ">
      <div className="md:-mt-28  sm:-mt-10 relative z-20">
        <MovieList title="Now Playing" AllMovies={NowPlaying} />
           <MovieList title="Up Coming" AllMovies={UpComingMovies} />
        <MovieList title="Popular" AllMovies={PopularMovies} />
        <MovieList title="Top Rated" AllMovies={TopRatedMovies} />
     
      </div>
    </div>
  );
};

export default SecondaryContainer;
