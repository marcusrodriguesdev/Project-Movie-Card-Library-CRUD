import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchFunction();
  }

  fetchFunction = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  functionMov = () => {
    const { movies } = this.state;
    return (movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />));
  }

  render() {
    const { loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.functionMov()}
      </div>
    );
  }
}

export default MovieList;
