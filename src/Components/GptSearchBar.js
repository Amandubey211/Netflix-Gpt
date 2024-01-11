import React, { useRef, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import useGetSuggestedMovies from "../CustomHooks/useGetSuggestedMovies";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const SearchText = useRef(null);
  const { HandleGptSearch } = useGetSuggestedMovies();
  const loading = useSelector((store) => store.Gpt.loadingGptSearch);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          HandleGptSearch(SearchText?.current?.value);
        }}
      >
        <fieldset className="flex gap-1 mb-5 ">
          <input
            ref={SearchText}
            type="text"
            className="md:w-96 w-60 pe-5 border-[1px]  shadow-[rgba(38,57,77,1.000)_0px_20px_30px_-10px] ps-3 py-2  rounded-md"
            placeholder="Enter your thoughts.."
          />
          <button
            type="submit"
            className="bg-red-500 opacity-90 outline-none focus:outline-none hover:opacity-100 md:px-5 px-3 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              HandleGptSearch(SearchText?.current?.value);
            }}
          >
            {loading ? (
              <Spinner />
            ) : (
              <span className="md:font-bold font-semibold">Search</span>
            )}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default GptSearchBar;
