import React from "react";
// import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import MoviePreview from "../MoviePreview/MoviePreview";
import s from "../MovieList/MovieList.module.css";
const MovieList = ({ movie, locatino }) => {
  //console.log(movie.flatMap((el) => el.locatino));
  return (
    <div className={s.wrapper}>
      <ul className={s.flex}>
        {movie.map(({ backdrop_path, id, title }) => (
          <li key={id} className={s.noStyle}>
            <Link
              className={s.noStyle}
              to={{
                pathname: `/movies/${id}`,
                state: { from: "/movies/:movieId" },
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
