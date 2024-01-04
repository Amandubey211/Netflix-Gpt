import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/FireBase";
import { useDispatch } from "react-redux";
import { AddUser, RemoveUser } from "../Utils/UserSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(AddUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(RemoveUser());
      }
    });
  }, []);
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
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
