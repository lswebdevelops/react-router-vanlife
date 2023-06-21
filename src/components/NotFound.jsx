import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link 
        className="not-found-button" 
        to={"/"}>     
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
