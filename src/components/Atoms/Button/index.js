import React from "react";
import "./index.css";
import PropTypes from 'prop-types';

export const Button = ({ primary, children, onClick }) => {

  const className = primary ? "btn btn-primary" : "btn";

  return(
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
};

Button.propTypes = {
  primary: PropTypes.bool.isRequired
}
