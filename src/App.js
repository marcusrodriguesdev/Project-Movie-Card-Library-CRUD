import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><MovieList /></Route>
        <Route path="/movies/new"><NewMovie /></Route>
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route exact path="/movies/:id/edit"><EditMovie /></Route>
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
