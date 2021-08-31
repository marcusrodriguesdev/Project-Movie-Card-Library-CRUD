import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        Movie Card Library CRUD
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route exact component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
