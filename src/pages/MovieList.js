import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loadingMessage: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const fetchApi = await movieAPI.getMovies();
    this.setState({
      movies: fetchApi,
      loadingMessage: false,
    });
  }

  render() {
    const { movies, loadingMessage } = this.state;

    return (
      <div data-testid="movie-list">
        {loadingMessage ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
      </div>
    );
  }
}

export default MovieList;
