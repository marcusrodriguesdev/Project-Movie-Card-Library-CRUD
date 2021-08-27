import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

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

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({ movies, isLoading: false });
  }

  render() {
    const { movies, isLoading } = this.state;
    // Render Loading here if the request is still happening
    // movies.push(movieAPI.getMovies());
    // getMovies();

    if (isLoading) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />) }
        <button type="button"><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
      </div>
    );
  }
}

// {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
export default MovieList;
