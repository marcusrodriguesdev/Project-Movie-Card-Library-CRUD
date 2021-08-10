import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Link to="/movies/new">
          ADICIONAR CARTÃO
        </Link>
        <Route exact path="/movies/new" render={ () => <NewMovie /> } />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route exact path="" render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
