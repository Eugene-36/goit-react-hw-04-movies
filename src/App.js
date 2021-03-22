import React, { Component } from "react";

//import api from "./services/apiFilms";

import Home from "./pages/HomePage/HomePage";
//import MovieList from "./components/MovieList/MovieList";
class App extends Component {
  render() {
    // const { popularMovie } = this.state;
    // console.log(popularMovie);
    return (
      <div>
        <Home />
      </div>
    );
  }
}
export default App;
