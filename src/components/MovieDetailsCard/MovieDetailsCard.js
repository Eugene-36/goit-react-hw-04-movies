import React from "react";
//import PropTypes from "prop-types";
import image from "../../img/withoutImg.jpg";
import { NavLink } from "react-router-dom";
import s from "./MovieDetailsCard.module.css";

const MovieDetailsCard = ({
  title,
  overview,
  vote_average,
  genres,
  backdrop_path,
  onClick,
  propsik,
}) => {
  const posterUrl = "https://image.tmdb.org/t/p/w500";
  let poster = backdrop_path ? `${posterUrl}${backdrop_path}` : image;
  console.log(poster);
  return (
    <div className={s.MovieDetailsPage}>
      <button className={s.btnDetails} type="button" onClick={onClick}>
        Go back
      </button>
      <div className={s.wrappler}>
        <img className={s.images} src={poster} alt={title} />
        <div className={s.descr}>
          <h1>{title}</h1>
          <p>User score: {vote_average}</p>
          <h2>Overviev</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map(({ name }) => {
              return `${name} `;
            })}
          </p>
        </div>
      </div>
      <div className={s.Additional}>
        <h3>Additional information</h3>
        <ul>
          <li className={s.listItem}>
            <NavLink to={`${propsik.match.url}/cast`} className={s.listItem}>
              Cast
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink to={`${propsik.match.url}/reviews`} className={s.listItem}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
