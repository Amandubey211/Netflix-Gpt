import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlaying from "../CustomHooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  const user = useSelector((store) => store.user);
  useNowPlaying();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
