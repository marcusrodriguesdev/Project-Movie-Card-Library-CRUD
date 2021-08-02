import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    console.log(movieAPI);
    this.state = {
      movies: [movieAPI],
    };
  }

  async componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({
      loading: true,
    });
    const Movies = await movieAPI.getMovies();
    this.setState({
      movies: [...Movies],
      loading: false,
    });
  }

  render() {
    const { movies } = this.state;
    console.log(movies);
    if (this.state.loading === true) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );

    // Render Loading here if the request is still happening
  }
}

export default MovieList;
