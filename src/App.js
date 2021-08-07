import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/movies/new"
            component={ NewMovie }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/"
            component={ MovieList }
          />
          <Route
            path="*"
            component={ NotFound }
          />
        </Switch>
      </Router>
    );
  }
}
