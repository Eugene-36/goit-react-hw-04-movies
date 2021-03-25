import React from "react";
// import PropTypes from "prop-types";
//import { Link, NavLink, withRouter } from "react-router-dom";
const MovieList = ({ movie }) => {
  //console.log(movie.map((el) => el.original_title));
  /// console.log(movie);
  return (
    <div>
      <ul>
        {movie.map(({ backdrop_path, id, title, original_title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
