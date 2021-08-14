import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import MovieDetails from './MovieDetails';
import NewMovie from './NewMovie';
import EditMovie from './EditMovie';
import NotFound from './NotFound';

// // import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Route path="" component={ NotFound } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
      </div>
    );
  }
}

export default MovieList;
