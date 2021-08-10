import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loadingScreen: true,
    };
    this.requisition = this.requisition.bind(this);
  }

  componentDidMount() {
    this.requisition();
  }

  async requisition() {
    const response = await movieAPI.getMovies();
    if (response) {
      this.setState({
        movies: response,
        loadingScreen: false,
      });
    }
  }

  render() {
    const { movies, loadingScreen } = this.state;

    // Render Loading here if the request is still happening

    if (loadingScreen === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
