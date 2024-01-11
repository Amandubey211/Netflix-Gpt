import toast from "react-hot-toast";
import { ApiOptions } from "../Utils/Constant";
import {
  addGptSuggestedMovies,
  addGptSuggestedNames,
} from "../Utils/Redux/Slices/GptMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/OpenAi";
import { toggleLoadingGptSearch } from "../Utils/Redux/Slices/GptSlice";

const useGetSuggestedMovies = () => {
  const dispatch = useDispatch();
  const FetchSuggestedMovies = async (movie) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      ApiOptions
    );
    const data = await res.json();
    console.log("fetched data from async", data);
    return data;
  };

  const HandleGptSearch = async (SearchText) => {
    if (SearchText) {
      try {
        dispatch(toggleLoadingGptSearch(true));
        const querry = `Act as a Movie Recommendation system and suggest some movies for the query ${SearchText} only give me 5 suggestion with comma seperated,  result example : Don,Golmaal,Hera Pheri,Animal`;
        const GptResult = await openai.chat.completions.create({
          messages: [{ role: "user", content: querry }],
          model: "gpt-3.5-turbo",
        });

        const GptResultConvertedToMovieArr =
          GptResult.choices[0].message.content.split(",");

        const suggestedMovieDataPromise = GptResultConvertedToMovieArr.map(
          (movie) => FetchSuggestedMovies(movie)
        );
        const MovieData = await Promise.all(suggestedMovieDataPromise);
        dispatch(addGptSuggestedMovies(MovieData));
        dispatch(addGptSuggestedNames(GptResultConvertedToMovieArr));
        toast.success("success");
        dispatch(toggleLoadingGptSearch(false));
      } catch (error) {
        dispatch(toggleLoadingGptSearch(false));
        toast.error(error.message);
      }
    } else {
      toast.error("please provide some words");
    }
  };

  return {
    HandleGptSearch,
  };
};

export default useGetSuggestedMovies;
