import { useDispatch } from "react-redux";
import { RemoveUser } from "../Utils/Redux/Slices/UserSlice";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/FireBase";

const useSignOut = () => {
  const dispatch = useDispatch();
  return (HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.error("Logged Out successfully");
        dispatch(RemoveUser());

        Navigate("/");
      })
      .catch((error) => {
        toast.error("something went wrong");
        console.log(error);
      });
  });
};

export default useSignOut;
