import React from "react";
import useMovieBackground from "../CustomHooks/useMovieBackground";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId ,width }) => {
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
        className={`${width?width:"w-screen"} aspect-video`}
        //autoplay more data consume
        // src={`https://www.youtube.com/embed/${Trailer?.key}?&autoplay=1&mute=1&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=${Trailer?.key}`}

        // not autoplay less data consume
        src={`https://www.youtube.com/embed/${Trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
