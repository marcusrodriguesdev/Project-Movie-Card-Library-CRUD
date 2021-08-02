import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    this.setState({ loading: true });
    const data = await movieAPI.getMovies();
    this.setState(
      {
        loading: false,
        movies: [...data],
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading && <Loading />}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
