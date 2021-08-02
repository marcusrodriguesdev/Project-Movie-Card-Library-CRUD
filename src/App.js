import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route
        exact
        path="/movies/:id"
        render={ (props) => <MovieDetails { ...props } /> }
      />
      <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
      <Route path="/:any" component={ NotFound } />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
