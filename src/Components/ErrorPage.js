import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  const errorMessage = location.state?.errorMessage || "Error Occured!";
  const Navigate = useNavigate();
  return (
    <div className="flex gap-2  flex-col last:justify-center items-center p-10">
      <div className=" flex justify-center">
        <iframe src="https://lottie.host/embed/9ed3d838-d8b8-4f16-adbc-dd8204475ec1/oNymo9MmRr.json"></iframe>
      </div>

      <h3 className="font-bold">{errorMessage}</h3>
      <button
        className="bg-red-500 rounded-md p-2 px-10 "
        onClick={() => Navigate("/browse")}
      >
        Home
      </button>
    </div>
  );
};

export default ErrorPage;
