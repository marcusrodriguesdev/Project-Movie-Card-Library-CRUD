import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => this.setState({ movies: response }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.length
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}

      </div>
    );
  }
}

export default MovieList;
