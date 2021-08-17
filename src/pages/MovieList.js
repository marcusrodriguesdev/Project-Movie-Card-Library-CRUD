import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
// import { getMovies } from '../services/MovieAPI';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoading: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  async fetchMovies(){
    const movies = await movieAPI.getMovies();
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, isLoading } = this.state;
    // Render Loading here if the request is still happening
    // movies.push(movieAPI.getMovies());
    // getMovies();

    if (isLoading) {
      return (
        <p>Carregando...</p>
      );
    }

    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />) }
      </div>
    );
  }
}

// {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
export default MovieList;
