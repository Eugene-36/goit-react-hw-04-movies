import React, { Component } from "react";

import Button from "../../components/Button/Button";
import MovieList from "../../components/MovieList/MovieList";
//import getDetails from "../../services/fetchSearch";
import queryString from "query-string";
import axios from "axios";
console.log(queryString);
class MoviesPage extends Component {
  state = {
    movies: [],
    query: null,
    page: 1,
    total: null,
    error: "",
  };
  componentDidMount() {
    const { pathname, search } = this.props.location;
    const parsed = queryString.parse(search);
    //console.log(parsed.query);
    if (pathname && search) {
      this.onSubmitSearch(parsed.query);
    }
  }
  onSubmitSearch = (query) => {
    // console.log(query);

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
            <MovieList movie={movies} {...this.props} />
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
