import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MovieList, NotFound, NewMovie, MovieDetails, EditMovie  } from './pages';

function App() {
  return (
 <BrowserRouter>
    <Router>
      <div>Movie Card Library CRUD</div>
      <MovieList />
      <MovieDetails />
      <NewMovie />
      <EditMovie />
      <NotFound />
    </Router>
  </BrowserRouter>
  );
}

export default App;
