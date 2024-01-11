import React from "react";
import { useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  const errorMessage = location.state?.errorMessage || "error occured";

  return (
    <div className="flex justify-center items-center p-10">
      <h1>hey User,</h1>
      <h3>{errorMessage}</h3>
    </div>
  );
};

export default ErrorPage;
