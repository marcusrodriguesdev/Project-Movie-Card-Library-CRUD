import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/"><MovieList /></Route>
        <Route exact path="/movies/:id"><MovieDetails /></Route>
        <Route exact path="/movies/new"><NewMovie /></Route>
        <Route exact path="/movies/:id/edit"><EditMovie /></Route>
        <Route component={ NotFound } />
      </div>
    </BrowserRouter>
  );
}

export default App;
