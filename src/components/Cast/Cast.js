import React, { Component } from "react";
import image from "../../img/withoutImg.jpg";
import API from "../../services/apiFilms";
import s from "./Cast.module.css";
import MovieList from "../MovieList/MovieList";
class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    API.getCast(movieId).then((data) => {
      this.setState({ cast: data.cast });
    });
  }

  render() {
    const { cast } = this.state;

    const posterUrl = "https://image.tmdb.org/t/p/original";

    return cast.length > 0 ? (
      <ul className={s.Cast}>
        {cast.map(({ name, character, profile_path, id }) => {
          let poster = profile_path ? `${posterUrl}${profile_path}` : image;
          return (
            <li key={id} className={s.item}>
              <img
                className={s.imageCast}
                src={poster}
                alt={name}
                // height="100%"
                // width="150px"
              />
              <h2>{name}</h2>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    ) : (
      <h2>нет информации</h2>
    );
  }
}

export default Cast;
