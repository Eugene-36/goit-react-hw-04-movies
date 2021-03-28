import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import routes from "../../routes";
const Navigation = () => {
  return (
    <div className={s.Navigation}>
      <ul className={s.list}>
        <li className={s.deleteStyle}>
          <NavLink exact to={routes.home} className={s.activeLink}>
            Home
          </NavLink>
        </li>
        <li className={s.deleteStyle}>
          <NavLink exact to={routes.movies} className={s.activeLink}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
