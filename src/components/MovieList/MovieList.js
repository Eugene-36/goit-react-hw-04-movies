import React from "react";
// import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import MoviePreview from "../MoviePreview/MoviePreview";
import s from "../MovieList/MovieList.module.css";
const MovieList = ({ movie, location }) => {
  console.log(movie);
  return (
    <div className={s.wrapper}>
      <ul className={s.flex}>
        {movie.map(({ backdrop_path, id, title }) => (
          <li key={id} className={s.noStyle}>
            <Link
              className={s.noStyle}
              // className={s.newStyle}
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
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

// {
//   movies.length > 0 ? (
//     <>
//       <MovieList movie={movies} {...this.props} />
//       {page <= total && <Button onClick={this.handleBtn} />}
//     </>
//   ) : (
//     <h2>Введите запрос</h2>
//   );
// }
