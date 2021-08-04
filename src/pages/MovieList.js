import React, { Component } from 'react';
import { MovieCard, Loading, Header } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    // movieAPI returns a promise
    const apiMoviesChecker = await movieAPI.getMovies();
    // console.log(apiMoviesChecker);
    //* Had to use promise so EsLint wouldn't complain :(
    await new Promise(() => this.setState({
      movies: apiMoviesChecker,
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div
        data-testid="movie-list"
        className="movie-list-menu"
      >
        <Header />
        {loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
