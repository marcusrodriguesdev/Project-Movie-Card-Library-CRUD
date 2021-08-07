import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <Router>
      <span>Movie Card Library CRUD</span>
      <Route exact path="/" component={ MovieList } />
      <Route
        exact
        path="/movies/:id"
        component={ MovieDetails }
      />
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route component={ NotFound } />
    </Router>
  );
}

export default App;
