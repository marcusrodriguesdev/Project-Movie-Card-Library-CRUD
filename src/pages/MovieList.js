import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const searchMovies = await movieAPI.getMovies();
    this.handleFetch(searchMovies);
  }

  handleFetch(request) {
    this.setState({
      movies: [...request],
    });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
