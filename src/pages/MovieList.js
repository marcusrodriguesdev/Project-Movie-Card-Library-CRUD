import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    this.setState({ isLoading: true }, async () => {
      await movieAPI.getMovies()
        .then((response) => {
          this.setState({ movies: response }, () => {
            this.setState({ isLoading: false });
          });
        });
    });
  }

  render() {
    const { isLoading, movies } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    // { isLoading && <Loading /> }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
