import React, { Component } from 'react';
import { Loading } from '../components/index';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      done: false,
    };

    this.getMovies = this.getMovies.bind(this);
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.getMovies(movies);
  }

  getMovies(movies) {
    this.setState({
      movies,
      done: true,
    });
  }

  render() {
    const { movies, done } = this.state;
    const showLibrary = (movies.map((movie) => (
      <MovieCard
        key={ movie.title }
        movie={ movie }
      />)));

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { done ? showLibrary : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
