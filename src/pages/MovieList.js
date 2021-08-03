import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
// import movies from '../services/movieData';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.returnGetMovies();
  }

  async returnGetMovies() {
    movieAPI.getMovies()
      .then((movies) => {
        this.setState({
          movies,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {
          loading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
