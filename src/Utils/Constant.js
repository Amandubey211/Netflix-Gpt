export const loginBackground =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const UserAvatar =
  "https://avatars.githubusercontent.com/u/109097090?v=4";

export const ApiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const ImageCdnUrl = "https://image.tmdb.org/t/p/w200/";

export const NowPlayingMoviesCdnUrl =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const PopularMoviesCdnUrl =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TopRatedMoviesCdnUrl =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UpComingMoviesCdnUrl =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const OPEN_AI_GPT_KEY = process.env.REACT_APP_OPEN_AI_GPT_KEY;

export const SearchSuggestionApi =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
