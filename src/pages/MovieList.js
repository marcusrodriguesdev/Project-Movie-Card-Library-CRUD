import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
    this.handleState = this.handleState.bind(this);
  }

  async componentDidMount() {
    const response = await getMovies();
    this.handleState(response);
  }

  handleState(movieArray) {
    this.setState({
      movies: movieArray,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
