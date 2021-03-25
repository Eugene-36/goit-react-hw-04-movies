import React, { Component } from "react";

import s from "./Reviews.module.css";

import API from "../../services/apiFilms";
class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    API.getReviews(movieId).then((data) => {
      this.setState({ reviews: data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    console.log(reviews);
    return reviews.length > 0 ? (
      <ul className={s.reviews}>
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id} className={s.item}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    ) : (
      <h2>нет информации</h2>
    );
  }
}
export default Reviews;
