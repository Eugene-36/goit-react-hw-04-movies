import React, { Component } from "react";
import { Route, Switch } from "react-router";
import routes from "../../routes";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import API from "../../services/apiFilms";

class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
    genres: [],
    id: null,
    overview: null,
    title: null,
    vote_average: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    API.getDetails(movieId).then(
      ({ backdrop_path, id, overview, title, vote_average, genres }) => {
        this.setState({
          backdrop_path,
          id,
          overview,
          title,
          vote_average,
          genres: [...genres],
        });
      }
    );
  }
  handleButton = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };
  render() {
    const { backdrop_path, genres, overview, title, vote_average } = this.state;
    console.log(this.props.match.path);
    return (
      <>
        <MovieDetailsCard
          title={title}
          overview={overview}
          vote_average={vote_average}
          genres={genres}
          backdrop_path={backdrop_path}
          onClick={this.handleButton}
          propsik={this.props}
        />

        <Switch>
          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </Switch>
      </>
    );
  }
}
export default MovieDetailsPage;
