import React, { Component } from 'react';

import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const moviesArray = await movieAPI.getMovies();
    this.setState((prevState) => ({
      loading: !prevState,
      movies: moviesArray,
    }));
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return (<span>Carregando...</span>);
    } return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
