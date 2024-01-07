import React from "react";
import useMovieBackground from "../CustomHooks/useMovieBackground";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieBackground(movieId);
  const { videos } = useSelector((store) => store.movievideos);
  const filteredVideo =
    videos?.filter((video) => video?.type === "Trailer") || [];
  const Trailer = filteredVideo?.length
    ? filteredVideo[0]
    : videos?.length
    ? videos[0]
    : null;

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${Trailer?.key}?&autoplay=1&mute=1&&playlist=${Trailer?.key}`}
        // src={`https://www.youtube.com/embed/${Trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
