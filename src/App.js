import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import NotFond from './pages/NotFound';

function App() {
  return (
    <Router>
      <div> Movie Card Library CRUD </div>
      <Switch>
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact component={ NotFond } />
      </Switch>
    </Router>
  );
}

export default App;
