import React, { Component } from "react";

import API from "../../services/apiFilms";
import MovieList from "../../components/MovieList/MovieList";

class HomePage extends Component {
  state = {
    popularMovie: [],
    error: "Somthing went wrong....",
  };
  fetchMovie = () => {
    API.getRating().then((data) => {
      this.setState({ popularMovie: data.results });
    });
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
export default HomePage;
