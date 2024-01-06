import React from "react";
import Header from "./Header";
import useNowPlaying from "../CustomHooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import useTopRatedMovies from "../CustomHooks/useTopRatedMovies";
import useUpComingMovies from "../CustomHooks/useUpComingMovies";

const Browse = () => {

  useNowPlaying();
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
