import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    // Fazer a requisição com getMovies()
    this.setState(
      { loading: true },
      async () => {
        const list = await movieAPI.getMovies()
          .then((data) => data);
        this.setState({
          movies: list,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        {loading ? <Loading /> : console.log(loading)}
      </div>
    );
  }
}

export default MovieList;
