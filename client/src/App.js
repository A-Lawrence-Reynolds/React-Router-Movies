import React, { useState } from "react";
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route
        path="/"
        exact
        render={props => <MovieList list={savedList} {...props} />}
      />
      <Route
        path="/movies/:id"
        render={props => <Movie list={savedList} {...props} />}
      />
    </div>
  );
};

export default App;
