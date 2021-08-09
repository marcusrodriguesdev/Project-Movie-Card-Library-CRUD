import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: 'false',
    };
  }

  componentDidMount() {
    this.requestMovies();
  }

  async requestMovies() {
    const moviesData = await movieAPI.getMovies();

    if (moviesData) {
      this.setState({ movies: moviesData, loading: 'true' });
    }
  }

  render() {
    const { loading, movies } = this.state;

    if (loading === 'false') {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
