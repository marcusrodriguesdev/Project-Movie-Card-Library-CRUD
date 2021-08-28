import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movies: [],
    };

    this.renderMovieCards = this.renderMovieCards.bind(this);
  }

  componentDidMount() {
    this.renderMovieCards();
  }

  renderMovieCards() {
    this.setState({ loading: true }, () => {
      movieAPI
        .getMovies()
        .then((movies) => this.setState({ loading: false, movies }));
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
      </div>
    );
  }
}

export default MovieList;
