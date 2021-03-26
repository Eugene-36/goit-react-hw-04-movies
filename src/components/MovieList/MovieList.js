import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MoviePreview from "../MoviePreview/MoviePreview";
import s from "../MovieList/MovieList.module.css";
const MovieList = ({ movie }) => {
  return (
    <ul>
      {movie.map(({ backdrop_path, id, title }) => (
        <li key={id} className={s.noStyle}>
          <Link
            to={{
              pathname: `/movies/${id}`,
            }}
          >
            <MoviePreview title={title} backdrop_path={backdrop_path} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
