import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.LoadingAndGettingMovies = this.LoadingAndGettingMovies.bind(this);

    this.state = {
      rendered: true,
      movies: [],
    };
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    const prom = await getMovies();
    console.log(prom);
    this.LoadingAndGettingMovies(prom);
  }

  LoadingAndGettingMovies(prom) {
    this.setState((prevState) => (
      { movies: [...prom],
        rendered: !prevState.rendered,
      }
    ));
  }

  render() {
    const { movies, rendered } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {rendered && <Loading />}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
