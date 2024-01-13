import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import useGetSuggestedMovies from "../CustomHooks/useGetSuggestedMovies";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { SearchSuggestionApi } from "../Utils/Constant";
import { CiSearch } from "react-icons/ci";
import { AddchacheResults } from "../Utils/Redux/Slices/searchSlice";
const GptSearchBar = () => {
  const chachedSearch = useSelector((store) => store.ChacheSearches);
  const [searchSuggestionStatus, SetSearchSuggestionStatus] = useState(false);
  const [query, SetQuery] = useState("");
  const [searchSuggestions, SetSearchSuggestions] = useState([]);
  const { HandleGptSearch } = useGetSuggestedMovies();
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.Gpt.loadingGptSearch);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chachedSearch[query]) {
        SetSearchSuggestions(chachedSearch[query]);
      } else {
        FetchSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  const FetchSearchSuggestions = async () => {
    const res = await fetch(SearchSuggestionApi + query);
    const data = await res.json();
    SetSearchSuggestions(data[1]);
    console.log(query);
    dispatch(
      AddchacheResults({
        [query]: [...data[1]],
      })
    );
  };

  return (
    <div className="  flex flex-col justify-center items-start gap-1 mb-5 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          HandleGptSearch(query);
          SetSearchSuggestionStatus(false);
        }}
      >
        <fieldset className="flex gap-1">
          <input
            value={query}
            onChange={(e) => SetQuery(e.target.value)}
            type="text"
            className="md:w-96 w-60 pe-5 border-[1px]  shadow-[rgba(38,57,77,1.000)_0px_20px_30px_-10px] ps-3 py-2  rounded-md"
            placeholder="Enter your thoughts.."
            onFocus={() => SetSearchSuggestionStatus(true)}
            // onBlur={() => SetSearchSuggestionStatus(false)}
          />
          <button
            type="submit"
            className="bg-red-500 opacity-90 outline-none focus:outline-none hover:opacity-100 md:px-5 px-3 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              HandleGptSearch(query);
              SetSearchSuggestionStatus(false);
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
      {searchSuggestionStatus && searchSuggestions.length > 0 && (
        <div className="bg-white absolute top-36 md:w-96 h-72 overflow-y-scroll  w-80 rounded-lg py-2 px-2 ps-4 flex-col flex">
          {searchSuggestions?.map((suggestions) => {
            return (
              <div
                key={suggestions}
                className="shadow-sm flex justify-start  items-center  py-1 gap-1 hover:bg-gray-100"
                onClick={() => {
                  toast.success(suggestions);
                  SetQuery(suggestions);
                  HandleGptSearch(suggestions);

                  SetSearchSuggestionStatus(false);
                }}
              >
                <CiSearch />
                <span>{suggestions}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
