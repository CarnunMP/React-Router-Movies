import React, { useState, useEffect } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = (movie) => { // Hmm... seems to be working. But is quite convoluted!
    let movieIsInList = false;

    if (savedList.length >= 1) {
      savedList.forEach(movieInList => {
        if (movie.title === movieInList.title) {
          movieIsInList = true;
          return;
        }
      });
    }

    if (!movieIsInList) {
      setSavedList(savedList.concat([movie]))
    }
  }

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}/>
      <Route path="/movies/:id" render={props => {
        return <Movie {...props} addToSavedList={addToSavedList}/>
      }}/>
    </div>
  );
};

export default App;
