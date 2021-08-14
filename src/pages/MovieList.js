import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
    this.requisitionAPI = this.requisitionAPI.bind(this);
  }

  componentDidMount() {
    this.requisitionAPI();
  }

  async requisitionAPI() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies: [...movies],
    });
  }

  render() {
    const { movies } = this.state;
    if (movies[0] === undefined) {
      return (
        <Loading />
      );
    }
    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
