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
import { BsRobot } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";

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
        dispatch(toggleGptSearch());
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
      <div className="w-screen z-10 absolute px-1 md:px-6 bg-gradient-to-b from-black py-2 flex justify-between  ">
        <div className="flex gap-7 items-center  ">
          <Link to="/browse">
            <img className="md:w-32 w-20" src={logo} alt="logo" />
          </Link>
        </div>

        {user && (
          <div className=" flex items-center   px-2 rounded-md   ">
            <button
              id="GptBtn"
              onClick={HandleGptSearchBtn}
              className=" md:py-2 py-1 -me-4  md:px-5 ps-1 pe-5 font-semibold  bg-red-600  rounded-[3px]"
            >
              {GptState ? (
                <section className="flex md:gap-2 gap-1 items-center font-bold  ">
                  <GiEarthAfricaEurope className="text-xl md:text:2xl from-red-500  " />{" "}
                  <span className="">Browse </span>{" "}
                </section>
              ) : (
                <section className="flex md:gap-2 gap-1 items-center font-bold  ">
                  <BsRobot className="text-xl md:text:2xl from-red-500  " />{" "}
                  <span className="">Gpt </span>{" "}
                </section>
              )}
            </button>
            <div className=" bg-red-500 z-50 p-0.5 rounded-full">
              <HeaderAvatar
                email={user?.email}
                displayName={user?.displayName}
                photoURL={user?.photoURL}
                HandleSignOut={HandleSignOut}
              />
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default Header;
