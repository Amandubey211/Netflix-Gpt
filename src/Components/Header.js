import React, { useEffect } from "react";
import logo from "../Images/NetFlexLogo.png";
import toast, { Toaster } from "react-hot-toast";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/FireBase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddUser, RemoveUser } from "../Utils/Redux/Slices/UserSlice";
import HeaderAvatar from "./HeaderAvatar";
import { toggleGptSearch } from "../Utils/Redux/Slices/GptSlice";
import { FaRobot } from "react-icons/fa6";

const Header = () => {
  const dispatch = useDispatch();
  const GptState = useSelector((store) => store.Gpt.showGptSearch);
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

  const HandleGptSearchBtn = () => {
    dispatch(toggleGptSearch());
  };
  return (
    <>
      <div className="w-screen z-10 absolute px-6 bg-gradient-to-b from-black py-2 flex justify-between  ">
        <div className="flex gap-7 items-center  ">
          <Link to="/browse">
            <img className="w-32" src={logo} alt="logo" />
          </Link>
          {/* <div className="flex gap-5 items-center text-red-600">
            <span>Tv-series</span>
            <span>Web-series</span>
          </div> */}
        </div>
        <div className=" flex items-center bg-red-500 bg-opacity-20 px-2 rounded-md  gap-2 ">
          <button
            onClick={HandleGptSearchBtn}
            className="bg-red-500 py-2 border- px-6 font-semibold  rounded-[3px]"
          >
            {GptState ? (
              "Movies"
            ) : (
              <section className="flex gap-2 items-center">
                <FaRobot className="text-2xl from-red-500" />{" "}
                <span>Gpt Service</span>{" "}
              </section>
            )}
          </button>
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
      </div>
      <Toaster />
    </>
  );
};

export default Header;
