import React, { useEffect } from "react";
import logo from "../Images/NetFlexLogo.png";
import toast, { Toaster } from "react-hot-toast";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddUser, RemoveUser } from "../Utils/Redux/Slices/UserSlice";
import HeaderAvatar from "./HeaderAvatar";

const Header = () => {
  const dispatch = useDispatch();

  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          AddUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/browse");
      } else {
        dispatch(RemoveUser());
        Navigate("/");
      }
    });
    return () => Unsubscribe();
  }, []);
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out successfully");
        dispatch(RemoveUser());

        Navigate("/");
      })
      .catch((error) => {
        toast.error("something went wrong");
        console.log(error);
      });
  };
  return (
    <>
      <div className="w-screen z-10 absolute px-6 bg-gradient-to-b from-black py-2 flex justify-between  ">
        <img className="w-32" src={logo} alt="logo" />
        <div className="hover:bg-red-500 p-0.5 rounded-full">
          {user && (
            <HeaderAvatar
              email={user?.email}
              displayName={user?.displayName}
              photoURL={user?.photoURL}
              HandleSignOut={HandleSignOut}
            />
          )}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Header;
