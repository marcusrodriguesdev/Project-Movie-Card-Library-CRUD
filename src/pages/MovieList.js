import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loadingStatus: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    this.setState({ loadindStatus: true }, async () => {
      const response = await movieAPI.getMovies();
      this.setState({
        loadingStatus: false,
        movies: response,
      });
    });
  }

  render() {
    const { loadingStatus, movies } = this.state;

    // Render Loading here if the request is still happening
    if (loadingStatus) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
