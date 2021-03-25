//import React, { Component } from "react";
import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import routes from "./routes";
//import api from "./services/apiFilms";

//import Home from "./pages/HomePage/HomePage";
//import MovieList from "./components/MovieList/MovieList";
const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName:'HomePage'*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetails" /* webpackChunkName:'MovieDetailsPage'*/
  )
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName:'MoviesPage'*/)
);
class App extends Component {
  render() {
    return (
      <div>
        <>
          <Navigation />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path={routes.home} exact component={HomePage} />
              <Route path={routes.moviesDetails} component={MovieDetailsPage} />
              <Route path={routes.movies} exact component={MoviesPage} />
              <Route component={HomePage} />
            </Switch>
          </Suspense>
        </>
        {/* <Home /> */}
      </div>
    );
  }
}
export default App;
