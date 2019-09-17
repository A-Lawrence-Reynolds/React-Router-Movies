import React from "react";
import { Route, Link } from "react-router-dom";
import MovieList from "./MovieList";
import Movie from "./Movie";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link exact to="/" className="home-button">
      Home
    </Link>
    <Route exact path="/" component={Movie} />
  </div>
);

export default SavedList;
