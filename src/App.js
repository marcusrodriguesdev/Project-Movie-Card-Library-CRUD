import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import movies from './services/movieData';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <MovieList /* movies={ movies } */ /> } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
