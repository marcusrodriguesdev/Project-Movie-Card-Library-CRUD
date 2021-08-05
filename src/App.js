import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>

        <Route
          exact
          path="/movies/:id"
          render={ (props) => (
            <MovieDetails { ...props } />
          ) }
        />

        <Route path="/movies/new">
          <NewMovie />
        </Route>

        <Route exact path="/movies/:id/edit">
          <EditMovie />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
