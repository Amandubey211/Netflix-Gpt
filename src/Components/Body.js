import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
    {
      path: "/movieinfo",
      element: <MovieInfo />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
