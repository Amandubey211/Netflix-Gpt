import React from "react";
import Login from "./Login";
import Browse from "./Browse";

import { createBrowserRouter } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <Login />
      <Browse />
    </div>
  );
};

export default Body;
