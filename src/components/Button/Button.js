import React from "react";
import PropTypes from "prop-types";
//import s from "../Button/Button.module";
const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={() => onClick()}>
      Load more
    </button>
  );
};
export default Button;
