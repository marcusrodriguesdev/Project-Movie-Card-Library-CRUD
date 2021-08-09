import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      !movies ? <Loading /> : (
        <div data-testid="movie-list" className="App">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      )
    );
  }
}

export default MovieList;
