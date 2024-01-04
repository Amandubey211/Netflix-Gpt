import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const Browse = () => {
  const user = useSelector((store) => store.user);
  return (
    <>
      <Header />
      <div>
        <h1>Welcome {user?.email} </h1>
      </div>
    </>
  );
};

export default Browse;
