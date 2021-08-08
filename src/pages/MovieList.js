import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };

    this.pickMovies = this.pickMovies.bind(this);
  }

  componentDidMount() {
    this.pickMovies();
  }

  async pickMovies() {
    this.setState({ loading: true }, await movieAPI.getMovies()
      .then((data) => this.setState({
        loading: false,
        movies: [...data],
      })));
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        {loading
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}

      </div>
    );
  }
}

export default MovieList;
