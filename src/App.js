import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Library Card - CRUD</div>
      <Router>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" render={ () => <NewMovie /> } />
          <Route exact path="/movies/:id" render={ () => <MovieDetails /> } />
          <Route exact path="/movies/:id/edit" render={ () => <EditMovie /> } />
          <Route path="/" component={ NotFound } />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
