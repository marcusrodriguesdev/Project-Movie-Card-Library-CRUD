import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MoviesDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <div>
      <header>
        Movie Card Library CRUD
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id"
            render={ (props) => <MoviesDetails { ...props } /> }
          />
          <Route path="/404" component={ NotFound } />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
