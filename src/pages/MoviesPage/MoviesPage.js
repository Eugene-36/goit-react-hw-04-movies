import React, { Component } from "react";

import Button from "../../components/Button/Button";
import MovieList from "../../components/MovieList/MovieList";
//import getDetails from "../../services/fetchSearch";
//import queryString from "query-string";
import axios from "axios";
class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
    page: 1,
    total: null,
    error: "",
  };
  componentDidMount() {
    if (this.props.location.search) {
      this.onSubmitSearch(this.props.location.search.slice(7));
    }
  }
  onSubmitSearch = (query) => {
    const baseUrl = "https://api.themoviedb.org/3/";
    const apiKey = "da01c4e54a8d5b285bda18b1e0590cea";
    const path = `${baseUrl}search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
    return axios
      .get(path)
      .then((response) => {
        this.setState({ movies: response.data.results });
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        if (this.state.movies.length >= 1) {
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      });
  };
  render() {
    const { movies, total, page } = this.state;

    return (
      <>
        <form onSubmit={this.submitQuery}>
          <label>
            <input type="text" name="query" />
          </label>
          <button type="submit">Search</button>
        </form>
        {movies.length > 0 ? (
          <>
            <MovieList movie={movies} />
            {page <= total && <Button onClick={this.handleBtn} />}
          </>
        ) : (
          <h2>Введите запрос</h2>
        )}
      </>
    );
  }
}
export default MoviesPage;
