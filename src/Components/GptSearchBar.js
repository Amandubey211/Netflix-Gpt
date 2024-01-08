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
        <fieldset className="flex gap-2 mb-5 ">
          <input
            ref={SearchText}
            type="text"
            className="w-96 pe-5 border-[1px]  shadow-[rgba(38,57,77,1.000)_0px_20px_30px_-10px] ps-3 py-2  rounded-md"
            placeholder="Enter your thoughts.."
          />
          <button
            type="submit"
            className="bg-red-500 pt-1 px-5 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              HandleGptSearch(SearchText?.current?.value);
            }}
          >
            {loading ? <Spinner /> : <span>Search</span>}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default GptSearchBar;
