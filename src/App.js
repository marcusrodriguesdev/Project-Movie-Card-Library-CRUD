import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library - CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route
          path="/movies/new"
          render={ (props) => <NewMovie { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
