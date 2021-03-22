import React, { Component } from "react";

import api from "../../services/apiFilms";
import MovieList from "../../components/MovieList/MovieList";

class Home extends Component {
  state = {
    popularMovie: [],
    error: "Somthing went wrong....",
  };
  fetchMovie = () => {
    const res = api()
      .then((response) => {
        return response.results;
      })
      .then((finallRes) => {
        console.log(finallRes);
        if (finallRes.length === 0) {
          return this.setState({ popularMovie: [] });
        }
        this.setState((prevState) => ({
          popularMovie: [...finallRes],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.state({ error }));
  };
  componentDidMount() {
    // this.setState({ page: 1 });
    this.fetchMovie();
  }

  render() {
    const { popularMovie } = this.state;
    return (
      <div>
        <>
          <h1>Trending today</h1>

          <MovieList movie={popularMovie} />

          {/* <Button onClick={this.fetchMovie} /> */}
        </>
      </div>
    );
  }
}
export default Home;
