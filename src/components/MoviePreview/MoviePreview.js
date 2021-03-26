import React from "react";
//import PropTypes from "prop-types";
import image from "../../img/withoutImg.jpg";
import s from "./MoviePreview.module.css";

const MoviePreview = ({ backdrop_path, title }) => {
  const posterUrl = "https://image.tmdb.org/t/p/original";
  let poster = backdrop_path ? `${posterUrl}${backdrop_path}` : image;
  return (
    <div className={s.MoviePreview_item}>
      <div className={s.tumb}>
        <img
          className={s.picture}
          src={poster}
          alt={title}
          width="300"
          height="auto"
        />
      </div>
      <div className={s.container}>
        <h2 className={s.text}> {title}</h2>
      </div>
    </div>
  );
};
export default MoviePreview;
