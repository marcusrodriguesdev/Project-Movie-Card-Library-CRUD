import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">Movie Card Library CRUD</div>
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/:undefined" component={ NotFound } />
    </Router>
  );
}

export default App;
