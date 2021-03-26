import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MoviePreview from "../MoviePreview/MoviePreview";
import s from "../MovieList/MovieList.module.css";
const MovieList = ({ movie }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.flex}>
        {movie.map(({ backdrop_path, id, title }) => (
          <li key={id} className={s.noStyle}>
            <Link
              className={s.noStyle}
              to={{
                pathname: `/movies/${id}`,
              }}
            >
              <MoviePreview title={title} backdrop_path={backdrop_path} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
