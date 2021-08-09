import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.FetchMoviesApi();
  }

  async FetchMoviesApi() {
    this.setState(
      { loading: true },
      async () => {
        const moviesData = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: [...moviesData],
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return (<Loading />);
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
