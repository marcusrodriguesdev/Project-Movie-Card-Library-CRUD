import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    getMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      !movies
        ? <Loading />
        : (
          <div data-testid="movie-list" className="movie-list">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </div>
        )
    );
  }
}

export default MovieList;
