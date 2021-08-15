import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.handleStateFetchUpdate = this.handleStateFetchUpdate.bind(this);
  }

  async componentDidMount() {
    const requestMovies = await movieAPI.getMovies();
    this.handleStateFetchUpdate(requestMovies);
  }

  handleStateFetchUpdate(request) {
    this.setState({
      movies: [...request],
    });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
